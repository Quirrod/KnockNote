"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNoteDto = exports.UpdateNoteDto = exports.CreateNoteDto = void 0;
const class_validator_1 = require("class-validator");
class CreateNoteDto {
}
exports.CreateNoteDto = CreateNoteDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "description", void 0);
class UpdateNoteDto {
}
exports.UpdateNoteDto = UpdateNoteDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UpdateNoteDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], UpdateNoteDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateNoteDto.prototype, "isArchived", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateNoteDto.prototype, "updatedAt", void 0);
class GetNoteDto {
}
exports.GetNoteDto = GetNoteDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], GetNoteDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetNoteDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetNoteDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], GetNoteDto.prototype, "isArchived", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], GetNoteDto.prototype, "isDeleted", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], GetNoteDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], GetNoteDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], GetNoteDto.prototype, "deletedAt", void 0);
//# sourceMappingURL=note.dto.js.map