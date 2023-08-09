// esta lógica puede ser remplazada por vuex, pinia o compositionApi
// pero para este ejemplo se usará localStorage
import difficulties from "@/data/difficulties";
const appName = "trivia-game";

const useLocalStorage = {
  setGameConfig: (config) => {
    localStorage.setItem(`${appName}-config`, JSON.stringify(config));
  },
  getGameConfig: () => {
    const config = localStorage.getItem(`${appName}-config`);
    return JSON.parse(config);
  },
  setCategories: (categories) => {
    localStorage.setItem(`${appName}-categories`, JSON.stringify(categories));
  },
  getCategories: () => {
    const categories = localStorage.getItem(`${appName}-categories`);
    return JSON.parse(categories);
  },
  getDifficulties: () => {
    return difficulties;
  },
  getCategoryById: (id) => {
    const categories = useLocalStorage.getCategories();
    return categories.find((category) => category.id == id);
  },
  setQuestions: (questions) => {
    localStorage.setItem(`${appName}-questions`, JSON.stringify(questions));
  },
  getQuestions: () => {
    const questions = localStorage.getItem(`${appName}-questions`);
    return JSON.parse(questions);
  },
  setCorrectAnswer: (correctAnswer) => {
    let correctAnswers = JSON.parse(
      localStorage.getItem(`${appName}-correct-answers`)
    );
    if (!correctAnswers) {
      correctAnswers = [];
    }

    correctAnswers.push(correctAnswer);
    localStorage.setItem(
      `${appName}-correct-answers`,
      JSON.stringify(correctAnswers)
    );
  },
  getCorrectAnswers: () => {
    const correctAnswers = JSON.parse(
      localStorage.getItem(`${appName}-correct-answers`)
    );
    return correctAnswers ? correctAnswers : [];
  },
  getIncorrectAnswers: () => {
    const questions = useLocalStorage.getQuestions();
    const correctAnswers = useLocalStorage.getCorrectAnswers();
    const incorrectAnswers = questions.filter(
      (question) => !correctAnswers.includes(question.correct_answer)
    );
    return incorrectAnswers;
  },
  getCountCorrectAnswers: () => {
    const correctAnswers = JSON.parse(
      localStorage.getItem(`${appName}-correct-answers`)
    );
    return correctAnswers ? correctAnswers.length : 0;
  },
  clearAll: () => {
    localStorage.clear();
  },
  clearCorrectAnswers: () => {
    localStorage.removeItem(`${appName}-correct-answers`);
  },
};

export default useLocalStorage;
