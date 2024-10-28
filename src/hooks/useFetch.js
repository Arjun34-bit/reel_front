import { useState } from "react";
import axios from "axios";

export const useFetch = async (uri, type) => {
  const [result, setResult] = useState("");
  if (type === "get") {
    const data = await axios.get(uri);
    setResult(data);
  } else if (type === "post") {
    const data = await axios.post(uri);
    setResult(data);
  }

  return result;
};
