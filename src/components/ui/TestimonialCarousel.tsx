"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

type Props = {
  items: Testimonial[];
  autoplayMs?: number;
};

export function TestimonialCarousel({ items, autoplayMs = 6500 }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => void emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || autoplayMs <= 0) return;
    const id = setInterval(() => emblaApi.scrollNext(), autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs, emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {items.map((t) => (
            <div key={t.quote} className="min-w-0 flex-[0_0_100%] px-1">
              <div className="glass-panel rounded-3xl border border-white/60 p-8 md:p-12 text-center min-h-72 flex flex-col justify-center">
                <p className="text-base md:text-lg lg:text-xl italic font-medium leading-relaxed text-foreground/90">
                  “{t.quote}”
                </p>
                <div className="mt-8">
                  <p className="text-base md:text-lg font-semibold text-primary">{t.name}</p>
                  <p className="text-muted-foreground text-xs md:text-sm">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-background/85 backdrop-blur border border-border/60 hover:bg-muted/70 transition"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-background/85 backdrop-blur border border-border/60 hover:bg-muted/70 transition"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex justify-center gap-3 pt-6">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-primary w-10" : "bg-muted-foreground/30 w-2 hover:w-6"
            }`}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

