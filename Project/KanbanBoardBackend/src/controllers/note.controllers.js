import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Project } from "../models/project.models.js";
import { ProjectNote } from "../models/note.models.js";
import mongoose from "mongoose";
const getNotes = async (req, res) => {
  // get all notes
  const { projectId } = req.params;

  if (!projectId) {
    throw new ApiError(400, "Project id is required");
  }

  const project = Project.findById(projectId);

  if (!project) {
    throw new ApiError(400, "Project is not found");
  }
  const notes = await ProjectNote.find({
    project: new mongoose.Types.ObjectId(projectId),
  }).populate("createdBy", "username fullName avatar");

  return res
    .status(200)
    .json(new ApiResponse(200, notes, "notes fetched successfully"));
};

const getNoteById = async (req, res) => {
  // get note by id
  const { noteId } = req.params;
  const note = await ProjectNote.findById(noteId).populate(
    "createdBy",
    "username fullName avatar",
  );

  if (!note) {
    throw new ApiError(404, "Note not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, note, "note fetched successfully"));
};

const createNote = async (req, res) => {
  // create note
  const { projectId } = req.params;
  const { content } = req.body;

  const project = await Project.findById(projectId);
  if (!project) {
    throw new ApiError(400, "Project is not found");
  }

  const note = ProjectNote.create({
    project: new mongoose.Types.ObjectId(projectId),
    content,
    createdBy: new mongoose.Types.ObjectId(req.user._id),
  });

  const populatedNote = await ProjectNote.findById(note._id).populate(
    "createdBy",
    "username fullName avatar",
  );

  return res
    .status(201)
    .json(new ApiResponse(201, populatedNote, "Note created successfully"));
};

const updateNote = async (req, res) => {
  // update note
  const { noteId } = req.params;
  const { content } = req.body;

  // Find the note first to check if it exists
  const existingNote = await ProjectNote.findById(noteId);
  if (!existingNote) {
    throw new ApiError(404, "Note not found");
  }

  // Update the note and populate the createdBy field
  const note = await ProjectNote.findByIdAndUpdate(
    noteId,
    { content },
    { new: true },
  ).populate("createdBy", "username fullName avatar");

  return res
    .status(200)
    .json(new ApiResponse(200, note, "Note updated successfully"));
};

const deleteNote = async (req, res) => {
  // delete note
  const { noteId } = req.params;

  const note = await ProjectNote.findByIdAndDelete(noteId);

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, note, "Note deleted successfully"));
};

export { createNote, deleteNote, getNoteById, getNotes, updateNote };
