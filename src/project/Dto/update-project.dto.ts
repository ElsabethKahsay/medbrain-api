import { EntryStatus } from "../../common/types/entry-status.enum";
import { Field } from "../../common/types/field.enum";
import { Visibility } from "../../common/types/visibility.enum";

export class UpdateProjectDto {
    title: string;
    description: string;
    introduction: string;
    status: EntryStatus;
    tag: Array<string>;
    source: string;
    sourceLink: string;
    visibility: Visibility;
}