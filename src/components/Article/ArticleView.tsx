import { TArticleViewProps } from './ArticleType'
import backtonews from '../../assets/image/back-to-news.svg'
import { Link } from 'react-router-dom'
import './Article.css'

const failImg = 'https://www.schelcovo.ru/image/logo/uk.png'

export const ArticleView: React.FC<TArticleViewProps> = ({
  pageImage,
  pageTitle,
  pageContent,
}) => {
  return (
    <>
      <div className="head-article">
        <Link to="/news">
          <div className="back-to-news">
            <img src={backtonews} alt="arrow back to news" />
            <span> Ко всем новостям</span>
          </div>
        </Link>
        <h1 className="article-title">{pageTitle}</h1>
      </div>
      <div className="article-body">
        <img src={pageImage ? pageImage : failImg} alt="Картинка в новости" />
        <p>{pageContent}</p>
      </div>
    </>
  )
}
