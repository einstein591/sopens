// ==UserScript==
// @name         FanficUtil
// @namespace    https://greasyfork.org/en/users/705154-ben-jackson
// @version      2.0
// @description  FanficUtil
// @author       sopens
// ==/UserScript==

function FanficUtil() {
  this.url = null;
  this.chapter = null;
  this.baseUrl = this.url.split("/").slice(0, 3).join("/");
  this.storyId = this.url.split("/")[4];
  this.storyName = this.url.split("/")[6];
  this.baseStoryUrl = [this.baseUrl, "s"].join("/");
  this.baseReviewUrl = [this.baseUrl, "r"].join("/");

  // Methods ...

  this.initialize = function(url, chapter) {
    this.url = url;
    this.chapter = chapter;
  };

  this.getPrevChapterUrl = function() {
    if (this.storyName == null) {
      return [this.baseStoryUrl, this.storyId, this.chapter - 1].join("/");
    } else {
      return [this.baseStoryUrl, this.storyId, this.chapter - 1, this.storyName].join("/");
    }
  };

  this.getCurrentChapterUrl = function() {
    if (this.storyName == null) {
      return [this.baseStoryUrl, this.storyId, this.chapter].join("/");
    } else {
      return [this.baseStoryUrl, this.storyId, this.chapter, this.storyName].join("/");
    }
  };

  this.getNextChapterUrl = function() {
    if (this.storyName == null) {
      return [this.baseStoryUrl, this.storyId, this.chapter + 1].join("/");
    } else {
      return [this.baseStoryUrl, this.storyId, this.chapter + 1, this.storyName].join("/");
    }
  };

  this.getStoryReviewUrl = function() {
    return [this.baseUrl, "r", this.storyId].join("/");
  };

  this.getPrevChapterReviewsUrl = function() {
    return [this.getStoryReviewUrl(), this.chapter - 1, "1"].join("/");
  };

  this.getCurrentChapterReviewsUrl = function() {
    return [this.getStoryReviewUrl(), this.chapter, "1"].join("/");
  };

  this.getNextChapterReviewsUrl = function() {
    return [this.getStoryReviewUrl(), this.chapter + 1, "1"].join("/");
  };
}
