import { Link } from "react-router-dom";

interface Blogcardprops {
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
  id : number
}

export const Blogchart = ({
  id,
  authorname,
  title,
  content,
  publishedDate,
}: Blogcardprops) => {
  return (
    <Link to={`/blog/${id}`}>
    <div>
      <div className="border-b border-slate-200 pb-4 p-4">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar name={authorname} />
          </div>

          <div className="font-extralight pl-2 mr-1">{authorname}</div>
          <div className="font-thin text-slate-500">
            &middot; {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-1">{title}</div>
        <div className="text-md font-thin pt-1">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-400 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} minute(s)`}</div>
      </div>
    </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="mr-1 relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
      <span className="font-medium text-xs text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
