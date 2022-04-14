// document.addEventListener("DOMContentLoaded", function () {
//   const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

//   bookmarks.forEach(function (bookmark) {
//     bookmark.addEventListener("click", function (e) {
//       e.currentTarget.classList.toggle("bookmark-active");
//     });
//   });
// });

const bookmarkToggle = document.querySelector('[data-js="bookmarkToggle"]');

bookmarkToggle.addEventListener("click", () => {
  bookmarkToggle.classList.toggle("bookmark-active");
});
