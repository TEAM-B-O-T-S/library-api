import { LibraryModel } from "../model/library.js";
import { addbookValidator } from "../validators/library.js";

// export const addBook = async (req, res) => {
//   const addABook = await LibraryModel.find({});
//   res.status(200).json({message: 'Book created successfully' });
// };
export const addBook = async (req, res, next) => {
  // try {
  //   const newBook = new LibraryModel(req.body); // create a new book instance with the data sent in the request body
  //   await newBook.save(); // save the new book to the database
  //   res.status(201).json({ message: 'Book created successfully', book: newBook });
  // } catch (error) {
  //   res.status(400).json({ message: 'Error adding book', error: error.message });
  // }
  try {
    const { error, value } = addbookValidator.validate(
      {
        ...req.body,
        image: req.file?.filename,
      },
      { abortEarly: false }
    );
    if (error) {
      return res.status(422).json(error);
    }
    const result = await LibraryModel.create(value);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getBooks = async (req, res) => {
  const allBooks = await LibraryModel.find({});
  res.status(200).json({ books: allBooks });
};

export const getBook = async (req, res) => {
  const oneBook = await LibraryModel.findById(req.params.id);
  res.status(200).json({ book: oneBook });
};

export const updateEntireBook = async (req, res, next) => {
  try {
    const result = await LibraryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

export const updatePartBook = async (req, res, next) => {
  try {
    const result = await LibraryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};
export const deleteBook = async (req, res) => {
  const deleteJob = await LibraryModel.findByIdAndDelete(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.send("deleted book successfully");
};
