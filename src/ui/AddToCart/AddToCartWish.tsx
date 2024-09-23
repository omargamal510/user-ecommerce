// later we will add onclick prop
interface AddToCartWishProps {
  logo: string;
}

function AddToCartWish({ logo }: AddToCartWishProps) {
  return (
    <button className="bg-black dark:bg-white dark:hover:bg-gray-300 hover:bg-darkBg3 dark:text-black text-white px-3 py-1 rounded-lg transition duration-300 ease-in-out">
      +{logo}
    </button>
  );
}

export default AddToCartWish;
