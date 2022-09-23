const getConnection = require('./../db/db');

const getAllProducts = async (req, res) => {
    try {
        const conn = await getConnection();
        const result = await conn.query('SELECT * FROM productos p');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const getProductById = async (req, res) => {
    try {
        const conn = await getConnection();
        const result = await conn.query('SELECT * FROM productos p WHERE p.id = ?', req.params.id);

        if (result.length === 1) {
            res.status(200).json(result[0]);
        } else if (result.length === 0) {
            res.status(404).json({ message: "The product id doesn't exist" });
        } else {
            res.status(500).json({ message: 'Something went wrong' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const createProduct = async (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'Product was created' });
};

const updateProduct = async (req, res) => {
    res.status(202).json({ message: 'Product was updated' });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
};
