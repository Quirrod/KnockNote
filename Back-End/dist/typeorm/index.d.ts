import { Note } from "./note.entity";
import { Tag } from "./tag.entity";
declare const entities: (typeof Tag | typeof Note)[];
export { Note };
export { Tag };
export default entities;
