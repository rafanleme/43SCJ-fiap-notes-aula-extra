import * as Effects from "redux-saga/effects";
import { CallEffect, put, PutEffect } from "redux-saga/effects";
import { AnyAction } from "redux";
import { Note, PayloadActionDeleteType } from "./notes.types";
import { NotesService } from "../../../services/notes/note-service";
import {
  deleteNoteSuccess,
  getNotesRequest,
  getNotesSuccess,
} from "./notes.actions";
import { AxiosResponse } from "axios";
import { axiosErrorHandler } from "../../../services/utils";

const call: any = Effects.call;

export function* getNotes(): Generator<
  CallEffect | PutEffect<AnyAction>,
  void,
  AxiosResponse<Note[]>
> {
  try {
    const response = yield call(NotesService.getNotes);

    yield put(getNotesSuccess(response.data));
  } catch (error: any) {
    axiosErrorHandler(error);
    yield put(getNotesRequest());
  }
}

// !!! TODO Post

export function* deleteNote({
  payload,
}: PayloadActionDeleteType): Generator<
  CallEffect | PutEffect<AnyAction>,
  void,
  AxiosResponse<Note>
> {
  try {
    yield call(NotesService.deleteNote, payload);

    yield put(deleteNoteSuccess(payload));
  } catch (error: any) {
    axiosErrorHandler(error);
  }
}
