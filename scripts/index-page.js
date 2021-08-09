const comments = [
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

/*form event*/

const form = document.querySelector('.comments__form');
const userNameField = document.querySelector('.comments__name');
const commentField = document.querySelector('.comments__text-area');

form.addEventListener('submit', function(event){
    event.preventDefault();
   
    const userName = event.target.user_name.value;
    const userComment = event.target.user_comment.value;
    

    /*validation*/

    if (userName === ""){
        const valMessage = document.querySelector('.comments__name');
        valMessage.classList.add('validation');

        return false
    }
    if (userComment === ''){
        const valMessage = document.querySelector('.comments__text-area');
        valMessage.classList.add('validation');

        return false
    };


    /*format date*/

    const currentDate = new Date(Date.now());
    const formattedDate =currentDate.getMonth() + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();

    /*new comment submition*/

    const newComment = {
        img: '../assets/Images/Mohan-muruge.jpg',
        name: userName,
        date: formattedDate,
        comment: userComment
    };

    comments.unshift(newComment);

    const emptyCommentsBlock = document.querySelector('.comments__listed-block');
    emptyCommentsBlock.innerHTML = "";
    
    

    

    displaycomments(comments);
   
});

/*already written comments*/


/*listed comments section*/

const listedCommentsBlock = document.createElement('div');
listedCommentsBlock.classList.add('comments__listed-block');
commentBlock.appendChild(listedCommentsBlock);

/*first line divider*/

const firstLineDivider = document.createElement('hr');
firstLineDivider.classList.add('comments__divider');
listedCommentsBlock.appendChild(firstLineDivider);



const generateListedComments = (commentsData) => {

const listedCommentsSection = document.createElement('section');
listedCommentsSection.classList.add('comments__listed-comments-section');

listedCommentsBlock.appendChild(listedCommentsSection);

/*listed comments avatar flex box*/

const listedImgFlexBox = document.createElement('div');
listedImgFlexBox.classList.add('comments__listed-img-flexbox');

listedCommentsSection.appendChild(listedImgFlexBox);

/*listed comments avatar*/

const listedCommentsAvatar = document.createElement('img');
listedCommentsAvatar.classList.add('comments__avatar-placeholder');

listedImgFlexBox.appendChild(listedCommentsAvatar);

/*listed comments flex box*/

const listedCommentsFlexBox = document.createElement('div');
listedCommentsFlexBox.classList.add('comments__listed-comments-flexbox');

listedCommentsSection.appendChild(listedCommentsFlexBox);


/*list names*/

const listedCommentsNameHeader = document.createElement('p');
listedCommentsNameHeader.classList.add('comments__listed-subheader');
listedCommentsNameHeader.classList.add('body-copy');
listedCommentsNameHeader.innerText = commentsData.name; 

listedCommentsFlexBox.appendChild(listedCommentsNameHeader);

/*listed date*/

const listedCommentsDate = document.createElement('p');
listedCommentsDate.classList.add('comments__listed-date');
listedCommentsDate.classList.add('body-copy');
listedCommentsDate.innerText = commentsData.date;

listedCommentsFlexBox.appendChild(listedCommentsDate);


/*listed comments text area*/

const listedCommentsTextArea = document.createElement('blockquote');
listedCommentsTextArea.classList.add('comments__listed-text-area');
listedCommentsTextArea.classList.add('body-copy');
listedCommentsTextArea.innerText = commentsData.comment;

listedCommentsFlexBox.appendChild(listedCommentsTextArea);




return listedCommentsSection


}


const displaycomments = (comments) => {
    comments.forEach(comment => { 
        const commentsData = comment;
        console.log('Comments Data: ', commentsData);

        const commentsSections = generateListedComments(commentsData);
        console.log('Comments Sections: ', commentsSections);

        listedCommentsBlock.appendChild(commentsSections);

        /*line divider*/

        const listedDivider = document.createElement('hr');
        listedDivider.classList.add('comments__divider');

        listedCommentsBlock.appendChild(listedDivider);
    })
}


displaycomments(comments);






















