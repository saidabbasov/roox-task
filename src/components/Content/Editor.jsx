import React from "react"
import styles from "./Content.module.scss";
import { Link } from "react-router-dom";
import EditorAuth from "./EditorAuth";
import axios from "axios";


const Editor = () => {

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
        <div className={styles.editor}>
            <div>
            <Link to="/" className={styles.back}>🡄</Link>
            <div className={styles.editorTitle}>
            <div><h2>Профиль пользоваетля</h2></div>
            <div><button>Редактироввать</button></div>
            </div>

            {
                 users.map( user => 
                 <EditorAuth key={user.id} user={user} />
                 )
               }
            </div>
            
        </div>
    )
}

export default Editor