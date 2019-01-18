const request = require('request');
const cheerio = require('cheerio');


request('https://math.berkeley.edu/wp/sample-page/',(error,response,html) =>{
	if(!error && response.statusCode == 200){
		const $ = cheerio.load(html);

		//header
		// const entry_header  = $('.entry-header');
		// console.log(entry_header.text());
		// const output = entry_header.children('h1').next().text();
		// console.log(output);

		//--------------------------------------------------------//

		//ALL Page
		// const hfeed_site = $('.hfeed');

		// const output = hfeed_site.find('h1').text();
		// const output = hfeed_site.children('h1').parent().text();

		// console.log(output);

		//------------------------------------------------------//

		//content

		// const entry_content = $('.entry-content');
		// const output = entry_content.children('p').next().next().next().text();

		// console.log(output);


		//整個entry-content的p標籤內容都會被搜尋出來
		$('.entry-content p').each((i,element) =>{
			const p = $(element).text();
			// console.log(p);
		});
		//整個entry-content的a標籤的網址都會被搜尋出來
		$('.entry-content a').each((i,element) =>{
			const link = $(element).attr('href');
			console.log(link);
		});
	}
});
