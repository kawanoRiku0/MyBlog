import Article from "components/molecules/Article";
import { client } from "libs/client";
import { Article as ArticleType } from "types/article";
import DefaultErrorPage from "next/error";

type Props = {
  articles?: ArticleType[];
  error?: any;
};

export default function Home({ articles, error }: Props) {
  // ページ取得失敗時エラー
  if (error) {
    return (
      <div>
        <DefaultErrorPage statusCode={404} />
      </div>
    );
  }
  return (
    <>
      <h1 className=" font-bold mx-auto container text-2xl p-5 ">記事一覧</h1>
      <div className="p-4 flex flex-wrap  max-w-5xl justify-between mx-auto after:content-[''] after:block after:w-[29%] after:m-3">
        {articles?.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await client.get({ endpoint: "articles" });

    return {
      props: {
        articles: data.contents,
      },
    };
  } catch (e) {
    // データ取得失敗時エラーをpropsに渡す。
    // 現在上手く渡せていないので修正が必要
    const error = JSON.stringify(e);
    return {
      props: {
        error,
      },
    };
  }
};
