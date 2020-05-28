'toMatch 字符串匹配器'
test('测试拥有字符串', ()=> {
    expect('123').toMatch(/1/)
    expect('123').toMatch('1')
})


'toContain 数组包含'
test('测试数组是否包含', ()=> {
    expect([1,2,33]).toContain(33)
})


'toThrow 检测异常抛出'
test('检测异常抛出', ()=> {
    expect(function (){
        throw new Error('err')
    }).toThrow()
    expect(function (){
        throw new Error('err')
    }).toThrow('err')
})

'not 匹配器 取反'
test('测试not', ()=> {
    expect(function(){}).not.toThrow()
})
