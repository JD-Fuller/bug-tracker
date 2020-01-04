import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";
import { callbackify } from "util";

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
  async edit(rawData) {
    let check = rawData.closed;
    if (check === true) {
      throw new ApiError("Bug is closed and cannot be edited at this time");
    } else {
      let data = await _repository.findOneAndUpdate(
        { closed: !true, _id: rawData.id },
        {
          description: rawData.description,
          title: rawData.title,
          reportedBy: rawData.reportedBy
        },
        {
          new: true
        }
      );

      if (!data) {
        throw new ApiError("Invalid ID", 400);
      }
      return data;
    }
  }
  async delete(id) {
    let data = await _repository.findByIdAndUpdate(
      { _id: id },
      { closed: true },
      {
        new: true
      }
    );
    if (!data) {
      throw new ApiError("Invalid ID or Bug is already closed", 400);
    }
    return data;
  }
}

const bugService = new BugService();
export default bugService;
