// import Card from "./Card";

import ListCard from "../components/ListCard";
import { dummyArticles } from "../../dummyArticles";
import { useOutletContext } from "react-router-dom";

function Home() {
  // console.log(articles);
  const [articles] = useOutletContext();

  return <ListCard articles={articles} />;
}

export default Home;
