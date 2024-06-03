import { useEffect, useState } from "react";
import { ChatHistoryItem } from "./ChatHistoryItem";
import { StoryMessages } from "../types/types";
import { getStoryMessages } from "../api/storyMessagesApi";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";

const ChatHistory = () => {
  const [messages, setMessages] = useState<StoryMessages[]>([]);
  const { id } = useSelector((state: RootState) => state.character);

  useEffect(() => {
    if (id !== undefined) {
      const fetchStoryMessages = async () => {
        try {
          const allMessages = await getStoryMessages(id);
          setMessages(allMessages.reverse());
        } catch (error) {
          console.error("Error fetching story messages:", error);
          setMessages([]);
        }
      };
      fetchStoryMessages();
    }
  }, [id]);

  return (
    <>
      <section style={{ margin: "1rem" }}>
        {messages.map((storyMessages: StoryMessages) => (
          <ChatHistoryItem
            key={storyMessages.message}
            storyMessages={storyMessages}
          />
        ))}
      </section>
    </>
  );
};
export default ChatHistory;
