import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import Calendar from "@/icons/calendar.svg";
import People from "@/logos/people.svg";

export function Programs() {
  return (
    <Section id="programs" className="space-y-[29px] flex flex-col items-start w-full relative mt-28">
      <div className="tablet:ml-[58px]">
        <Title text="Programok" icon={<Calendar />} />
      </div>
      <Box shadow="right">
        <strong>A részletes programtábla hamarosan érkezik!</strong>
      </Box>

      <div className="absolute right-[30px] -top-1 laptop:-top-24">
        <People className="tablet:w-[264px] tablet:h-[139px] laptop:w-[528px] laptop:h-[278px]" />
      </div>
    </Section>
  )
}