
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

  const postMedia = async (file, inputs, token) => {
    try {
      const media = {
        title: inputs.title,
        description: inputs.description,
        filename: file.filename,
        filesize: file.filesize,
        media_type: file.media_type,
      };

      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(media),
      };

      const mediaData = await fetchData(
        import.meta.env.VITE_MEDIA_API + "/media",
        fetchOptions
      );

      return mediaData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return { mediaArray, postMedia };
};

const useFile = () => {
  const postFile = async (file, token) => {
    try {
      const formData = new FormData();

      formData.append("file", file);

      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };

      const fileData = await fetchData(
        import.meta.env.VITE_MEDIA_API + "/upload",
        fetchOptions
      );

      return fileData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { postFile };
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    try {
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      };

      const loginResult = await fetchData(
        import.meta.env.VITE_AUTH_API + "/auth/login",
        fetchOptions
      );

      console.log(loginResult);
      return loginResult;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { postLogin };
};

const useUser = () => {
  const getUserByToken = async (token) => {
    try {
      const fetchOptions = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const user = await fetchData(
        import.meta.env.VITE_AUTH_API + "/users/token",
        fetchOptions
      );

      return user;
    } catch (error) {
      console.error(error);
    }
  };

  const postUser = async (inputs) => {
    try {
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      };

      const user = await fetchData(
        import.meta.env.VITE_AUTH_API + "/users",
        fetchOptions
      );

      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  };

  return { getUserByToken, postUser };
};

export { useMedia, useFile, useAuthentication, useUser };

