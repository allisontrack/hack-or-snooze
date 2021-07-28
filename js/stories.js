"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}


// add new story to page here


async function getNewStoryData(evt) {
  console.debug("getNewStoryData", evt);
  evt.preventDefault();
  
  // get new story title, author, and url

  const title = $("#title-input").val();
  const author = $("#author-input").val();
  const url = $("#url-input").val();

  console.log(title, author, url)

  console.log(currentUser.loginToken, currentUser.username);

  await storyList.addStory(currentUser, {title, author, url});

  putStoriesOnPage();

  $submitForm.hide();
  $allStoriesList.show();


}


$submitForm.on("submit", getNewStoryData);



async function addNewStoryToPage(evt) {
  console.debug("addNewStoryToPage", evt);


}



function removeStoryFromPage() {


}


function favouriteAStoryOnPage() {


}

function unfavouriteAStoryOnPage() {

  
}