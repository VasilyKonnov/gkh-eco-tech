import { TArticleViewProps } from './ArticleType';
import backtonews from '../../assets/image/back-to-news.svg';
import { Button } from 'antd';
import './Article.css';

const failImg = 'https://www.schelcovo.ru/image/logo/uk.png';

export const ArticleView: React.FC<TArticleViewProps> = ({
  pageImage,
  pageTitle,
  pageContent,
  pageDate,
}) => {
  return (
    <>
      <div className="head-article">
        <Button type="link" onClick={() => window.history.back()}>
          <div className="back-to-news">
            <img src={backtonews} alt="arrow back to news" />
            <span> Ко всем новостям</span>
          </div>
        </Button>
        <h1 className="article-title">{pageTitle}</h1>
        <p className="article-create-at">{`Дата ${new Date(
          pageDate
        ).toLocaleDateString('ru-Ru')}`}</p>
      </div>
      <div className="article-body">
        <img src={pageImage ? pageImage : failImg} alt="Картинка в новости" />
        <p>{pageContent}</p>
      </div>
    </>
  );
};
