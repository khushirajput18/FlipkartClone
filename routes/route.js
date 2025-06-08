import express from 'express';
import { userLogin, userSignup } from '../controller/usercontroller.js';  // Ensure the controller functions are correctly imported

import { getProductById, getProducts } from '../controller/product-controller.js';

const router = express.Router();

// Define routes
router.post("/login", userLogin);  // Make sure this is correctly defined
router.post("/signup", userSignup);

router.get('/products',getProducts);
router.get("/product/:id",getProductById)

export default router;
