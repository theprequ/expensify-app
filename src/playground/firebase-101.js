import * as firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDuNNsEP3DdI65-7JiI1riZG9iBn0YJkBU",
    authDomain: "expensify-1c4b9.firebaseapp.com",
    databaseURL: "https://expensify-1c4b9.firebaseio.com",
    projectId: "expensify-1c4b9",
    storageBucket: "expensify-1c4b9.appspot.com",
    messagingSenderId: "618700289238"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// this also gets called on the existing ones
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }, (error) => {
//     console.log("Error:", error);
// });

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref("expenses").push({
//         description: "Third",
//         note: "",
//         amount: 2000,
//         createdAt: 200000000
// });




//database.ref("notes/-LQx19AB14eS9m1cwzDA").remove();

// database.ref("notes").push({
//     title: "Course topics",
//     body: "React NAtive, Angulas"
// });


// database.ref("notes").set(notes);

// const onValueChange = database.ref().on("value", (snapshot) => {
//     const obj = snapshot.val();
//     console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}.`);
// }, (err) => {
//     console.log("Error!", err);
// })

//database.ref("location/city")
//    .once("value")
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    })
//    .catch((e) => {
//        console.log("Error fetching data", e);
//    });

//  database.ref().set({
//      name: "Markus W",
//      age: 26,
//      stressLevel: 6,
//      job: {
//         title: "Software developer",
//         company: "Google"
//      },
//      location: {
//          city: "Helsinki",
//          country: "Finland"
//      }
//  }).then(() => {
//      console.log("Data is saved");
//  }).catch((err) => {
//      console.log("This failed.", err)
//  });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
// });

//database.ref()
//    .remove()
//    .then(() => {
//        console.log("Data removed");
//    })
//    .catch((err) => {
//        console.log("Fail!", err)
//    });