import expressAsyncHandler from "express-async-handler";
import Post from "../models/postModel.js";


const getAllPosts = expressAsyncHandler(async (req, res) => {
    console.log("all");
    try {
        const post = await Post.find().sort({ _id: -1 })
        res.status(200).json({ message: "Success", data: post })
    } catch (error) {
        res.status(401)
        throw new Error("Someting went wrong with the collection")
    }

})

const createPost = expressAsyncHandler(async (req, res) => {

    const { title, content } = req.body

    console.log(title, content);
    try {

        const post = await Post.create({ title, content })
        res.status(200).json({ message: "Success", data: post })
    } catch (error) {
        res.status(401)
        throw new Error("Someting went wrong with the collection")
    }

})


const getSinglePost = expressAsyncHandler(async (req, res) => {

    const { id } = req.params

    try {

        const post = await Post.findById(id)
        res.status(200).json({ message: "Success", data: post })
    } catch (error) {
        res.status(401)
        throw new Error("Someting went wrong with the collection")
    }

})

const deletePost = expressAsyncHandler(async (req, res) => {

    const { id } = req.params

    try {
        const post = await Post.findByIdAndDelete(id)
        res.status(200).json({ message: "Success" })
    } catch (error) {
        res.status(401)
        throw new Error("Someting went wrong with the collection")
    }

})

const updatePost = expressAsyncHandler(async (req, res) => {

    try {
        const post = await Post({})
        res.status(200).json({ message: "Success", data: post })
    } catch (error) {
        res.status(401)
        throw new Error("Someting went wrong with the collection")
    }

})

export { getAllPosts, deletePost, createPost, getSinglePost }