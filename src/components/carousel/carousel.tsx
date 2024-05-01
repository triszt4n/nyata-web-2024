import React, { CSSProperties } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import ChevronLeft from "@/icons/chevron-left.svg";
import ChevronRight from "@/icons/chevron-right.svg";
import clsx from "clsx";

const styles = {
  root: {},
  scroll: {
    scrollSnapType: "x mandatory",
  },
  item: {
    flexShrink: 0,
  },
  itemSnapPoint: {
    scrollSnapAlign: "start",
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
} satisfies Record<string, CSSProperties>;

const delay = 3000;

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>;
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
  readonly index: number;
}

export const Carousel = <T,>({ items, renderItem }: CarouselProps<T>) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } =
    useSnapCarousel();

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => {
        goTo(activePageIndex === pages.length - 1 ? 0 : activePageIndex + 1)
      },
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [goTo, pages, activePageIndex]);

  return (
    <div
      className="relative before:border-10 before:border-white before:border-opacity-60 before:absolute
      before:-z-10 before:left-2 before:top-2 before:-right-4 before:-bottom-4"
    >
      <div className="absolute h-full tablet:h-auto items-center justify-between px-4 tablet:px-0 tablet:bottom-6 flex tablet:justify-center gap-16 tablet:gap-6 w-full z-10">
        <button onClick={() => prev()} className="h-full pr-11 tablet:pr-0">
          <ChevronLeft
            className={clsx(activePageIndex === 0 && "opacity-30",
              "cursor-pointer h-10 w-h-10 select-none drop-shadow-lg")}
          />
        </button>

        <div className="tablet:flex items-center space-x-3 hidden">
          {Array.from(Array(items.length).keys()).map((_, index) => (
            <button key={index} className={clsx("w-4 h-4 rounded-full shadow-signup-button", activePageIndex === index ? "bg-primary-light" : "bg-white")} onClick={() => goTo(index)} />
          ))}
        </div>

        <button onClick={() => next()} className="h-full pl-11 tablet:pl-0">
          <ChevronRight
            className={clsx(activePageIndex === pages.length - 1 && "opacity-30",
              "cursor-pointer h-10 w-h-10 select-none drop-shadow-xl")}
          />
        </button>
      </div>
      <ul
        className="relative flex gap-4 overflow-hidden snap-x"
        ref={scrollRef}
      >
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i,
          })
        )}
      </ul>
    </div>
  );
};

interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly children?: React.ReactNode;
}

export const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
    className="flex items-center"
  >
    {children}
  </li>
);
