import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(API);
      setProducts(
        data.filter((item) => {
          return item.id < 200;
        })
      );
    }
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
