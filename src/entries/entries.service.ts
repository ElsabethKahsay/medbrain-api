import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EntriesService {
    createDefaultEntries() {
      throw new Error('Method not implemented.');
    }
    constructor(private prisma: PrismaService) { }
}
