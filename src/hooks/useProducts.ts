import { useQuery, useQueryClient } from 'react-query';
import { fetchProducts } from '../api/productsService';

export const useProducts = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  const addProduct = (newProduct: any) => {
    queryClient.setQueryData('products', (oldData: any) => {
      if (oldData) {
        return [...oldData, newProduct];
      } else {
        return [newProduct];
      }
    });
  };

  return {
    data,
    error,
    isLoading,
    addProduct,
  };
};
