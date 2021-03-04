
import { useState, useEffect } from 'react';
import axios from 'axios';

const useSomeData = () => {
    const [someData, setSomeData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function sleep(delay = 0) {
        return new Promise((resolve) => {
          setTimeout(resolve, delay);
        });
      }

    useEffect(() => {
        if (!someData) {
            setLoading(true);
            (async () => {
                try {
                    await sleep(500);
                    const response = await axios.get('https://country.register.gov.uk/records.json?page-size=5000');
                    const objData = await response.data;
                    const data = Object.keys(objData).map((key) => objData[key].item[0]);
                    // console.log('data',data);
                    console.log('data returned');
                    setSomeData(data);
                } catch (error) {
                    console.log(error);
                    setError(error);
                } finally {
                    setLoading(false);
                }
            })();
        }
    }, [someData]);

    return { someData, loading, error };
};

export default useSomeData;