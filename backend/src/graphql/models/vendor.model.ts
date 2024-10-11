import { Field, ObjectType } from '@nestjs/graphql';
import { PackageModel } from './package.model';

@ObjectType()
export class VendorModel {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  fname: string;

  @Field()
  lname: string;
  
  @Field()
  busname: string;

  @Field()
  location: string;

  @Field()
  city: string;

  @Field()
  phone: string;

  @Field({ nullable: true })

  profile_pic_url: string;

 

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => PackageModel, { nullable: true })
  package?: PackageModel;
}