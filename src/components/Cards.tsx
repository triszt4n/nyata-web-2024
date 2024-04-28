import { FeatureCard } from "@/components/FeatureCard";
import Profession from "@/logos/profession.svg";
import Community from "@/logos/community.svg";
import Workshops from "@/logos/workshops.svg";
import Hand from "@/icons/hand.svg";

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
      }>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQrIacjmaAoLtk6g5hqM3dEUQ9oi-IOupCuDw4aM4rg6ZUyw/viewform" target="_blank" rel="noopener noreferrer">
          <div className="mx-[-26px] mb-[-21px] mt-[28px] tablet:mx-[-58px] tablet:mb-[-42px] border-8 border-primary-light bg-primary uppercase flex flex-col items-center space-y-2 py-4 hover:border-primary hover:bg-primary-light hover:text-black text-white transition-colors">
            <Hand />
            <p className="text-[26px] font-display px-8 laptop:px-20 text-center leading-none">Jelentkezek workshopot tartani!</p>
          </div>
        </a>
      </FeatureCard>
    </div>
  )
}