import clsx from "clsx";
import { PropsWithChildren } from "react"

type BaseCardProps = {
  centered?: boolean;
  shadow?: "left" | "right"; // TODO: remove optional
}

export function BaseCard({centered, children, shadow}: PropsWithChildren<BaseCardProps>) {
  // TODO: shadow
  return <div className={clsx("p-6 items-center bg-white flex flex-col shadow-sm", centered && "text-center")}>
    {children}
  </div>
}