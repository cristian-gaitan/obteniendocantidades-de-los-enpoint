import { Post, User } from "../interface";
import {
  mergePostWithUserIndexed,
  mergePostWithUsers,
  setIndexUser,
} from "../utils";
import { getPost } from "./postFetch.controller";
import { getUsers } from "./userFetch.controller";

export const renderPost = async () => {
  const posts: Post[] = await getPost();
  const users: User[] = await getUsers();
  const customPosts = mergePostWithUsers(posts, users);
  console.log(customPosts);
};

export const renderPostIndexed = async () => {
  const posts: Post[] = await getPost();
  const users: User[] = await getUsers();
  const userIndexed = setIndexUser(users);
  const customPosts = mergePostWithUserIndexed(posts, userIndexed);
  console.log(customPosts);
};
