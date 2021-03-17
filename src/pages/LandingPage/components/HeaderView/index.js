import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Spacer from "../utils/Spacer";
import PrimaryButton from "../utils/Buttons/PrimaryButton/PrimaryButton";

function HeaderView() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <div
            className={styles.Container}
        >
            <div style={{padding: "5%"}}>
                <div className={styles.HeaderTitle}>{siteConfig.tagline}</div>
                <Spacer height={50}/>
                <PrimaryButton to="docs/quick-start/">
                    Get Started
                </PrimaryButton>
            </div>
        </div>
    );
}

export default HeaderView;