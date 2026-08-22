"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FakeQR } from "@/components/FakeQR";
import { IconShoppingBag } from "@/components/icons";
import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_NUMBER, WHATSAPP_NUMBER_DISPLAY } from "@/lib/links";

const PRODUCT_IMAGES = ["/BRR_Tshirt.png", "/BRR_Cap.png", "/BRR_Cup.png"];

export default function MerchandisePage() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const products = t.merchPage.products.map((p, i) => ({ ...p, image: PRODUCT_IMAGES[i] }));
  const activeProduct = selected !== null ? products[selected] : null;

  const whatsappHref = activeProduct
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `${activeProduct.name} (${activeProduct.price}) — payment screenshot attached.`
      )}`
    : "";

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-devotional px-6 pt-32 pb-20 sm:pt-40">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-light">
              <IconShoppingBag className="h-7 w-7" />
            </span>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
              {t.merchPage.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
              {t.merchPage.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              {t.merchPage.description}
            </p>
          </div>
        </section>

        <section className="relative bg-cream px-6 py-16 sm:py-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <div
                key={product.name}
                className="card-lift overflow-hidden rounded-[1.75rem] border border-maroon-900/10 bg-ivory shadow-xl shadow-maroon-900/10"
              >
                <div className="relative aspect-square w-full bg-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-6"
                  />
                </div>
                <div className="px-6 py-6 text-center">
                  <h2 className="font-heading text-lg font-semibold text-maroon-950">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{product.desc}</p>
                  <p className="mt-3 font-heading text-xl font-bold text-crimson">
                    {product.price}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-6 py-2.5 text-sm font-semibold text-maroon-950 shadow-lg shadow-maroon-950/20 transition-all hover:bg-right"
                  >
                    <IconShoppingBag className="h-4 w-4" />
                    {t.merchPage.buyCta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />

      {activeProduct && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-maroon-950/70 px-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-[1.75rem] border border-gold/25 bg-ivory p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label={t.merchPage.close}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-maroon-900/50 transition-colors hover:bg-maroon-900/5 hover:text-maroon-900"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <h3 className="text-center font-heading text-xl font-semibold text-maroon-950">
              {t.merchPage.modalTitle}
            </h3>
            <p className="mt-1 text-center text-sm text-ink/60">{activeProduct.name}</p>
            <p className="mt-1 text-center font-heading text-lg font-bold text-crimson">
              {activeProduct.price}
            </p>

            <div className="mx-auto mt-5 w-full max-w-[220px] overflow-hidden rounded-2xl border border-gold/30 bg-white p-3 shadow-md">
              <FakeQR />
            </div>
            <p className="mt-3 text-center font-heading text-sm font-semibold text-maroon-950">
              {t.merchPage.qrCaption}
            </p>
            <p className="mt-1 text-center text-xs font-semibold uppercase tracking-wide text-crimson/70">
              {t.merchPage.qrDemoLabel}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-ink/75">{t.merchPage.instructions}</p>

            <div className="mt-4 rounded-xl border border-maroon-900/10 bg-cream px-4 py-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800/70">
                {t.merchPage.whatsappLabel}
              </p>
              <p className="mt-1 font-heading text-lg font-semibold text-maroon-950">
                {WHATSAPP_NUMBER_DISPLAY}
              </p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.87 11.87 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
              </svg>
              {t.merchPage.whatsappCta}
            </a>

            <p className="mt-4 text-xs leading-relaxed text-ink/50">{t.merchPage.note}</p>
          </div>
        </div>
      )}
    </>
  );
}
