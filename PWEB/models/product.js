class Product {
    constructor(id, name, category, price) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._price = price;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }

    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}

export default Product;