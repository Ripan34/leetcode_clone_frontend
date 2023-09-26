import styles from '../styles/ProblemTable.module.css';
import InfoBar from './infoBar';

const ProblemTable = (props) => {

    const ProblemItem = (item, ind) => {
        //className={styles.problemRow} style={{backgroundColor: ind % 2 != 0 ? '#282828': '#1a1a1a'}}
        return (
            <tr className={styles.tableRow}>
                <td className={styles.text}>
                    status
                </td>
                <td>
                <a className={styles.text} href={`/problem/${item.title}`}>
                    {item.title}
                </a>
                </td>
                <td>

                <div className={styles.text} style={{color: item.difficulty == "Easy" ? '#00b7a2' : '#ffa114', fontSize: '14px', fontWeight: '500'}}>
                    {item.difficulty}
                </div>
                </td>
                <td>

                <div className={styles.text}>
                    {item.category}
                </div>
                </td>
                <td>
                <div className={styles.text}>
                    Solution
                </div>
                </td>
            </tr>
        )
    }
    return (
 <div className={styles.container}>
    <table style={{width: '100%'}}>
        <InfoBar/>
        <tbody>
        {props.problems && props.problems.map((ele, ind) => {
                return ProblemItem(ele, ind)
            })}
        </tbody>
    </table>
        </div>  
    )
}
export default ProblemTable;