var db = require("../models");

// --Mentors--
db.Mentor.create(
    {
        fullName: "Tyler Williams",
        phone: "1800TYLERW",
        email: "tylerw@gmail.com",
        password: "tylerw",
        school: "UCF",
        skills: "React",
        passion: "Helping people",
    });
// db.Mentor.create(
//     {
//         id: 2,
//         firstName: "Tyler",
//         lastName: "Singh",
//         phone: "1800TYLERS",
//         email: "tylers@gmail.com",
//         password: "tylers"
//     });
// --Students--
// db.Student.create(
//     {
//         id: 1,
//         firstName: "Jerry",
//         lastName: "Green",
//         phone: "1800JERRYG",
//         email: "jgreen@gmail.com",
//         password: "jerryg",
//     });
// db.Student.create(
//     {
//         id: 2,
//         firstName: "Mike",
//         lastName: "Kohler",
//         phone: "1800MIKEK",
//         email: "mikek@gmail.com",
//         password: "mikek",
//     });
// --Posts
// db.Post.create(
//     {
//         MentorId: 1,
//         price: "20",
//         title: "College Softball Scout",
//         body: "Hello my name is Tyler i love sports. I'm a scout for the University of Central Florida's Knights softball team offering batting lessons 20/hr",
//     });
// db.Post.create(
//     {
//         MentorId: 2,
//         price: "0",
//         title: "Sports Analyst",
//         body: "Hello my name is Tyler I'm a sports analyst who reviews many sports such as basketball, baseball, hockey, softball",
//     });
// db.Post.create(
//     {
//         MentorId: 1,
//         price: "60",
//         title: "Shooting Coach",
//         body: "Hello my name is Tyler I have a passion for the sport that is basketball I have many different training programs to help develop your shot. 60 per session ",
//     });

// --Favorites--
// db.Favorite.create({
//     PostId: 1,
//     StudentId: 1
// })

// INSERT INTO Post (id, price, title, body)
// Values (2, "20", "College Softball Scout", "Hello my name is Tyler i love sports. I'm a scout for the University of Central Florida's Knights softball team offering batting lessons 20/hr");

// INSERT INTO Post (id, price, title, body)
// Values (1, "0", "Shooting Coach", "Hello my name is Tyler I'm a shooting coach ");