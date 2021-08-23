import s from './CustomCursor.module.scss';
import React, {useEffect, useRef} from 'react';

export const CustomCursor = () => {
    const mainCursor = useRef<HTMLDivElement>(null)
    const secondaryCursor = useRef<HTMLDivElement>(null)


    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    })

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {

            const {clientX, clientY} = event

            const mouseX = clientX
            const mouseY = clientY

            if (secondaryCursor.current !== null) {
                positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2
                positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2
            }

            if (mainCursor.current) {
                // mainCursor.current.style.transform = `translate3d(${mouseX -
                // mainCursor.current.clientWidth / 2}px, ${mouseY -
                // mainCursor.current.clientHeight / 2}px, 0`

                mainCursor.current.style.top = `${mouseY - mainCursor.current.clientHeight / 2}px`
                mainCursor.current.style.left = `${mouseX - mainCursor.current.clientWidth / 2}px`
            }
        })
    }, [])

    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse)

            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
            } = positionRef.current

            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX
                positionRef.current.destinationY = mouseY
            } else {
                positionRef.current.destinationX = (mouseX - destinationX) * 0.1
                positionRef.current.destinationY = (mouseY - destinationY) * 0.1

                if (Math.abs(positionRef.current.destinationX) +
                    Math.abs(positionRef.current.destinationY) < 0.1) {
                    positionRef.current.destinationX = mouseX
                    positionRef.current.destinationY = mouseY
                } else {
                    positionRef.current.destinationX += destinationX
                    positionRef.current.destinationY += destinationY
                }
            }
            if (secondaryCursor.current) {
                // secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
                secondaryCursor.current.style.top = `${destinationY}px`
                secondaryCursor.current.style.left =  `${destinationX}px`
            }
        }
        followMouse()
    }, [])


    return (
        <>
            <div className={s.mainCursor} ref={mainCursor} > </div>
            <div className={s.secondaryCursor}  ref={secondaryCursor}> </div>
        </>


    )
}