import { TArticleProps, TArticle } from './ArticleType'
import { ArticleView } from './ArticleView'
import { newsApi } from '../../utils/api/news'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const Article: React.FC<TArticleProps> = ({ page }) => {
  const [articleData, setArticleData] = useState<TArticle>()
  const history = useHistory()

  const articleByDirectLink = () => {
    let currentLocation = window.location.href.split('/')
    let articleId = currentLocation[currentLocation.length - 1]

    if (articleId) {
      newsApi.byId(articleId).then((response) => {
        if (!response) {
          history.push('/news')
        } else {
          let artData = response.data
          setArticleData(artData)
        }
      })
    }
  }

  useEffect(() => {
    if (page) {
      newsApi.byId(page).then((response) => {
        if (!response) {
          history.push('/news')
        } else {
          let artData = response.data
          setArticleData(artData)
        }
      })
    } else if (!page) {
      articleByDirectLink()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, page])

  return (
    <ArticleView
      pageImage={articleData ? articleData.image : ''}
      pageTitle={articleData ? articleData.title : ''}
      pageContent={articleData ? articleData.content : ''}
    />
  )
}
