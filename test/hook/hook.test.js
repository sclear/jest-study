
' 钩子函数 beforeAll '

test('hook', ()=> {
  console.log('hook ') 
})
test('hook1', ()=> {
  console.log('hook1 ') 
})

// page in
beforeAll(()=> {
    console.log('BeforeAll')
})
// page leave
afterAll(()=> {
    console.log('AfterAll')
})
// module in
beforeEach(()=> {
    console.log('beforEach')
})
// module leave
afterEach(()=> {
    console.log('aterEach')
})