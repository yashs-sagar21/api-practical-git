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
exports.PhraseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const phrase_entity_1 = require("./entities/phrase.entity");
let PhraseService = class PhraseService {
    constructor(phrasesRepository) {
        this.phrasesRepository = phrasesRepository;
    }
    async findOne(id) {
        let data = await this.phrasesRepository.findOne({ where: { id }, select: ['id', 'phrase', 'status', 'createdAt', 'updatedAt'] });
        return data;
    }
    async findTranslation(id, language) {
        return this.phrasesRepository.findOne({ where: { id } }).then(phrase => phrase?.translations[language] || null);
    }
    async search(query, status, sort) {
        const queryBuilder = this.phrasesRepository.createQueryBuilder('phrase');
        queryBuilder.where('phrase.phrase LIKE :query', { query: `%${query}%` });
        if (status) {
            queryBuilder.andWhere('phrase.status = :status', { status });
        }
        if (sort) {
            const [sortField, sortOrder] = sort.split(':');
            const validSortFields = ['id', 'phrase', 'status', 'createdAt', 'updatedAt'];
            const validSortOrders = ['ASC', 'DESC'];
            if (validSortFields.includes(sortField) && validSortOrders.includes(sortOrder.toUpperCase())) {
                queryBuilder.orderBy(`phrase.${sortField}`, sortOrder.toUpperCase());
            }
            else {
                console.error('Invalid sort parameters:', sort);
            }
        }
        return await queryBuilder.getMany();
    }
};
exports.PhraseService = PhraseService;
exports.PhraseService = PhraseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(phrase_entity_1.Phrase)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhraseService);
//# sourceMappingURL=phrase.service.js.map