import { EntryStatus } from "../../common/types/entry-status.enum";
import { EntryType } from "../../common/types/entry-type.enum";

export class CreateEntriesDto {
    title: string;
    description: string;
    type: EntryType;
    status: EntryStatus;
    tag: Array<string>;
    source: string;
    sourceLink: string;
    visibility: string;
    userId: string;
}