import React from 'react'
import HeroSection from '../Components/HomeHero'
import TrainingOptions from '../Components/HomeTraining'
import FounderSection from '../Components/Founder'
import CoursesSection from '../Components/HomeCourses'
import TrainingFeatures from '../Components/TrainingSection'
import AboutInstitute from '../Components/HomeAbout'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <TrainingOptions/>
      <FounderSection/>
      <CoursesSection/>
      <AboutInstitute/>
      <TrainingFeatures/>
    </div>
  )
}

export default Home
