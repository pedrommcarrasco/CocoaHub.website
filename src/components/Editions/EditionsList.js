import styles from './EditionsList.module.css'; 
import { Editions } from "./Editions";

// TODO: Add Tags Component to each row
export const EditionsList = () => {
    return Editions.map((edition) => {
      return <div className={styles.section}>
        <div className={styles.sectionHeader}>
          {edition.date}
        </div>
        <div className={styles.row} id= {edition.id}>
          <div className={styles.rowTitle}>
            {edition.title}
          </div>
         <div className={styles.rowBody}>
            {edition.body}
         </div>
        </div>
      </div>
    })
}

export default EditionsList