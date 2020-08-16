const context = {
    analysesInfo: [
        {
            link: './titanic.html',
            name: 'Titanic survival prediction',
            description: 'Creating a classification model using Logistic Regression and KNeareast Neighbors on the famous Titanic dataset',
            image: './ressources/img/titanic.jpg'
        }
    ]

};


const templateArticles = document.getElementById('articlesTemplate');

const templateSource = templateArticles.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('info').innerHTML = compiledHtml;

$(document).ready(() => {
    $('.article').on('mouseenter', () => {
        $('.articleImageBox').delay(400).animate({
            left: '-475px'
        },400)
        $('.articleDescriptionBox').delay(400).animate({
            opacity: '1'
        })
    }).on('mouseleave', () => {
        $('.articleImageBox').delay(400).animate({
            left:'0px'
        },400)
        $('.articleDescriptionBox').delay(400).animate({
            opacity: '0'
        })
    })
})