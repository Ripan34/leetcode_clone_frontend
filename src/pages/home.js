import Navbar from "../components/navbar";
import Categories from "../components/categories";
import styles from '../styles/Home.module.css';
import ProblemTable from "../components/problemTable";
import InfoBar from '../components/infoBar';
import {getProblems} from '../service/service';
import { useEffect, useState } from "react";

const Home = () => {
    const [problems, setProblems] = useState();

    const fetchAllProblems = async () => {
        try{
            const res = await getProblems();
            console.log(res);
            setProblems(res);
        } catch(err){

        }
    }
    useEffect(() => {
        fetchAllProblems();
    }, [])
    return (
        <div>
            <Navbar/>
            <div className={styles.title}>
                Study with confidence
            </div>
            <div className={styles.container}>
                <Categories/>
                <ProblemTable problems={problems}/>
            </div>
        </div>
    )
}
export default Home;