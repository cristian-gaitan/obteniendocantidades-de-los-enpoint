import { Post, User } from "../interface";

export const mergePostWithUsers = (posts: Post[], users: User[]) => {
  return posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    return {
      ...post,
      user,
    };
  });
};

export const mergeUserWithPostsIndexByUser = (
  users: Record<number, User>,
  posts: Post[]
) => {
  let userPosts: Record<number, Post[]> = {};
  for (const key in users) {
    console.log(users[key]);
    const postsOfUser = posts.filter((post) => post.userId === parseInt(key));
  }

  // return users.map((user) => {
  //   const userPosts = posts[user.id];
  //   return {
  //     ...user,
  //     posts: userPosts,
  //   };
  // });
  
}

export const mergePostWithUserIndexed = (
  posts: Post[],
  users: Record<number, User>
) => {
  return posts.map((post) => {
    const user = users[post.userId];
    return {
      ...post,
      user,
    };
  });
};

export const mergeUserWithPostsIndexByUser = (
  users: User[],
  posts: Record<number, Post[]>
) => {
  return users.map((user) => {
    const userPosts = posts[user.id];
    return {
      ...user,
      posts: userPosts,
    };
  });
};
