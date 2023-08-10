import { AxiosResponse } from 'axios';
import { INote } from "../models/note.model";
import { serviceInstance } from "./instance";

export const noteService = {
    async getNotes(): Promise<AxiosResponse<INote[]>> {
        const response = await serviceInstance.get('/notes');
        return response.data;
    },

    async getNote(id: string): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.get(`/notes/${id}`);
        return response.data;
    },

    async createNote(note: INote): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.post('/notes', note);
        return response.data;
    },

    async updateNote(note: INote): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.put(`/notes/${note.id}`, note);
        return response.data;
    },

    async deleteNote(id: string): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.delete(`/notes/${id}`);
        return response.data;
    }
};     