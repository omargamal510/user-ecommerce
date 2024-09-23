import AddToCartWish from "../../ui/AddToCart/AddToCartWish";

interface ProductProps {
  price: string;
  imageCover: string;
  title: string;
  description: string;
}

function Product({ price, imageCover, title, description }: ProductProps) {
  return (
    <div className="dark:bg-darkBg3 rounded-lg col-span-12 sm:col-span-6 lg:col-span-4 bg-white shadow-custom dark:shadow-custom-dark  ">
      <div className="flex flex-col gap-4 items-center text-center justify-center py-8 px-6 product-desc">
        <img
          width={80}
          height={80}
          className="rounded-full border-4 border-primaryMain"
          src={imageCover}
          alt={title}
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="border-t dark:border-darkBg border-gray-100 w-full p-4 flex gap-2">
        <AddToCartWish logo={"🛒"} />
        <AddToCartWish logo={"❤️"} />
      </div>
    </div>
  );
}

export default Product;
