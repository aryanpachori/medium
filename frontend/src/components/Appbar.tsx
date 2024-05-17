import { Avatar } from "./Blogchart";


export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="font-semibold">MEDIUM</div>
      <div>
         <Avatar name="Aryan"/>
      </div>
    </div>
  );
};
