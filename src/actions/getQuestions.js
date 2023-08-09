import useLocalStorage from "./useLocalStorage";

const getQuestions = async () => {
  try {
    const categorySelected = useLocalStorage.getGameConfig().category;
    const difficultySelected = useLocalStorage.getGameConfig().difficulty;
    const url = `https://opentdb.com/api.php?amount=2&category=${categorySelected}&difficulty=${difficultySelected}&type=multiple`;
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    const questions = shuffleAnswers(results);
    useLocalStorage.setQuestions(questions);
    return questions;
  } catch (error) {
    return [];
  }
};

const shuffleAnswers = (results) => {
  const questions = results.map((question) => {
    const { incorrect_answers, correct_answer } = question;
    const answers = [...incorrect_answers, correct_answer];
    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
    return { ...question, answers: shuffledAnswers };
  });
  return questions;
};

export default getQuestions;
