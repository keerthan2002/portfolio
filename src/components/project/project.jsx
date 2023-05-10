import React,{useState} from 'react'
import "./project.css"
import {AiFillGithub} from 'react-icons/ai'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Autoplay } from 'swiper'
import {projects} from './projectInfo'
import { Parallax,ParallaxProvider } from 'react-scroll-parallax'
import useBreakpoints from '../../hooks/useBreakpoint'
import { contact } from '../../data/data'
import LoadingSpinner from '../spinner/spinner'

function Project() {
    const [active,setActive] = useState(1);
  return (
    <>
        <div id="project" className='container proj-container'>
            <h2>
                <span>Projects</span>
            </h2>
                <span><a href={contact.github} className='inline-flex' target='_blank' rel="noreferrer">More projects...<AiFillGithub className='self-center'/></a></span>
            <div className='max-w-full self-center mt-4'>
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(cur) => setActive(cur.realIndex)}
                loop={true}
                centeredSlides={true}
                speed={800}
                autoplay={{delay:3000,}}
                modules={[Autoplay]}
                >
                {projects.projects.map((item,i)=>(
                    <SwiperSlide key={i}>
                        <ProjectsCard
                            name={item.title}
                            tech={item.tags}
                            src={item.img}
                            description={item.description}
                            link={item.link}
                            github={item.github}
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default Project

function ProjectsCard(props) {
    const { isXs, isSm } = useBreakpoints();
    return (
        <div className="text-start  md:text-lg md:px-5 group space-y-6 md:space-y-8 md:p-10 text-white">
        <div className='flex  flex-col  gap-5 md:gap-0 md:max-w-sm md:px-10  lg:max-w-md xl:max-w-xl group  mx-auto md:flex-row items-center justify-center
                    border-2 border-sky-500/50 bg-gradient-to-tl text-base from-cyan-100/40 to-gray-100/50 dark:from-slate-900/50 dark:to-gray-900/50   ease-in-out  dark:border-slate-500/50
                     transform-color ease-liner   p-3 md:p-5 rounded-xl  backdrop-blur  
                    md:border-none md:bg-none
                '>
            <div className={` flex-auto  ${props.reverse ? "md:-translate-x-10" : "md:translate-x-10"}  w-auto  md:p-0 `}>
                <img src={props.src}
                    className="md:max-w-lg md:grayscale transition-colors transform duration-100 ease-in-out group-hover:grayscale-0 "
                    alt='project source' loader={<LoadingSpinner/>}/>
            </div>
            <div className={`min-w-fit order-first   ${props.reverse ? "md:order-first md:translate-x-10" : " md:text-end md:order-2 md:-translate-x-10"}`}>
                <ParallaxProvider>
                    <Parallax speed={isXs || isSm ? 0 : 10} className="space-y-2">
                        <a href={props.link ? props.link : props.github}>
                            <h2 target="_blank" className="hover:text-sky-800 dark:hover:text-sky-300 cursor-pointer font-semibold text-2xl uppercase  tracking-wider md:order-2"><span className="text-base ml-1 capitalize">{props.name}</span></h2>
                        </a>
                        <div className='gap-3  md:tracking-wide inline-flex  justify-start  flex-wrap  text-sm md:font-semibold text-black cursor-default'>
                            {props.tech.map((ele, i) => <button className='whitespace-nowrap bg-cyan-400 px-2 rounded-full border border-violet-600 ' key={i}>{ele}</button>)}
                        </div>
                        <div className={ `${props.reverse ? "md:-mr-28 lg:-mr-26 xl:-mr-10" : "md:-ml-28 lg:-ml-26 xl:-ml-10 cursor-default"}
                    md:border-2 border-sky-700 /20 md:bg-gradient-to-tl md:text-sm from-cyan-200/40 to-gray-100/90 dark:from-slate-900/70 dark:to-gray-900/70   ease-in-out  dark:border-slate-500/50
                        transform ease-liner    md:p-5  rounded-xl  mx-auto md:backdrop-blur-md text-justify`}>
                            {props.description}
                        </div>
                        <div className="inline-flex gap-3 pt-3 text-2xl ">
                            {
                                props.github &&
                                <a href={props.github} target="_blank" rel="noreferrer">
                                    <FaGithub className="hover:text-sky-800 dark:hover:text-sky-300  " />
                                </a>
                            }
                            {
                                props.link &&
                                <a href={props.link} target="_blank"  rel="noreferrer">
                                    <FaExternalLinkAlt className="hover:text-sky-800 dark:hover:text-sky-300 " />
                                </a>
                            }
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </div>
        </div>
    </div>)
}