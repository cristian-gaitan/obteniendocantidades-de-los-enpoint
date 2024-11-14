import { Post } from "../interface/posts.interface";

export const getUserIdByPost = (post: Post[]) => {
  const userIds = post.reduce((acc, item) => {
    if (!acc.includes(item.userId)) {
      acc.push(item.userId);
    }
    return acc;
  }, [] as number[]);

  return userIds;
};
