import React from "react";
import styles from './styles.module.css';
import Spacer from "../../../../../utils/Spacer";
// import CodeBlock from '@theme/CodeBlock';

function FeatureCard(props){
    const code = `# A cafe object
var rect = { 
            width: 10, 
            height: 11 
        }
`;
    return (
        <div className={styles.Container}>
            <div className={styles.FeatureHeader}>
                <div className={styles.FeatureTitle}>#class-free</div>
                <Spacer height={20} />
                <div className={styles.FeatureDescription}>Cafe has only one construct: Object</div>
            </div>
            <Spacer height={20} />
            <div className={styles.CodeExample}>
                {/*<CodeBlock className={'javasccript'}>*/}
                {/*    {code}*/}
                {/*</CodeBlock>*/}
            </div>
        </div>
    )
}

export default FeatureCard;