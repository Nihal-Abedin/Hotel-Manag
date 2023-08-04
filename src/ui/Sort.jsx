import { useSearchParams } from "react-router-dom";
import Select from "./Select";

const Sort = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  const handlechange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };
  return <Select options={options} type="white" activeValue={sortBy} onChange={handlechange} />;
};

export default Sort;
