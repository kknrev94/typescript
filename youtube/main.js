var Youtube = /** @class */ (function () {
    function Youtube(title, screen_size, views, publishedBy, publishedOn, description, category, comments, license) {
        var _this = this;
        this.title = title;
        this.screen_size = screen_size;
        this.views = views;
        this.publishedBy = publishedBy;
        this.publishedOn = publishedOn;
        this.description = description;
        this.category = category;
        this.comments = comments;
        this.license = license;
        this.getNumberOfViews = function () {
            console.log(" No of Views-" + _this.views + " -this is just a sample");
        };
        this.shareItButton = function () {
            console.log("click on share button to share the video ");
        };
        this.addItToFavourites = function () {
            console.log("add button to add the videos to our favourities");
        };
        this.subscribeButton = function () {
            console.log("click on subscribe button to get new updates from the page ");
        };
        this.likeButton = function () {
            console.log("click on like button ");
        };
        this.disLikeButton = function () {
            console.log("click on dislke buttton");
        };
        this.writeComment = function () {
            console.log("please enter the comments");
        };
        this.getRelatedVideos = function () {
            console.log("logic is implemented in next level of assignment");
        };
        this.commentsSortBY = function () {
            console.log("Sorting comments by top and new ");
        };
        this.title = title;
        this.screen_size = screen_size;
        this.views;
        this.publishedBy;
        this.publishedOn;
        this.description;
        this.category;
        this.comments;
        this.license;
    }
    return Youtube;
}());
var myvideo = new Youtube("Title of the Video", "1280*820", 23000, "Revanth Kanumuri", "3rd march 2017", "This is my first video on youtube hope u guys like it", "Category of the video -commedy", 45, "Standard you tube License");
myvideo.writeComment();
var relatedVideos = myvideo.getRelatedVideos();
myvideo.shareItButton();
myvideo.addItToFavourites();
myvideo.commentsSortBY();
myvideo.likeButton();
myvideo.disLikeButton();
myvideo.subscribeButton();
myvideo.getNumberOfViews();
console.log(myvideo.license);
console.log(myvideo.title);
console.log(myvideo.screen_size);
console.log(myvideo.publishedBy);
console.log(myvideo.publishedOn);
console.log(myvideo.description);
console.log(myvideo.category);
console.log(myvideo.views);
console.log(myvideo.license);
//we can call each and every method as per  the requirement.
