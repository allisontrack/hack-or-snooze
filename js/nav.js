"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}


$navSubmit.on("click", createNewStoryFromSubmit);

function createNewStoryFromSubmit() {
  console.debug("createNewStoryFromSubmit");
  hidePageComponents();
  $submitForm.show()



// make story from form from nav button
// const new Story whatevs =

// {
//   "story": {
//     "author": "Matt Lane",
//     "createdAt": "017-11-09T18:38:39.409Z",
//     "storyId": "5081e46e-3143-4c0c-bbf4-c22eb11eb3f5",
//     "title": "The Best Story Ever",
//     "updatedAt": "017-11-09T18:38:39.409Z",
//     "url": "https://www.rithmschool.com/blog/do-web-developers-need-to-be-good-at-math",
//     "username": "hueter"
//   }
// }







}



function showListOfFavourites() {


}



function showListOfUserStories() {

  
}