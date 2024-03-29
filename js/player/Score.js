import { DataStore } from "../base/DataStore.js";

// 计分器类
export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx
    this.scoreNumber = 0
    // canvas刷新很快需要一个flag值控制是否加分达到一次只加一分的目的
    this.isScore = true
  }

  draw() {
    this.ctx.font = '24px Arial'
    this.ctx.fillStyle = '#ffcbeb'
    this.ctx.fillText(this.scoreNumber, DataStore.getInstance().canvas.width / 2, DataStore.getInstance().canvas.height / 18, 1000)

  }
}