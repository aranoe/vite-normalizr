import { PostDto } from '../models/PostDto';
import { dummyCommentFive, dummyCommentFour, dummyCommentOne, dummyCommentThree, dummyCommentTwo } from './dummyComments';
import { dummyUserOne, dummyUserTwo } from './dummyUsers';

export const dummyPostOne: PostDto = {
  id: 1,
  author: dummyUserOne,
  title: "Amazing",
  content: "Wo cool stuff",
  comments: [dummyCommentOne, dummyCommentTwo],
};

export const dummyPostTwo: PostDto = {
  id: 2,
  author: dummyUserTwo,
  title: "Not Amazing",
  content: "But cool stuff",
  comments: [dummyCommentFour, dummyCommentThree],
};

export const dummyPostThree: PostDto = {
  id: 2,
  author: dummyUserTwo,
  title: "Not Amazing",
  content: "But cool stuff",
  comments: [dummyCommentFive],
};
