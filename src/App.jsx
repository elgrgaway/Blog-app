// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import BlogPage from "./pages/BlogPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     // errorElement: <NoPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/:name",
//         element: <BlogPage />,
//       },
//     ],
//   },
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":name" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
