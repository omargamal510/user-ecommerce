import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Product from "./Product";
import Pagination from "../../components/Pagination/Pagination";
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || ""; // Default to an empty string if not found

  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["products", limit, page], // Unique query key
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/products`, {
        params: {
          limit,
          page,
        },
      });
      return data;
    },
  });

  useEffect(() => console.log("page : " + page), [data]);
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

  const notify = () => toast("Woow so easy");

  return (
    <>
      <ToastContainer />
      {/* p._id */}
      <div className="products">
        <div>
          <button onClick={notify}>Notify!</button>
        </div>

        <Pagination
          setLimit={setLimit}
          page={page}
          setPage={setPage}
          limit={limit}
          results={data?.results}
        />
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
      </div>
    </>
  );
}

export default Products;
