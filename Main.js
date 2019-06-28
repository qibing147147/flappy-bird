import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./js/runtime/Director.js";
import { BackGround } from "./js/runtime/BackGround.js";
import { DataStore } from "./js/base/DataStore.js";
import { Land } from "./js/runtime/Land.js";
import { Birds } from "./js/player/Birds.js";
import { StartButton } from "./js/player/StartButton.js";
import { Score } from "./js/player/Score.js";
import { ApiExamples } from "./js/APIExamples.js";

// 初始化整个游戏 也是入口
export class Main{
  constructor() {
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    const loader = ResourceLoader.create()
    loader.onLoaded(map => this.onResourceFirstLoaded(map))
  }


  //需要销毁的放在map中，需要长期保存的直接放在实例的原型链上
  onResourceFirstLoaded(map) {
    this.dataStore.canvas = this.canvas
    this.dataStore.ctx = this.ctx
    this.dataStore.res = map
    this.createBackgroundMusic()
    const examples = new ApiExamples()
    examples.download()
    this.init()
  }

  createBackgroundMusic() {
    const bgm = wx.createInnerAudioContext()
    bgm.autoplay = true
    bgm.loop = true
    bgm.src = './res/bgm.mp3'
  }

  init() {
    // 首先重置游戏是没有结束的

    this.director.isGameOver = false
    this.dataStore
    .put('pencils', [])
    .put('background', BackGround)
    .put('land', Land)
    .put('birds', Birds)
    .put('startButton', StartButton)
    .put('score', Score)
    this.registerEvent()
    // 要在游戏逻辑运行之前创造一组铅笔
    this.director.createPencil()
    this.director.run()
  }

  registerEvent() {
    // this.canvas.addEventListener('touchstart', e => {
    //   //屏蔽掉默认事件
    //   e.preventDefault()
    //   if (this.director.isGameOver) {
    //     this.init()
    //   } else {
    //     this.director.birdsEvent()
    //   }
    // })
    wx.onTouchStart(() => {
      if (this.director.isGameOver) {
        this.init()
      } else {
        this.director.birdsEvent()
      }
    }) 
  }
}