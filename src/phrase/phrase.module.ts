import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseService } from './phrase.service';
import { PhraseController } from './phrase.controller';
import { Phrase } from './entities/phrase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phrase])], 
  
  controllers: [PhraseController],
  providers: [PhraseService],
})
export class PhraseModule {}
