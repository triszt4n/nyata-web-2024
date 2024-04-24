import { FeatureCard } from "@/components/FeatureCard";
import Profession from "@/logos/profession.svg";
import Community from "@/logos/community.svg";
import Workshops from "@/logos/workshops.svg";

export function Cards() {
  return (
    <div className="flex flex-col laptop:flex-row items-start justify-between laptop:space-x-[28px] space-y-[28px] laptop:space-y-0 mt-[104px]">
      <FeatureCard image={<Profession className="w-40 h-40" />}
        title="Szakmai élet"
        description={
          <>
            Előadások, kerekasztal beszélgetések, és hasonló érdekes szakmai programok <strong>elismert szakértőkkel</strong>, szakmabeliekkel, <strong>vállalalati és tudományos</strong> szférából is!
          </>
        } />
      <FeatureCard image={<Community className="w-40 h-40" />} title="Közösség" description={
        <>
          Rengeteg lehetőség <strong>kikapcsolódni és szórakozni</strong>: csapatépítő játékok, sportok, esti bulik, miegymás!
        </>
      } />
      <FeatureCard image={<Workshops className="w-40 h-40" />} title="Workshopok" description={
        <>
          Alkossunk valami izgalmasat: gondolkodjunk és dolgozzunk együtt a NYATA-n! Kisebb csoportos foglalkozások <strong>szakkolisoktól szakkolisoknak</strong>.
        </>
      } />
    </div>
  )
}