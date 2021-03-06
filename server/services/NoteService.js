import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll(id) {
    return await _repository.find({ _id: id });
  }
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }

  // async getNoteByBugId(bugId) {
  //   return await _repository.findById({ bugId: bugId });
  // }
  async getNotesByBugId(bug) {
    return await _repository.find({ bug: bug });
    //changed to find instead of findbyid
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const noteService = new NoteService();
export default noteService;
