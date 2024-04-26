import React, { CSSProperties } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import ChevronLeft from "@/icons/chevron-left.svg";
import ChevronRight from "@/icons/chevron-right.svg";

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
  const { scrollRef, pages, activePageIndex, prev, next, snapPointIndexes } =
    useSnapCarousel();
  return (
    <div
      className={`relative before:border-10 before:border-white before:border-opacity-60 before:absolute 
      before:-z-10 before:left-2 before:top-2 before:-right-4 before:-bottom-4`}
    >
      <div className="absolute bottom-6 flex justify-center gap-20 w-full z-10">
        <ChevronLeft
          className={`${
            activePageIndex === 0 ? "opacity-30" : ""
          } cursor-pointer h-16 w-16 select-none drop-shadow-lg`}
          onClick={() => prev()}
        />
        <ChevronRight
          className={`${
            activePageIndex === pages.length - 1 ? "opacity-30" : ""
          } cursor-pointer h-16 w-16 select-none drop-shadow-lg`}
          onClick={() => next()}
        />
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
