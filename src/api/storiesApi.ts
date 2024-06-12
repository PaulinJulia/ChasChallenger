import axios from "axios";
import type { StoryText } from "../types/types";

const BASE_URL = /* "http://localhost:5106/api/ActiveStory/AddStory"; */
  "https://chasfantasy.azurewebsites.net/api/ActiveStory/AddStory"
  /* "/api/ActiveStory/AddStory"; */


// CREATE
export const promptStoryText = async (text: StoryText) => {
  try {
    const response = await axios.post(BASE_URL, text);
    return response.data;
  } catch (error) {
    console.error("Error during API call", error);
    throw new Error("Failed to post story text");
  }
};