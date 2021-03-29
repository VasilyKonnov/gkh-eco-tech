export type TArticleProps = {
  page?: string
}
export type TArticleViewProps = {
  pageImage: string
  pageTitle: string
  pageContent: string
  pageDate: string
}
export type TArticle = {
  pk: number
  title: string
  content: string
  created_at: string
  image: string
}
