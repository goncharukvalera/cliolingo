import Hero from '../sections/Hero/Hero'
import WhySection from '../sections/WhySection/WhySection'
import PillarsSection from '../sections/PillarsSection/PillarsSection'
import TasksSection from '../sections/TasksSection/TasksSection'
import StatsSection from '../sections/StatsSection/StatsSection'
import BridgeSection from '../sections/BridgeSection/BridgeSection'
import EfficiencySection from '../sections/EfficiencySection/EfficiencySection'
import AppFeaturesSection from '../sections/AppFeaturesSection/AppFeaturesSection'
import HowItWorksSection from '../sections/HowItWorksSection/HowItWorksSection'
import CtaSection from '../sections/CtaSection/CtaSection'
import InvestorsSection from '../sections/InvestorsSection/InvestorsSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhySection />
      <PillarsSection />
      <TasksSection />
      <StatsSection />
      <BridgeSection />
      <EfficiencySection />
      <AppFeaturesSection />
      {/*<HowItWorksSection />*/}
      {/*<PartnersSection />*/}
      <InvestorsSection />
      {/*<CtaSection />*/}
    </>
  )
}