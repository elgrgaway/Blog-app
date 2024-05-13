import { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { dummyArticles } from "../../dummyArticles";
import Home from "./Home";
function Layout() {
  const [articles, setArticles] = useState(dummyArticles);
  return (
    <section className=" max-w-[1216px] m-auto">
      <Header articles={dummyArticles} setArticles={setArticles} />
      {/* <Home articles={articles} /> */}
      <Outlet context={[articles]} />
    </section>
  );
}
export default Layout;
