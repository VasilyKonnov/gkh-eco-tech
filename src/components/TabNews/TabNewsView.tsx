import { TTabNewsProps, TNew } from './TabNewsTypes'
import { Col, Row } from 'antd'
import { HeadingPage } from './../HeadingPage/HeadingPage'
import './TabNewsStyle.css'
const newsResponsive = { xs: 32, sm: 12, md: 6, lg: 6 }
const firstNewResponsive = { xs: 32, sm: 12, md: 12, lg: 12 }

export const TabNewsView: React.FC<TTabNewsProps> = ({
  newsContent,
  firstNew,
}) => {
  console.log('newsContent - ', newsContent)
  return (
    <>
      <HeadingPage title="Новости" />
      <div className="tab-news-wrap">
        {firstNew ? (
          <Row gutter={32} style={{ marginBottom: '40px' }}>
            <Col {...firstNewResponsive}>
              <div className="item-img-wrap">
                <img
                  alt="Картинка новости"
                  src={
                    firstNew.image
                      ? firstNew.image
                      : 'https://www.schelcovo.ru/image/logo/uk.png'
                  }
                />
              </div>
            </Col>
            <Col {...firstNewResponsive}>
              <h3>
                {firstNew.title.length > 200
                  ? firstNew.title.slice(0, 200) + '...'
                  : firstNew.title}
              </h3>
              <div className="item-text-wrap--text">
                {firstNew.preview.slice(0, 300) + '...'}
              </div>
            </Col>
          </Row>
        ) : null}
        <Row gutter={32}>
          {newsContent ? (
            newsContent.slice(1).map((news: TNew, id: number) => {
              return (
                <Col {...newsResponsive}>
                  <div className="item-img-wrap">
                    <img
                      alt="Картинка новости"
                      src={
                        news.image
                          ? news.image
                          : 'https://www.schelcovo.ru/image/logo/uk.png'
                      }
                    />
                  </div>

                  <div className="item-text-wrap">
                    <h3>
                      {news.title.length > 62
                        ? news.title.slice(0, 55) + '...'
                        : news.title}
                    </h3>
                    <div className="item-text-wrap--text">
                      {news.preview.slice(0, 85) + '...'}
                    </div>
                  </div>
                </Col>
              )
            })
          ) : (
            <h2>Новостей ещё нет, хорошего вам дня!</h2>
          )}
        </Row>
      </div>
    </>
  )
}
