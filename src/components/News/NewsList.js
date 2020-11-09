import styles from './NewsList.module.css'; 
import { News } from "models/New";

// TODO: Need to sort & grouped by Date and add Tags Component to each row
export const NewsList = () => {
    return News.map((section) => {
      return <div className={styles.section}>
        <div className={styles.sectionHeader}>
          {section.date}
        </div>
        {section.objects.map ((object) => {
          return <div className={styles.row} id= {object.id}>
          <div className={styles.rowTitle}>
            {object.title}
          </div>
         <div className={styles.rowBody}>
            {object.description}
         </div>
        </div>
        })}
      </div>
    })
}

export default NewsList