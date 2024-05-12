// import Card from "./Card";

import Header from "../components/Header";
import ListCard from "../components/ListCard";
import { dummyArticles } from "../../dummyArticles";

function Home() {
  return (
    <ListCard articles={dummyArticles} />
    // {/* <Card /> */}
  );
}

export default Home;
