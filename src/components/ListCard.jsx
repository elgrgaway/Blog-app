import Card from "./Card";

function ListCard(props) {
  const { articles } = props;
  return (
    <section className="grid grid-cols-[repeat(auto-fill,392px)] justify-center   gap-5">
      {articles.map((article) => (
        <Card
          key={article.id}
          title={article.title}
          name={article.name}
          mainImg={article.mainImg}
          personImg={article.personImg}
          category={article.category}
          publishedAt={article.publishedAt}
        />
      ))}
    </section>
  );
}
export default ListCard;
