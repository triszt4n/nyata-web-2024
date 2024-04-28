import ArrowRight from "@/icons/arrow-right.svg";

export function SignUpButton() {
  return (
    <a className="group p-1 shadow-signup-button bg-white flex w-full items-center" href="https://ddg.gg" target="_blank" rel="noopener noreferrer">
      <div className="p-4">
        <ArrowRight className="h-10 w-10 text-primary group-hover:text-secondary transition-colors" />
      </div>
      <p className="uppercase text-3xl font-extrabold tracking-wide text-shadow-signup font-display bg-gradient-to-r from-primary-light via-primary to-secondary w-full flex items-center justify-center py-4 transition-all bg-size-200 bg-pos-0 group-hover:bg-pos-100 ">jelentkezem!</p>
    </a>
  )
}