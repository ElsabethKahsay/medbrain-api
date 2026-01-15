import { EntryType } from "../../common/types/entry-type.enum";
import { EntryStatus } from "../../common/types/entry-status.enum";

export class UpdateEntriesDto {
    title: string;
    type: EntryType;
    status: EntryStatus;
    tag: Array<string>;
    source: string;
    sourceLink: string;
    visibility: string;
    userId: string;
}