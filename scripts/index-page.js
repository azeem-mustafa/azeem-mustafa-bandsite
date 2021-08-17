const API_URL = 'https://project-1-api.herokuapp.com';
const API_KEY = '5bd52bff-97fc-44b8-8902-8ae513fa3f50';
/*get new API KEY BEFORE SUBBMITTING*/

function displayNewComments() {
    axios
        .get(`${API_URL}/comments?api_key=${API_KEY}`)
        .then(newComments => {
            console.log(newComments);
            const newAPIComments = newComments.data.reverse();

            displayComments(newComments.data);
        });
};

displayNewComments();

const newCommentBlock = (commentsInformation) => {
    axios
        .post(`${API_URL}/comments?api_key=${API_KEY}`, {
            name: commentsInformation.name,
            comment: commentsInformation.comment
        })
        .then(renderNewCommentBlock => {
            displayNewComments(renderNewCommentBlock.data)
        });
}

/*format date*/
function dateDisplay(timeAndDay) {
    const currentDate = new Date(timeAndDay);
    let month = currentDate.getMonth() + 1;
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    return + month + "/" + date + "/" + year;
}

/*created a few extra items here*/

const commentBlock = document.querySelector('.comments__block');

/*listed comments section*/

const listedCommentsBlock = document.createElement('div');
listedCommentsBlock.classList.add('comments__listed-block');
commentBlock.appendChild(listedCommentsBlock);

/*first line divider*/

const firstLineDivider = document.createElement('hr');
firstLineDivider.classList.add('comments__divider');
listedCommentsBlock.appendChild(firstLineDivider);

/*form event*/

const form = document.querySelector('.comments__form');
const userNameField = document.querySelector('.comments__name');
const commentField = document.querySelector('.comments__text-area');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = event.target.user_name.value;
    const userComment = event.target.user_comment.value;

    /*validation*/

    if (userName === "") {
        const nameValidation = document.querySelector('.comments__name');
        nameValidation.classList.add('comments__validation');

        return false;
    }

    if (userComment === '') {
        const commentsValidation = document.querySelector('.comments__text-area');
        commentsValidation.classList.add('comments__validation');

        return false;
    };

    /*new comment submition*/

    const img = document.querySelector('.comments__form-avatar');

    const newComment = {
        img: '../assets/Images/Mohan-muruge.jpg',
        name: userName,
        date: dateDisplay(),
        comment: userComment
    };

    const emptyCommentsBlock = document.querySelector('.comments__listed-block');
    emptyCommentsBlock.innerHTML = "";
    event.target.reset();

    newCommentBlock(newComment);
});


/*creation of listed comment section block*/

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
    listedCommentsDate.innerText = dateDisplay(commentsData.timestamp);

    listedCommentsFlexBox.appendChild(listedCommentsDate);


    /*listed comments text area*/

    const listedCommentsTextArea = document.createElement('blockquote');
    listedCommentsTextArea.classList.add('comments__listed-text-area');
    listedCommentsTextArea.classList.add('body-copy');
    listedCommentsTextArea.innerText = commentsData.comment;

    listedCommentsFlexBox.appendChild(listedCommentsTextArea);

    return listedCommentsSection
}

/*for each loop to create data inside listed comment block*/

let displayComments = (comments) => {
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
