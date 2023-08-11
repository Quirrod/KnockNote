import { Note } from "./note.entity";
import { Tag } from "./tag.entity";
declare const entities: (typeof Note | typeof Tag)[];
export { Note };
export { Tag };
export default entities;
