import { Upload, Button } from 'antd'
import { useState } from 'react'
import { TUploadItemTypes } from './UploadFileTypes'
import './UploadFile.css'

export const UploadFile = () => {
  const [fileList, setFileList] = useState<TUploadItemTypes[]>([])

  const handleChange = (info: { fileList: TUploadItemTypes[] }) => {
    let fileList = [...info.fileList]
    fileList = fileList.slice(-1)

    fileList = fileList.map((file: any) => {
      if (file.response) {
        file.url = file.response.url
      }
      console.log('console.log(file) ', typeof file)
      console.log('console.log(file) ', file)
      return file
    })

    setFileList(fileList)
  }

  return (
    // @ts-ignore
    <Upload onChange={handleChange} fileList={fileList}>
      <Button className="upload-file-button">Прикрепить файл</Button>
    </Upload>
  )
}

// class MyUpload extends React.Component {
//   state = {
//     fileList: [
//       {
//         uid: '-1',
//         name: 'xxx.png',
//         status: 'done',
//         url: 'http://www.baidu.com/xxx.png',
//       },
//     ],
//   }

//   handleChange = (info) => {
//     let fileList = [...info.fileList]

//     // 1. Limit the number of uploaded files
//     // Only to show two recent uploaded files, and old ones will be replaced by the new
//     fileList = fileList.slice(-2)

//     // 2. Read from response and show file link
//     fileList = fileList.map((file) => {
//       if (file.response) {
//         // Component will show file.url as link
//         file.url = file.response.url
//       }
//       return file
//     })

//     this.setState({ fileList })
//   }

//   render() {
//     const props = {
//       action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//       onChange: this.handleChange,
//       multiple: true,
//     }
//     return (
//       <Upload {...props} fileList={this.state.fileList}>
//         <Button icon={<UploadOutlined />}>Upload</Button>
//       </Upload>
//     )
//   }
// }

// ReactDOM.render(<MyUpload />, mountNode)
