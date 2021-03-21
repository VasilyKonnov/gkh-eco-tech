export type TUploadFileTypes = {
  fileList: TUploadItemTypes[]
}
export type TUploadItemTypes = {
  uid: string
  name: string
  status: string
  url: string
  response?: object
}
