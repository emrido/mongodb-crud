class Book {
    constructor(obj) {
        this.isbn = obj.isbn;
        this.title = obj.title;
        this.author = obj.author;
        this.category = obj.category;
        this.stock = Number(obj.stock);
    }
}

module.exports = Book;