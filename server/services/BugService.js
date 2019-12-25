import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async edit(id, update) {
    let check = await _repository.findById(id);
    if (check.get("closed") !== true) {
      let data = await _repository.findOneAndUpdate({ _id: id }, update, {
        new: true
      });
      if (!data) {
        throw new ApiError("Invalid ID", 400);
      }
      return data;
    } else {
      throw new ApiError("Unable to close");
    }
  }
  async delete(id) {
    let data = await _repository.findOneAndUpdate(
      { _id: id },
      { closed: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const bugService = new BugService();
export default bugService;
