//Expresiones regulares:
const REGEX = {
    regexName: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos. (2,20)
    regexDescription: /^[a-zA-ZÀ-ÿ\s]{2,250}$/, // Letras y espacios, pueden llevar acentos. (2,250)
    regexPrice: /^\d{1,10}$/, // Solo números (1,10)
};

const validation = ({ name, description, price }) => {
    if (!name || !price) {
        res.status(404).json({ message: 'All fields are required' });
    } else {
        if (!REGEX.regexName.test(name)) {
            res.status(400).json({ message: 'Error. Invalid name' });
        } else if (description && !REGEX.regexDescription.test(description)) {
            res.status(400).json({ message: 'Error. Invalid description' });
        } else if (!REGEX.regexPrice.test(price)) {
            res.status(400).json({ message: 'Error. Invalid price' });
        }
    }
};

module.exports = validation;
