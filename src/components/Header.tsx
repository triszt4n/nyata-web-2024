import { PropsWithChildren, useState } from "react"
import NyataLogo from "@/logos/nyata.svg"

function HeaderLink({ target, children }: PropsWithChildren<{ target: string }>) {
  return <a href={target} className="uppercase px-2 py-1 w-full laptop:w-auto laptop:p-4">{children}</a>
}

function SignUpButton() {
  return <a href="https://ddg.gg" className="uppercase bg-white p-1">
    <div className="bg-secondary px-5 py-2">
      jelentkezés
    </div>
  </a>
}

function MobileHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="font-display text-2xl block laptop:hidden bg-primary sticky top-0 py-4 w-full px-3 z-50 drop-shadow-header">
      <div className="flex flex-row items-center justify-between w-full px-2">
        <NyataLogo className="w-[239px] h-[70px]" />
        <button type="button" onClick={() => setOpen(value => !value)}>x</button>

      </div>
      {open && <div className="flex flex-col items-start space-y-4">
        <HeaderLink target="#introduction">bemutató</HeaderLink>
        <HeaderLink target="#programs">programok</HeaderLink>
        <HeaderLink target="#location">helyszín</HeaderLink>
        <HeaderLink target="#contact">kapcsolat</HeaderLink>
        <SignUpButton />

      </div>}
    </nav>
  )
}

export function Header() {
  return (
    <>
      <MobileHeader />
      <nav className="bg-primary sticky laptop:flex justify-center top-0 text-2xl py-4 w-full drop-shadow-header z-50 hidden">
        <div className="laptop:flex items-center justify-between w-full gap-x-[82px] max-w-[1260px] mx-5">

          <NyataLogo className="w-[239px] h-[70px] shrink-0" />
          <div className="flex items-center justify-between font-display flex-1">
            <HeaderLink target="#introduction">bemutató</HeaderLink>
            <HeaderLink target="#programs">programok</HeaderLink>
            <HeaderLink target="#location">helyszín</HeaderLink>
            <HeaderLink target="#contact">kapcsolat</HeaderLink>
            <SignUpButton />
          </div>
        </div>
      </nav>
    </>
  )
}