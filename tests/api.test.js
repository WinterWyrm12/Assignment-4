const request = require("supertest");
const app = require("../server");

describe("book test", () => {

    // all books
    test("GET /api/books should return all books", async () => {
    const res = await request(app).get("/api/books");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    });

    // specific book
    test("GET /api/books/1 should return a specific book", async () => {
    const res = await request(app).get("/api/books/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    });

    // new book
    test("POST /api/books should create a new book", async () => {
        const newBook = {
        title: "Test Book",
        author: "Test Author",
        genre: "Test Genre",
        copiesAvailable: 2
    };

    const res = await request(app).post("/api/books").send(newBook);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Test Book");
    });

    // update books
    test("PUT /api/books/1 should update a book", async () => {
        const update = { title: "Updated Title" };
        const res = await request(app).put("/api/books/1").send(update);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("title", "Updated Title");
    });

    // delete
    test("DELETE /api/books/1 should remove a book", async () => {
        const res = await request(app).delete("/api/books/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    });

    // errors
    // no book for GET
    test("should return 404 if book not found", async () => {
        const res = await request(app).get("/api/books/999");
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("error", "book not found");
    });
    

    // no book for PUT
    test("should return 404 if book not found", async () => {
        const update = { title: "Nonexistent Book" };
        const res = await request(app).put("/api/books/999").send(update);
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("error", "book not found");
    });

    // no book for DELETE
    test("should return 404 if book not found", async () => {
        const res = await request(app).delete("/api/books/999");
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("error", "book not found");
    });

});