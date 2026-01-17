import { Injectable } from '@nestjs/common';
import { EntriesService } from './entries/entries.service';

@Injectable()
export class AppService {
    constructor(private readonly pr: EntriesService) {}
    getHello(): string {
        return 'Hello World!';
    }
}
