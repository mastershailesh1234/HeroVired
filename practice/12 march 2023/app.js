import "regenerator-runtime/runtime";
import axios from "axios";

// defining the get request

const base_url = "https://jsonplaceholder.typicode.com";

const getToDoItems = async () => {
  try {
    const response = await axios.get(`${base_url}/todos?_limit=5`);
    const toddoItems = response.data;
    console.log(toddoItems);
    return toddoItems;
  } catch (err) {
    console.log(err);
  }
};
