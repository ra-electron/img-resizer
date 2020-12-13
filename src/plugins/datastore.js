import Datastore from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import fs from 'fs-extra'
import {
    app,
    remote
} from 'electron'

// app模块是main进程里特有的，renderer进程应该使用remote.app模块
const APP = process.type === 'renderer' ? remote.app : app


const STORE_PATH = APP.getPath('userData')


// 生产模式下，第一次打开应用的过程中，APP.getPath('userData')获取的路径并未创建，而datastore.js却已经被加载，所以会报错
if (process.type !== 'renderer') {
    if (!fs.pathExistsSync(STORE_PATH)) { // 如果不存在路径
        fs.mkdirpSync(STORE_PATH) // 就创建
    }
}
const adapter = new FileSync(path.join(STORE_PATH, '/data.json'))

// lowdb 接管数据
const db = Datastore(adapter)


/** 初始化数组，需要提前指定数据库的基本结构 */

// 输出目录
if (!db.has('output').value()) {
    db.set('output', '').write()
}

// 压缩类型
if (!db.has('type').value()) {
    db.set('type', 1).write()
}

// 百分比数据
if (!db.has('percent').value()) {
    db.set('percent', 50).write()
}

// 宽高数据
if (!db.has('size').value()) {
    db.set('size', {
        width: 200,
        height: 200
    }).write()
}

export default db