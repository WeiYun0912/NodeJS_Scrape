const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

writeStream.write('Link \n');

request('https://math.berkeley.edu/wp/sample-page/',(error,response,html) =>{
	if(!error && response.statusCode == 200){
		const $ = cheerio.load(html);

		// $('.entry-content p').each((i,element) =>{
		// 	const p = $(element).text();
		// 	console.log(p);
		// });
		// //整個entry-content的a標籤的網址都會被搜尋出來
		// $('.entry-content a').each((i,element) =>{
		// 	const link = $(element).attr('href');
		// 	console.log(link);
		// });

		$('.entry-content a').each((i,element)=>{
			const link = $(element).attr('href');
			writeStream.write(`${link} \n`);
		});

	}
});
