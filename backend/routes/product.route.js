import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'; // getProducts burada import ediliyor

const router = express.Router();

// GET ürünler
router.get("/", getProducts);

// POST ürün ekle
router.post("/", createProduct);

// PUT ürün güncelle
router.put("/:id", updateProduct);

// DELETE ürün sil
router.delete("/:id", deleteProduct);

export default router;
