import { useState, useEffect } from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import { fetchData } from "../utils/fetchData";

const Home = () =>  { 

  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
  try {
    const media = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");

        const newArray = await Promise.all(
      media.map(async (item) => {
        const result = await fetchData(
          import.meta.env.VITE_AUTH_API + "/users/" + item.user_id
        );

        return {
          ...item,
          username: result.username,
        };
      })
    );

    setMediaArray(newArray);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  getMedia();
}, []);


  return (
    <>
      <h2>My Media</h2>

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
             <th>Owner</th>
             <th>Action</th>  
          </tr>
        </thead>

        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
