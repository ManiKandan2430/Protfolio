import React from 'react'
import { techStackIcons } from '../constants'
import TechLogo from '../components/Models/TechLogos/TechLogo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TechStack = () => {
    useGSAP(()=>{
        gsap.fromTo('.tech-card',{
            y:50,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:1,
            ease:'power1.inOut',
            stagger:0.2,
            scrollTrigger:{
                trigger:'#skills',
                start:'top center'
            }
        })
    })
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:p-10 px-5'>
            <div className='tech-grid'>
                {techStackIcons.map((icon)=>(
                    <div key={icon.name} className='tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                        {/* <div className='tech-card-animated-bg'/> */}
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                                <TechLogo model={icon}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack