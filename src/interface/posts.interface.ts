import { User } from "./users.interface";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCustom {
  userId: number;
  user: User;
  id: number;
  title: string;
  body: string;
}
