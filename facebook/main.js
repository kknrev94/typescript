var facebook = /** @class */ (function () {
    function facebook(birthday, telephoneno, hometown, currentCity, gender, languages, intrestedIn, relationship, familymembers, checkIns, groups, events, movies) {
        var _this = this;
        this.birthday = birthday;
        this.telephoneno = telephoneno;
        this.hometown = hometown;
        this.currentCity = currentCity;
        this.gender = gender;
        this.languages = languages;
        this.intrestedIn = intrestedIn;
        this.relationship = relationship;
        this.familymembers = familymembers;
        this.checkIns = checkIns;
        this.groups = groups;
        this.events = events;
        this.movies = movies;
        this.getAge = function () {
            console.log("calulate age logic is implemented");
        };
        this.addWorkAndExperience = function () {
            console.log("Display the work ur doing and add + buuton to add a new work or experience ");
        };
        this.addEducation = function () {
            console.log("Add college or university or school");
        };
        this.addPlacesULived = function () {
            console.log(_this.currentCity + " " + _this.hometown);
        };
        this.getAndAddFamilyMembers = function () {
            console.log(_this.familymembers + " and an option to add a new person to family");
        };
        this.getAndAddEvents = function () {
            console.log("show the events till u have intrested and attended and show an additional option to add a new event");
        };
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
    return facebook;
}());
var face = new facebook("Date Of Birth - 2nd March", 2815948779, "HomeTown-tirupathi", "Current city- himachalpradesh", "Gender-Male", "languages- telugu, english, hindi", "intrestedIn- Women", "RelationShip- Single", "family Members- Gopi,kavitha,krishna", "Events- No events So Far", "Group- tptgroup", "Events- AudioFunction", "avengers");
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
