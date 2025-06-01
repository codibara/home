import '../index.css'
import CardCarousel from './UI/Carousel'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function Works() {
    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: -100,
                transition: {
                    type: 'spring',
                    stiffness: 50,
                    damping: 20,
                },
            })
        }
    }, [controls, inView])

    return (
        <div className='w-full grid-background'>
            <div className='w-full max-w-[1440px] flex flex-col items-center pt-20 lg:pt-32 lg:pb-16 mx-auto' id='works'>
                <div className='w-full flex flex-col md:flex-row md:justify-between px-2'>
                    <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] xl:text-[230px] leading-none tracking-tight'>What</div>
                    <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] xl:text-[230px] leading-none tracking-tight text-right md:text-left -my-10 md:my-0'>We</div>
                    <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] xl:text-[230px] leading-none tracking-tight'>Did</div>
                </div>

                <motion.div
                    ref={ref}
                    animate={controls}
                    initial={{ opacity: 0, y: 100 }}
                    className='w-full lg:max-w-[1070px] flex flex-col px-4'
                >
                    <CardCarousel />
                </motion.div>
            </div>
        </div>
    )
}
