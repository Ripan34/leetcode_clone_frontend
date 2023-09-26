import CodeEditor from "../components/CodeEditor";
import styles from "../styles/ProblemPage.module.css";
import ProblemNav from "../components/problemNav";
import { useParams } from "react-router-dom";
import Split from "react-split";
import React, {useEffect, useState} from "react";
import {getProblemByTitle} from '../service/service';
import BottomConsole from "../components/bottomConsole";
import {submitSolution} from '../service/service';

const ProblemPage = () => {
  const { problemTitle } = useParams();
  const [menu, setMenu] = React.useState(false);
  const [problem, setProblem] = useState({});
  const [code, setCode] = useState(problem.starterCode);
  const [resultExpected, setResultExpected] = useState('');
  const [testCases, setTestCases] = useState([]);
  const [passed, setPassed] = useState([" ", " ", " "])
  const [outputArr, setOutputArr] = useState([]);

  const handleEditorChange = (newValue, e) => {
    setCode(newValue);
  };

  const handleSubmitCode = async () => {
    try{  
        const res = await submitSolution(problem.id, code);
        const resArray = res["stdout"].split('\n');
        const expectedArray = resultExpected.split('\n');
        let temp = []
        for(let i = 0; i < resArray.length; i++){
          if(resArray[i] == expectedArray[i])
            temp.push("passed");
          else
            temp.push("failed");
        }
        setOutputArr(resArray);
        setPassed(temp);
    } catch(err){
        console.log(err);
    }
  }
  const fetchProblem = async () => {
    try{
      const res = await getProblemByTitle(problemTitle);
      setProblem(res);
      setResultExpected(res["testResult"]);
      setTestCases(res["testCases"]);
    } catch(err){

    }
  }
  useEffect(() => {
    fetchProblem();
  }, [])
  return (
    <div className={styles.container}>
      <ProblemNav />
      <Split
      className={styles.split}     
    minSize={100}
    expandToMin={false}
    gutterSize={10}
    gutterAlign="center"
    snapOffset={30}
    dragInterval={1}
    direction="horizontal"
    cursor="col-resize"
    >
        <div className={styles.problemDesc}>
          <div className={styles.topBarLeft}>
            <div className={styles.tabs}>
              <div className={styles.tabBarText}>
                Description
                {true && <div className={styles.selected} />}
              </div>
              <div className={styles.tabBarText}>
                Solution
                {false && <div className={styles.selected} />}
              </div>
            </div>
          </div>
          <div className={styles.desContainer}>
            <div className={styles.title}>{problem.title}</div>
            <div className={styles.infoBar}>
              <div style={{color: '#00b7a2', fontSize: '14px', fontWeight: '500'}}>Easy</div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="1.1em" height="1.1em" fill="#2cbb5d"><path fill-rule="evenodd" d="M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
              <div style={{cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="#8a8a8a"><path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clip-rule="evenodd"></path></svg>
              <div style={{fontSize: '14px', color: '#8a8a8a', marginLeft: '4px'}}>0</div>
              </div>
              <div style={{cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="#8a8a8a"><path fill-rule="evenodd" d="M13.663 22.309a1 1 0 01-.914.594 3.67 3.67 0 01-3.67-3.671V16.67H5.05a2.78 2.78 0 01-2.78-3.2l1.228-8.01a2.778 2.778 0 012.769-2.364H18.98a2.78 2.78 0 012.78 2.781v6.232a2.78 2.78 0 01-2.78 2.78H16.96l-3.297 7.419zm5.318-9.419a.78.78 0 00.78-.78V5.878a.78.78 0 00-.78-.78H17.31v7.792h1.67zM6.257 5.097a.781.781 0 00-.781.666l-1.229 8.01a.78.78 0 00.792.898h5.04a1 1 0 011 1v3.56c0 .712.443 1.32 1.07 1.56l3.16-7.113v-8.58H6.258z" clip-rule="evenodd"></path></svg>
              <div style={{fontSize: '14px', color: '#8a8a8a', marginLeft: '4px'}}>0</div>
              </div>
            </div>
            <p className={styles.problemP}>
              {problem.problemText}
            </p>
          </div>
        </div>
        <div className={styles.edit}>
          <div style={{height: '50%', borderRadius: "4px" }}>
            <div className={styles.topBar}>
              <div className={styles.topText} style={{cursor: 'pointer'}}>Javascript</div>
              <div className={styles.topText} style={{cursor: 'pointer'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor" class="h-4 w-4 text-gray-6 dark:text-dark-gray-6 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7"><path fill-rule="evenodd" d="M5.725 9.255h2.843a1 1 0 110 2H3.2a1 1 0 01-1-1V4.887a1 1 0 012 0v3.056l2.445-2.297a9.053 9.053 0 11-2.142 9.415 1 1 0 011.886-.665 7.053 7.053 0 1010.064-8.515 7.063 7.063 0 00-8.417 1.202L5.725 9.255z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <CodeEditor starterCode={problem.starterCode} handleEditorChange={handleEditorChange}/>
          </div>
          <div className={styles.testCases}>
            <BottomConsole handleSubmitCode={handleSubmitCode} testCases={testCases} passed={passed} outputArr={outputArr}/>
          </div>
        </div>
      </Split>
    </div>
  );
};
export default ProblemPage;
