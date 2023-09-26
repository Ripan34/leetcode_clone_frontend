import styles from "../styles/Bottom.module.css";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useAuth } from '../service/authContext';

const BottomConsole = (props) => {
  const [showId, setShowId] = useState(0);
  const [parsedCases, setParsedCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useAuth();
  console.log(user)
  
  useEffect(() => {
    if (props.testCases) {
      let temp = [];
      for (let ele of props.testCases) {
        let ob = JSON.parse(ele);
        console.log(ob);
        let str = " ";
        for (let key in ob) {
          str += key.toString() + " = " + ob[key] + " ";
        }
        temp.push(str);
      }
      setParsedCases(temp);
    }
  }, [props]);
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.tabs}>
          <div className={styles.tabBarText}>
            Testcases
          </div>
          <div className={styles.tabBarText}>
            Results
          </div>
        </div>
      </div>
      {loading && (
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
            <Oval
            height={40}
            width={40}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
            />
        </div>
      )}
      {!loading && (
        <div className={styles.middleDiv}>
          <div className={styles.cases}>
            <div
              className={styles.caseDiv}
              onClick={() => setShowId(0)}
              style={{
                backgroundColor: showId == 0 ? "#3e3e3e" : "",
                color: showId == 0 ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
              }}
            >
              {props.passed[0] == "passed" ? (
                <div className={styles.passCirc}></div>
              ) : (
                ""
              )}
              {props.passed[0] == "failed" ? (
                <div className={styles.failCirc}></div>
              ) : (
                ""
              )}
              Case 1
            </div>
            <div
              className={styles.caseDiv}
              onClick={() => setShowId(1)}
              style={{
                backgroundColor: showId == 1 ? "#3e3e3e" : "",
                color: showId == 1 ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
              }}
            >
              {props.passed[1] == "passed" ? (
                <div className={styles.passCirc}></div>
              ) : (
                ""
              )}
              {props.passed[1] == "failed" ? (
                <div className={styles.failCirc}></div>
              ) : (
                ""
              )}
              Case 2
            </div>
            <div
              className={styles.caseDiv}
              onClick={() => setShowId(2)}
              style={{
                backgroundColor: showId == 2 ? "#3e3e3e" : "",
                color: showId == 2 ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
              }}
            >
              {props.passed[2] == "passed" ? (
                <div className={styles.passCirc}></div>
              ) : (
                ""
              )}
              {props.passed[2] == "failed" ? (
                <div className={styles.failCirc}></div>
              ) : (
                ""
              )}
              Case 3
            </div>
          </div>
          <div
            style={{
              marginTop: "15px",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Input
          </div>
          <div className={styles.inpDiv}>
            {parsedCases[showId]}
            {/* {" nums = [1,2,3,4] target = 13"} */}
          </div>
          <div
            style={{
              marginTop: "15px",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Output
          </div>
          <div className={styles.inpDiv}>
            {props.outputArr[showId]}
          </div>
        </div>
      )}
      <div className={styles.bottomBar}>
        <div className={styles.tabs}>
          <div className={styles.tabBarText}>Console</div>
          <div className={styles.bottomRightDiv}>
            <div
              className={styles.run}
              style={{opacity: (loading || !user) ? 0.5 : 1, pointerEvents: loading ? "none": "all", cursor: loading ? "not-allowed": 'pointer'}}
              onClick={async () => {
                if(!user) return;
                setLoading(true);
                await props.handleSubmitCode();
                setLoading(false);
              }}
            >
              Run
            </div>
            <div
              className={styles.submit}
              style={{opacity: (loading || !user) ? 0.5 : 1, pointerEvents: loading ? "none": "all", cursor: loading ? "not-allowed": 'pointer'}}
              onClick={async () => {
                if(!user) return;
                setLoading(true);
                await props.handleSubmitCode();
                setLoading(false);
              }}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomConsole;
