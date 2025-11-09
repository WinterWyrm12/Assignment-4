// Books for bookstore API
let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        copiesAvailable: 5
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        copiesAvailable: 3
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        copiesAvailable: 7
    }
    // Add more books if you'd like!
];

/* Step 5: Create my express server */
// Imports Express and Creates an Application Instance
const express = require ("express");
const app = express();

// Sets up middleware to parse JSON requests with app.use(express.json())
app.use(express.json());

/* Create your REST API here with the following endpoints:
    'GET /api/books': 'Get all books',
    'GET /api/books/:id': 'Get a specific book',
    'POST /api/books': 'Add a new book',
    'PUT /api/books/:id': 'Update a book',
    'DELETE /api/books/:id': 'Delete a book'
*/

// all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// specific book
app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    // no book found
    if (!book) {
        return res.status(404).json({ error: "book not found" });
    }

    res.json(book);
});

// new book
app.post('/api/books', (req, res) => {
    const { id, title, author, genre, copiesAvailable } = req.body;

    const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    copiesAvailable
    };

    // add it to the books array
    books.push(newBook);

    res.status(201).json(newBook);
});

// update
app.put('/api/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const book = books.find(b => b.id === bookID);

    // no book found
    if (!book) {
        return res.status(404).json({ error: "book not found" });
    }

    const { id, title, author, genre, copiesAvailable } = req.body;

    if (id) book.id = id;
    if (title) book.title = title;
    if (author) book.author = author;
    if (genre) book.genre = genre;
    if (copiesAvailable) book.copiesAvailable = copiesAvailable

    res.json(book);
});

// delete book
app.delete('/api/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === bookID);

    if (index === -1) {
        return res.status(404).json({ error: "book not found" });
    }

    const deleted = books.splice(index, 1);

    res.json(deleted[0]);
});


// Starts the server on port 3000.
//app.listen(3000);

module.exports = app;
