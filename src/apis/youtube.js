import axios from "axios";
import dotenv from "dotenv";
import env from "react-dotenv";

const KEY = env.YOUTUBE_API_KEY;

if (!KEY) {
  throw new Error("Youtube API Key not found in environment variables");
}

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY,
  },
});
