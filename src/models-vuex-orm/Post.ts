import { HasMany, HasOne, Model, Str, Uid } from '@vuex-orm/core';

import { Comment } from './Comment';
import { User } from './User';

export class Post extends Model {
  static entity = "posts";

  @Uid()
  id!: number;

  @Str("")
  title!: string;

  @Str("")
  content!: string;

  @HasOne(() => User, "userId")
  author!: User;

  @HasMany(() => Comment, "commentId")
  comments!: Comment;
}
