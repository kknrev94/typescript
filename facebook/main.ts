class facebook{
    constructor(public birthday: string, public telephoneno:number, public hometown: string,public currentCity: string, public gender:string, public languages:string, public intrestedIn : string, public relationship: string, public familymembers:string, public checkIns: string,public groups:string, public events: String, public movies:string ){
        this.birthday;
        this.telephoneno;
        this.hometown;
        this.currentCity;
        this.gender;
        this.languages;
        this.intrestedIn;
        this.relationship;
        this.familymembers;
        this.events;
        this.checkIns;
        this.groups;
        this.movies;
    }
    getAge=()=>{
        console.log("calulate age logic is implemented")
    }
    addWorkAndExperience=()=>{
        console.log("Display the work ur doing and add + buuton to add a new work or experience ")
    }
    addEducation=()=>{
        console.log("Add college or university or school")
    }
    addPlacesULived=()=>{
        console.log(this.currentCity+" "+this.hometown);
    }
    getAndAddFamilyMembers=()=>{
        console.log( this.familymembers +" and an option to add a new person to family")
    }
    getAndAddEvents=()=>{
        console.log("show the events till u have intrested and attended and show an additional option to add a new event")
    }




}
let face= new facebook("Date Of Birth - 2nd March",2815948779,"HomeTown-tirupathi", "Current city- himachalpradesh", "Gender-Male", "languages- telugu, english, hindi", "intrestedIn- Women", "RelationShip- Single", "family Members- Gopi,kavitha,krishna", "Events- No events So Far","Group- tptgroup","Events- AudioFunction", "avengers");
console.log(face.gender);
console.log(face.birthday);
console.log(face.currentCity);
console.log(face.hometown);
console.log(face.languages);
console.log(face.intrestedIn);
console.log(face.relationship);
console.log(face.familymembers);
console.log(face.checkIns);
console.log(face.groups);
console.log(face.movies);
console.log(face.events);
face.addEducation();
face.addPlacesULived();
face.addWorkAndExperience();
face.getAge();
face.getAndAddEvents();
face.getAndAddFamilyMembers();
