import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import StatsSection from '../components/Home/StatsSection'
import DeputySection from '../components/Home/Deputy'
import TrustedBrandsSection from '../components/Home/TrustedBrands'
import TimesheetCompliance from '../components/Home/Timesheet'
import ReviewSection from '../components/Home/ReviewSection'
import Ratings from '../components/Home/ratings'
import LearnMoreSection from '../components/Home/LearnMore'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <HeroSection/>
        <StatsSection/>
        <DeputySection/>
        <TrustedBrandsSection/>
        <TimesheetCompliance/>
        <ReviewSection/>
        <Ratings/>
        <LearnMoreSection/>
    </div>
  )
}

export default Home