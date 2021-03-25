import React from "react";
import styles from './styles.module.css';

function DownloadButton(props) {

    const version = props.version;
    const links = props.links;
    const defaultLink = props.defaultLink;
    const items = [];

    for (const key in links) {
        items.push(
            <li key={key}>
                <a className={"dropdown__link"} href={links[key]}>
                    {key}
                </a>
            </li>
        )
    }


    return (
        <div className={styles.Container}>
            <a className={styles.DownloadLeftButton} href={defaultLink}>
                <div className={styles.DownloadLeftButtonContainer}>
                    <div className={styles.Version}>{version}</div>
                    <div className={styles.DownloadIcon}></div>
                </div>
            </a>
            <div className={"dropdown dropdown--hoverable dropdown--right"}>
                <div className={styles.Dropdown}></div>
                <ul className="dropdown__menu">
                    {items}
                </ul>
            </div>
        </div>
    )
}

export default DownloadButton;