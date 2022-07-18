// Event delegation example
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

// Data attributes
// const ul = document.querySelector('ul');

// ul.addEventListener('click', function (e) {
//   const selectedElement = e.target;
//   console.log('See all data attributtes', selectedElement.dataset);
//   console.log(
//     'See one data attribute',
//     selectedElement.getAttribute('data-model')
//   );
// });
