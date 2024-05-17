import { Appbar } from "@/components/Appbar";
import { Blogchart } from "@/components/Blogchart";
import { useBlogs } from "@/hooks";

export const Blogs = () => {
  const currentDate = new Date();
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className=" max-w-xl">
          {blogs.map((post) => (
            <Blogchart
              id={post.id}
              authorname={post.author.name || "Anonymous"}
              title={post.title}
              content={post.content}
              publishedDate={currentDate.toLocaleDateString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
