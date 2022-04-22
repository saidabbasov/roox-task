import axios from "axios";
import React from "react";
import styles from "./Content.module.scss";
import UserCard from "./UserCard";

const Content = () => {
    const [users, setUsers] = React.useState([]);
    React.useEffect( () => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data)
        
      })
      .catch((err) => {
        console.log(err)
      })
    })
    return(
        <div className={styles.content}>
           <div>
               <h2>Список пользователей</h2>
               {
                 users.map( user => 
                 <UserCard key={user.id} user={user} />
                 )
               }
           </div>
        </div>
    )
}

export default Content