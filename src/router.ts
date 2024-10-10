import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";

const router = Router();

// Listar categorias
router.get('/categories', listCategories)

// Criar categorias
router.post('/categories', (req, res) => {
    res.send('Hello World!')
})

// Listar produtos
router.get('/products', (req, res) => {
    res.send('Hello World!')
})

// Criar produtos
router.post('/products', (req, res) => {
    res.send('Hello World!')
})

// Get product by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('Hello World!')
})

// Listar pedidos
router.get('/orders', (req, res) => {
    res.send('Hello World!')
})

// Criar pedidos
router.post('/orders', (req, res) => {
    res.send('Hello World!')
})

// Atualizar status do pedido
router.patch('/orders/:orderId', (req, res) => {
    res.send('Hello World!')
})

// Deletar pedido
router.delete('/orders/:orderId', (req, res) => {
    res.send('Hello World!')
})
