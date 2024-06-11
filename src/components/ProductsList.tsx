import React from 'react';
import { useProducts } from '../hooks/useProducts';

const ProductsList: React.FC = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  console.log('Rendering products:', data); // Debugging log

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data && data.map((product: any) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{product.title}</h3>
          {product.image && (
            <div className="mb-2">
              <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-2 rounded" />
            </div>
          )}
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-green-500 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

