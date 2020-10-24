function getmetatags(url) {
	 $ = cheerio.load(url);
 
  metatags = {};
  metatags.title = $('head title').text(),
  metatags.description = $('meta[name="description"]').attr('content'),
  metatags.keywords = $('meta[name="keywords"]').attr('content'),
  metatags.ogTitle = $('meta[property="og:title"]').attr('content'),
  metatags.ogkeywords = $('meta[property="og:keywords"]').attr('content'),
  metatags.images = $('img');
  console.log(metatags)l
}

getmetatags(url);