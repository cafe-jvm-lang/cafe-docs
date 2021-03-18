import React, {useEffect, useRef} from "react";
import styles from './styles.module.css';
import Spacer from "../utils/Spacer";
import FeaturesScroll from "./components/FeaturesScroll";

function FeaturesView(props) {
    const ref = useRef(null);
    const fakeRef = useRef(null);
    let [scrollRef, setScrollRef] = [null, function (ref){ scrollRef = ref; }]

    var currOffset = getScrollTop();

    function getScrollTop(){
        return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }

    const slideLeft = function (e){
        let x = currOffset;
        let y = getScrollTop();
        scrollRef.current.scrollLeft += (y-x);
        currOffset = y;
        console.log(y-x);
    }


    function triggerSlideLeft(e) {
        if(e.intersectionRatio >= 0.9){
            currOffset = getScrollTop();
            window.addEventListener('scroll', slideLeft);
        }
        else{
            window.removeEventListener('scroll', slideLeft);
            console.log("removed")
        }
    }

    useEffect(() => {
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => triggerSlideLeft(e),
                {
                    threshold: [0,0.9]
                }
            )

        observer.observe(cachedRef)

        // unmount
        return function () {
            observer.unobserve(cachedRef)
        }
    }, []);

    return (
        <div className={styles.Container}>
            <div ref={ref} className={styles.Content}>
                <div className={styles.HeaderContainer}>
                    <div className={styles.HeaderTagLine}> Why Cafe?</div>
                    <Spacer height={20}/>
                    <div className={styles.HeaderTitle}> Features</div>
                </div>
                <Spacer height={60}/>
                <FeaturesScroll setScrollRef={setScrollRef} />
            </div>
            <div ref={fakeRef} className={styles.FakeContainer}></div>
        </div>
    );
}

export default FeaturesView;