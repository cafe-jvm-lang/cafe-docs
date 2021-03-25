import React, {useEffect, useState} from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Spacer from "../utils/Spacer";
import PrimaryButton from "../utils/Buttons/PrimaryButton/PrimaryButton";
import DownloadButton from "./components/DownloadButton";

function HeaderView() {
    const {siteConfig} = useDocusaurusContext();

    const [isError, setIsError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [assetsUrl, setAssetsUrl] = useState({
        zip: '',
        exe: ''
    });
    const [clientOS, setClientOS] = useState(null);
    const [dwnVersion, setDwnVersion] = useState(null);

    let downloadBtn = <></>

    function setStorageItems(version, urls) {
        localStorage.setItem("cafe-dwn-version", version);
        localStorage.setItem("exe", urls.exe);
        localStorage.setItem("zip", urls.zip);
        sessionStorage.setItem("exists", "true");
    }

    function getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }
        return os;
    }

    useEffect(() => {
        setClientOS(getOS());
        if (!sessionStorage.getItem("exists")) {
            fetch('https://api.github.com/repos/cafe-jvm-lang/cafe/releases/latest')
                .then(response => response.json())
                .then(result => {
                    const urls = {};
                    result['assets'].forEach(function (item) {
                        urls[item.name.split('.').pop()] = item.browser_download_url;
                    })
                    setDwnVersion(result['tag_name']);
                    setAssetsUrl(urls);
                    setIsLoaded(true);
                }, error => {
                    setIsError(true);
                });
        } else {
            setDwnVersion(localStorage.getItem("cafe-dwn-version"));
            const urls = {};
            urls["exe"] = localStorage.getItem("exe");
            urls["zip"] = localStorage.getItem("zip");
            setAssetsUrl(urls);
            setIsLoaded(true);
        }
    }, [])

    if (isError) {
        const version = localStorage.getItem("cafe-dwn-version");
        const exe = localStorage.getItem("exe");
        const zip = localStorage.getItem("zip");

        if (exe && zip) {
            setDwnVersion(version);
            setAssetsUrl({exe, zip});
        }
    }

    if (isLoaded) {
        setStorageItems(dwnVersion, assetsUrl);
        let downloads = {}
        let defaultLink = assetsUrl.zip;

        if (clientOS === 'Windows') {
            downloads["Windows (.exe) "] = assetsUrl.exe;
            defaultLink = assetsUrl.exe;
        }

        downloads["Portable (.zip)"] = assetsUrl.zip;

        downloadBtn = <DownloadButton version={dwnVersion} links={downloads} defaultLink={defaultLink}/>
    }

    return (
        <div
            className={styles.Container}
        >
            <div style={{padding: "5%"}}>
                <div className={styles.HeaderTitle}>{siteConfig.tagline}</div>
                <Spacer height={50}/>
                <div className={styles.ButtonsContainer}>
                    <div style={{marginRight: '5%'}}>
                        <PrimaryButton to="docs/quick-start/">
                            Get Started
                        </PrimaryButton>
                    </div>

                    {downloadBtn}

                </div>
            </div>
        </div>
    );
}

export default HeaderView;