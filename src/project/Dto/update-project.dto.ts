import { EntryStatus } from "../../common/types/entry-status.enum";
import { Field } from "../../common/types/field.enum";
import { Visibility } from "../../common/types/visibility.enum";
import { IsNotEmpty } from "class-validator";

export class UpdateProjectDto {
  @IsNotEmpty() title: string;
  @IsNotEmpty() description: string;
  @IsNotEmpty() introduction: string;
  @IsNotEmpty() status: EntryStatus;
  @IsNotEmpty() tag: Array<string>;
  @IsNotEmpty() source: string;
  @IsNotEmpty() sourceLink: string;
  @IsNotEmpty() visibility: Visibility;
  @IsNotEmpty() favorite: boolean;
}