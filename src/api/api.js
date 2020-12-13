import db from '../plugins/datastore'

/** 输出目录 */
export const getOutput = () => {
    return db.get('output').value() 
}

export const setOutput = (output) => {
    db.set('output', output).write()
}

/** 压缩类型*/
export const getType = () => {
    return db.get('type').value() 
}

export const setType = (type) => {
    db.set('type', type).write()
}

/** 百分比 */
export const getPercent = ()=>{
    return db.get('percent').value()
}

export const setPercent = (percent) => {
    db.set('percent', percent).write()
}

/** 宽高数据 */
export const getSize = ()=>{
    return db.get('size').value()
}

export const setSize = (size) => {
    db.set('size', size).write()
}