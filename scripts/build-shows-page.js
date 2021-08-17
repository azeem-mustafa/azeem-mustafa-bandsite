const API_URL = 'https://project-1-api.herokuapp.com';
const API_KEY = '5bd52bff-97fc-44b8-8902-8ae513fa3f50';


function displayNewShowList() {
    axios.get(`${API_URL}/showdates?api_key=${API_KEY}`)
        .then(newShows => {
            console.log(newShows);
        
            const newAPIShows = newShows.data.reverse();

            generateShowsList(newShows.data)
        });
};

displayNewShowList();

/*format date*/
function dateDisplay(timeAndDay){

    const currentDate = new Date(timeAndDay * 1);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"];

    let month = monthNames[currentDate.getMonth()];
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();
    let day = dayNames[currentDate.getDay()];

    return day + " " + month + " " + date + " " + year
}

const showsList = document.querySelector('.shows__list');

const generateShowsContent = (showData) => {
    /*created section for shows*/
    const showListSection = document.createElement('section');
    showListSection.classList.add('shows__section');

    showsList.appendChild(showListSection);

    /*create a div for each show's information*/

    const showListBlock = document.createElement('div');
    showListBlock.classList.add('shows__block');

    showListSection.appendChild(showListBlock);

    /*create dates section*/

    const datesBlock = document.createElement('div');
    datesBlock.classList.add('shows__dates-block');

    showListBlock.appendChild(datesBlock);

    const datesHeader = document.createElement('span');
    datesHeader.classList.add('shows__header');
    datesHeader.classList.add('labels-and-buttons');
    datesHeader.innerText = 'DATES';

    datesBlock.appendChild(datesHeader);

    const datesData = document.createElement('p');
    datesData.classList.add('shows__date');
    datesData.classList.add('body-copy')
    datesData.innerText = dateDisplay(showData.date);

    datesBlock.appendChild(datesData);

    /*creates venue section*/

    const venueBlock = document.createElement('div');
    venueBlock.classList.add('shows__venue-block');

    showListBlock.appendChild(venueBlock);

    const venueHeader = document.createElement('span');
    venueHeader.classList.add('shows__header');
    venueHeader.classList.add('labels-and-buttons');
    venueHeader.innerText = 'VENUE';

    venueBlock.appendChild(venueHeader);

    const venueData = document.createElement('p');
    venueData.classList.add('shows__data');
    venueData.classList.add('body-copy');
    venueData.innerText = showData.place;

    venueBlock.appendChild(venueData);

    /*create location section*/

    const locationBlock = document.createElement('div');
    locationBlock.classList.add('shows__location-block');

    showListBlock.appendChild(locationBlock);

    const locationHeader = document.createElement('span');
    locationHeader.classList.add('shows__header');
    locationHeader.classList.add('labels-and-buttons');
    locationHeader.innerText = 'LOCATION';

    locationBlock.appendChild(locationHeader);

    const locationData = document.createElement('p');
    locationData.classList.add('shows__data');
    locationData.classList.add('body-copy');
    locationData.innerText = showData.location;

    locationBlock.appendChild(locationData);

    /*button section*/

    const buttonBlock = document.createElement('div');
    buttonBlock.classList.add('shows__button-block');

    showListBlock.appendChild(buttonBlock);

    const buyBtn = document.createElement('button');
    buyBtn.classList.add('shows__button');
    buyBtn.classList.add('labels-and-buttons');
    buyBtn.innerText = 'BUY TICKETS';

    buttonBlock.appendChild(buyBtn);

    /*button event listener*/

    buyBtn.addEventListener('click', () => {
        console.log(showData.venue)
    });

    /*line divider*/

    const divider = document.createElement('hr');
    divider.classList.add('shows__divider');

    showListSection.appendChild(divider);

    return showListSection
}

let generateShowsList = (shows) => {
    shows.forEach(show => {
        const showData = show;
        console.log('Shows Data: ', showData);

        const showSections = generateShowsContent(showData);
        console.log('Shows Sections: ', showSections);

        showsList.appendChild(showSections);
    })
};
