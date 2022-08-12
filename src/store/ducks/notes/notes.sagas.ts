import * as Effects from "redux-saga/effects";
import { CallEffect, put, PutEffect } from "redux-saga/effects";
import { AnyAction } from "redux";
import { Note, NotesActionsTypes, PayloadActionDeleteType, PayloadActionType } from "./notes.types";
import { NotesService } from "../../../services/notes/note-service";
import {
  deleteNoteSuccess,
  getNotesRequest,
  getNotesSuccess,
  postNoteFailure,
  postNoteSuccess,
} from "./notes.actions";
import axios, { AxiosError, AxiosResponse } from "axios";
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

export function* postNote({
  payload,
}: PayloadActionType): Generator<
  CallEffect | PutEffect<AnyAction>,
  void,
  AxiosResponse<Note>
> {
  try {
    const response = yield call(NotesService.postNotes, payload);

    yield put(postNoteSuccess(response.data));
  } catch (error: any) {
    yield put(postNoteFailure());
    axiosErrorHandler(error);
  }
}

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
