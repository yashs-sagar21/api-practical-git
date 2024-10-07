import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseModule } from './phrase/phrase.module';
import { Phrase } from './phrase/entities/phrase.entity';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',  // replace with your MySQL username
      password: '',  // replace with your MySQL password
      database: 'phrases_db',     // you need to create this database
      entities: [Phrase],
      synchronize: true,         // set to false in production
    }),
    PhraseModule,
    HealthModule,
  ],
})
export class AppModule {}
