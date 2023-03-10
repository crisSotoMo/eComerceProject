const Category = require('../models/category');

module.exports = {
    async getAllCategories(req, res) {
        try {
            //Es necesario en el caso de 
            const categories = await Category.find().populate('product');
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getCategoryById(req, res) {
        try {
            const category = await Category.findById(req.params.id).populate('product');
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ message: err.message });
        }
    },

    async createCategory(req, res) {
        const category = new Category({
            type: req.body.type,
            required: req.body.required,
        });

        try {
            const newCategory = await category.save();
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(400).json({ message: err.message });
        }
    },
};