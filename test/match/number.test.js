'toBeGreaterThan 数字匹配器  匹配大于该值'
test('大于9',()=> {
    let num = 10
    expect(num).toBeGreaterThan(9)
}) 

'toBeLessThan 匹配少于一个数字 小于'
test('测试小于', ()=> {
    let a = 9
    expect(a).toBeLessThan(10)
})

'toBeCloseTo 匹配非严格相等数字 例如0.1+0.2'
test('0.1 + 0.2', ()=> {
    expect(0.1+0.2).toBeCloseTo(0.3)
})