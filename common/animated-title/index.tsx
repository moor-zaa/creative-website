"use client"

import React, { useEffect, useRef } from 'react'
import { AnimatedTitleProps } from './types'
import gsap from 'gsap';

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, containerClass, sectionId }) => {

    const containerRef = useRef(null);

    useEffect(() => {

        console.log(containerRef.current);


        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            titleAnimation.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: 'power1.inOut',
                stagger: 0.05
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])


    return (
        <div ref={containerRef} id={sectionId} className={`animated-title ${containerClass}`}>
            {title.split('<br />').map((line, index) =>
                <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                    {line.split(' ').map((word, i) => <span key={i} className='animated-word' dangerouslySetInnerHTML={{ __html: word }} />)}
                </div>)}
        </div>
    )
}

export default AnimatedTitle