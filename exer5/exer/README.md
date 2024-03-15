# CMSC 100 UV3L Exercise 5

### Code Description

This repository contains a simple Book Management System implemented in Node.js with Express for server-side operations and Needle for making HTTP requests. The system allows users to add books with details such as book name, ISBN, author, and year published, and retrieve books by ISBN, author, or both.

### Server Setup:
- The server is implemented in `server.js`.
- It uses Express for handling HTTP requests.
- Endpoints:
  - `POST /add-book`: Adds a book to the system. Requires book details (bookName, isbn, author, yearPublished) in the request body.
  - `GET /find-by-isbn-author`: Finds books by ISBN and author. Requires query parameters `isbn` and `author`.
  - `GET /find-by-author`: Finds books by author. Requires query parameter `author`.
- Data is stored in a text file named `books.txt`.

### HTTP Requests Setup:
- HTTP requests are made using Needle library.
- Requests are implemented in `request.js`.
- Sample requests to add books and retrieve books by author or ISBN are provided.

### Sample Usage:
1. Start the server by running `node server.js`.
2. Execute `node request.js` to add books and retrieve book information.

### Note:
- Ensure Node.js is installed on your system to run the server and make HTTP requests.

### Dependecies
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Needle**: A lightweight HTTP client for Node.js.

