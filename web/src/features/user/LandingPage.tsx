import { motion, useScroll } from 'framer-motion'

import Banner from './components/Banner'
import Footer from './components/Footer'
import SaleBanner from './components/SaleBanner'
import AppInformation from './components/AppInformation'
import Header from './components/Header'

export default function LandingPage() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="relative w-full snap-y snap-mandatory overflow-auto">
      <motion.div
        className="trans fixed left-0 right-0 top-0 z-[1000] h-[5px] origin-left bg-orange-600"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />

      <Banner />

      <SaleBanner />

      <AppInformation />

      <Footer />
    </div>
  )
}
