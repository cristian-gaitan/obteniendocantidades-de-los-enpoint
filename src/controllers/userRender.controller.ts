import { Post, User } from "../interface";
import { groupPostByUserId, mergeUserWithPostsIndexByUser } from "../utils";
import { getPost } from "./postFetch.controller";
import { getUsers } from "./userFetch.controller";

export const renderUser = async () => {
  const posts: Post[] = await getPost();
  const users: User[] = await getUsers();

  const postsIndexedByUserId = groupPostByUserId(posts);

  const customUsers = mergeUserWithPostsIndexByUser(
    users,
    postsIndexedByUserId
  );

  console.log(customUsers);
};
