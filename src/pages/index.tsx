import Article from "components/molecules/Article";
import { client } from "libs/client";
import { Article as ArticleType } from "types/article";

type Props = {
  articles: ArticleType[];
};

export default function Home({ articles }: Props) {
  return (
    <>
      <h1 className="container text-2xl p-5 ">記事一覧</h1>
      <div className="container p-4 flex flex-wrap justify-between mx-auto after:content-[''] after:block after:w-[29%] after:m-3">
        {articles.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "articles" });

  return {
    props: {
      articles: data.contents,
    },
  };
};
