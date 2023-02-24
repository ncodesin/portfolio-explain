import { useEffect, useRef } from 'react';
import Banner from '../Banner/Banner';
import styles from './First.module.css';
import mainvideo from './mainvideo.mp4'

export default function First() {

    const containerRef = useRef(null);
    const bannerRef = useRef(null);
    const textboxRef = useRef(null);
    const textAniRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current
        const textbox = textboxRef.current
        const textAni = textAniRef.current
        container.style.transform = "translateY(111px)"
        textbox.style.transform = "translateY(111px)"
        container.width = window.innerWidth
        container.height = window.innerHeight - 111
        textbox.style.width = container.width + "px"
        textbox.style.height = container.height + "px"
        container.style.objectFit = "cover"
        console.log(container, textbox, textbox.width)

        window.addEventListener('resize', () => {
            container.width = window.innerWidth
            container.height = window.innerHeight - 111
            textbox.style.width = container.width + "px"
            textbox.style.height = container.height + "px"
        })

        const textani = () => {
            textAni.animate([
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 0.1,
                    transform: "translateY(-15px)",
                },
                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }
            ], 1000)
        }
        textani()
    })

    return (
        <>
            <Banner />
            <div>
                <video
                    ref={containerRef}
                    playsInline
                    autoPlay
                    loop
                    muted
                    preload='auto'
                >
                    <source src={mainvideo} type='video/mp4' />
                </video>
                <div ref={textboxRef} className={styles.textBox}>
                    <p ref={textAniRef} className={styles.maintext}>
                        안녕하세요<br />
                        이곳은 저의 포트폴리오와 프로젝트의 전반적인<br />
                        내용을 설명하고 관리하는 페이지입니다.<br />
                        현재 제작중인 페이지입니다 (2023.02.22 ~) <br />
                    </p>
                </div>
            </div>
        </>
    )
}