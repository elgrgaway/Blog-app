function Card(props) {
  const { title, name, mainImg, personImg, category, publishedAt } = props;
  return (
    <div className=" border-[#E8E8EA] rounded-xl border-solid border-2   p-4 ">
      <img src={mainImg} className="mb-6" alt="" />
      <span className="text-[#4B6BFB] text-sm font-semibold bg-[#F6F8FF] py-1 px-2.5 rounded-md">
        {category}
      </span>
      <h3 className="mt-4 text-2xl font-bold text-[#181A2A] hover:bg-slate-100 cursor-pointer transition-all rounded-md mb-5">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <img src={personImg} alt="" />
        <span className="font-semibold text-[#97989F]">{name}</span>
        <span className="font-semibold text-[#97989F]">{publishedAt}</span>
      </div>
    </div>
  );
}
export default Card;
