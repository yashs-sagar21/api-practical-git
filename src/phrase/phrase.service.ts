import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Phrase } from './entities/phrase.entity';

@Injectable()
export class PhraseService {
    constructor(
        @InjectRepository(Phrase)
        private phrasesRepository: Repository<Phrase>,
    ) { }

    async findOne(id: number): Promise<Phrase> {
        let data = await this.phrasesRepository.findOne({ where: { id }, select: ['id', 'phrase', 'status', 'createdAt', 'updatedAt'] });
        return data
    }


    async findTranslation(id: number, language: string): Promise<string | null> {
        return this.phrasesRepository.findOne({ where: { id } }).then(phrase => phrase?.translations[language] || null);
    }

    async search(query: string, status?: string, sort?: string): Promise<Phrase[]> {
        
        const queryBuilder = this.phrasesRepository.createQueryBuilder('phrase');
    
        // Filter by phrase
        queryBuilder.where('phrase.phrase LIKE :query', { query: `%${query}%` });
    
        // Optional status filter
        if (status) {
            queryBuilder.andWhere('phrase.status = :status', { status });
        }
    
        // Optional sorting
        if (sort) {
            const [sortField, sortOrder] = sort.split(':');
            const validSortFields = ['id', 'phrase', 'status', 'createdAt', 'updatedAt'];
            const validSortOrders = ['ASC', 'DESC'];
    
            // Validate sorting
            if (validSortFields.includes(sortField) && validSortOrders.includes(sortOrder.toUpperCase())) {
                queryBuilder.orderBy(`phrase.${sortField}`, sortOrder.toUpperCase() as 'ASC' | 'DESC');
            } else {
                console.error('Invalid sort parameters:', sort);
            }
        }

        return await queryBuilder.getMany();
    }
    
    
    
}
