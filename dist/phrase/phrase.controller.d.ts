import { PhraseService } from './phrase.service';
import { Phrase } from './entities/phrase.entity';
export declare class PhraseController {
    private readonly phraseService;
    constructor(phraseService: PhraseService);
    search(query: string, status?: string, sort?: string): Promise<Phrase[]>;
    findOne(id: string): Promise<Phrase>;
    findTranslation(id: string, language: string): Promise<string | null>;
}
