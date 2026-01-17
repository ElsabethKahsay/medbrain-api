import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import {CreateEntriesDto} from './dto/create-entries.dto';
@Module({
  controllers: [EntriesController],
  providers: [EntriesService]
})
export class EntriesModule {

}
