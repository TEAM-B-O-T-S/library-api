import { Router } from "express";
// import { LibraryModel } from "../model/library.js";

import { addBook , getBook, getBooks, updateEntireBook, updatePartBook, deleteBook } from "../controller/library.js"



// Create products router
const libraryRouter = Router();

//Define routes
libraryRouter.post('/books', addBook);

libraryRouter.get('/books', getBooks);

libraryRouter.get('/books/:id', getBook);

libraryRouter.patch('/books/:id', updatePartBook);

libraryRouter.put('/books/:id', updateEntireBook);

libraryRouter.delete('/books/:id', deleteBook);

//Export router
export default libraryRouter;