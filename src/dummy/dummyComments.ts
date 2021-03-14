import { CommentDto } from '../models/CommentDto';
import { dummyUserFour, dummyUserOne, dummyUserThree, dummyUserTwo } from './dummyUsers';

export const dummyCommentOne: CommentDto = {
  id: 1,
  commenter: dummyUserOne,
  content: "This is funny!!",
};
export const dummyCommentTwo: CommentDto = {
  id: 2,
  commenter: dummyUserOne,
  content: "This is not cool!!",
};
export const dummyCommentThree: CommentDto = {
  id: 3,
  commenter: dummyUserTwo,
  content: "This is nice!!",
};
export const dummyCommentFour: CommentDto = {
  id: 4,
  commenter: dummyUserThree,
  content: "This is not funny!!",
};
export const dummyCommentFive: CommentDto = {
  id: 5,
  commenter: dummyUserFour,
  content: "This is amazing!!",
};
