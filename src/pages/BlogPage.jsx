import { useParams } from "react-router-dom";
import { dummyArticles } from "../../dummyArticles";

const BlogPage = () => {
  const { name } = useParams();

  // Find the article with the given name
  const article = dummyArticles.find((article) => article.name === name);

  // If no article found, display an error message
  if (!article) {
    return <div>Error: Article not found</div>;
  }

  // If article found, display its details
  return (
    <section className=" max-w-[800px] m-auto max-[850px]:mx-4">
      <span className=" bg-[#4B6BFB] text-[#fff] font-medium text-sm py-1.5 px-3 rounded-md">
        {article.category}
      </span>
      <h3 className=" font-semibold text-4xl mt-4 mb-5">{article.title}</h3>
      <div className="flex items-center gap-3">
        <img src={article.personImg} alt="" />
        <span className="font-medium text-sm text-[#97989F]">
          {article.name}
        </span>
        <span className="font-medium text-sm text-[#97989F]">
          {article.publishedAt}
        </span>
      </div>
      <img className="my-8" src={article.BlogImage} alt="image of content" />
      <p className=" text-xl text-[#3B3C4A]">{article.para1}</p>
      <br />
      <p className=" text-xl text-[#3B3C4A]">{article.para2}</p>
      <h4 className=" font-semibold text-2xl mt-8 mb-4 ">{article.head1}</h4>
      <p className=" text-xl text-[#3B3C4A]">{article.para3}</p>
      <br />
      <p className=" text-xl text-[#3B3C4A]">{article.para4}</p>
      <h4 className=" font-semibold text-2xl mt-8 mb-4 ">{article.head2}</h4>
      <p className=" text-xl text-[#3B3C4A]">{article.para5}</p>
      <br />
      <p className=" text-xl text-[#3B3C4A]">{article.para6}</p>
      <h5 className="my-8 text-2xl italic bg-[#F6F6F7] p-8 rounded-xl border-l-4 ">
        {article.quote}
      </h5>
      <img className="my-8" src={article.BlogImage2} alt="image of content" />
      <div className="flex flex-col items-center bg-[#E8E8EA] py-3.5 rounded-xl">
        <span className=" text-sm text-[#696A75]">Advertisement</span>
        <span className=" font-semibold text-xl text-[#696A75]">
          You can place ads
        </span>
        <span className=" text-lg text-[#696A75]">750x100</span>
      </div>
      <h4 className=" font-semibold text-2xl mt-8 mb-4 ">{article.head3}</h4>
      <p className=" text-xl text-[#3B3C4A]">{article.para7}</p>
      <h4 className=" font-semibold text-2xl mt-8 mb-4 ">{article.head4}</h4>
      <p className=" text-xl text-[#3B3C4A]">{article.para8}</p>
      <h4 className=" font-semibold text-2xl mt-8 mb-4 ">{article.head5}</h4>
      <p className=" text-xl text-[#3B3C4A]">{article.para9}</p>
      <h4 className=" font-semibold text-2xl mt-8 mb-4 ">{article.head6}</h4>
      <p className=" text-xl text-[#3B3C4A]">{article.para10}</p>
      <h4 className=" font-semibold text-2xl mt-8 mb-4 ">{article.head7}</h4>
      <p className=" text-xl text-[#3B3C4A] mb-4">{article.para11}</p>
    </section>
  );
};

export default BlogPage;
