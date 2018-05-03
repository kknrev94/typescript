class Youtube{
    constructor(public title:string,public screen_size:string,public views:number,public publishedBy:string,public publishedOn:string,public description:string,public category:string,public comments:number,public license?:string){
        this.title=title;
        this.screen_size=screen_size;
        this.views;
        this.publishedBy;
        this.publishedOn;
        this.description;
        this.category;
        this.comments;
        this.license;
    }
    getNumberOfViews=()=>{
        console.log(" No of Views-"+this.views +" -this is just a sample")
    }
    shareItButton=()=>{
        console.log("click on share button to share the video ")
    }
    addItToFavourites=()=>{
        console.log("add button to add the videos to our favourities")
    };
    subscribeButton=()=>{
        console.log("click on subscribe button to get new updates from the page ")
	    
    }
    likeButton=()=>{
        console.log("click on like button ")
    }
    disLikeButton=()=>{
        console.log("click on dislke buttton")
    }
    writeComment=()=>{
        console.log("please enter the comments")
    }
    getRelatedVideos=()=>{
        console.log("logic is implemented in next level of assignment")
    }
    commentsSortBY=()=>{
        console.log("Sorting comments by top and new ")
    }
}

let myvideo=new Youtube("Title of the Video","1280*820",23000,"Revanth Kanumuri","3rd march 2017","This is my first video on youtube hope u guys like it","Category of the video -commedy",45,"Standard you tube License");
myvideo.writeComment();
let relatedVideos=myvideo.getRelatedVideos();
myvideo.shareItButton();
myvideo.addItToFavourites();
myvideo.commentsSortBY();
myvideo.likeButton();
myvideo.disLikeButton();
myvideo.subscribeButton();
myvideo.getNumberOfViews();
console.log(myvideo.license)
console.log(myvideo.title);
console.log(myvideo.screen_size);
console.log(myvideo.publishedBy);
console.log(myvideo.publishedOn);
console.log(myvideo.description);
console.log(myvideo.category);
console.log(myvideo.views);
console.log(myvideo.license);


//we can call each and every method as per  the requirement.
