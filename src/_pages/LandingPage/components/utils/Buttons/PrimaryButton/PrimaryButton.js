import React from "react";
import { useHistory } from "react-router-dom";
import styles from './styles.module.css';
import clsx from "clsx";

function PrimaryButton(props){
    const {to, children, className } = props;
    const history = useHistory();

    return (
        <button
            className={clsx(styles.Button, )}
            onClick={() => {
                if (to.startsWith("http")) {
                    window.open(to, "_blank");
                    return;
                }
                history.push(to);
            }}
        >
            {children}
        </button>
    )
}

export default PrimaryButton;