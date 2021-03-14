import { PostDto } from '../models/PostDto';

export const store = {
  posts: [],
  actions: {
    setPosts: (posts: PostDto[]) => store.posts === posts,
  },
};
