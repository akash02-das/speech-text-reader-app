const main = document.querySelector('main');
const voiceSelected = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [{
        image: './img/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: './img/hungry.jpg',
        text: "I'm Hungry"
    },
    {
        image: './img/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: './img/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: './img/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: './img/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: './img/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: './img/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: './img/outside.jpg',
        text: "I want to go Outside"
    },
    {
        image: './img/home.jpg',
        text: "I want to go Home"
    },
    {
        image: './img/school.jpg',
        text: "I want to go to School"
    },
    {
        image: './img/go.jpg',
        text: "I want to go there"
    },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
    const box = document.createElement('div');

    const {
        image,
        text
    } = item;

    box.classList.add('box');

    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;

    // @Todo - Speak Event
    main.appendChild(box);
}

// Store voices
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach((voice) => {
        const option = document.createElement('option');

        option.value = voice.name;

        option.innerText = `${voice.name} ${voice.lang}`;

        voiceSelected.appendChild(option);
    });
}

// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.toggle('show');
});

// Toggle text box close button
closeBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.remove('show');
});

getVoices();