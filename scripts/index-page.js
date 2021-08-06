const commentBlock = document.querySelector('.comments__block');

/*Add image*/


const commentsAvatar = document.createElement('img');
commentsAvatar.classList.add('comments__avatar');

commentBlock.appendChild(commentsAvatar);

/*Name Field*/

const commentsNameHeader = document.createElement('label');
commentsNameHeader.classList.add('comments__subheader');
commentsNameHeader.innerText = 'NAME';

commentBlock.appendChild(commentsNameHeader);

const commentsNameForm = document.createElement('input');
commentsNameForm.classList.add('comments__fullName');


commentBlock.appendChild(commentsNameForm);
document.querySelector(".comments__fullName").placeholder = 'Enter Your Name';

/*comment section*/

const commentsTextAreaHeader = document.createElement('label');
commentsTextAreaHeader.classList.add('comments__subheader');
commentsTextAreaHeader.innerText = 'COMMENT';

commentBlock.appendChild(commentsTextAreaHeader);

/*comment section text area*/

const commentsTextArea = document.createElement('textarea');
commentsTextArea.classList.add('comments__text-area');

commentBlock.appendChild(commentsTextArea);

document.querySelector(".comments__text-area").placeholder = 'Add New Comment';

/*button section*/

const commentBtn = document.createElement('button');
commentBtn.classList.add('comments__button');
commentBtn.innerText = 'COMMENT';

commentBlock.appendChild(commentBtn);

/*divider*/

const divider = document.createElement('hr');
divider.classList.add('comments__divider');

commentBlock.appendChild(divider);


/*already written comments*/


/*listed comments section*/

const listedCommentsSection = document.createElement('section');
listedCommentsSection.classList.add('comments__listed-comments-section');

commentBlock.appendChild(listedCommentsSection);

/*actual listed comments*/

const listedComments = document.createElement('div');
listedComments.classList.add('comments__listed-comments');

listedCommentsSection.appendChild(listedComments);

/*listed comments avatar*/

const listedCommentsAvatar = document.createElement('img');
listedCommentsAvatar.classList.add('comments__listed-avatar');

listedComments.appendChild(listedCommentsAvatar);

/*listed comments name*/

const listedCommentsNameHeader = document.createElement('label');
listedCommentsNameHeader.classList.add('comments__listed-subheader');
listedCommentsNameHeader.innerText = 'NAME'; /*put in a let function*/

listedComments.appendChild(listedCommentsNameHeader);

/*listed comments text area*/

const listedCommentsTextArea = document.createElement('textarea');
listedCommentsTextArea.classList.add('comments__listed-text-area');

listedComments.appendChild(listedCommentsTextArea);





















