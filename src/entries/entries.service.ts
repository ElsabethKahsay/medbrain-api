import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEntriesDto } from './dto/create-entries.dto';

@Injectable()
export class EntriesService {
    createDefaultEntries() {
      throw new Error('Method not implemented.');
    }
    constructor(private prisma: PrismaService) { }
    createEntry(createEntryDto: CreateEntriesDto  ) {
      const entry = this.prisma.entry.create({
        data: {
          title: createEntryDto.title,
          description: createEntryDto.description,
          type: createEntryDto.type,
          status: createEntryDto.status,
          tags: createEntryDto.tag,
          source: createEntryDto.source,
          sourceLink: createEntryDto.sourceLink,
          visibility: createEntryDto.visibility,
          userId: createEntryDto.userId,
        },
        if()
      });
      return entry;
    } 
    getEntries() {
      const entries = this.prisma.entry.findMany();
      return entries;
    }
    getEntryById() {
      const entry = this.prisma.entry.findUnique({
        where: {
          id: 'Default User ID',
        },
      });
      return entry;
    }
    updateEntry() {
      const entry = this.prisma.entry.update({
        where: {
          id: 'Default User ID',
        },
        data: {
          title: 'Default Entry',
          description: 'Default Entry Description',
          type: 'HEALTH',
          status: 'PENDING',
          tags: ['Default Tag'],
          source: 'Default Source',
          sourceLink: 'Default Source Link',
          visibility: 'PRIVATE',
          userId: 'Default User ID',
        },
      });
      return entry;
    }
    deleteEntry() {
        const entry = this.prisma.entry.delete({
        where: {
          id: 'Default User ID',
        },
      });
      return entry;
    } 
}
