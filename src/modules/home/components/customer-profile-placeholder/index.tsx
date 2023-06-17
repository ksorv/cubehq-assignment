import {FC} from "react";
import styles from './styles.module.scss';

const CustomerProfilePlaceholder: FC = () => {
    return (
        <div className={styles.container}>
            <p>Select a profile from sidebar</p>
        </div>
    );
}

export default CustomerProfilePlaceholder;