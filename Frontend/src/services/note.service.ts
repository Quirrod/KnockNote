import { AxiosResponse } from 'axios';
import { INote } from "../models/note.model";
import { serviceInstance } from "./instance";

export const noteService = {
    async getNotes(limit: number = 6, page: number = 1, archived: boolean = false): Promise<AxiosResponse<[INote[], number]>> {
        const query = {
            page: page,
            limit: limit,
            archived: archived
        }
        const response = await serviceInstance.get('/notes', { params: query });
        return response;
    },

    async getNote(id: string): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.get(`/notes/${id}`);
        return response;
    },

    async createNote(note: INote): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.post('/notes', note);
        return response;
    },

    async updateNote(note: INote): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.put(`/notes/${note.id}`, note);
        return response;
    },

    async deleteNote(id: string): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.delete(`/notes/${id}`);
        return response;
    }
};     