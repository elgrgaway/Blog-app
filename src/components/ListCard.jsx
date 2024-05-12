import Card from "./Card";

function ListCard(props) {
  const { articles } = props;
  return (
    <>
      <section className="grid grid-cols-[repeat(auto-fill,392px)] justify-center   gap-5 mb-5">
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
      <button className=" text-[#696A75] border-[#E8E8EA] rounded-md border-solid border-2 py-3 px-5 font-medium  block m-auto mb-5 transition-all hover:bg-slate-500 hover:text-gray-50">
        Load More
      </button>
    </>
  );
}
export default ListCard;
