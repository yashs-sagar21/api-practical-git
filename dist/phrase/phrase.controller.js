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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhraseController = void 0;
const common_1 = require("@nestjs/common");
const phrase_service_1 = require("./phrase.service");
let PhraseController = class PhraseController {
    constructor(phraseService) {
        this.phraseService = phraseService;
    }
    async search(query, status, sort) {
        console.log('Search method called');
        console.log('Searching for phrases with:', { query, status, sort });
        return this.phraseService.search(query, status, sort);
    }
    findOne(id) {
        return this.phraseService.findOne(+id);
    }
    findTranslation(id, language) {
        return this.phraseService.findTranslation(+id, language);
    }
};
exports.PhraseController = PhraseController;
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], PhraseController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhraseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/:language'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PhraseController.prototype, "findTranslation", null);
exports.PhraseController = PhraseController = __decorate([
    (0, common_1.Controller)('phrase'),
    __metadata("design:paramtypes", [phrase_service_1.PhraseService])
], PhraseController);
//# sourceMappingURL=phrase.controller.js.map