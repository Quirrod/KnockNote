import { AxiosResponse } from 'axios';
import { INote } from "../models/note.model";
import { serviceInstance } from "./instance";

export const noteService = {
    async getNotes(): Promise<AxiosResponse<[INote[], number]>> {
        const query = {
            limit: 6,
            page: 1,
            archived: false
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