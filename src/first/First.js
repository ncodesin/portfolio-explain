import { useEffect, useRef } from 'react';
import Banner from '../Banner/Banner';
import styles from './First.module.css';
import mainvideo from './mainvideo.mp4'
import arum from './아름.jpg'
import $ from 'jquery';

export default function First() {

    const containerRef = useRef(null);
    const bannerRef = useRef(null);
    const textAniRef = useRef(null);
    const contentboxRef = useRef([]);
    contentboxRef.current = [];
    const contentbox = contentboxRef.current;
    const outboxRef = useRef();

    const addTocontent = (el) => {
        if (el && !contentbox.includes(el)) {
            contentbox.push(el)
        }
    }
    function scroll1() {
        outboxRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function scroll2() {
        outboxRef.current.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
    function scroll3() {
        outboxRef.current.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
    }
    function scroll4() {
        outboxRef.current.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' });
    }
    function scroll5() {
        outboxRef.current.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' });
    }

    useEffect(() => {
        const container = containerRef.current;
        const textAni = textAniRef.current;
        const outbox = outboxRef.current;
        const colorbox = ["lightgray", "yellow", "cornflowerblue", "coral", "orange"];
        // container.style.marginTop = 111 + "px";
        container.width = window.innerWidth
        container.height = window.innerHeight - 111
        container.style.objectFit = "cover"
        contentbox.forEach((v, i) => {
            v.style.backgroundColor = colorbox[i]
            v.style.width = container.width + "px"
            v.style.height = container.height + "px"
            v.style.marginTop = 111 + "px"
            textAni.style.width = container.width + "px"
            textAni.style.height = container.height + "px"
            textAni.style.marginTop = 111 + "px"


        })

        window.addEventListener('resize', () => {
            container.width = window.innerWidth
            container.height = window.innerHeight - 111
            contentbox.forEach((v, i) => {
                v.style.backgroundColor = colorbox[i]
                v.style.width = container.width + "px"
                v.style.height = container.height + "px"
                v.style.marginTop = 111 + "px"
                textAni.style.width = container.width + "px"
                textAni.style.height = container.height + "px"
                textAni.style.marginTop = 111 + "px"



            })

        })


        const screenHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outbox;
            const screenHeight = window.innerHeight;
            console.log({ scrollTop })
            setTimeout(() => {

                if (deltaY > 0) {
                    if (scrollTop >= screenHeight * (Math.floor(scrollTop / screenHeight)) && scrollTop < screenHeight * (Math.floor(scrollTop / screenHeight) + 1)) {
                        outbox.scrollTo({
                            top: screenHeight * (Math.floor(scrollTop / screenHeight) + 1),
                            behavior: "smooth"
                        })
                    }
                } else {
                    if (scrollTop >= screenHeight * (Math.floor(scrollTop / screenHeight)) && scrollTop < screenHeight * (Math.floor(scrollTop / screenHeight) + 1)) {
                        outbox.scrollTo({
                            top: screenHeight * (Math.floor(scrollTop / screenHeight) - 1),
                            behavior: "smooth"
                        })
                    }
                }
            }, 300)
        };

        outbox.addEventListener("wheel", screenHandler);


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

        return () => {
            outbox.removeEventListener("wheel", screenHandler)
        };
    })

    return (
        <>
            <div ref={outboxRef} className={styles.outbox}>
                <div className='content content1' ref={addTocontent}>
                    <video
                        className={styles.video}
                        ref={containerRef}
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster={arum}
                        preload='auto'
                    >
                        <source src={mainvideo} type='video/mp4' />
                    </video>
                    <div ref={textAniRef} className={styles.textBox}>
                        <p className={styles.maintext}>
                            안녕하세요<br />
                            이곳은 저의 포트폴리오와 프로젝트의 전반적인<br />
                            내용을 설명하고 관리하는 페이지입니다.<br />
                            현재 제작중인 페이지입니다 (2023.02.22 ~) <br />
                        </p>
                    </div>
                </div>
                <div className='content' ref={addTocontent}></div>
                <div className='content' ref={addTocontent}></div>
                <div className='content' ref={addTocontent}></div>
                <div className='content' ref={addTocontent}></div>
            </div>
            <div className={styles.slidebutton}>
                <span onClick={() => {
                    scroll1();
                }}>1</span>
                <span onClick={() => {
                    scroll2();
                }}>2</span>
                <span onClick={() => {
                    scroll3();
                }}>3</span>
                <span onClick={() => {
                    scroll4();
                }}>4</span>
                <span onClick={() => {
                    scroll5();
                }}>5</span>
            </div>
            <Banner />
        </>
    )
}