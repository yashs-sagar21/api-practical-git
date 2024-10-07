"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhraseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const phrase_service_1 = require("./phrase.service");
const phrase_controller_1 = require("./phrase.controller");
const phrase_entity_1 = require("./entities/phrase.entity");
let PhraseModule = class PhraseModule {
};
exports.PhraseModule = PhraseModule;
exports.PhraseModule = PhraseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([phrase_entity_1.Phrase])],
        controllers: [phrase_controller_1.PhraseController],
        providers: [phrase_service_1.PhraseService],
    })
], PhraseModule);
//# sourceMappingURL=phrase.module.js.map