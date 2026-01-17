import { Field } from "../../common/types/field.enum";
import { EntryStatus } from "../../common/types/entry-status.enum";
import { Visibility } from "../../common/types/visibility.enum";
import { isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateProjectDto {
   @IsNotEmpty() title: string;
   @IsNotEmpty() description: string;
   @IsNotEmpty() introduction: string;
   @IsNotEmpty() type: Field;
   @IsNotEmpty() status: EntryStatus;
   @IsNotEmpty() tag: Array<string>;
   @IsNotEmpty() source: string;
   @IsNotEmpty() sourceLink: string;
   @IsNotEmpty() visibility: Visibility;
   @IsNotEmpty() userId: string;
   @IsNotEmpty() entriesCount: 0;
   @IsNotEmpty() rating: 0;
   @IsNotEmpty() favorite: false;
}
