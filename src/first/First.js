import { useEffect, useRef } from 'react';
import Banner from '../Banner/Banner';
import styles from './First.module.css';

export default function First() {
    const mainctRef = useRef(null);
    let bannerWidth = window.innerWidth;

    return (
        <>
            <Banner />
            <div ref={mainctRef}>

            </div>
        </>
    )
}