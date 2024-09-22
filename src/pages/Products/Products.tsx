import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

function Products() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await axios.get(`${baseUrl}/products`); // Adjust the URL as needed
  //     console.log(response.data);
  //     return response.data;
  //   };
  //   fetchProducts();
  // });

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["products"], // Unique query key
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/products`, {
        params: {
          limit: 2, // Specifies the limit query parameter
        },
      });

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

  return (
    <>
      {/* p._id */}
      <div>
        {data.data.map((p: any, i: any) => (
          <>
            <div className="" key={p.id}>
              <h2>{p.sold}</h2>
              <img width={50} height={50} src={p.imageCover} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Products;
