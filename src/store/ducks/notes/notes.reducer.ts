import { Action, AnyAction } from "redux";
import { NotesActionsTypes, NoteState } from "./notes.types";

const initialState: NoteState = {
  notes: [],
  newNote: null,
  isLoadingGetNotes: false,
  isSuccessPostNote: undefined,
  isLoadingDeleteNote: true,
  deleteNoteId: undefined,
};

export default function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case NotesActionsTypes.GET_NOTES_REQUEST:
      return { ...state, isLoadingGetNotes: true };

    case NotesActionsTypes.GET_NOTES_SUCCESS:
      return { ...state, isLoadingGetNotes: false, notes: action.payload };

    case NotesActionsTypes.DELETE_NOTE_REQUEST:
      return {
        ...state,
        isLoadingDeleteNote: true,
        deleteNoteId: action.payload,
      };

    case NotesActionsTypes.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        isLoadingDeleteNote: false,
        notes: state.notes.filter((note) => note.id !== action.payload),
        deleteNoteId: undefined,
      };

    default:
      return state;
  }
}
