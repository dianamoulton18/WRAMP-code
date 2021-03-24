/*
    add in code pushing information to database
*/

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPByriPq7_Xoruw3anJp5jdHJ06ZbLCno",
    authDomain: "wramp1.firebaseapp.com",
    projectId: "wramp1",
    storageBucket: "wramp1.appspot.com",
    messagingSenderId: "406176078321",
    appId: "1:406176078321:web:93b9cec0e2d09bbb274c50"
  };
 //needed to run the database on the website
// var firebaseConfig = {
//     apiKey: "AIzaSyAPByriPq7_Xoruw3anJp5jdHJ06ZbLCno",
//     authDomain: "wramp1.firebaseapp.com",
//     projectId: "wramp1",
//     storageBucket: "wramp1.appspot.com",
//     messagingSenderId: "406176078321",
//     appId: "1:406176078321:web:93b9cec0e2d09bbb274c50"
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   FIREBASE
// sessions 
//   session1: 
//     country, age,  
//   session2: 
//     country, age, ...

// exp 
//   session1-1: 
//     value, chart, answer
//   session1-2: 
//     value, chart, answer


function generateSessionID() {
    const d = new Date();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const m = month[d.getMonth()]
    return m + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
}//used to generate session id

function onClickStart() {
    var sessionId = generateSessionID()
    doc = {
        sessionId: sessionId,
        country: $('#country').val(),
        language: $('#language').val(),
        age: $('#age').val(),
        chart: "pie",
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    // console.log("here")
    var fire = firebase.database()
    fire.ref("sessions/" + sessionId).set(doc)
    sessionStorage.setItem("demography", JSON.stringify(doc))
    // location.href='intro.html'
    setTimeout(function () { window.location = 'intro.html' }, 1000)
}

function logAnswer(sessionId, value, progress) {
    doc = {
        value: value,
        chart: "pie",
        answer: $("#textAnswer").val()
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    var fire = firebase.database()
    fire.ref("experiment/" + sessionId + "-" + progress).set(doc)
    // sessionStorage.setItem("demography", JSON.stringify(doc))
}


function pageChanger() {

    dem = JSON.parse(sessionStorage.getItem("demography"))
    const buttonNum = Number(sessionStorage.getItem("buttonClicks"));

    switch (buttonNum) {
        case 2:
            logAnswer(dem.sessionId, 70, 1)
            document.getElementById("questionHeader").innerHTML = "Question 2/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-005.png?raw=true";
            sessionStorage.setItem("buttonClicks", "3")
            document.getElementById("textAnswer").value = ""
            break;
        case 3:
            logAnswer(dem.sessionId, 5, 2)
            document.getElementById("questionHeader").innerHTML = "Question 3/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-065.png?raw=true";
            sessionStorage.setItem("buttonClicks", "4")
            document.getElementById("textAnswer").value = ""
            break;
        case 4:
            logAnswer(dem.sessionId, 65, 3)
            document.getElementById("questionHeader").innerHTML = "Question 4/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-085.png?raw=true";
            sessionStorage.setItem("buttonClicks", "5")
            document.getElementById("textAnswer").value = ""
            break;
        case 5:
            logAnswer(dem.sessionId, 85, 4)
            document.getElementById("questionHeader").innerHTML = "Question 5/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-045.png?raw=true";
            sessionStorage.setItem("buttonClicks", "6")
            document.getElementById("textAnswer").value = ""
            break;
        case 6:
            logAnswer(dem.sessionId, 45, 5)
            document.getElementById("questionHeader").innerHTML = "Question 6/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-055.png?raw=true";
            sessionStorage.setItem("buttonClicks", "7")
            document.getElementById("textAnswer").value = ""
            break;
        case 7:
            logAnswer(dem.sessionId, 55, 6)
            document.getElementById("questionHeader").innerHTML = "Question 7/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-030.png?raw=true";
            sessionStorage.setItem("buttonClicks", "8")
            document.getElementById("textAnswer").value = ""
            break;
        case 8:
            logAnswer(dem.sessionId, 30, 7)
            document.getElementById("questionHeader").innerHTML = "Question 8/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-025.png?raw=true";
            sessionStorage.setItem("buttonClicks", "9")
            document.getElementById("textAnswer").value = ""
            break;
        case 9:
            logAnswer(dem.sessionId, 25, 8)
            document.getElementById("questionHeader").innerHTML = "Question 9/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-035.png?raw=true";
            sessionStorage.setItem("buttonClicks", "10")
            document.getElementById("textAnswer").value = ""
            break;
        case 10:
            logAnswer(dem.sessionId, 35, 9)
            document.getElementById("questionHeader").innerHTML = "Question 10/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-080.png?raw=true";
            sessionStorage.setItem("buttonClicks", "11")
            document.getElementById("textAnswer").value = ""
            break;
        case 11:
            logAnswer(dem.sessionId, 80, 10)
            document.getElementById("questionHeader").innerHTML = "Question 11/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-100.png?raw=true";
            sessionStorage.setItem("buttonClicks", "12")
            document.getElementById("textAnswer").value = ""
            break;
        case 12:
            logAnswer(dem.sessionId, 100, 11)
            document.getElementById("questionHeader").innerHTML = "Question 12/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-060.png?raw=true";
            sessionStorage.setItem("buttonClicks", "13")
            document.getElementById("textAnswer").value = ""
            break;

        case 13:
            logAnswer(dem.sessionId, 60, 12)
            document.getElementById("questionHeader").innerHTML = "Question 13/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-010.png?raw=true";
            sessionStorage.setItem("buttonClicks", "14")
            document.getElementById("textAnswer").value = ""
            break;
        case 14:
            logAnswer(dem.sessionId, 10, 13)
            document.getElementById("questionHeader").innerHTML = "Question 14/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-020.png?raw=true";
            sessionStorage.setItem("buttonClicks", "15")
            document.getElementById("textAnswer").value = ""
            break;
        case 15:
            logAnswer(dem.sessionId, 20, 14)
            document.getElementById("questionHeader").innerHTML = "Question 15/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-050.png?raw=true";
            sessionStorage.setItem("buttonClicks", "16")
            document.getElementById("textAnswer").value = ""
            break;
        case 16:
            logAnswer(dem.sessionId, 50, 15)
            document.getElementById("questionHeader").innerHTML = "Question 16/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-075.png?raw=true";
            sessionStorage.setItem("buttonClicks", "17")
            document.getElementById("textAnswer").value = ""
            break;
        case 17:
            logAnswer(dem.sessionId, 75, 16)
            document.getElementById("questionHeader").innerHTML = "Question 17/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-000.png?raw=true";
            sessionStorage.setItem("buttonClicks", "18")
            document.getElementById("textAnswer").value = ""
            break;
        case 18:
            logAnswer(dem.sessionId, 0, 17)
            document.getElementById("questionHeader").innerHTML = "Question 18/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-040.png?raw=true";
            sessionStorage.setItem("buttonClicks", "19")
            document.getElementById("textAnswer").value = ""
            break;
        case 19:
            logAnswer(dem.sessionId, 40, 18)
            document.getElementById("questionHeader").innerHTML = "Question 19/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-015.png?raw=true";
            sessionStorage.setItem("buttonClicks", "20")
            document.getElementById("textAnswer").value = ""
            break;
        case 20:
            logAnswer(dem.sessionId, 15, 19)
            document.getElementById("questionHeader").innerHTML = "Question 20/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-090.png?raw=true";
            sessionStorage.setItem("buttonClicks", "21")
            document.getElementById("textAnswer").value = ""
            break;
        case 21:
            logAnswer(dem.sessionId, 90, )
            document.getElementById("questionHeader").innerHTML = "Question 21/21";
            document.getElementById("imgClickAndChange").src = "https://github.com/dianamoulton18/WRAMP-code/blob/master/images/pie/pie-095.png?raw=true";
            sessionStorage.setItem("buttonClicks", "22")
            document.getElementById("textAnswer").value = ""
            break;
        case 22:
            logAnswer(dem.sessionId, 95, 21)
            setTimeout(function () { window.location = 'thanks.html' }, 1000)

            break;
    }
}