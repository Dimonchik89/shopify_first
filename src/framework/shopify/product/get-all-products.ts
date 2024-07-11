import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { ProductConnection } from '../schema';
import { getAllProductsQuery, normalizeProduct } from '../utils';

// const fetchApi = async () => {
//     const url = "https://jsonplaceholder.typicode.com/todos"

//     const res = await fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })

//     const data = await res.json()
//     return { data }
// }

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

export default getAllProducts;
