import { PropsWithChildren } from "react"
import NyataLogo from "@/logos/nyata.svg"

function HeaderLink({ target, children }: PropsWithChildren<{ target: string }>) {
  return <a href={target} className="uppercase p-4">{children}</a>
}

function SignUpButton() {
  return <a href="https://ddg.gg" className="uppercase bg-white p-1">
    <div className="bg-secondary px-5 py-2">
      jelentkezés
    </div>
  </a>
}

export function Header() {
  return <nav className="flex items-center justify-center bg-primary sticky top-0 text-2xl py-4 w-full shadow-sm desktop:space-x-[82px] z-50">
    <NyataLogo className="w-[239px] h-[70px]" />
    <div className="flex items-center justify-center desktop:space-x-[78px] font-display">
      <HeaderLink target="#introduction">bemutató</HeaderLink>
      <HeaderLink target="#programs">programok</HeaderLink>
      <HeaderLink target="#location">helyszín</HeaderLink>
      <HeaderLink target="#contact">kapcsolat</HeaderLink>
      <SignUpButton />
    </div>
  </nav>
}