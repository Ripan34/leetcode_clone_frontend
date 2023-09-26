import axios from "axios";

const ip = "http://localhost:8080/api";
const getProblemByTitle = async (title) => {
  try {
    const res = await axios.get(`${ip}/title`, {
      params: {
        title: title,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
const getProblems = async () => {
  try {
    const res = await axios.get(`${ip}/problems`, {});
    return res.data;
  } catch (err) {
    throw err;
  }
};
const getProblemsByCategory = () => {
  try {
    
  } catch (err) {
    throw err;
  }
};
const submitSolution = async (problemId, code) => {
  try {
    const res = await axios.post(`${ip}/submit`, {
       problemId: problemId, code: code
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
export { getProblemByTitle, getProblems, submitSolution };
