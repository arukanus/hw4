import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createProduct } from '../api/productsService';
import { uploadFile } from '../api/fileUploadService';
import { useProducts } from '../hooks/useProducts';

const ProductCreationPage: React.FC = () => {
  const { addProduct } = useProducts();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation(createProduct, {
    onSuccess: (newProduct) => {
      console.log('Product created successfully:', newProduct);

    
      addProduct(newProduct);
    },
    onError: (error: any) => {
      setError('Failed to create product. Please try again.');
      console.error('Error:', error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 
    let fileUrls: string[] = [];

    try {
      for (const file of files) {
        const url = await uploadFile(file);
        fileUrls.push(url);
      }
      console.log('File URLs:', fileUrls);
    } catch (error) {
      setError('Failed to upload files. Please try again.');
      return;
    }

    const productData = { title, description, price, image: fileUrls[0] }; 
    console.log('Creating product with data:', productData); 

    mutation.mutate(productData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Create Product</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          className="w-full border rounded p-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Images</label>
        <input
          type="file"
          className="w-full border rounded p-2"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Create Product</button>
    </form>
  );
};

export default ProductCreationPage;
