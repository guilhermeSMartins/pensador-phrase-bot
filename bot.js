const cheerio = require('cheerio');
const request = require('request');

(async () => {
    // const htmlRequest = request.get(`https://www.pensador.com/frases_filosofos/${Math.round((Math.random() * 17) + 1)}/`,);
    // const $ = cheerio.load(htmlRequest);

    // console.log($('div[data-alt]').attr('data-alt'))
    request(`https://www.pensador.com/frases_filosofos/${Math.round((Math.random() * 17) + 1)}/`, (err, res, html) => {
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(html);

            const chooseCard = $('.thought-card')[Math.round((Math.random() * $('.thought-card').length) + 1)]

            const [phrase, author] = $(`#${chooseCard.attribs.id}`).attr('data-alt').split('... Frase de');
            //const author = $(`#${chooseCard.attribs.id} `).text();

            console.log(phrase, author);
            //console.log(author);
        }
    })
})()