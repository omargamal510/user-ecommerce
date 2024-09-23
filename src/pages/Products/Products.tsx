import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Product from "./Product";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function Products() {
  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["products", limit, page], // Unique query key
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/products`, {
        params: {
          limit,
          page,
        },
      }); // params , {params}

      return data; // You can also use "as any" if needed
    },
  });

  console.log(data);

  if (isLoading && isFetching)
    return (
      <div>
        <Loading />
      </div>
    );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // function handleLimit(): void {
  //   setLimit((p) => p + 10);
  //   refetch();
  // }

  // const handlePage = (): void => {
  //   setPage((p) => p + 1);
  //   refetch();
  //   console.log(data);
  // };

  return (
    <>
      {/* p._id */}
      <div className="grid grid-cols-12 gap-4 custom-container my-5">
        {data.data.map((p: any) => (
          <Product
            key={p.id}
            description={p.description}
            price={p.price}
            imageCover={p.imageCover}
            title={p.title}
          />
        ))}

        {/* <button
          onClick={() => handleLimit()}
          className="bg-blue-500 p-3 text-white"
        >
          Next
        </button>

        <button
          onClick={() => handlePage()}
          className="bg-red-500 p-3 text-white"
        >
          Next Page
        </button> */}
      </div>
    </>
  );
}

export default Products;
