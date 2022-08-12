import { all, takeLatest } from "redux-saga/effects";
import { deleteNote, getNotes } from "./notes/notes.sagas";
import { NotesActionsTypes } from "./notes/notes.types";

export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(NotesActionsTypes.GET_NOTES_REQUEST, getNotes),
    takeLatest(NotesActionsTypes.DELETE_NOTE_REQUEST, deleteNote),
  ]);
}
