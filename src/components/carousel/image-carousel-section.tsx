import Image from "next/image";
import { Carousel, CarouselItem } from "./carousel";

const items = [
  {
    priority: 1000,
    src: "/carousel-images/20230722_181539_simi.jpg",
    title: "NYATA 2023",
  },
  {
    priority: 900,
    src: "/carousel-images/20200725_161755_tisi.jpg",
    title: "NYATA 2020",
  },
  {
    priority: 800,
    src: "/carousel-images/20220731_000319_tisi.jpg",
    title: "NYATA 2022",
  },
];

// snatched from here: https://github.com/simonyiszk/konf-web-2024/blob/main/src/components/image-carousel/image-carousel-section.tsx
export function ImageCarouselSection() {
  return (
    <div className="flex justify-center">
      <div className="w-[546px] px-4">
        <Carousel
          items={items}
          renderItem={({ item, isSnapPoint, index: i }) => (
            <CarouselItem key={item.priority} isSnapPoint={isSnapPoint}>
                <Image
                  src={item.src}
                  key={item.priority}
                  alt="Kép korábbi NYATA-ról"
                  className="w-1/2 tablet:w-[512px] border-white border-10 object-contain shadow-lg"
                  height={288}
                  width={512}
                />
            </CarouselItem>
          )}
        />
      </div>
    </div>
  );
}
