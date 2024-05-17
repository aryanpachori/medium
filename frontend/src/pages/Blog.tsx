import { useBlog } from "@/hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const {id} = useParams();
  const { loading } = useBlog({
    id : id || ""
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return(
    <div>
blog details
    </div>
  )
};
