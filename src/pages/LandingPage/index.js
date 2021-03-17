import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeaderView from './components/HeaderView';
import FeaturesView from './components/FeaturesView';
function LandingPage(){
    const { siteConfig } = useDocusaurusContext();

    return (
        <>
            <HeaderView />
            <FeaturesView />
        </>
    )
}

export default LandingPage;