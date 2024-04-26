import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { SignUpButton } from "@/components/SignUpButton";
import { Title } from "@/components/Title";
import Wave from "@/icons/wave.svg";
import { ImageCarouselSection } from "./carousel/image-carousel-section";
import CalendarIcon from "@/icons/calendar-simple.svg";
import LocationIcon from "@/icons/pin.svg";

export function Hero() {
  return (
    <Section className="space-y-[60px] mt-10 tablet:mt-20" id="introduction">
      <div className="flex laptop:flex-row flex-col gap-[40px]">
        <div className="space-y-[11px] laptop:w-1/2 w-full">
          <div className="flex justify-center">
            <Title text="Mi az a NYATA?" icon={<Wave />} />
          </div>
          <Box shadow="left" className="!p-0">
            <div className="px-[26px] py-[21px] tablet:px-[58px] tablet:py-[42px]">
              A <b>Nyári Szakkollégiumi Találkozó</b> egy évente megrendezésre
              kerülő tábor, amely összehozza a Kárpát-medence különböző
              tudományterületein hallgató és kutató szakkollégistáit. A
              hangsúlyos esemény teret ad számos{" "}
              <b>workshopnak, előadásnak, beszélgetésnek</b>, amelyek alatt a
              résztvevők közösen gondolkodhatnak{" "}
              <b>aktuális társadalmi kérdésekről</b>.<br />
              Mindemellett a rendezvény nagyszerű alkalom kapcsolatok építésére,
              inspirálódásra és nem utolsó sorban, egy{" "}
              <b>nagy nyári kikapcsolódásra</b> is.
            </div>
            <div className="px-[26px] py-[10px] tablet:px-[58px] tablet:py-[20px] bg-gray-darkest text-white uppercase font-display text-2xl tablet:text-3xl font-semibold">
              <div className="flex flex-row gap-4">
                <CalendarIcon className="h-[38px] w-[32px]" />
                2024. augusztus 1-5.
              </div>
              <div className="flex flex-row gap-4 mt-2">
                <LocationIcon className="h-[38px] w-[32px]" />
                Sopron
              </div>
            </div>
          </Box>
        </div>
        <div className="max-w-full mx-auto flex flex-col justify-center">
          <ImageCarouselSection />
        </div>
      </div>

      <SignUpButton />
    </Section>
  );
}
