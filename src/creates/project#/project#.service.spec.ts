import { Test, TestingModule } from '@nestjs/testing';
import { Project#Service } from './project#.service';

describe('Project#Service', () => {
  let service: Project#Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Project#Service],
    }).compile();

    service = module.get<Project#Service>(Project#Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
