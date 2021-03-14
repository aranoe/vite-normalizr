import { UserDto } from './UserDto';

export interface CommentDto {
  id: number;
  content: string;
  commenter: UserDto;
}
