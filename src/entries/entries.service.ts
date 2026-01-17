import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEntriesDto } from './dto/create-entries.dto';
import { UpdateEntriesDto } from './dto/update-entries.dto';
import { Visibility } from 'src/common/types/visibility.enum';

//controller
@Injectable()
export class EntriesService {
  constructor(private prisma: PrismaService) { }
  createDefaultEntries(userId: string, createEntryDto: CreateEntriesDto) {
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
        userId: userId,
      },
    });
    return entry;
  }
  getEntries() {
    const entries = this.prisma.entry.findMany();
    return entries;
  }
  getEntriesByUserId(userId: string) {
    const entries = this.prisma.entry.findMany({
      where: {
        userId: userId,
      },
    });
    return entries;
  }
 getEntriesByTag(tag: string) {
    const entries = this.prisma.entry.findMany({
      where: {
        tags: {
          some: tag,
          Visibility: Visibility.Public,
        },
      },
    });
    return entries;
  }
  getEntriesByVisibility(userId: string, visibility: Visibility) {
    const entries = this.prisma.entry.findMany({
      where: {
        userId: userId,
        visibility: visibility,
      },
    });
    return entries;
  }
  getAllEntriesByVisibility(visibility: Visibility.Public) {
    const entries = this.prisma.entry.findMany({
      where: {
        visibility: visibility,
      },
    });
    return entries;
  }
  
  
  getEntryById(userId: string, entryId: string) {
    const entry = this.prisma.entry.findUnique({
      where: {
        id: entryId,
        userId: userId,
      },
    });
    return entry;
  }
  updateEntry(userId: string, entryId: string, updateEntryDto: UpdateEntriesDto) {
    const entry = this.prisma.entry.update({
      where: {
        id: entryId,
        userId: userId,
      },
      data: {
        type: updateEntryDto.type,
        status: updateEntryDto.status,
        tags: updateEntryDto.tag,
        source: updateEntryDto.source,
        sourceLink: updateEntryDto.sourceLink,
        visibility: updateEntryDto.visibility,
      },
    });
    return entry;
  }
  deleteEntry(entryId: string, userId: string) {
    const entry = this.prisma.entry.delete({
      where: {
        id: entryId,
        userId: userId,
      },
    });
    return entry;
  }
}
