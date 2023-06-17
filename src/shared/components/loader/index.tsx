import {FC} from "react";
import styles from './styles.module.scss'
import * as classNames from "classnames";

interface LoaderProps {
    className?: string;
    text?: string;
}

const Loader: FC<LoaderProps> = ({className, text}) => {
    return (
        <div className={classNames(styles.loader, className)}>
            <div className={styles.spinner}></div>
            {text && <div className={styles.text}>{text}</div>}
        </div>
    );
}

export default Loader;