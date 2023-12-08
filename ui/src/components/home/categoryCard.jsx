export const CategoryCard = ({ category }) => {
  return (
    <div className="flex-col align-center items-center justify-center">
      <img src={category.img} alt="Categories" className="m-auto" />
      <h2 className="text-center text-xs font-bold p-1">{category.title}</h2>
    </div>
  );
};
