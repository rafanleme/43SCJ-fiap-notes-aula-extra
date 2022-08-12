import {
  ActionType,
  Note,
  NotesActionsTypes,
  PayloadActionType,
  PostNoteRequest,
} from "./notes.types";
import { action } from "typesafe-actions";

export const getNotesRequest = (): ActionType =>
  action(NotesActionsTypes.GET_NOTES_REQUEST);

export const getNotesSuccess = (response: Note[]): ActionType =>
  action(NotesActionsTypes.GET_NOTES_SUCCESS, response);
  
export const deleteNoteRequest = (noteId: number): ActionType =>
  action(NotesActionsTypes.DELETE_NOTE_REQUEST, noteId);

export const deleteNoteSuccess = (noteId: number): ActionType =>
  action(NotesActionsTypes.DELETE_NOTE_SUCCESS, noteId);

