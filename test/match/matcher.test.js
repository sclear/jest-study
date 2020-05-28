'toBe 匹配器(近乎相等)'
test('测试符合度', ()=> {
    expect('00').toBe('00')
})

test('测试A相等', ()=> {
    let a = { name: 'jc' }
    expect(a).toBe(a)
})


'toEqual 内容相等 未必引用地址相同'
test('测试严格相等', ()=> {
    let a = { name: 'jc' }
    expect(a).toEqual({ name: 'jc' })
})

'toBeNull 匹配null '
test('测试Null', ()=> {
    let a = null
    expect(a).toBeNull()
})

'toBeUndifined 匹配undifined'
test('匹配Undifined', ()=> {
    let a = undefined;
    expect(a).toBeUndefined()
})

'toBeDefined 匹配已定义'

'toBetruthy 匹配真 true'
test('测试真假', ()=> {
    let a = 1
    expect(a).toBeTruthy()
})

'toBeFalsy 匹配假 false '





