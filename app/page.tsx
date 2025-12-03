import { Hero } from '@/components/sections/Hero';
import {
  Problem,
  Difference,
  WorkshopCTA,
  HowDifferent,
  Industries,
  FinalCTA
} from '@/components/sections/HomeSections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Difference />
      <WorkshopCTA />
      <HowDifferent />
      <Industries />
      <FinalCTA />
    </>
  );
}
