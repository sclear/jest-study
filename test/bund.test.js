// const bt = require('./../bund/bund.js')
// const { bund1, bund2 } = bt
import { bund1, bund2 } from './../bund/bund'
test('我消费大于100 是VIP', ()=> {
    expect(bund1(102)).toBe('VIP')
})
test('点了一个', ()=> {
    expect(bund2(1)).toBe('单人')
})