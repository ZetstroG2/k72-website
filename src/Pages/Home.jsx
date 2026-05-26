import React, { useRef } from 'react'
import Video from '../components/home/Video'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HomeBottomText from '../components/Home/HomeBottomTest'
import HomeHeroText from '../components/Home/HomeHeroText'

const Home = () => {


  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
       <HomeHeroText />
       <HomeBottomText />
      </div>
    </div>
  )
}

export default Home