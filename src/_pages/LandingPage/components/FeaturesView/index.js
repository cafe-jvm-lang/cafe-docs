import React, {useEffect, useRef, useState} from "react";
import styles from './styles.module.css';
import Spacer from "../utils/Spacer";
import FeaturesScroll from "./components/FeaturesScroll";
import useWindowSize from "../../../../hooks/useWindowSize";

function FeaturesView() {
    const contentRef = useRef(null);
    const scrollRef = useRef(null);
    const fakeDivRef = useRef(null);
    const headerRef = useRef(null);

    const [headerWidth, setHeaderWidth] = useState(null);
    const [fakeCardWidth, setFakeCardWidth] = useState(0);

    let {windowWidth, windowHeight} = useWindowSize();
    let lastScrollTop = 0;

    function getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    let slideRight = 1;
    let slideLeft = 1;

    function horizontalScroll() {
        // let st = getScrollTop();
        // const diff = st-lastScrollTop;
        // const slideOffset = 245;
        // const threshold = 75;
        // let slideCards = 1;
        // if(diff > threshold || slideRight) {
        //     if(slideRight)
        //         slideRight=0;
        //     else {
        //         if(diff > threshold*2) {
        //             slideCards = Math.floor(diff / threshold);
        //         }
        //         scrollRef.current.scrollLeft +=  (slideOffset * slideCards);
        //     }
        //     lastScrollTop = st;
        // }
        // slideCards = 1;
        // if(diff < -threshold || slideLeft) {
        //     if(slideLeft)
        //         slideLeft=0;
        //     else {
        //         if(diff < threshold*2) {
        //             slideCards = Math.abs(Math.floor(-diff / threshold));
        //         }
        //         scrollRef.current.scrollLeft -=  (slideOffset * slideCards);
        //     }
        //     lastScrollTop = st;
        // }
        let st = getScrollTop();
        if (lastScrollTop != 0)
            scrollRef.current.scrollLeft += (st - lastScrollTop);
        lastScrollTop = st;
    }

    function scrollListener(navHeight){
        let rect = contentRef.current.getBoundingClientRect();
        if(Math.round(rect.top) === Math.round(navHeight)){
            horizontalScroll();
        }
    }

    useEffect((e) => {
        setHeaderWidth(headerRef.current.offsetWidth);
        setFakeCardWidth(scrollRef.current.clientWidth / 2 - headerWidth);
        const fakeDivHeight = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        fakeDivRef.current.style.height = fakeDivHeight + 'px';

        const navHeight = getComputedStyle(document.body)
            .getPropertyValue('--ifm-navbar-height').trim().slice(0, -2);
        scrollListener = scrollListener.bind(null, navHeight);

        window.addEventListener('scroll', scrollListener);

        return function () {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [windowHeight, windowWidth]);

    return (

        <div className={styles.Container}>
            <div ref={contentRef} className={styles.Content}>
                <div ref={headerRef} className={styles.HeaderContainer}>
                    <div className={styles.HeaderTagLine}> Why Cafe?</div>
                    <Spacer height={20}/>
                    <div className={styles.HeaderTitle}> Features</div>
                </div>
                <Spacer height={60}/>
                <FeaturesScroll ref={scrollRef} fakeCardWidth={fakeCardWidth}/>
            </div>
            <div ref={fakeDivRef} className={styles.FakeContainer}></div>
        </div>

    );
}

export default FeaturesView;