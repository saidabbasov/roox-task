import React from "react";
import styles from "./Content.module.scss";
import { Link } from "react-router-dom";
import Editor from "./Editor";

 export type PropsType = {
    user: {
        id:number
        name: string
        address: {city :string}
        company:{name: string}
    }
}

const UserCard: React.FC<PropsType> = ({user}) => {
    return(
        <div className={styles.userCard}>
            <div>
                <div className={styles.text}>
                    <span className={styles.title}>ФИО:</span><span>{user.name}</span>
                </div>
                <div>
                    <span className={styles.title}>город:</span><span>{user.address.city}</span>
                </div>
                <div>
                <span className={styles.title}>компания:</span><span>{user.company.name}</span>
                </div>
                <div className={styles.link}>
                    <Link to="/editor">Подробнее</Link>
                </div>
            </div>
        </div>
    )
}

export default UserCard