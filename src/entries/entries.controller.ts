import { Controller, Post } from '@nestjs/common';
import { EntriesService } from './entries.service';

@Controller('entries')
export class EntriesController {
    constructor(private readonly entriesService: EntriesService) { 
        this.entriesService.createDefaultEntries();
    }
    
    @Post()
    async createDefaultEntries() {
        await this.entriesService.createDefaultEntries();

    }
   
}
