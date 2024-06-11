import axiosInstance from './axiosInstance';

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/products');
  const apiProducts = response.data;

  // Retrieve locally stored products
  const localProducts = JSON.parse(localStorage.getItem('localProducts') || '[]');
  console.log('Fetched products:', [...apiProducts, ...localProducts]); // Debugging log

  return [...apiProducts, ...localProducts];
};

export const createProduct = async (productData: any) => {
  if (productData.images && productData.images.length > 0) {
    productData.image = productData.images[0]; // Use only the first image
    delete productData.images;
  }

  const response = await axiosInstance.post('/products', productData);
  const newProduct = response.data;
  console.log('Product created:', newProduct); // Debugging log

  // Store new product in local storage
  const localProducts = JSON.parse(localStorage.getItem('localProducts') || '[]');
  localProducts.push(newProduct);
  localStorage.setItem('localProducts', JSON.stringify(localProducts));

  return newProduct;
};
