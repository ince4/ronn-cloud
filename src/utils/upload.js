// import axios from '';
import { request, requestFormData } from './request'

async function onFileUpload(e, folderName) {
  const fileList = e.target.files;
  console.log("fileList", fileList);
  const formData = new FormData();

  for (let index in Object.keys(fileList)) {
    const item = fileList[index]
    
    formData.append(folderName ? folderName : '', item);
  }

  // formData.append("fileList", fileList);
  await uploadFileHandler(formData)
}

async function uploadFileHandler(formData) {
  requestFormData('fileUpload',
    formData
  )
}

export {
  onFileUpload
}