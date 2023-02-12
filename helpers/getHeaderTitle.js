import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
export const getHeaderTitle = (routeName) => {
  switch (routeName) {
    case "CreatePostsScreen":
      return "Створити публікацію";
      break;
  }
};
export const getNestedHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case "DefaultScreen":
      return "Публікації";
      break;
    case "Map":
      return "Карта";
      break;
    case "Comments":
      return "Коментарі";
      break;
  }
};
