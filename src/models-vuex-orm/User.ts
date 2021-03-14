import { Model, Num, Str, Uid } from '@vuex-orm/core';

export class User extends Model {
  static entity = "users";

  @Uid()
  id!: number;

  @Str("")
  name!: string;

  @Num(0)
  age!: number;
}
