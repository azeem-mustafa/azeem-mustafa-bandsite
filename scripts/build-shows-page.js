
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
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Fancisco, CA'
    }

];



const showsList = document.querySelector('.shows__list');

const generateShowsContent = (showData) => {
/*created section for shows*/
const showListSection = document.createElement('section');
showListSection.classList.add('shows__section');

showsList.appendChild(showListSection);

/*create dates section*/

const datesHeader = document.createElement('span');
datesHeader.classList.add('shows__header');
datesHeader.classList.add('body-copy');
datesHeader.innerText = 'DATES';

showListSection.appendChild(datesHeader);

const datesData = document.createElement('p');
datesData.classList.add('shows__date');
datesData.classList.add('body-copy')
datesData.innerText = showData.date;

showListSection.appendChild(datesData);

/*creates venue section*/

const venueHeader = document.createElement('span');
venueHeader.classList.add('shows__header');
venueHeader.classList.add('body-copy');
venueHeader.innerText = 'VENUE';

showListSection.appendChild(venueHeader);

const venueData = document.createElement('p');
venueData.classList.add('shows__data');
venueData.classList.add('body-copy');
venueData.innerText = showData.venue;

showListSection.appendChild(venueData);

/*create location section*/

const locationHeader = document.createElement('span');
locationHeader.classList.add('shows__header');
locationHeader.classList.add('body-copy');
locationHeader.innerText = 'LOCATION';

showListSection.appendChild(locationHeader);

const locationData = document.createElement('p');
locationData.classList.add('shows__data');
locationData.classList.add('body-copy');
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


 
