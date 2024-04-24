import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import Message from "@/icons/message.svg";
import Facebbok from "@/icons/facebook.svg";
import Instagram from "@/icons/instagram.svg";
import Email from "@/icons/email.svg";

export function Contact() {
  return (
    <Section id="contact" className="mt-[124px] space-y-[45px] mb-[105px]">
      <div className="flex ml-[58px]">
        <Title text="Kapcsolat" icon={<Message />} />
      </div>
      <div className="flex laptop:flex-row flex-col laptop:space-x-[71px] space-x-0 space-y-[71px] laptop:space-y-0">
        <div className="laptop:w-2/3">
          <Box shadow="right">
            TODO: form
          </Box>
        </div>
        <div className="laptop:w-1/3">
          <Box shadow="right">
            <div className="flex flex-col space-y-5 items-center">
              <div className="text-2xl font-bold">
                ...vagy keress minket
                az alábbiakon!
              </div>
              <div className="flex flex-row space-x-9">
                <a href="">
                  <Facebbok className="w-[52px] h-[52px]" />
                </a>
                <a href="">
                  <Instagram className="w-[52px] h-[52px]" />
                </a>
                <a href="mailto:">
                  <Email className="w-[52px] h-[52px]" />
                </a>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </Section>
  )
}