import { Resources } from "./Resources.js";

// 资源文件加载器，确保在图片资源完成后才进行渲染
export class ResourceLoader{
  map = null
  constructor() {
    this.map = new Map(Resources)
    for (let [key, value] of this.map) {
      const image = wx.createImage()
      image.src = value
      this.map.set(key, image)
    }
    
  }

  onLoaded(callBack) {
    let loaderCount = 0
    for (const value of this.map.values()) {
      value.onload = () => {
        loaderCount++
        if (loaderCount >= this.map.size) {
          callBack(this.map)
        }
      }
    }
  }
  // 在方法上 而不是在实例上
  static create() {
    return new ResourceLoader()
  }
}