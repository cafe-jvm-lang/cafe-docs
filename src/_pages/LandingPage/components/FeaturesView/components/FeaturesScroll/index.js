import React, {forwardRef, useEffect, useRef} from "react";
import styles from './styles.module.css';
import FeatureCard from "./components/FeatureCard";

const FeaturesScroll = forwardRef((props,ref) => {
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
});

export default FeaturesScroll;