import { useEffect, useState } from "react";

const useFetchData = (name) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAgain = async (signal) => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${name}`, { signal })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const timer = setTimeout(() => {
      fetchAgain(signal);
    }, 500);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [name]);

  return { data, loading };
};

export default useFetchData;
