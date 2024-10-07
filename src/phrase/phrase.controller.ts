import { Controller, Get, Param, Query } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { Phrase } from './entities/phrase.entity';

@Controller('phrase')
export class PhraseController {
    constructor(private readonly phraseService: PhraseService) { }

    @Get('search')
    async search(
        @Query('query') query: string,
        @Query('status') status?: string,
        @Query('sort') sort?: string,
    ): Promise<Phrase[]> {
        console.log('Search method called');
        console.log('Searching for phrases with:', { query, status, sort });
        return this.phraseService.search(query, status, sort);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Phrase> {
        return this.phraseService.findOne(+id);
    }

    @Get(':id/:language')
    findTranslation(@Param('id') id: string, @Param('language') language: string): Promise<string | null> {
        return this.phraseService.findTranslation(+id, language);
    }

}
