//Event delegation example
// const form = document.querySelector('form');
// const friendList = document.querySelector('#friend-list');

// friendList.addEventListener('click', function (e) {
//   if (e.target.tagName === 'BUTTON') {
//     e.target.parentElement.remove();
//   }
// });

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const newFriendInput = document.querySelector('#first-name');
//   const newLi = document.createElement('li');
//   const newButton = document.createElement('button');
//   newLi.innerText = newFriendInput.value;
//   newButton.innerText = 'Remove';

//   newLi.append(newButton);
//   friendList.append(newLi);
//   form.reset();
// });
