import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const AskedQuestions = lazy(() =>
  import("components/asked-questions/asked-questions")
);
const Contacts = lazy(() => import("components/contacts/contacts"));
const Management = lazy(() => import("pages/management"));
const Home = lazy(() => import("pages/home"));
const NewsDetail = lazy(() => import("pages/news-detail"));
const Layout = lazy(() => import("pages/layout"));
const FilteredNews = lazy(() =>
  import("components/filtered-news/filtered-news")
);
const VirtualReception = lazy(() =>
  import("components/virtual-reception/virtual-reception")
);
const DefaultPage = lazy(() => import("pages/default-page"));
const DefaultRoute = lazy(() => import("pages/default-route"));
const TemplateLayout = lazy(() => import("pages/template/template-layout"));
const SearchResult = lazy(() =>
  import("components/search-result/SearchResult")
);

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "news",
        element: <FilteredNews />,
      },
      {
        path: "news/:newsFilter",
        element: <FilteredNews />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "search-result",
        element: <SearchResult />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/",
        element: <TemplateLayout />,
        children: [
          {
            path: "about/about-gov",
            element: <Management />,
          },
          {
            path: "news/:newsFilter/:newsId",
            element: <NewsDetail />,
          },
          {
            path: ":navbarRoutes/:navRoute",
            element: <DefaultRoute />,
          },
          {
            path: ":navbarRoutes",
            element: <DefaultPage />,
          },
          {
            path: "services/citizens-appeal",
            element: <VirtualReception />,
          },
          {
            path: "services/frequently-asked-questions",
            element: <AskedQuestions />,
          },
        ],
      },
    ],
  },
];

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
export default Routes;
