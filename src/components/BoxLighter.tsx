import clsx from "clsx";
import { CSSProperties, HTMLProps, PropsWithChildren } from "react";

type BoxProps = HTMLProps<HTMLDivElement> & {
  shadow: "left" | "right";
  border: "primary" | "white";
}

export function BoxLighter({ children, shadow, border, ...rest }: PropsWithChildren<BoxProps>) {
  return (
    <div {...rest} className={clsx(rest.className, "relative border-10 w-full before:border-10 before:border-white before:border-opacity-60 before:absolute before:-z-10", {
      "before:right-1 before:top-1 before:-left-8 before:-bottom-8": shadow === "left",
      "before:left-1 before:top-1 before:-right-8 before:-bottom-8 shadow-lg": shadow === "right",
      "border-primary": border === "primary",
      "border-white": border === "white"
    })}>
      {children}
    </div>
  )
}
