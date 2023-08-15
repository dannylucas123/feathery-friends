import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import Address from '../interfaces/Address';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop({ required: true })
  username: string;

  @Prop()
  address: Address;

  @Prop()
  avatar: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
