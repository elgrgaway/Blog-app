// import Card from "./Card";

import Header from "./components/Header";
import ListCard from "./components/ListCard";
const dummyArticles = [
  {
    id: 1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    mainImg: "Rectangle 38.png",
    personImg: "Image.png",
    name: "Tracey Wilson",
    publishedAt: "August 20, 2022",
  },
  {
    id: 2,

    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    mainImg: "Rectangle 38.png",
    personImg: "Image.png",
    name: "Tracey Wilson",
    publishedAt: "August 20, 2022",
  },
  {
    id: 3,

    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    mainImg: "Rectangle 38.png",
    personImg: "Image.png",
    name: "Tracey Wilson",
    publishedAt: "August 20, 2022",
  },
  {
    id: 4,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    mainImg: "Rectangle 38.png",
    personImg: "Image.png",
    name: "Tracey Wilson",
    publishedAt: "August 20, 2022",
  },
  {
    id: 5,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    mainImg: "Rectangle 38.png",
    personImg: "Image.png",
    name: "Tracey Wilson",
    publishedAt: "August 20, 2022",
  },
];
function App() {
  return (
    <section className=" max-w-[1216px] m-auto">
      <Header />
      <ListCard articles={dummyArticles} />
      {/* <Card /> */}
    </section>
  );
}

export default App;
