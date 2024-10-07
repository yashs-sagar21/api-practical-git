import { Repository } from 'typeorm';
import { Phrase } from './entities/phrase.entity';
export declare class PhraseService {
    private phrasesRepository;
    constructor(phrasesRepository: Repository<Phrase>);
    findOne(id: number): Promise<Phrase>;
    findTranslation(id: number, language: string): Promise<string | null>;
    search(query: string, status?: string, sort?: string): Promise<Phrase[]>;
}
