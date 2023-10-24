import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {IsIn, IsNumber, IsOptional, IsString} from "class-validator"
import {Field, ID, Int, ObjectType} from "@nestjs/graphql"

export type UserDocument = User & Document;

@ObjectType( "User", )
@Schema()
export class User {
  @Field(() => ID)
  _id: string

  @Field()
  @Prop()
  @IsString()
  email: string

  @Field()
  @Prop()
  @IsString()
  password: string

  @Field()
  @Prop()
  @IsOptional()
  @IsString()
  name: string

  @Field()
  @Prop()
  @IsOptional()
  @IsString()
  surname: string

  @Field()
  @Prop()
  @IsString()
  nickname: string

  @Field()
  @Prop()
  @IsIn(["male", "female"])
  gender: string

  @Field(() => Int)
  @Prop()
  @IsNumber()
  age: number

  @Field()
  @Prop()
  @IsString()
  location: string
}

export const UserSchema = SchemaFactory.createForClass(User)
