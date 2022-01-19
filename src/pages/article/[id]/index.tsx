import { client } from "libs/client";
import { GetServerSideProps } from "next";
import React from "react";
import { Article } from "types/article";

type Props = {
  article: Article;
};

const noImage = "/images/no-image.jpg";

export default function Index({ article }: Props) {
  return (
    <div className="container p-10 mx-auto">
      <div className=" max-w-5xl mx-auto">
        {/* Imageコンポーネントを使用することが望ましい、一時的にimgタグ　 */}
        <img
          src={article.eye_catch?.url || noImage}
          alt="アイキャッチ画像"
          className=" rounded-md w-full max-h-[25rem] object-cover"
        />
        <div className="mt-10">
          <div className=" space-y-6">
            <h2 className=" text-blue-700 font-bold text-xl md:text-3xl">
              {article.title}
            </h2>
            <div>
              <span className=" bg-red-500 text-white  rounded-full px-6 py-2">
                {article.tag || "日常"}
              </span>
            </div>
            <p className=" text-gray-800 text-base md:text-lg">
              {article.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "articles",
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};
