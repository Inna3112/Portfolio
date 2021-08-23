import s from '../../App.module.scss';
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
            console.log(mainCursor)
            console.log(secondaryCursor)
            console.log(positionRef)

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

                mainCursor.current.style.width = '12px'
                mainCursor.current.style.height = '12px'
                mainCursor.current.style.backgroundColor = 'rgb(255, 147, 1)'
                mainCursor.current.style.zIndex = '999'
                mainCursor.current.style.display = 'block'
                mainCursor.current.style.position = 'fixed'
                mainCursor.current.style.borderRadius = '50%'
                // mainCursor.current.style.pointerEvents = 'none'
                mainCursor.current.style.transition = `opacity 0.15s ease-in-out 0s, transform 0.25s ease-in-out 0s`

                mainCursor.current.style.top = `${mouseY -
                mainCursor.current.clientHeight / 2}px`

                mainCursor.current.style.left = `${mouseX -
                mainCursor.current.clientWidth / 2}px`

                mainCursor.current.className = 'mainCursor'

                mainCursor.current.style.opacity = '0'
                mainCursor.current.style.transform = `translate(-50%, -50%) scale(1)`

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
                distanceX,
                distanceY
            } = positionRef.current

            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX
                positionRef.current.destinationY = mouseY
            } else {
                positionRef.current.destinationX = mouseX
                positionRef.current.destinationY = mouseY

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
                secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`

                secondaryCursor.current.className = 'secondaryCursor'
            }
        }
        followMouse()
    }, [])


    return (
        <div className={s.cursor}>
            <div className={s.mainCursor} ref={mainCursor}></div>
            <div className={s.secondaryCursor} ref={secondaryCursor}></div>
        </div>
    )
}