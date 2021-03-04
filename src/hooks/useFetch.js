import { useEffect, useState } from "react"

const useFetch = (url) => {
  const token = '9_HW2X8YspdsGcABsncg';
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }})
    .then((res) => {
        if(!res.ok) {
            throw Error('Could not fetch data!');
        }
        return res.json();
    })
    .then((data) => {
        setData(data.docs);
        setIsPending(false);
        setError(null);
    })
    .catch((err) => {
        setIsPending(false);
        setError(err.message);
    })
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;