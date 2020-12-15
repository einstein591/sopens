// FanficUtil

function Person(url, chapter) {
  this.baseUrl = url.split("/").slice(0, 3).join("/");
  this.storyId = url.split("/")[4];
  this.chapter = chapter;
  this.storyName = url.split("/")[6];
  this.baseStoryUrl = [baseUrl, "s"].join("/");
  this.baseReviewUrl = [baseUrl, "r"].join("/");
  
  // Methods ...

  this.getPrevChapterUrl = function() {
    if (storyName == null) {
     return [baseStoryUrl, storyId, chapter - 1].join("/");
    } else {
     return [baseStoryUrl, storyId, chapter - 1, storyName].join("/");
    }
  }
  
  this.getCurrentChapterUrl = function() {
    if (storyName == null) {
     return [baseStoryUrl, storyId, chapter].join("/");
    } else {
     return [baseStoryUrl, storyId, chapter, storyName].join("/");
    }
  }
  
  this.getNextChapterUrl = function() {
    if (storyName == null) {
     return [baseStoryUrl, storyId, chapter + 1].join("/");
    } else {
     return [baseStoryUrl, storyId, chapter + 1, storyName].join("/");
    }
  }
  
  this.getStoryReviewUrl = function() {
    return [baseUrl, "r", storyId].join("/");
  }
  
  this.getPrevChapterReviewsUrl = function() {
    return [getStoryReviewUrl(), chapter - 1, "1"].join("/");
  }
  
  this.getCurrentChapterReviewsUrl = function() {
    return [getStoryReviewUrl(), chapter, "1"].join("/");
  }
  
  this.getNextChapterReviewsUrl = function() {
    return [getStoryReviewUrl(), chapter + 1, "1"].join("/");
  }
}
