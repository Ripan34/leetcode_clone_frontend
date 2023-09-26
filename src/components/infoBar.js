import styles from '../styles/InfoBar.module.css';

const InfoBar = () => {
    return (
        <>
        <thead className={styles.tbHead}>
        <tr>
          <th>Status</th>
          <th>Title</th>
          <th>Difficulty</th>
          <th>Category</th>
          <th>Solution</th>
        </tr>
        <div style={{width: '100%', height: '0.5px', backgroundColor: 'rgba(255, 255, 255, 0.5)',
            position: 'absolute', bottom: 0, left: 0}}>
        </div>
      </thead>

        </>
    )
}
export default InfoBar;