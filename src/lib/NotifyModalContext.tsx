"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface NotifyModalContextValue {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  notifiedCount: number | null;
  incrementNotifiedCount: () => void;
}

const NotifyModalContext = createContext<NotifyModalContextValue | undefined>(
  undefined
);

export function NotifyModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [notifiedCount, setNotifiedCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/notify")
      .then((res) => res.json())
      .then((data) => setNotifiedCount(data.count))
      .catch(() => {});
  }, []);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  const incrementNotifiedCount = useCallback(() => {
    setNotifiedCount((c) => (c === null ? c : c + 1));
  }, []);

  const value: NotifyModalContextValue = {
    open,
    openModal,
    closeModal,
    notifiedCount,
    incrementNotifiedCount,
  };

  return (
    <NotifyModalContext.Provider value={value}>
      {children}
    </NotifyModalContext.Provider>
  );
}

export function useNotifyModal() {
  const ctx = useContext(NotifyModalContext);
  if (!ctx) {
    throw new Error("useNotifyModal must be used within a NotifyModalProvider");
  }
  return ctx;
}
