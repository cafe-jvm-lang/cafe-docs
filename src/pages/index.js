import React from 'react';
import Layout from '@theme/Layout';
import LandingPage from "../_pages/LandingPage";
import Head from "@docusaurus/Head";

function Home() {
    return (
        <Layout>
            <Head>
                <meta property="og:url" content="https://www.cafe-lang.tech/"/>
                <meta property="og:title" content="Cafe -- Programming Language"/>
                <meta property="og:description"
                      content="Cafe, a dynamic ,prototype-based, programming language on JVM"/>
                <meta name="keywords" content="Cafe, JVM, programming-language, prototype-based, jvm-language"/>
                <title>Cafe</title>

                {/*  https://realfavicongenerator.net/  */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <LandingPage/>
        </Layout>
    )
}

export default Home;
