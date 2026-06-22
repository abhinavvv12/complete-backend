# 📝 Notes API

A simple REST API built with Node.js and Express.js that allows users to create, read, update, and delete notes.

## 🚀 Features

- Create a new note
- Fetch all notes
- Update an existing note
- Delete a note
- JSON request handling using Express middleware
- RESTful API architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript

---

## 📂 Project Structure

```
Notes-API/
│
├── src/
│   └── app.js
│
├── node_modules/
├── package.json
├── package-lock.json
└── server.js
```

---

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/notes-api.git
```

2. Navigate to project folder

```bash
cd notes-api
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node server.js
```

---

## 🔥 API Endpoints

### Create Note

**POST** `/notes`

Request Body:

```json
{
  "title": "Learn Express",
  "description": "Complete CRUD APIs"
}
```

Response:

```json
{
  "message": "note created successfully"
}
```

---

### Get All Notes

**GET** `/notes`

Response:

```json
{
  "message": "notes fetched successfully",
  "notes": [...]
}
```

---

### Update Note

**PATCH** `/notes/:index`

Request Body:

```json
{
  "title": "Updated Title",
  "description": "Updated Description"
}
```

Response:

```json
{
  "message": "note updated successfully"
}
```

---

### Delete Note

**DELETE** `/notes/:index`

Response:

```json
{
  "message": "note deleted successfully",
  "notes": [...]
}
```

---

## 📚 Concepts Learned

- Express Server Setup
- Middleware (`express.json()`)
- Request & Response Objects
- REST APIs
- Route Parameters
- CRUD Operations
- HTTP Methods (GET, POST, PATCH, DELETE)
- JSON Data Handling

---

## ⚠️ Limitations

- Notes are stored in memory.
- Data will be lost whenever the server restarts.
- No database integration yet.

---

## 🎯 Future Improvements

- MongoDB Integration
- User Authentication
- Input Validation
- Error Handling
- Note Search Functionality
- Persistent Storage

---

## 👨‍💻 Author

**Abhinav Raparthi**

- GitHub: https://github.com/abhinavvv12
- Portfolio: https://abhinavvv12.github.io/Portfolio/
