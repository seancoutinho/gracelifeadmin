import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, 'i')

    const ITEM_PER_PAGE = 5;
    try {
        connectToDB();
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch users!');
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, 'i')

    const ITEM_PER_PAGE = 2;
    try {
        connectToDB();
        const count = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, products };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products!');
    }
}

export const fetchUser = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        if (!user) throw new Error('User not found!');
        return user;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user!');
    }
}

export const fetchProduct = async (id) => {
    try {
        connectToDB();
        const product = await Product.findById(id);
        if (!product) throw new Error('Product not found!');
        return product;

    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch product!');
    }
}