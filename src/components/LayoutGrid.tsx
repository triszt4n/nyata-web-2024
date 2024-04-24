import { PropsWithChildren } from "react";

export function LayoutGrid({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-4 gap-x-6 w-full mx-auto tablet:grid-cols-8 laptop:grid-cols-14 max-w-[1260px]">
    {children}
  </div>
}