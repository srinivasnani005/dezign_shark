import React from 'react'
import BannerSection from './BannerSection'
import TopHeader from '../../Components/Top/TopHeader'
import { Box } from '@mui/material'
import HeroMarquee from '../DashboardTwo/MarqueeText'
import About from '../DashboardTwo/About'
import Video from '../DashboardTwo/Video'
import GetNow from './GetNow'
import CrossMarquee from './CrossMarquee'
import Countor from './Countor'
import WorkProcess from './WorkProcess'
import ClientLogoSlider from './ClientLogos'
import Packages from '../DashboardTwo/Packages'
import GetInTouch from './GetInTouch'


const index = () => {
  return (
    <Box>
        <BannerSection/>
        <HeroMarquee/>
        <About/>
        <Video/>
        <GetNow/>
        <CrossMarquee/>
        <Countor/>
        <Packages/>
        <WorkProcess/>
        <ClientLogoSlider/>
        <GetInTouch/>

     
      

    </Box>
  )
}

export default index
