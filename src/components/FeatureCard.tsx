import { Box } from "@/components/Box";
import React from "react"

type FeatureCardProps = {
  image: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export function FeatureCard({ image, title, description }: FeatureCardProps) {
  return <Box shadow="right">
    <div className="space-y-10 flex flex-col items-center">
      {image}
      <div className="space-y-[18px] text-center">
        <h3 className="text-primary text-4xl uppercase font-display font-extrabold">{title}</h3>
        <p>{description}</p>

      </div>
    </div>

  </Box>
}