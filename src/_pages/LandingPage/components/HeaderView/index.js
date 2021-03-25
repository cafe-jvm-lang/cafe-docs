import React, {useEffect, useState} from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Spacer from "../utils/Spacer";
import PrimaryButton from "../utils/Buttons/PrimaryButton/PrimaryButton";
import DownloadButton from "./components/DownloadButton";

function HeaderView() {
    const {siteConfig} = useDocusaurusContext();
    const options = {
        headers: {
            'Authorization': 'secret 75e81886754fefb11601cb85dc3ee5331d11f2c9'
        }
    }

    const [isError, setIsError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [assetsUrl, setAssetsUrl] = useState({
        zip: '',
        exe: ''
    });
    const [clientOS, setClientOS] = useState(null);
    const [dwnVersion, setDwnVersion] = useState(null);

    let downloadBtn = <></>

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    function setCookies(version, urls) {
        createCookie("cafe-version", version, 60);
        createCookie("exe", urls.exe, 60);
        createCookie("zip", urls.zip, 60);
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
        fetch('https://api.github.com/repos/cafe-jvm-lang/cafe/releases/latest', options)
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
    }, [])

    if (isError) {
        const exe = readCookie("exe");
        const zip = readCookie("zip");

        if (exe && zip) {
            setAssetsUrl({exe, zip});
        }
    }

    if (isLoaded) {
        setCookies(dwnVersion, assetsUrl);
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