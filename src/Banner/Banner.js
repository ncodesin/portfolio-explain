import { useEffect, useRef } from 'react';
import styles from './Banner.module.css';

function Banner() {
    const bannerboxRef = useRef(null);

    useEffect(() => {
        const bannerBox = bannerboxRef.current;
    })
    return (
        <>
            <div className={styles.BannerBox}>
                <div className={styles.LogoBox}>
                    <img src={process.env.PUBLIC_URL + '/Image/main/home1.png'} />
                    <p><span>P</span>ortfolio-explain</p>
                </div>
                <div className={styles.categoryBox}>
                    <p>-Pages-</p>
                    <p>-Pages-</p>
                    <p>-Pages-</p>
                    <p>-Pages-</p>
                </div>
            </div>
        </>
    )
}

export default Banner;