export function renderPost(postItem) {
    const postDiv = document.createElement('div');
    const questionEl = document.createElement('p');
    const userEl = document.createElement('p');
    const replyOneEl = document.createElement('p');
    const replyTwoEl = document.createElement('p');
    const replyThreeEl = document.createElement('p');

    postDiv.classList.add('post');
    
    questionEl.textContent = postItem.question;
    userEl.textContent = postItem.user;
    replyOneEl.textContent = postItem.replies[0];
    replyTwoEl.textContent = postItem.replies[1];
    replyThreeEl.textContent = postItem.replies[2];

    postDiv.append(questionEl, userEl, replyOneEl, replyTwoEl, replyThreeEl);

    return postDiv;

}