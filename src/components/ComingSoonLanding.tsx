import Image from "next/image";
import { SocialButtons } from "./SocialButtons";
import config from "../../next-seo.config";
import NyataBigLogo from "@/logos/nyata-big.svg";
import { Title } from "./Title";

export default function ComingSoonLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="p-10 flex-1 flex flex-col items-center justify-center h-full">
      <div className="max-w-[80vw] h-[40vh]">
        <NyataBigLogo className="h-full w-full" />
      </div>
      <div className="font-bold text-xl tablet:text-2xl text-center">
        A hazai és határon túli szakkollégiumok központi éves rendezvénye
      </div>
      <div className="mt-4">
        <Title text="SOPRON | AUG. 1-5." />
      </div>
      <div className="font-semibold text-xl tablet:text-3xl my-8">
        Hamarosan megnyitunk!
      </div>
      <SocialButtons />
    </div>
    </div>
  );
}
