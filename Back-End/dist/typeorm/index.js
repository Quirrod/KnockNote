"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = exports.Note = void 0;
const note_entity_1 = require("./note.entity");
Object.defineProperty(exports, "Note", { enumerable: true, get: function () { return note_entity_1.Note; } });
const tag_entity_1 = require("./tag.entity");
Object.defineProperty(exports, "Tag", { enumerable: true, get: function () { return tag_entity_1.Tag; } });
const entities = [note_entity_1.Note, tag_entity_1.Tag];
exports.default = entities;
//# sourceMappingURL=index.js.map