import { Router } from "express";
import {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/note.controllers.js";
import { AvailableUserRoles, UserRolesEnum } from "../utils/constant.js";
import { validateProjectPermission } from "../middlewares/auth.middleware.js";
const router = Router();

router
  .route("/:projectId")
  .get(validateProjectPermission(AvailableUserRoles), getNotes)
  .post(validateProjectPermission([UserRolesEnum.ADMIN]), createNote);

router
  .route("/:projectId/n/:noteId")
  .get(validateProjectPermission(AvailableUserRoles), getNoteById)
  .put(validateProjectPermission([UserRolesEnum.ADMIN]), updateNote)
  .delete(validateProjectPermission([UserRolesEnum.ADMIN]), deleteNote);

export default router;
