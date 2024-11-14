import { Post } from "../interface/posts.interface";
import { User } from "../interface/users.interface";

export const setIndexUser = (users: User[]) => {
  return users.reduce((acc, user) => {
    acc[user.id] = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    return acc;
  }, {} as Record<number, User>);
};

export const setIndexPost = (posts: Post[]) => {
  return posts.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
  }, {} as Record<number, Post>);
};

export const groupPostByUserId = (posts: Post[]) => {
  return posts.reduce((acc, post) => {
    if (!acc[post.userId]) {
      acc[post.userId] = [];
    }
    acc[post.userId].push(post);
    return acc;
  }, {} as Record<number, Post[]>);
};

