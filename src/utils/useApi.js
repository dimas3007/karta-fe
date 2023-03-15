import { useState, useEffect } from "react";

const API_URL = "https://api.covalenthq.com/v1";
const API_KEY = "ckey_4c1a6929f537401b8a6c14c0d27";

const useApi = (initialPath, initialData) => {
  const [url, setUrl] = useState(`${API_URL}/${initialPath}/?key=${API_KEY}`);
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error, setUrl };
};

export default useApi;
