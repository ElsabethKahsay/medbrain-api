import { Controller, Post } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEntriesDto } from './dto/create-entries.dto';

@Controller('entries')
export class EntriesController {
    constructor(private readonly entriesService: EntriesService) { }

    @Post()
    async createDefaultEntries(userId: string, createEntryDto: CreateEntriesDto) {
        await this.entriesService.createDefaultEntries(userId, createEntryDto);

    }

}
