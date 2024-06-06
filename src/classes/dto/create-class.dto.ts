import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClassDto {
  @IsString()
  @IsNotEmpty()
  classname: string;

  @IsString()
  @IsNotEmpty()
  classroom: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
