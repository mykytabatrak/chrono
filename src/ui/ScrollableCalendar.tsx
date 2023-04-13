"use client";

import * as React from "react";
import { flushSync } from "react-dom";
import { useVirtualizer } from "@tanstack/react-virtual";
import { twMerge } from "tailwind-merge";
import { addYears, format, setYear, subYears } from "@/lib/date";

const OVERSCAN = 5;
const ITEM_SIZE = 100;
const STEP = 6;
const INITIAL_DATA_SIZE = 40;
const INITIAL_DATA_OFFSET = INITIAL_DATA_SIZE / 2;

export function ScrollableCalendar({ className }: { className?: string }) {
  const [data, setData] = React.useState<Date[]>(getInitialData);

  const scrollElementRef = React.useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: data.length,
    estimateSize: () => ITEM_SIZE,
    getScrollElement: () => scrollElementRef.current,
    overscan: OVERSCAN,
    initialOffset: INITIAL_DATA_OFFSET * ITEM_SIZE,
  });

  const height = virtualizer.getTotalSize();
  const items = virtualizer.getVirtualItems();

  React.useEffect(() => {
    const first = items.at(0);
    const last = items.at(-1);

    const firstDate = data.at(0);
    const lastDate = data.at(-1);

    if (!!lastDate && !!last && last.index === data.length - 1) {
      const from = lastDate.getFullYear() + 1;
      const newYears = getYears(STEP, from);

      return setData([...data, ...newYears]);
    }

    if (!!firstDate && !!first && first.index === 0) {
      const from = firstDate.getFullYear() - STEP;
      const newYears = getYears(STEP, from);

      window.requestAnimationFrame(() =>
        flushSync(() => setData([...newYears, ...data]))
      );

      virtualizer.scrollToIndex(STEP + OVERSCAN + 1, { align: "start" });
    }
  }, [data, items, virtualizer]);

  return (
    <div
      ref={scrollElementRef}
      className={twMerge("overflow-y-auto", className)}
    >
      <ol style={{ height }} className="list-none w-full relative">
        {items.map((item) => {
          const entry = data.at(item.index);

          if (!entry) {
            return null;
          }

          const title = format({ date: entry, options: { year: "numeric" } });
          const transform = `translateY(${item.start}px)`;
          const isOdd = item.index % 2;

          return (
            <div
              key={item.index}
              style={{ height: item.size, transform }}
              className={twMerge(
                "absolute top-0 left-0 w-full flex items-center text-4xl",
                isOdd && "bg-slate-300"
              )}
            >
              {title}
            </div>
          );
        })}
      </ol>
    </div>
  );
}

function getInitialData() {
  const from = subYears(new Date(), INITIAL_DATA_OFFSET).getFullYear();
  return getYears(INITIAL_DATA_SIZE, from);
}

function getYears(amount: number, from: number) {
  const startYear = setYear(new Date(), from);
  return Array.from({ length: amount }, (_, k) => addYears(startYear, k));
}
