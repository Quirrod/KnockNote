import { ITag } from './../models/tag.model';
import { AxiosResponse } from 'axios';
import { INote } from "../models/note.model";
import { serviceInstance } from "./instance";

export const noteService = {
    async getNotes(limit: number = 6, page: number = 1, archived: boolean = false, search = ""): Promise<AxiosResponse<[INote[], number]>> {
        const query = {
            page: page,
            limit: limit,
            archived: archived,
            search: search
        }
        const response = await serviceInstance.get('/notes', { params: query });
        return response;
    },

    async getNote(id: number): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.get(`/notes/${id}`);
        return response;
    },

    async createNote({ note, tags }: {
        note: INote,
        tags: ITag[]
    }): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.post('/notes', { note, tags });
        return response;
    },

    async updateNote(id: number, {
        note,
        updatedTags,
        originalTags
    }: {
        note: INote,
        updatedTags?: ITag[]
        originalTags: ITag[]
    }): Promise<AxiosResponse<INote>> {
        const { tags, ...restNote } = note;
        const response = await serviceInstance.put(`/notes/${id}`, {
            note: restNote,
            tags: updatedTags || [],
            originalTags: originalTags || []
        });
        return response;
    },

    async deleteNote(id: number): Promise<AxiosResponse<INote>> {
        const response = await serviceInstance.delete(`/notes/${id}`);
        return response;
    }
};     