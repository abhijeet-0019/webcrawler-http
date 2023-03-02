const {normalizeURL, getURLsfromHTML} = require('./crawl')
const {test, expect} = require('@jest/globals')


test('normalizeURL', ()=>{
    const input = 'https://BLog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

// remove protocol -> logic implemented
// remove trailing slashes -> logic implemented
// remove capitals -> URL constructor taking care
// also working with http -> yes working, URL constructor already removing it


test('getURLsfromHTML absolute', ()=>{
    const input = `
        <html>
            <body>
                <a href="https://blog.boot.dev">
                    Boot.dev Blog
                </a>
            </body>
        <html>
    `
    const inputBaseURL = 'https://blog.boot.dev'
    const actual = getURLsfromHTML(input, inputBaseURL)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected)
})

test('getURLsfromHTML relative', ()=>{
    const input = `
        <html>
            <body>
                <a href="/path/">
                    Boot.dev Blog
                </a>
            </body>
        <html>
    `
    const inputBaseURL = 'https://blog.boot.dev'
    const actual = getURLsfromHTML(input, inputBaseURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})

test('getURLsfromHTML error', ()=>{
    const input = `
        <html>
            <body>
                <a href="invalid">
                    Boot.dev Blog
                </a>
            </body>
        <html>
    `
    const inputBaseURL = 'https://blog.boot.dev'
    const actual = getURLsfromHTML(input, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})