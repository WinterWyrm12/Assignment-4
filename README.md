# Assignment #4: Books API
This repository contains your starter code for the Books API assignment.

## Getting Started
1. Clone this repository to your local machine
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Assignment Overview
You will build a complete RESTful API for a bookstore inventory management system:
- **server.js** - Express.js server with full CRUD operations for book management
- **tests/api.test.js** - Comprehensive Jest tests for all API endpoints

## Pre-installed Dependencies
This repository comes with the following packages already configured:
- `express` - Web framework for Node.js
- `jest` - Testing framework
- `supertest` - HTTP assertion library for testing APIs

## Sample Data
Your repository includes a starter book inventory in `server.js`:
```javascript
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
  { id: 3, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian Fiction" }
];
```

## API Endpoints to Implement
- `GET /api/books` - Retrieve all books
- `GET /api/books/:id` - Retrieve a specific book by ID
- `POST /api/books` - Add a new book
- `PUT /api/books/:id` - Update an existing book
- `DELETE /api/books/:id` - Remove a book

## Running the Server
Start your development server:
```bash
npm start
```
Your API will be available at `http://localhost:3000`

## Testing
Run your automated tests:
```bash
npm test
```

## File Structure
```
server.js
tests/
└── api.test.js
package.json
README.md
```

## Key Learning Objectives
- Build RESTful APIs using Express.js with proper HTTP methods
- Implement full CRUD operations (Create, Read, Update, Delete)
- Handle HTTP status codes and error responses appropriately
- Test API endpoints using Jest and Supertest
- Understand the request-response model in backend applications
- Apply REST architectural principles to API design