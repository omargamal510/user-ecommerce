interface ProductProps {
  price: string;
  imageCover: string;
  title: string;
  description: string;
}

function Product({ price, imageCover, title, description }: ProductProps) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <img width={50} height={50} src={imageCover} alt={title} />
      </div>
    </div>
  );
}

export default Product;
