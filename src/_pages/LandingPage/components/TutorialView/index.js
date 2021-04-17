import React from "react";
import styles from "./styles.module.css";

function TutorialView() {


    return (
        <div className={styles.Container}>
            <div className={styles.Heading}>
                A Cafe Tutorial
            </div>
            <div className={styles.YoutubeIframe}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_hP1PCbLlaM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div>
    )

}

export default TutorialView;