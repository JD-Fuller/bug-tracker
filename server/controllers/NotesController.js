import express from "express";
import noteService from "../services/NoteService";
import bugService from "../services/BugService";

export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("/:id", this.getAll)
      // .get("/bugs/:bugId/notes/:bug", this.getAll)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await noteService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await noteService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  // async getNoteByBugId(req, res, next) {
  //   try {
  //     let data = await noteService.getNoteByBugId(req.params.id);
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // Made a change here to get from bugService and .getById versus the original, noteservice and getbynoteid
  // async getNotesbyBugId(req, res, next) {
  //   try {
  //     let data = await bugService.getById(req.params.id);
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  async create(req, res, next) {
    try {
      let data = await noteService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await noteService.edit(req.params.id, req.body);
      if (!data) {
        console.error("Not able to edit");
      } else {
        return res.data.send(data);
      }
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await noteService.delete(req.params.id);
      return res.send("Successfully Deleted");
    } catch (error) {
      next(error);
    }
  }
}
