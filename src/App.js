import Home from "./pages/home";
import styles from '../src/styles/App.module.css'
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import SignIn from "./pages/signIn";
import { useAuth } from './service/authContext';
import ProblemPage from "./pages/problemPage";

function App() {
  const user = useAuth();
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/problem/:problemTitle" element={<ProblemPage/>} />
    </Routes>
    // <div className={styles.container}>
    //     <Home/>
    // </div>
  );
}

export default App;
