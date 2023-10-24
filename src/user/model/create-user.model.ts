import {IsIn, IsNumber, IsOptional, IsString} from "class-validator"
import {Field, InputType} from "@nestjs/graphql"

@InputType()
export class CreateUser {
  @Field()
  @IsString()
  email: string

  @Field()
  @IsString()
  password: string

  @Field()
  @IsOptional()
  @IsString()
  name: string

  @Field()
  @IsOptional()
  @IsString()
  surname: string

  @Field()
  @IsString()
  nickname: string

  @Field()
  @IsIn(["male", "female"])
  gender: string

  @Field()
  @IsNumber()
  age: number

  @Field()
  @IsString()
  location: string
}

