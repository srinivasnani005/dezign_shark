import React from 'react'
import Banner from './Banner'
import MarqueeText from './MarqueeText'
import About from './About'
import SideComponent from './SideComponent'
import Video from './Video'
import Button from './Button'
import Services from './Services'
import Projects from './Projects'
import ProjectTwo from './ProjectTwo'
import Card from './Card'
import Packages from './Packages'
import Testimonials from './Testimonials'
import GetMarquee from './GetMarquee'
import Blogs from './Blogs'
import Three from './Three'

const index = () => {
  return (
    <div>
      <Banner/>
      <SideComponent/>
      <MarqueeText/>
      <About/>
      {/* <Button/> */}
      <Video/>
      <Services/>
      {/* <Projects/> */}
      <ProjectTwo/>
      {/* <Card/> */}
      <Packages/>
      <Testimonials/>
      <Three/>
      <GetMarquee/>
      <Blogs/>
    </div>
  )
}

export default index
