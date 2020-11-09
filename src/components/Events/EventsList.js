import styles from './EventsList.module.css'; 
import { Events } from "./Events";

// TODO: Add Tags Component to each row
export const EventsList = () => {
    return Events.map((section) => {
      return <div className={styles.section}>
        <div className={styles.sectionHeader}>
          {section.date}
        </div>
        {section.objects.map ((object) => {
          return <div className={styles.row} id= {object.id}>
            <img src={object.logo} className={styles.rowLogo}></img>
            <div className={styles.rowContainer}>
                <div className={styles.rowTitle}>
                    {object.name}
                </div>
                <div className={styles.rowBody}>
                    {object.location}
                </div>
            </div>
        </div>
        })}
      </div>
    })
}

export default EventsList