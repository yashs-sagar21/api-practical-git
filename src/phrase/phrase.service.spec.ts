import { Test, TestingModule } from '@nestjs/testing';
import { PhraseService } from './phrase.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Phrase } from './entities/phrase.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';

describe('PhraseService', () => {
  let service: PhraseService;
  let repository: Repository<Phrase>;

  const mockPhraseRepository = {
    createQueryBuilder: jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      getMany: jest.fn(),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PhraseService,
        {
          provide: getRepositoryToken(Phrase),
          useValue: mockPhraseRepository,
        },
      ],
    }).compile();

    service = module.get<PhraseService>(PhraseService);
    repository = module.get<Repository<Phrase>>(getRepositoryToken(Phrase));
  });

  it('should return filtered phrases based on query', async () => {
    const phrases = [{ id: 1, phrase: 'Hi there', status: 'active' }];
    mockPhraseRepository.createQueryBuilder().getMany.mockResolvedValue(phrases);

    const result = await service.search('Hi');
    expect(result).toEqual(phrases);
    expect(mockPhraseRepository.createQueryBuilder).toHaveBeenCalledWith('phrase');
  });

  // Additional tests for filtering and sorting can be added here
});
