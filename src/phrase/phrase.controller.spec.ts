import { Test, TestingModule } from '@nestjs/testing';
import { PhraseController } from './phrase.controller';
import { PhraseService } from './phrase.service';
import { Phrase } from './entities/phrase.entity';

describe('PhraseController', () => {
  let controller: PhraseController;
  let service: PhraseService;

  const mockPhraseService = {
    search: jest.fn(),
    findOne: jest.fn(),
    findTranslation: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhraseController],
      providers: [
        {
          provide: PhraseService,
          useValue: mockPhraseService,
        },
      ],
    }).compile();

    controller = module.get<PhraseController>(PhraseController);
    service = module.get<PhraseService>(PhraseService);
  });

  it('should return filtered phrases from search', async () => {
    const phrases = [{ id: 1, phrase: 'Hi there', status: 'active' }];
    mockPhraseService.search.mockResolvedValue(phrases);

    const result = await controller.search('Hi');
    expect(result).toEqual(phrases);
    expect(mockPhraseService.search).toHaveBeenCalledWith('Hi', undefined, undefined);
  });

  // Add more tests for findOne and findTranslation methods
});
