const {normalizeURL} = require('./crawl')
const {test, expect} = require('@jest/globals')

test('normalizeURL', ()=>{
    const input = 'https://BLog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})