import { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import filltext from './Filltext';

function Banner() {
    const bannerboxRef = useRef(null);
    const cateRef = useRef([]);
    cateRef.current = [];
    const cate = cateRef.current;
    const catemenuRef = useRef([]);
    catemenuRef.current = [];
    const catemenu = catemenuRef.current;
    const [catecount, setCatecount] = useState([0, 0, 0, 0]);
    const addTocate = (el) => {
        if (el && !cate.includes(el)) {
            cate.push(el)
        }
    }
    const addTomenu = (el) => {
        if (el && !cate.includes(el)) {
            cate.push(el)
        }
    }
    useEffect(() => {
        const bannerBox = bannerboxRef.current;
        filltext(cate, catecount, setCatecount);
    })


    console.log(catecount);
    return (
        <>
            <div className={styles.BannerBox}>
                <div className={styles.LogoBox}>
                    <img src={process.env.PUBLIC_URL + '/Image/main/home1.png'} />
                    <p><span>H</span>ome</p>
                </div>
                <div className={styles.categoryBox}>
                    <p><span ref={addTocate} onClick={(e) => {
                        let copy = [...catecount];
                        if (catecount[0] == 0) {
                            copy = [1, 0, 0, 0];
                            setCatecount(copy)
                        } else {
                            copy = [0, 0, 0, 0];
                            setCatecount(copy)
                        }
                    }}>- Pages -</span></p>
                    <p><span ref={addTocate} onClick={(e) => {
                        let copy = [...catecount];
                        if (catecount[1] == 0) {
                            copy = [0, 1, 0, 0];
                            setCatecount(copy)
                        } else {
                            copy = [0, 0, 0, 0];
                            setCatecount(copy)
                        }
                    }}>- Problem -</span></p>
                    <p><span ref={addTocate} onClick={(e) => {
                        let copy = [...catecount];
                        if (catecount[2] == 0) {
                            copy = [0, 0, 1, 0];
                            setCatecount(copy)
                        } else {
                            copy = [0, 0, 0, 0];
                            setCatecount(copy)
                        }
                    }}>- Project -</span></p>
                    <p><span ref={addTocate} onClick={(e) => {
                        let copy = [...catecount];
                        if (catecount[3] == 0) {
                            copy = [0, 0, 0, 1];
                            setCatecount(copy)
                        } else {
                            copy = [0, 0, 0, 0];
                            setCatecount(copy)
                        }
                    }}>- Reference -</span></p>
                </div>
            </div>
            <div ref={addTomenu}></div>
            <div ref={addTomenu}></div>
            <div ref={addTomenu}></div>
            <div ref={addTomenu}></div>
            {/* {catecount[0] == 1 ?
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                : false
            } */}
        </>
    )
}

export default Banner;