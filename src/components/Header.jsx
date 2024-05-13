import { Link } from "react-router-dom";

function Header(props) {
  const { articles, setArticles } = props;

  const searchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredArticles = articles.filter((article) =>
      article.name.toLowerCase().includes(searchQuery)
    );
    setArticles(filteredArticles);
  };

  return (
    <header className=" flex items-center justify-between gap-2.5 mt-8 mx-3 mb-20">
      <div className=" flex items-center gap-[70px] max-sm:gap-[10px] m-0">
        <img src="Union.svg" alt="logo pic" />
        <img src="Blog.svg" alt="blog pic" className="  " />
      </div>
      <Link
        to="/"
        className=" text-[#3B3C4A]  hover:text-blue-400 transition-all  leading-6"
      >
        Home
      </Link>
      <input
        type="text"
        placeholder="Search by name"
        onChange={searchHandler}
        className=" w-[166px] bg-[#F4F4F5] text-[#A1A1AA] py-2 transition-all outline-none  pl-4 pr-9 rounded-md focus:w-[180px]"
      />
    </header>
  );
}
export default Header;
