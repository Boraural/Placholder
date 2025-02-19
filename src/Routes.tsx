import { RouteObject, createBrowserRouter } from "react-router-dom";
import { HomePage, RootLayout, UserDetailPage, UsersPage } from "./pages";
import { usersLoader } from "./pages/UsersPage";
import { userLoader } from "./pages/UserDetailPage";
import { UserAlbums, UserPosts, UserTodos } from "./pages/userInfo";
import { userPostsLoader } from "./pages/userInfo/UserPosts";
import { usersAlbumsLoader } from "./pages/userInfo/UserAlbums";
import { userTodosLoader } from "./pages/userInfo/UserTodos";
import AlbumDetails, { albumLoader } from "./pages/AlbumDetails";
import PostDetails, { postLoader } from "./pages/PostDetails";
import FavoritesPage from "./pages/FavoritesPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: "users/:userId",
        element: <UserDetailPage />,
        loader: userLoader,
        children: [
          {
            path: "posts",
            element: <UserPosts />,
            loader: userPostsLoader,
          },
          {
            path: "albums",
            element: <UserAlbums />,
            loader: usersAlbumsLoader,
          },
          {
            path: "todos",
            element: <UserTodos />,
            loader: userTodosLoader,
          },
        ],
      },
      {
        path: "users/:userId/albums/:albumId",
        element: <AlbumDetails />,
        loader: albumLoader,
      },
      {
        path: "/users/:userId/posts/:postId",
        element: <PostDetails />,
        loader: postLoader
      },
      {
        path: "favorites",
        element: <FavoritesPage />
      }
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
