const {crawlPage} = require('./crawl.js')

function main(){
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

    crawlPage(baseURL)
}

main()