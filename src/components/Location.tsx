import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import Pin from "@/icons/pin.svg";

export function Location() {
  return (
    <Section id="location" className="space-y-[44px] mt-[122px]">
      <div className="flex items-center justify-between flex-col laptop:flex-row">
        <div className="ml-[58px]">
          <Title text="Helyszín" icon={<Pin />} />
        </div>
        <div className="grow-0">
          <Box shadow="right">
            <div className="text-center">
              <strong>Sopron Gyermek és Ifjúsági Tábor</strong> (9406 Sopron, Brennbergi út)
            </div>
          </Box>
        </div>
      </div>
      <div className="w-full h-[440px]">TODO: Google map integracio</div>
    </Section>
  )
}