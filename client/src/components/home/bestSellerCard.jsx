export const BestSellerCard = ({ product }) => {
  return (
    <div className="m-2 p-2 flex flex-col flex-wrap justify-center items-center hover:grayscale-0 hover:saturate-200 hover:drop-shadow-2xl hover:backdrop-brightness-2xl">
      <img
        className=" rounded-xl w-80"
        src={product.link}
        alt={product.title}
      />
      <p className="text-center mt-2 font-semibold">{product.title}</p>
    </div>
  );
};
