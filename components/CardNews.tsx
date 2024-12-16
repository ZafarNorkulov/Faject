import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
interface BlogProps {
  category: string;
  title: string;
  desc: string;
  date: string;
  img: string;
  id: number;
}
export default function CardNews(blog: BlogProps) {
  const router = useRouter();
  const date = new Date(blog.date);
  const formattedDate = date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  // const stripInlineStyles = (html: string) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, "text/html");

  //   // Remove all inline styles
  //   doc.querySelectorAll("*").forEach((el) => el.removeAttribute("style"));

  //   return doc.body.innerHTML;
  // };
  return (
    <div
      onClick={() => router.push(`/blog/${blog.id}`)}
      className="flex w-full max-w-[340px] flex-col rounded-[20px] bg-transparent hover:cursor-pointer max-md:mx-auto"
    >
      <Image src={blog.img} alt="News" width={360} height={230} />
      <div className="flex items-center py-4">
        <p className="mr-4 rounded-[50px] border border-gray px-3 py-1 text-sm">
          {blog.category}
        </p>
        <p>{formattedDate}</p>
      </div>
      <h3 className="mb-4 text-xl uppercase">{blog.title}</h3>
      <p
        dangerouslySetInnerHTML={{ __html: blog.desc }}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="line-clamp-2 text-lg text-gray"
      ></p>
      {/* <p className="line-clamp-2 text-lg text-gray">{blog.desc}</p> */}
    </div>
  );
}
