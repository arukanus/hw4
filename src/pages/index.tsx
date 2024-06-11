
import React from 'react';
import ProductsList from '../components/ProductsList';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <ProductsList />
    </Layout>
  );
};

export default HomePage;

