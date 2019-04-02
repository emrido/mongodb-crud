# My App
### REST API built with Express and MongoDB.

## List of books routes:

| Route | HTTP | Header(s) | Body | Description |
|-------|------|-----------|------|-------------|
|`/books`| GET | `none` | `none` | Get all the books<br><br>*Succes (status code 200):*<br>`[ { <object book> }, ...]`<br>*Error (status code 500):*<br>`{ msg: <error message> }`  |
|`/books/:id`| GET | `none` | `none` | Get a single book<br><br>*Succes (status code 200):*<br>`{ <object book> }`<br>*Not Found (status code 404):*<br>`{ msg: 'Book not found' }`<br>*Error (status code 500):*<br>`{ msg: <error message> }` |
|`/books`| POST | `none` | `isbn:String`(**required**),<br> `author:String`(**required**), <br>`title:String`(**required**),<br>`category:String`(**required**),<br>`stock:Number`(**required**) | Create a book <br><br>*Succes (status code 201):*<br>`{ <object book> }`<br>*Error (status code 500):*<br>`{ msg: <error message> }` |
|`/books/:id`| DELETE | `none` | `none` | Delete a book<br><br>*Succes (status code 200):*<br>`{ msg: 'Book deleted' }`<br>*Not Found (status code 404):*<br>`{ msg: 'Book not found' }`<br>*Error (status code 500):*<br>`{ msg: <error message> }` |
|`/books/:id`| PUT | `none` | `isbn:String`,<br>`author:String`,<br>`title:String`,<br>`category:String`,<br>`stock:Number`| Update a book with new info<br><br>*Succes (status code 200):*<br>`{ msg: 'Book info updated' }`<br>*Not Found (status code 404):*<br>`{ msg: 'Book not found' }`<br>*Error (status code 500):*<br>`{ msg: <error message> }` |

## Usage

Make sure you have Node.js, npm and mongodb driver (running in background) installed in your computer, and then run these command:
```
$ npm install
$ npm run dev
```

Access the API via http://localhost:3000/