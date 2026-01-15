import { Field } from "../../common/types/field.enum";
import { EntryStatus } from "../../common/types/entry-status.enum";
import { Visibility } from "../../common/types/visibility.enum";

export class CreateProjectDto {
    title: string;
    description: string;
    introduction: string;
    type: Field;
    status: EntryStatus;
    tag: Array<string>;
    source: string;
    sourceLink: string;
    visibility: Visibility;
    userId: string;
    entriesCount: 0;
    rating: 0;
}
