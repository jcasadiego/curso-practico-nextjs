import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const { data } = await axios.get(API);
            setProducts(data);
        };
        fetchData();
    }, []);
    
    return products;
};

export default useGetProducts;