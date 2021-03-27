import React from "react";
import styles from './styles.module.css';
import Spacer from "../../../../../utils/Spacer";
import CodeBlock from '@theme/CodeBlock';

function FeatureCard(props){
    const content = props.content;

    return (
        <div className={styles.Container}>
            <div className={styles.FeatureHeader}>
                <div className={styles.FeatureTitle}>{content.title}</div>
                <Spacer height={20}/>
                <div className={styles.FeatureDescription}>{content.desc}</div>
            </div>
            <Spacer height={20}/>
            <div className={styles.CodeExample}>
                <CodeBlock className={'javasccript'}>
                    {content.code}
                </CodeBlock>
            </div>
        </div>
    )
}

export default FeatureCard;