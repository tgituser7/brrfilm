import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-devotional px-6 py-24">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-xl text-center">
            <span className="relative mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-gold/50 shadow-lg shadow-maroon-950/25">
              <Image src="/the_cow.png" alt="" fill sizes="80px" className="object-cover" />
            </span>

            <p className="mt-6 font-heading text-7xl font-bold text-gold-gradient sm:text-8xl">
              404
            </p>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
              Page Not Found
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              Return to the homepage.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-7 py-3 text-sm font-semibold text-maroon-950 shadow-lg shadow-maroon-950/25 transition-all hover:bg-right"
            >
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
