import React, {useEffect, useRef} from "react";
import styles from './styles.module.css';
import FeatureCard from "./components/FeatureCard";

function FeaturesScroll(props) {

    return (
        <div className={styles.Container}>
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