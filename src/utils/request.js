import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dev.usemock.com/6647fab59e857b0cdafb90dd',
  timeout: 10000 // 超时时间
})
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      baseURL: 'https://dev.usemock.com/6647fab59e857b0cdafb90dd',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
