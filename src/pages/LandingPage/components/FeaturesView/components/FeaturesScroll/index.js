import React, {useEffect, useRef} from "react";
import styles from './styles.module.css';
import FeatureCard from "./components/FeatureCard";

function FeaturesScroll(props) {

    const ref = useRef(null);

    useEffect(()=>{
        props.setScrollRef(ref);
    })

    return (
        <div ref={ref} className={styles.Container}>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
        </div>
    );
}

export default FeaturesScroll;