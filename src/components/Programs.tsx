import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import Calendar from "@/icons/calendar.svg";
import People from "@/logos/people.svg";

export function Programs() {
  return (
    <Section id="programs" className="space-y-[29px] flex flex-col items-start w-full relative mt-20 tablet:mt-28">
      <div className="tablet:ml-[58px]">
        <Title text="Programok" icon={<Calendar />} />
      </div>
      <Box shadow="right">
        <p className="laptop:pr-96">Az idei NYATA témája a <strong>Technológia és Társadalom</strong>. Mik a legújabb <strong>technológiai trendek</strong>, mik ezeknek a társadalmi vonatkozásai? Hogyan használjuk hatékonyan az <strong>AI</strong> adta lehetőségeket? Hogyan tud <strong>fennmaradni egy város, ország, társadalom</strong> a 21.században?Ha érdekelnek ezek a kérdések, csatlakozz hozzánk a 27. alkalommal megrendezésre kerülő NYATA-n és vitassuk meg közösen a válaszokat! <strong>Találkozunk Sopronban!</strong></p>
      </Box>

      <div className="absolute right-[30px] -top-1 laptop:-top-24">
        <People className="tablet:w-[264px] tablet:h-[139px] laptop:w-[528px] laptop:h-[278px]" />
      </div>
    </Section>
  )
}