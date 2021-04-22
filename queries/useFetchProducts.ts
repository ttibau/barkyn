import { useQuery } from 'react-query';
import { http } from './http';

const FETCH_PRODUCTS_KEYS = 'fetch-products'


const query = async () : Promise<Array<IProduct>> => {
    const { data } = await http.get('/api/getProducts');
    return data;
}

export function useFetchProducts() {
    return useQuery<Array<IProduct>>([FETCH_PRODUCTS_KEYS], () => query());
}