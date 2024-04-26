import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { SignUpButton } from "@/components/SignUpButton";
import { Title } from "@/components/Title";
import Wave from "@/icons/wave.svg"
import { ImageCarouselSection } from "./carousel/image-carousel-section";

export function Hero() {
  return (
    <Section className="space-y-[35px] mt-10 tablet:mt-20" id="introduction">
      <div className="flex laptop:flex-row flex-col gap-[10px]">
        <div className="space-y-[11px] laptop:w-1/2 w-full">
          <div className="flex justify-center">
            <Title text="Mi az a NYATA?" icon={<Wave />} />
          </div>

          <Box shadow="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis cursus turpis quis molestie. Sed sagittis vehicula erat ac venenatis. Phasellus quis tellus eget ex pellentesque ornare. Suspendisse mattis condimentum nisi quis hendrerit. Vestibulum ut feugiat nisi. Nullam a condimentum justo. Nam a maximus turpis. Suspendisse pharetra, massa id tincidunt ultricies, est nulla fringilla mi, pharetra vulputate justo ex non mi. Vestibulum quis metus hendrerit arcu sagittis facilisis id at tellus.
          </Box>
        </div >
        <div className="max-w-[312px] tablet:max-w-full mx-auto">
          <ImageCarouselSection />
        </div>
      </div>

      <SignUpButton />
    </Section >
  )
}