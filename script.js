const faqArray = [
    {
        title: 'What is Javascript ?',
        detail: 'It is programming language!'
    },
    {
        title: 'Why to learn Javascript ?',
        detail: 'Because one can do a lot of stuff using Javascript, like creating stunning websites.'
    },
    {
        title: 'Where to learn Javscript ?',
        detail: 'There are multiple resources available online including free and paid ones, for example youtube tutorials obviously free they are there are paid courses too on different platforms.'
    },
    {
        title: 'Is learning Javascript a fun ?',
        detail: 'absolutely!'
    }
];

const makeHTML = data => {
    return `<details>
        <summary>${data.title}</summary>
        <p>${data.detail}</p>
    </details>`
}

const containerElement = document.getElementById('faq-container');
containerElement.innerHTML = faqArray.map(dataItem => makeHTML(dataItem)).join('');