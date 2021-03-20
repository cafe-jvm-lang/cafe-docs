import React, {useEffect, useRef} from "react";
import styles from './styles.module.css';
import Spacer from "../utils/Spacer";
import FeaturesScroll from "./components/FeaturesScroll";
import useClientGlobals from "../../../../hooks/useClientGlobals";
import useHasMounted from "../../../../hooks/useHasMounted";

function FeaturesView() {
    const ref = useRef(null);
    const fakeRef = useRef(null);
    const {clientWindow, clientDoc} = useClientGlobals();
    let [scrollRef, setScrollRef] = [null, function (ref) {
        scrollRef = ref;
    }]

    useEffect(() => {
        if(clientWindow !== undefined) {
            function getScrollTop() {
                return (clientWindow.pageYOffset !== undefined) ? clientWindow.pageYOffset : (clientDoc.documentElement || clientDoc.body.parentNode || clientDoc.body).scrollTop;
            }

            var currOffset = getScrollTop();

            const slideLeft = function (e) {
                let x = currOffset;
                let y = getScrollTop();
                scrollRef.current.scrollLeft += (y - x);
                currOffset = y;
            }


            function triggerSlideLeft(e) {
                if (e.intersectionRatio >= 0.9) {
                    currOffset = getScrollTop();
                    window.addEventListener('scroll', slideLeft);
                } else {
                    window.removeEventListener('scroll', slideLeft);
                }
            }

            const cachedRef = ref.current,
                observer = new IntersectionObserver(
                    ([e]) => triggerSlideLeft(e),
                    {
                        threshold: [0, 0.9]
                    }
                )

            observer.observe(cachedRef)

            // unmount
            return function () {
                observer.unobserve(cachedRef)
            }
        }
    },[clientWindow]);

    return (

        <div className={styles.Container}>
            <div ref={ref} className={styles.Content}>
                <div className={styles.HeaderContainer}>
                    <div className={styles.HeaderTagLine}> Why Cafe?</div>
                    <Spacer height={20}/>
                    <div className={styles.HeaderTitle}> Features</div>
                </div>
                <Spacer height={60}/>
                <FeaturesScroll setScrollRef={setScrollRef}/>
            </div>
            <div ref={fakeRef} className={styles.FakeContainer}></div>
        </div>

    );
}

export default FeaturesView;