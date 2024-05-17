// ---------- USEFETCH Hook ----------
// Packages import
import axios from "axios";
import { useEffect, useState } from "react";
import { ZodType } from "zod";

export function useFetch<TData>(url: string, schema: ZodType<TData>) {
  const [data, setData] = useState<null | TData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const parsedResults = schema.parse(response.data);
        setData(parsedResults);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [schema, url]);

  return { data, loading };
}
