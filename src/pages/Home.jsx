// pages/Home.jsx
import { Hero } from "@/components/layout/Hero"
import { StatsBar } from "@/components/layout/StatsBar"
import { FeaturedEventBenefits } from "@/components/layout/FeaturedEventBenefits"
import { NewsSpotlight } from "@/components/layout/Newspotlight"
import { Partners } from "@/components/layout/Partners"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedEventBenefits />
      <NewsSpotlight />
      <Partners />
    </>
  )
}