// Name:    FanficUtil.js
// Author:  sopens

var FanficUtil = {
  url: null,
  chapter: null,
  baseUrl: this.url.split("/").slice(0, 3).join("/"),
  storyId: this.url.split("/")[4],
  storyName: this.url.split("/")[6],
  baseStoryUrl: [this.baseUrl, "s"].join("/"),
  baseReviewUrl: [this.baseUrl, "r"].join("/"),
  
  // Methods ...
  
  initialize: function(url, chapter) {
    this.url = url;
    this.chapter = chapter;
  },

  getPrevChapterUrl: function() {
    if (this.storyName == null) {
     return [this.baseStoryUrl, this.storyId, this.chapter - 1].join("/");
    } else {
     return [this.baseStoryUrl, this.storyId, this.chapter - 1, this.storyName].join("/");
    }
  },
  
  getCurrentChapterUrl: function() {
    if (this.storyName == null) {
     return [this.baseStoryUrl, this.storyId, this.chapter].join("/");
    } else {
     return [this.baseStoryUrl, this.storyId, this.chapter, this.storyName].join("/");
    }
  },
  
  getNextChapterUrl: function() {
    if (this.storyName == null) {
     return [this.baseStoryUrl, this.storyId, this.chapter + 1].join("/");
    } else {
     return [this.baseStoryUrl, this.storyId, this.chapter + 1, this.storyName].join("/");
    }
  },
  
  getStoryReviewUrl: function() {
    return [this.baseUrl, "r", this.storyId].join("/");
  },
  
  getPrevChapterReviewsUrl: function() {
    return [this.getStoryReviewUrl(), this.chapter - 1, "1"].join("/");
  },
  
  getCurrentChapterReviewsUrl: function() {
    return [this.getStoryReviewUrl(), this.chapter, "1"].join("/");
  },
  
  getNextChapterReviewsUrl: function() {
    return [this.getStoryReviewUrl(), this.chapter + 1, "1"].join("/");
  };
}
