import { schema } from 'normalizr';

import { PostDto } from '../models/PostDto';
import { UserDto } from '../models/UserDto';

export const userEntity = new schema.Entity<UserDto>("user");
export const commentEntity = new schema.Entity<Comment>("comment", {
  commenter: userEntity,
});
export const postEntity = new schema.Entity<PostDto>("post", {
  author: userEntity,
  comments: [commentEntity],
});

export const postArrayEntity = [postEntity];
