import { FC } from "react";
import { Article } from "types/article";

type Props = {
  article: Article;
};

const noImage = "/images/no-image.jpg";

const Article: FC<Props> = ({ article }) => {
  return (
    <div className=" rounded-xl shadow-xl overflow-hidden  md:w-[29%] m-3 w-full hover:cursor-pointer hover:scale-105 transition-all">
      {/* Imageコンポーネントを使用することが望ましい、一時的にimgタグ　 */}
      <img
        src={article.eye_catch?.url || noImage}
        alt="画像"
        className="w-full max-h-52 object-cover"
      />
      <div className="p-6">
        <div className="text-xl py-6">{article.title || "記事タイトル"}</div>
        <div>
          <span className=" bg-gray-300  rounded-full px-4 py-2">
            {article.tag || "日常"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Article;
