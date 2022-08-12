export enum NotesActionsTypes {
  GET_NOTES_REQUEST = "@fiapNotes/notes/getNotesRequest",
  GET_NOTES_SUCCESS = "@fiapNotes/notes/getNotesSuccess",
  POST_NOTE_REQUEST = "@fiapNotes/notes/postNoteRequest",
  POST_NOTE_SUCCESS = "@fiapNotes/notes/postNoteSuccess",
  POST_NOTE_FAILURE = "@fiapNotes/notes/postNoteFailure",
  DELETE_NOTE_REQUEST = "@fiapNotes/notes/deleteNoteRequest",
  DELETE_NOTE_SUCCESS = "@fiapNotes/notes/deleteNoteSuccess",
  DELETE_NOTE_FAILURE = "@fiapNotes/notes/deleteNoteFailure",
  ADD_NOTE = "@fiapNotes/notes/addNote",
}

export interface ActionType {
  type: NotesActionsTypes;
}

export interface PostNoteRequest {
  text: string;
  urgent: boolean;
}

export interface PayloadActionType extends ActionType {
  payload: Note | PostNoteRequest | number;
}

export interface PayloadActionDeleteType extends ActionType {
  payload: number;
}

export interface Note {
  id: number;
  text: string;
  date: Date;
  urgent?: boolean;
}

export interface NoteState {
  readonly notes: Note[];
  readonly newNote: Note | null;
  readonly isLoadingGetNotes: boolean;
  readonly isSuccessPostNote?: boolean;
  readonly isLoadingDeleteNote: boolean;
  readonly deleteNoteId?: number;
}
