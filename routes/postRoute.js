import express from "express"
import { createPost, deletePost, getAllPosts, getSinglePost } from "../controllers/postController.js"

const router = express.Router()

router.get('/', getAllPosts).post('/', createPost)

router.delete('/:id', deletePost)
router.get('/:id', getSinglePost)


export default router

