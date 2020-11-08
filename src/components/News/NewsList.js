import styles from './NewsList.module.css'; 
import { News } from "models/New";

// TODO: Need to sort & grouped by Date and add Tags Component to each row
export const NewsList = () => {
    return News.map((object) => {
        return <div className={styles.row} id= {object.id}>
          <div className={styles.rowTitle}>
            {object.title}
          </div>
          <div className={styles.rowBody}>
            {object.description}
          </div>
        </div>
    })
}

export default NewsList