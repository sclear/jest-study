function bund1(m) {
    return m > 100 ? 'VIP' : 'LowB'
}

function bund2(m) {
    return m > 1 ? '多人' : '单人'
}

// module.exports = {
//     bund1,
//     bund2
// }
export {
    bund1,
    bund2
}