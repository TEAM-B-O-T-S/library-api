import { LibraryModel } from "../model/library.js";

export const addBook = async (req, res) => {
  const addABook = await LibraryModel.find({});
  res.status(200).json({ jobs: addABook });
};

export const getBooks = async (req, res) => {
  const allBooks = await LibraryModel.find({});
  res.status(200).json({ jobs: allBooks });
};

export const getBook = async (req, res) => {
  const oneJob = await JobModel.findById(req.params.id);
  res.status(200).json({ jobs: oneJob });
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
