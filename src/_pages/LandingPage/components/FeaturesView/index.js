import React, {useEffect, useRef} from "react";
import styles from './styles.module.css';
import Spacer from "../utils/Spacer";
import FeaturesScroll from "./components/FeaturesScroll";
import useWindowSize from "../../../../hooks/useWindowSize";

function FeaturesView() {
    const contentRef = useRef(null);
    const scrollRef = useRef(null);
    const fakeDivRef = useRef(null);
    let {windowWidth, windowHeight} = useWindowSize();
    let lastScrollTop = 0;

    function getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    function horizontalScroll() {
        let st = getScrollTop();
        if(lastScrollTop != 0)
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
        const fakeDivHeight = scrollRef.current.scrollWidth - scrollRef.current.clientWidth + 150;
        fakeDivRef.current.style.height = fakeDivHeight+'px';

        const navHeight = getComputedStyle(document.body)
            .getPropertyValue('--ifm-navbar-height').trim().slice(0,-2);
        scrollListener = scrollListener.bind(null, navHeight);

        window.addEventListener('scroll', scrollListener);

        return function (){
            window.removeEventListener('scroll', scrollListener);
        }
    }, [windowHeight, windowWidth]);

    return (

        <div className={styles.Container}>
            <div ref={contentRef} className={styles.Content}>
                <div className={styles.HeaderContainer}>
                    <div className={styles.HeaderTagLine}> Why Cafe?</div>
                    <Spacer height={20}/>
                    <div className={styles.HeaderTitle}> Features</div>
                </div>
                <Spacer height={60}/>
                <FeaturesScroll ref={scrollRef}/>
            </div>
            <div ref={fakeDivRef} className={styles.FakeContainer}></div>
        </div>

    );
}

export default FeaturesView;