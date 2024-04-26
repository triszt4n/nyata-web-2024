import { Box } from "@/components/Box";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import Message from "@/icons/message.svg";
import { ContactForm } from "./ContactForm";
import { SocialButtons } from "./SocialButtons";

export function Contact() {
  return (
    <Section
      id="contact"
      className="mt-[80px] tablet:mt-[124px] space-y-[45px] mb-[105px]"
    >
      <div className="flex tablet:ml-[58px]">
        <Title text="Kapcsolat" icon={<Message />} />
      </div>
      <div className="flex laptop:flex-row flex-col laptop:space-x-[71px] space-x-0 space-y-[71px] laptop:space-y-0">
        <div className="laptop:w-2/3">
          <ContactForm />
        </div>
        <div className="laptop:w-1/3">
          <Box shadow="right">
            <div className="flex flex-col space-y-5 items-center">
              <div className="text-2xl font-bold">
                ...vagy keress minket az alábbiakon!
              </div>
              <SocialButtons />
            </div>
          </Box>
        </div>
      </div>
    </Section>
  );
}
