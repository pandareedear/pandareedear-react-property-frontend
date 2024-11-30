import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import FilterPage from "../pages/FilterPage";
import AdminListingPage from "../pages/AdminDashboardPage";
import AdminPostPage from "../pages/AdminPostPage";
import AdminStatisticPage from "../pages/AdminStatisticPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "filter",
                element: <FilterPage />,
            },
            {
                path: "post/:postId",
                element: <PostPage />,
            },
        ],
    },
    {
        path: "/admin",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <AdminDashboardPage />,
            },
            // {
            //     path: "listing",
            //     element: <AdminListingPage />,
            // },
            // {
            //     path: "post",
            //     element: <AdminPostPage />,
            // },
            // {
            //     path: "statistic",
            //     element: <AdminStatisticPage />,
            // },
        ],
    },
    {
        path: "/login",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <AdminLoginPage />,
            },
        ],
    },
]);

export default function Route() {
    return <RouterProvider router={router} />;
}
