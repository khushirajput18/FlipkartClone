// default.js

import { products } from './constant/data.js'; // Assume you have a products data file
import Product from './model/product-schema.js';

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log(" Default product data added to the database.");
  } catch (err) {
    console.log(" Error while inserting default data", err.message);
  }
};

export default DefaultData;
