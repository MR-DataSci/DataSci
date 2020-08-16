//Handlebars
const context = {
    analysesInfo: [
        {
            link: './titanic.html',
            name: 'Titanic survival prediction',
            description: 'Creating a classification model using Logistic Regression and KNeareast Neighbors on the famous Titanic dataset',
            image: './ressources/img/titanic.jpg'
        },
        {
            link: './diamond.html',
            name: 'Diamond price predictor',
            description: 'Creating a price prediction tool using an artificial neural network',
            image: './ressources/img/diamond.jpg'
        },
        {
            link: './arebours.html',
            name: 'Text analysis',
            description: 'Using Natural Language Processing, visualizing themes in a novel',
            image: './ressources/img/arebours.jpg'
        },
        {
            link: './scrabble.html',
            name: 'Scrabble letter selection',
            description: 'Creating a letter selection for scrabble using Python logic',
            image: './ressources/img/scrabble.jpg'
        }
    ]
};
const templateArticles = document.getElementById('articlesTemplate');
const templateSource = templateArticles.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('info').innerHTML = compiledHtml;

//Animations

let delay=400;
let anim=500
$(document).ready(() => {
    $('.articleBox').on('mouseenter', (event) => {
        $(event.currentTarget).children('.articleImageBox').delay(delay).animate({
            left: '-300px'
        },anim)
        $(event.currentTarget).children('.articleDescriptionBox').delay(delay).animate({
            opacity: '1'
        },anim)
    }).on('mouseleave', () => {
        $(event.currentTarget).children('.articleImageBox').delay(delay).animate({
            left:'0px'
        },anim)
        $(event.currentTarget).children('.articleDescriptionBox').delay(delay).animate({
            opacity: '0'
        },anim)
    })
})