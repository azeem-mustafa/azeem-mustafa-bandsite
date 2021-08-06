
let shows = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Nov 06 2021',
    }
];



const showsList = document.querySelector('.shows-list');

const generateShowsContent = (showData) => {
/*created section for shows*/
const showListSection = document.createElement('section');
showListSection.classList.add('shows__section');

showsList.appendChild(showListSection);

/*create dates section*/

const datesHeader = document.createElement('span');
datesHeader.classList.add('shows__header');
datesHeader.innerText = 'DATES';

showListSection.appendChild(datesHeader);

const datesData = document.createElement('p');
datesData.classList.add('shows__date');
datesData.innerText = showData.date;

showListSection.appendChild(datesData);

/*creates venue section*/

const venueHeader = document.createElement('span');
venueHeader.classList.add('shows__header');
venueHeader.innerText = 'VENUE';

showListSection.appendChild(venueHeader);

const venueData = document.createElement('p');
venueData.classList.add('shows__data');
venueData.innerText = showData.venue;

showListSection.appendChild(venueData);

/*create location section*/

const locationHeader = document.createElement('span');
locationHeader.classList.add('shows__header');
locationHeader.innerText = 'LOCATION';

showListSection.appendChild(locationHeader);

const locationData = document.createElement('p');
locationData.classList.add('shows__data');
locationData.innerText = showData.location;

showListSection.appendChild(locationData);

const buyBtn = document.createElement('button');
buyBtn.classList.add('shows__button');
buyBtn.innerText = 'BUY TICKETS';

showListSection.appendChild(buyBtn);

const divider = document.createElement('hr');
divider.classList.add('shows__divider');

showListSection.appendChild(divider);

return showListSection

}

const generateShowsList = (shows) => {
    for (let i = 0; i < shows.length; i++){
        const showData = shows[i];
        console.log('Shows Data: ', showData);

        const showSections = generateShowsContent(showData);
        console.log('Shows Sections: ', showSections);

        showsList.appendChild(showSections);
    }

}

generateShowsList(shows);


 

