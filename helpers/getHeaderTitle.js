export const getHeaderTitle = (name) => {
  switch (name) {
    case "PostsScreen":
      return "Публікації";
      break;
    case "CreatePostsScreen":
      return "Створити публікацію";
      break;
    // default:
    //   return "";
    //   break;
  }
};
