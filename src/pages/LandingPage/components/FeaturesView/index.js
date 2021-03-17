import React, {useEffect, useRef} from "react";
import styles from './styles.module.css';
import Spacer from "../utils/Spacer";
import FeaturesScroll from "./components/FeaturesScroll";

function FeaturesView(props){
    return (
      <div className={styles.Container}>
          <div className={styles.Content}>
              <div className={styles.HeaderContainer}>
                  <div className={styles.HeaderTagLine}> Why Cafe? </div>
                  <Spacer height={20} />
                  <div className={styles.HeaderTitle}> Features </div>
              </div>
              <Spacer height={60} />
              <FeaturesScroll />
          </div>
      </div>
    );
}

export default FeaturesView;