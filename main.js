const {crawlPage} = require('./crawl.js')
const { printReport } = require('./report.js')

async function main(){
    if(process.argv.length < 3){
        console.log("no website provided")
        process.exit(1) // error code 
    }
    if(process.argv.length > 3){
        console.log("too many command line argumnets")
        process.exit(1) // error code 
    }

    // below answer to why length < and > 3
    
    // console.log("-----------------------")
    // for(const arg of process.argv){
    //     console.log(arg)
    // }

    // why argv[2] --> answer in the above console
    const baseURL = process.argv[2]

    console.log(`started crawl of ${baseURL}`)

    const pages = await crawlPage(baseURL, baseURL, {})
    for(const page of Object.entries(pages)){
        // console.log(`page ---> ${page}`)
        printReport(pages)
    }
}

main()