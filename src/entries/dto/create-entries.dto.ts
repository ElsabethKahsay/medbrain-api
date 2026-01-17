import { IsNotEmpty } from "class-validator";
import { EntryStatus } from "../../common/types/entry-status.enum";
import { EntryType } from "../../common/types/entry-type.enum";

export class CreateEntriesDto {
    @IsNotEmpty() title: string;
    @IsNotEmpty() description: string;
    @IsNotEmpty() type: EntryType;
    @IsNotEmpty() status: EntryStatus;
    @IsNotEmpty() tag: Array<string>;
    @IsNotEmpty() source: string;
    @IsNotEmpty() sourceLink: string;
    @IsNotEmpty() visibility: string;
    @IsNotEmpty() userId: string;
}