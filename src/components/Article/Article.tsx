import { TArticleProps, TArticle } from './ArticleType';
import { ArticleView } from './ArticleView';
import { newsApi } from '../../utils/api/news';
import { useEffect, useState } from 'react';

export const Article: React.FC<TArticleProps> = ({ page }) => {
  const [articleData, setArticleData] = useState<TArticle>();

  useEffect(() => {
    if (page) {
      newsApi.byId(page).then(({ data }) => {
        setArticleData(data);
      });
    }
  }, [page]);

  return (
    <ArticleView
      pageImage={articleData ? articleData.image : ''}
      pageTitle={articleData ? articleData.title : ''}
      pageContent={articleData ? articleData.content : ''}
      pageDate={articleData ? articleData.created_at : ''}
    />
  );
};
