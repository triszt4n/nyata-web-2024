import clsx from "clsx";
import { CSSProperties, HTMLProps, PropsWithChildren } from "react";

type BoxProps = HTMLProps<HTMLDivElement> & {
  shadow: "left" | "right";
}

export function Box({ children, shadow, ...rest }: PropsWithChildren<BoxProps>) {
  return (
    <div {...rest} className={clsx(rest.className, "bg-white text-gray-dark px-[58px] py-[42px] w-full", {
      "shadow-box-left": shadow === "left",
      "shadow-box-right": shadow === "right"
    })}>
      {children}
    </div>
  )
}