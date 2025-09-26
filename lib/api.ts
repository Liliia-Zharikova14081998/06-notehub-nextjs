import axios from "axios";
import type { Note, CreateNoteData } from "../types/note";
import type { PaginatedNotes } from "../types/pagination";


const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
const API_URL = "https://notehub-public.goit.study/api/notes";
const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
});

export async function fetchNotes(page: number = 1, search: string = "", perPage: number = 12): Promise<PaginatedNotes> {
    const response = await api.get<PaginatedNotes>("/", {
        params: { page, search, perPage },
    });
    return response.data;
}

export async function createNote(data: CreateNoteData): Promise<Note> {
    const response = await api.post<Note>("", data);
    return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
    const response = await api.delete<Note>(`/${id}`);
    return response.data;
}

export async function fetchNoteById(id: string): Promise<Note>{
  const response = await api.get<Note>(`/${id}`);
  return response.data;
};