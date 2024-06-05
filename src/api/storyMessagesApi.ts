import axios from "axios";

//READ
export const getStoryMessages = async (id: number) => {
  try {
    const response = await axios.get(
      `/api/Chat/Chathistory?characterId=${id}&amountPerPage=10&pageNumber=1`
      /* `https://chasfantasy.azurewebsites.net//api/Chat/Chathistory?activeStoryId=${id}&amountPerPage=10&pageNumber=1` */
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch story message:", error);
    return null;
  }
};

