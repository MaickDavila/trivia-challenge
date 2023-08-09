import useLocalStorage from "./useLocalStorage";

const getCategories = async () => {
  try {
    const url = "https://opentdb.com/api_category.php";
    const response = await fetch(url);
    const data = await response.json();
    const { trivia_categories } = data;
    useLocalStorage.setCategories(trivia_categories);
  } catch (error) {
    console.error(error);
  }
};

export default getCategories;
