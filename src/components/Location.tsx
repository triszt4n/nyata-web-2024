import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import Pin from "@/icons/pin.svg";
import { BoxLighter } from "./BoxLighter";

export function Location() {
  return (
    <Section id="location" className="space-y-[44px] mt-[122px] mb-[200px]">
      <div className="flex items-center justify-between flex-col laptop:flex-row">
        <div className="laptop:ml-[58px]">
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
      <div className="w-full h-[440px]">
        <BoxLighter shadow="right" border="primary" className="h-full w-full">
          <iframe
            title="Térkép"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.3304878849103!2d16.518738276607618!3d47.67800137119642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c3b332de0884b%3A0x2a30b6d08fd05384!2zU29wcm9uaSBHeWVybWVrIMOpcyBJZmrDunPDoWdpIFTDoWJvcg!5e0!3m2!1shu!2shu!4v1714082063371!5m2!1shu!2shu"
            className="h-full w-full focus:outline-none"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </BoxLighter>
      </div>
    </Section>
  );
}
