// grab the body
// add an event listener to the body --> to the document
// 0 - 255
// want to keep the ratio of the screen (width and height) up to 255
// so ratio updates when screen size changes
// where is the mouse on the page and how does that compare to the avail
// window width and height?

document.addEventListener('mousemove', function (e) {
  const g = 0;
  let r = Math.round((e.clientX * 255) / window.innerWidth);
  let b = Math.round((e.clientY * 255) / window.innerHeight);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
