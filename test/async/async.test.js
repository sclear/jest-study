function axios() {
    return new Promise((resolve, reject)=> {
        resolve({ success: true })
    })
}
function axiosFail() {
    return new Promise((resolve, reject)=> {
        reject({ fail: 404 })
    })
}
// 异步测试 
' 异步测试添加done方法 '
test('异步测试 done', (done)=> {
    axios().then(res=> {
        expect(res).toEqual({ success: true })
        done()
    })
})

test('异步测试 返回值', ()=> {
    return axios().then(res=> {
        expect(res).toEqual({ success: true })
    })
})


// 接口异常 404 测试
test('测试404', ()=> {
    return axiosFail().catch(err=> {
        expect(err.fail === 404).toBe(true)
    })
})

// async
test('async', async ()=> {
    let req = await axios()
    expect(req.success).toBe(true)
})
