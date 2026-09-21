import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const data = await fetchData(
        import.meta.env.VITE_MEDIA_API + "/media"
      );

      setMediaArray(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return { mediaArray };
};

export { useMedia };