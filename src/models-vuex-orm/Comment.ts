import { HasOne, Model, Str, Uid } from '@vuex-orm/core';

import { User } from './User';

export class Comment extends Model {
  static entity = "comments";

  @Uid()
  id!: number;

  @Str("")
  content!: string;

  @HasOne(() => User, "userId")
  user!: User;
}
