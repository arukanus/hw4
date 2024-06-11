import { useQuery, useQueryClient } from 'react-query';
import { fetchProducts } from '../api/productsService';

export const useProducts = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  // Function to manually add a new product to the local state
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
