import clsx from "clsx";
import { PropsWithChildren } from "react";

type BoxProps = {
  shadow: "left" | "right";
}

export function Box({ children, shadow }: PropsWithChildren<BoxProps>) {
  return (
    <div className={clsx("bg-white text-gray-dark px-[58px] py-[42px] w-full", {
      "shadow-box-left": shadow === "left",
      "shadow-box-right": shadow === "right"
    })}>
      {children}
    </div>
  )
}