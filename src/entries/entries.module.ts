import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';

@Module({
  controllers: [EntriesController],
  providers: [EntriesService]
})
export class EntriesModule {

  constructor(private readonly entriesService: EntriesService) { }  

  async onModuleInit() {
    await this.entriesService.createDefaultEntries();
  }
}
