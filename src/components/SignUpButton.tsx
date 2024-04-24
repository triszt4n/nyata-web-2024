import ArrowRight from "@/icons/arrow-right.svg";

export function SignUpButton() {
  return <a className="p-1 shadow-sm bg-white flex w-full items-center" href="https://ddg.gg" target="_blank" rel="noopener noreferrer">
    <div className="p-4">
      <ArrowRight className="h-10 w-10 text-primary" />
    </div>
    <p className="uppercase text-3xl font-extrabold tracking-wide text-shadow-signup font-display bg-gradient-to-r from-primary-light to-primary w-full flex items-center justify-center py-4">jelentkezem!</p>
  </a>
}