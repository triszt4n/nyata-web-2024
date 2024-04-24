import { BaseCard } from "@/components/BaseCard";
import React from "react"

type FeatureCardProps = {
  image: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export function FeatureCard({image, title, description}: FeatureCardProps) {
  return <BaseCard>
  <div className="space-y-4">

    <div>TODO: image</div>
    <h3 className="text-emerald-900 text-3xl uppercase">{title}</h3>
    <p>{description}</p>
  </div>

  </BaseCard>
}