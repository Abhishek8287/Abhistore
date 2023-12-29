import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../Utils/api";
const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    try {
      const res = await fetchDataFromApi(endpoint);
      setData(res);
      //console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { data };
};

export default useFetch;
