const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'library';
const Book = require('../models/book');

class BookController {
    static list(req, res) {
        const client = new MongoClient(url, { useNewUrlParser: true })

        client
            .connect()
            .then(() => {
                const db = client.db(dbName)
                const collection = db.collection('books');

                return collection.find({}).toArray()
            })
            .then(books => {
                res.status(200).json(books);
                client.close();
            })
            .catch(err => {
                res.status(500).json({ msg: err.message });
                client.close();
            })
    }

    static read(req, res) {
        const client = new MongoClient(url, { useNewUrlParser: true });

        client
            .connect()
            .then(() => {
                const db = client.db(dbName)
                const collection = db.collection('books');

                return collection.findOne({ _id: new ObjectID(req.params.id) })
            })
            .then(book => {
                if (book) {
                    res.status(200).json(book);
                } else {
                    res.status(404).json({ msg: 'Book not found' });
                }
                client.close();
            })
            .catch(err => {
                res.status(500).json({ msg: err.message });
                client.close();
            })
    }

    static add(req, res) {
        const client = new MongoClient(url, { useNewUrlParser: true });

        client
            .connect()
            .then(() => {
                const db = client.db(dbName)
                const collection = db.collection('books');

                return collection.insertOne(new Book(req.body))
            })
            .then((result) => {
                res.status(201).json(result)
                client.close()
            })
            .catch(err => {
                res.status(500).json({ msg: err.message });
                client.close();
            })
    }

    static update(req, res) {
        const client = new MongoClient(url, { useNewUrlParser: true })

        client
            .connect()
            .then(() => {
                const db = client.db(dbName)
                const collection = db.collection('books');

                return collection.updateOne({ _id: new ObjectID(req.params.id) }, { $set: req.body })
            })
            .then(result => {
                if (result.ok === 1) {
                    res.status(200).json({ msg: 'Book info updated'})
                } else {
                    res.status(404).json({ msg: 'Book not found' })
                }
                client.close()
            })
            .catch(err => {
                res.status(500).json({ msg: err.message });
                client.close();
            })
    }

    static remove(req, res) {
        const client = new MongoClient(url, { useNewUrlParser: true })

        client
            .connect()
            .then(() => {
                const db = client.db(dbName)
                const collection = db.collection('books');

                return collection.deleteOne({ _id: new ObjectID(req.params.id) })
            })
            .then(result => {
                if (result.ok === 1) {
                    res.status(200).json({ msg: 'Book deleted'});
                } else {
                    res.status(404).josn({ msg: 'Book not found'});
                }
                client.close();
            })
            .catch(err => {
                res.status(500).json({ msg: err.message });
                client.close();
            })
    }
}

module.exports = BookController;