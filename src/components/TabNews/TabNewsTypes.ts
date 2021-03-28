export type TNew = {
  created_at: string
  image?: string
  pk: number
  preview: string
  title: string
}

export type TTabNews = {
  count: number
  next?: string
  previous?: string
  results: TNew
}

export type TTabNewsProps = {
  newsContent?: TNew[]
  firstNew?: TNew
}

export type TArticlePage = {
  id: string
}
