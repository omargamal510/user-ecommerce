import { useEffect, useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";

interface PaginationProps {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  results: number;
}

export default function Pagination({
  setLimit,
  limit,
  setPage,
  page,
  results,
}: PaginationProps) {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(limit);

  useEffect(() => {
    console.log(" rows :  " + first);
    console.log("rows : " + rows);
    console.log("limit : " + limit);
    console.log("page : " + page);

    console.log("results : " + results);
  }, [first]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    setLimit(event.rows);
  };

  return (
    <div className="card">
      <Paginator
        first={first}
        rows={rows}
        totalRecords={results}
        rowsPerPageOptions={[10, 20, 30, 40, 50, 60]}
        onPageChange={onPageChange}
      />
    </div>
  );
}
