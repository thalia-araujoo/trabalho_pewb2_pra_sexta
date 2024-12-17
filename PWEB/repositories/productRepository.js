import Product from '../models/product.js';

class ProductRepository {
    constructor() {
        this.products = [
            new Product(1, 'Laptop', 'Eletronics', 1200),
            new Product(2, 'Headphones', 'Eletronics', 200),
            new Product(3, 'Coffee Mug', 'Kitchen', 15),
            new Product(4, 'Notebook', 'Stationery', 5),
        ]
    }
    //metodos
    getAll() {
        return this.products;
    }

    getById(id) {
        return this.products.find(product => product.id === id);
    }

    add(product) {
        const id = this.products.length + 1;
        product.id = id;
        this.products.push(product);
        return product;
    }

    update(id, updatedData) {
        const product = this.getById(id);
        if (!product) return null;

        if (updatedData.name) product.name = updatedData.name;
        if (updatedData.category) product.category = updatedData.category;
        if (updatedData.price) product.price = updatedData.price;

        return product;
    }

    delete(id) {
        const index = this.products.findIndex(product => product.getId() === id);
        if (index === -1) return null;

        return this.products.splice(index, 1)[0];
    }
}

export default new ProductRepository();