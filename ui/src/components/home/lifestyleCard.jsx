export const LifestyleCard = ({ product }) => {
  return (
    <div className="m-2 p-2 flex flex-col flex-wrap justify-center items-center hover:grayscale-0 hover:saturate-200 hover:drop-shadow-2xl hover:backdrop-brightness-2xl">
      <img className=" rounded-xl w-50" src={product.img} alt={product.title} />
      <p className="text-center mt-2 font-semibold">{product.title}</p>
    </div>
  );
};
