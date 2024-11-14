import { getPost } from "./controllers/index";
import { getUsers } from "./controllers/index";
import { Post } from "./interface/posts.interface";
import { User } from "./interface/users.interface";
import { getUserIdByPost } from "./utils/getUserIdByPost";
import { mapUserData } from "./utils/mapUserData";
import {
  mergePostWithUsers,
  mergeUserWithPostsIndexByUser,
} from "./utils/mergePostWithUsers";
import { setIndexPost, setIndexUser } from "./utils/setIndexRecord";

const viewData = async () => {
  const users: User[] = await getUsers();
  const posts: Post[] = await getPost();
  const mapUsers = await mapUserData([...users]);
  const usersIndexed = setIndexUser(mapUsers);

  const mergePostAndUsers = mergeUserWithPostsIndexByUser(usersIndexed, posts);
};

viewData();
