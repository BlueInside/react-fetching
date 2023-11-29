import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from 'react-fetch-hook';

/*
const useImageUrl = () => {
  const [data, setdata] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios(
          'https://jsonplaceholder.typicode.com/photos',
          { mode: 'cors' }
        );
        if (response.status >= 400) {
          throw new Error('server error');
        }
        setdata(response.data[0].url);
        setError(null);
      } catch (error) {
        setError(error);
        setdata(null);
      } finally {
        setisLoading(false);
      }
    }
    getData();
  }, []);

  return { data, error, isLoading };
};
*/

const Image = () => {
  const { data, error, isLoading } = useFetch(
    'https://jsonplaceholder.typicode.com/photos'
  );

  console.log();
  if (error) return <p>A network error was encountered</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data && (
        <>
          <h1>Hello here&apos;s imageUrl</h1>
          <img src={data[0].url} alt={'placeholder text'}></img>
        </>
      )}
    </div>
  );
};

export default Image;
