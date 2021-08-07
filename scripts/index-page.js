let comments = [
    {
        img: '#',
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        img: '#',
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        img: '#',
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`
    },
]


const commentBlock = document.querySelector('.comments__block');



const form = document.querySelector('.comments__form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(event.target.form);
});


/*divider*/

const divider = document.createElement('hr');
divider.classList.add('comments__divider');

commentBlock.appendChild(divider);


/*already written comments*/


/*listed comments section*/

const listedCommentsBlock = document.createElement('div');
listedCommentsBlock.classList.add('comments__listed-block');

commentBlock.appendChild(listedCommentsBlock);


const generateListedComments = (commentsData) => {

const listedCommentsSection = document.createElement('section');
listedCommentsSection.classList.add('comments__listed-comments-section');

listedCommentsBlock.appendChild(listedCommentsSection);

/*list names*/

const listedCommentsNameHeader = document.createElement('p');
listedCommentsNameHeader.classList.add('comments__listed-subheader');
listedCommentsNameHeader.classList.add('body-copy');
listedCommentsNameHeader.innerText = commentsData.name; 

listedCommentsSection.appendChild(listedCommentsNameHeader);

/*listed comments avatar*/

const listedCommentsAvatar = document.createElement('img');
listedCommentsAvatar.classList.add('comments__avatar-placeholder');


listedCommentsSection.appendChild(listedCommentsAvatar);


/*listed date*/

const listedCommentsDate = document.createElement('p');
listedCommentsDate.classList.add('comments__listed-date');
listedCommentsDate.classList.add('body-copy');
listedCommentsDate.innerText = commentsData.date;

listedCommentsSection.appendChild(listedCommentsDate);


/*listed comments text area*/

const listedCommentsTextArea = document.createElement('blockquote');
listedCommentsTextArea.classList.add('comments__listed-text-area');
listedCommentsTextArea.classList.add('body-copy');
listedCommentsTextArea.innerText = commentsData.comment;

listedCommentsSection.appendChild(listedCommentsTextArea);

const listedDivider = document.createElement('hr');
listedDivider.classList.add('comments__divider');

listedCommentsSection.appendChild(listedDivider);

return listedCommentsSection

}

const generateCommentsList = (comments) => {
    for (let i = 0; i < comments.length; i++){
        const commentsData = comments[i];
        console.log('Comments Data: ', commentsData);

        const commentsSections = generateListedComments(commentsData);
        console.log('Comments Sections: ', commentsSections);

        listedCommentsBlock.appendChild(commentsSections);
    }
}


generateCommentsList(comments);





















