import { useEffect, useRef } from 'react';
import Banner from '../Banner/Banner';
import styles from './First.module.css';
import mainvideo from './mainvideo.mp4'
import arum from './아름.jpg'
import kakao from './kakao.png'
import Top from './top.png'
import $ from 'jquery';

export default function First() {

    const containerRef = useRef(null);
    const bannerRef = useRef(null);
    const textAniRef = useRef(null);
    const contentboxRef = useRef([]);
    contentboxRef.current = [];
    const contentbox = contentboxRef.current;
    const outboxRef = useRef();
    const dotRef = useRef([]);
    dotRef.current = [];
    const dots = dotRef.current
    const DotRef = useRef([]);
    DotRef.current = [];
    const Dots = DotRef.current;
    const secondctRef = useRef(null);

    const addTocontent = (el) => {
        if (el && !contentbox.includes(el)) {
            contentbox.push(el)
        }
    }
    const addTodot = (el) => {
        if (el && !dots.includes(el)) {
            dots.push(el)
        };
    };
    const addToDot = (el) => {
        if (el && !Dots.includes(el)) {
            Dots.push(el)
        };
    };

    function goTop() {
        outboxRef.current.scrollTo({ top: 0, behavior: "smooth" })
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
        const colorbox = ["lightgray", "", "cornflowerblue", "coral", "orange"];
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

        const Distance = 0.1


        const screenHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outbox;
            const screenHeight = window.innerHeight;
            const pageNum = (Math.floor(scrollTop / screenHeight))
            console.log({ scrollTop })
            setTimeout(() => {

                if (deltaY > 0) {
                    if (scrollTop >= screenHeight * (Math.floor(scrollTop / screenHeight)) && scrollTop < screenHeight * (Math.floor(scrollTop / screenHeight) + 1)) {
                        outbox.scrollTo({
                            top: screenHeight * (Math.floor(scrollTop / screenHeight) + 1) + Distance * (Math.floor(scrollTop / screenHeight) + 1),
                            behavior: "smooth"
                        })
                    }
                } else {
                    if (scrollTop >= screenHeight * (Math.floor(scrollTop / screenHeight)) && scrollTop < screenHeight * (Math.floor(scrollTop / screenHeight) + 1)) {
                        outbox.scrollTo({
                            top: screenHeight * (Math.floor(scrollTop / screenHeight) - 1) + Distance * (Math.floor(scrollTop / screenHeight) + 1),
                            behavior: "smooth"
                        })
                    }
                }
            }, 300)
        };

        function start() {
            if (
                outbox.scrollTop == 0
            ) {
                dots[0].animate({
                    opacity: 1,
                }, {
                    duration: 100,
                    fill: "forwards"
                })
            }
        }

        start();

        const touchmove = () => {
            let initialX = null,
                initialY = null;
            const screenHeight = window.innerHeight;

            function initTouch(e) {
                initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
                initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
            };

            function swipeDirection(e) {
                if (initialX !== null && initialY !== null) {
                    const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`,
                        currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;

                    let diffX = initialX - currentX,
                        diffY = initialY - currentY;

                    console.log(diffY)

                    Math.abs(diffX) > Math.abs(diffY)
                        ? (
                            0 < diffX
                                ? console.log("to left")
                                : console.log("to right")
                        )
                        : (
                            0 < diffY
                                ? console.log("to top")
                                : console.log("to bottom")
                        )

                    initialX = null;
                    initialY = null;

                    const { scrollTop } = outbox;
                    const pageNum = (Math.floor(scrollTop / screenHeight))


                    console.log(scrollTop);

                    if (diffY > 0) {
                        if (scrollTop >= screenHeight * (Math.floor(scrollTop / screenHeight)) && scrollTop < screenHeight * (Math.floor(scrollTop / screenHeight) + 1)) {
                            outbox.scrollTo({
                                top: screenHeight * (Math.floor(scrollTop / screenHeight) + 1) + (Distance + 0.15) * (Math.floor(scrollTop / screenHeight) + 1),
                                behavior: "smooth"
                            })
                        }
                    } else {
                        if (scrollTop >= screenHeight * (Math.floor(scrollTop / screenHeight)) && scrollTop < screenHeight * (Math.floor(scrollTop / screenHeight) + 1)) {
                            outbox.scrollTo({
                                top: screenHeight * (Math.floor(scrollTop / screenHeight) - 1) + (Distance + 0.15) * (Math.floor(scrollTop / screenHeight) + 1),
                                behavior: "smooth"
                            })
                        }
                    }


                }

            }

            window.addEventListener("touchstart", initTouch);
            window.addEventListener("touchmove", swipeDirection);
            window.addEventListener("touchstart", (e) => {
                initTouch(e);
                window.addEventListener("touchmove", swipeDirection)
            });
            window.addEventListener("mouseup", () => {
                window.removeEventListener("mousemove", swipeDirection);
            });
        }

        touchmove();

        
        
        const Dotview = () => {
            const { scrollTop } = outbox;
            const screenHeight = window.innerHeight;
            const pageNum = (Math.floor(scrollTop / screenHeight))
            if (scrollTop == screenHeight * pageNum) {
                dots[pageNum].animate({
                    opacity: 1,
                }, {
                    duration: 150,
                    fill: "forwards"
                })
            } else {
                dots.forEach((v, i) => {
                    v.animate({
                        opacity: 0,
                    }, {
                        duration: 150,
                        fill: "forwards"
                    })
                })
            }
            if (scrollTop >= screenHeight) {
                dots.forEach((v, i) => {
                    v.style.backgroundColor = "black"
                })
                Dots.forEach((v, i) => {
                    v.style.borderColor = "black"
                })
            } else {
                dots.forEach((v, i) => {
                    v.style.backgroundColor = "lightgray"
                })
                Dots.forEach((v, i) => {
                    v.style.borderColor = "lightgray"
                })
            }
        }
        outbox.addEventListener("scroll", Dotview);
        outbox.addEventListener("wheel", screenHandler);

        window.onload = () => {
            outbox.scrollTo({ top: 0, behavior: "smooth" })
        }

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
        const secondCT = () => {
            const { scrollTop } = outbox;
            const secondct = secondctRef.current;
            console.log(secondct);
            secondct.style.width = 100 + "px"
            secondct.style.height = 300 + "px"
            
        }

        secondCT()

        return () => {
            outbox.removeEventListener("scroll", Dotview);
            outbox.removeEventListener("wheel", screenHandler)
        };
    })

    return (
        <>
            <div ref={outboxRef} className={styles.outbox}>
                <div className='content' ref={addTocontent}>
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
                <div className='content' ref={addTocontent}>
                    <div className={styles.secondct} ref={secondctRef}></div>
                </div>
                <div className='content' ref={addTocontent}></div>
                <div className='content' ref={addTocontent}></div>
                <div className='content' ref={addTocontent}></div>
            </div>
            <div className={styles.slidebutton}>
                <span ref={addToDot} onClick={() => {
                    scroll1();
                }}>
                    <p ref={addTodot}></p>
                </span>
                <span ref={addToDot} onClick={() => {
                    scroll2();
                }}>
                    <p ref={addTodot}></p>
                </span>
                <span ref={addToDot} onClick={() => {
                    scroll3();
                }}>
                    <p ref={addTodot}></p>
                </span>
                <span ref={addToDot} onClick={() => {
                    scroll4();
                }}>
                    <p ref={addTodot}></p>
                </span>
                <span ref={addToDot} onClick={() => {
                    scroll5();
                }}>
                    <p ref={addTodot}></p>
                </span>
            </div>
            <div className={styles.Rightsidebutton}>
                <div>
                    <img src={kakao} />
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div onClick={() => {
                    goTop();
                }}>
                    <img src={Top} />
                </div>
            </div>
            <Banner />
        </>
    )
}