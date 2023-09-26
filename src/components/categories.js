import styles from '../styles/Categories.module.css';

const Categories = () => {
    return (
        <div className={styles.container}>
            <a className={styles.text}  href='/'>
                Array 
                <span className={styles.spanDiv}>1022</span>
            </a>
            <a className={styles.text}  href='/'>
                String 
                <span className={styles.spanDiv}>1592</span>
            </a>
            <a className={styles.text}  href='/'>
                Hash Table 
                <span className={styles.spanDiv}>1022</span>
            </a>
            <a className={styles.text}  href='/'>
                Sorting 
                <span className={styles.spanDiv}>1022</span>
            </a>
            <a className={styles.text}  href='/'>
                Math 
                <span className={styles.spanDiv}>1022</span>
            </a>
            <a className={styles.text}  href='/'>
                Greedy 
                <span className={styles.spanDiv}>1022</span>
            </a>
            <a className={styles.text}  href='/'>
                Dynamic Programming 
                <span className={styles.spanDiv}>1022</span>
            </a>
            <a className={styles.text}  href='/'>
                Two Pointers 
                <span className={styles.spanDiv}>1022</span>
            </a>
        </div>
    )
}
export default Categories;