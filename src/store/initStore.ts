import { denormalize, normalize } from 'normalizr';

import { dummyPostOne, dummyPostThree, dummyPostTwo } from '../dummy/dummyPosts';
import { postArrayEntity, postEntity } from './entities';

export const initStore = () => {
  const posts = [dummyPostOne, dummyPostTwo, dummyPostThree];
  const normalizedPosts = normalize(posts, postArrayEntity);
  const denormlizedFirstPost = denormalize(
    1,
    postEntity,
    normalizedPosts.entities
  );
  console.log("normalized posts", normalizedPosts);
  console.log("denormalized first post", denormlizedFirstPost);
};
