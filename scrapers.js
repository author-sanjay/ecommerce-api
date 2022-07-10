var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("mydb");
    console.log("Connection Established");
});
// const puppeteer = require('puppeteer');

// var newlink2="";
// async function scrapeProduct(url){
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
     
//     const [el]= await page.$x('/html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[5]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a')
//     const href = await el.getProperty('href');
//     const srcTxt = await href.jsonValue();
//     var newlink = srcTxt;
//     newlink2=newlink;
//     console.log("Inside")
//     console.log(newlink2);
    
//     browser.close();

   
// }
// console.log("outside")
// console.log(newlink2);
// // async function scrapeProductSingle(url2){
// //     const browser = await puppeteer.launch();
// //     const page2 = await browser.newPage();
// // await page2.goto(url2);
// // const [el2]= await page2.$x('//*[@id="productTitle"]"]')
// // const txt = await el2.getProperty('txt');
// // const rawTxt = await srclocal.jsonValue();

// // console.log({rawTxt});

// // browser.close();
// // }



// scrapeProduct("https://www.amazon.in/s?k=iphone");
// // scrapeProductSingle(newlink2);


