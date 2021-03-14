import { CommentDto } from './CommentDto';
import { UserDto } from './UserDto';

export interface PostDto {
  id: number;
  title: string;
  content: string;
  author: UserDto;
  comments: CommentDto[];
}
