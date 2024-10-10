import { Router } from 'express'
import { listCategories } from './app/useCases/categories/listCategories'
import { createCategory } from './app/useCases/categories/createCategory'
import { listProducts } from './app/useCases/products/listProducts'
import { createProducts } from './app/useCases/products/createProduct'
import multer from 'multer'
import path from 'node:path'
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory'

export const router = Router()

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', 'uploads'))
        },

        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`)
        },
    }),
})

// Listar categorias
router.get('/categories', listCategories)

// Criar categorias
router.post('/categories', createCategory)

// Listar produtos
router.get('/products', listProducts)

// Criar produtos
router.post('/products', upload.single('image'), createProducts)

// Get product by category
router.get('/categories/:categoryId/products', listProductsByCategory)

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
