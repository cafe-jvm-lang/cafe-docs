import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeaderView from './components/HeaderView';
import FeaturesView from './components/FeaturesView';
import TutorialView from "./components/TutorialView";

function LandingPage(){
    const { siteConfig } = useDocusaurusContext();
    return (
        <>
            <HeaderView />
            <FeaturesView/>
            <TutorialView/>
        </>
    )
}

export default LandingPage;