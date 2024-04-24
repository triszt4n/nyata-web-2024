import clsx from "clsx";
import { PropsWithChildren } from "react";

type SectionProps = {
  id: string;
  className?: string;
}

export function Section({ id, children, className }: PropsWithChildren<SectionProps>) {
  return <div className={clsx("scroll-m-[382px] laptop:scroll-m-[102px]", className)} id={id}>
    {children}
  </div>
}