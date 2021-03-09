/*
    TODO: update the image source code with the actual file names of your data viz
    add in code pushing information to database
*/

function pageChanger(){
    
    const buttonNum = Number(sessionStorage.getItem("buttonClicks"));
    switch(buttonNum){
        case 2:
            document.getElementById("questionHeader").innerHTML = "Question 2/21";
            //document.getElementById("imgClickAndChange").src = "data2";
            sessionStorage.setItem("buttonClicks", "3")
            break;
        case 3:
            document.getElementById("questionHeader").innerHTML = "Question 3/21";
            //document.getElementById("imgClickAndChange").src = "data3";
            sessionStorage.setItem("buttonClicks", "4")
            break;
        case 4:
            document.getElementById("questionHeader").innerHTML = "Question 4/21";
            //document.getElementById("imgClickAndChange").src = "data4";
            sessionStorage.setItem("buttonClicks", "5")
            break;
        case 5:
            document.getElementById("questionHeader").innerHTML = "Question 5/21";
            //document.getElementById("imgClickAndChange").src = "data5";
            sessionStorage.setItem("buttonClicks", "6")
            break;
        case 6:
            document.getElementById("questionHeader").innerHTML = "Question 6/21";
            //document.getElementById("imgClickAndChange").src = "data6";
            sessionStorage.setItem("buttonClicks", "7")
            break;
        case 7:
            document.getElementById("questionHeader").innerHTML = "Question 7/21";
            //document.getElementById("imgClickAndChange").src = "data7";
            sessionStorage.setItem("buttonClicks", "8")
            break;
        case 8:
            document.getElementById("questionHeader").innerHTML = "Question 8/21";
            //document.getElementById("imgClickAndChange").src = "data8";
            sessionStorage.setItem("buttonClicks", "9")
            break;
        case 9:
            document.getElementById("questionHeader").innerHTML = "Question 9/21";
            //document.getElementById("imgClickAndChange").src = "data9";
            sessionStorage.setItem("buttonClicks", "10")
            break;
        case 10:
            document.getElementById("questionHeader").innerHTML = "Question 10/21";
            //document.getElementById("imgClickAndChange").src = "data10";
            sessionStorage.setItem("buttonClicks", "11")
            break;
        case 11:
            document.getElementById("questionHeader").innerHTML = "Question 11/21";
            //document.getElementById("imgClickAndChange").src = "data11";
            sessionStorage.setItem("buttonClicks", "12")
            break;
        case 12:
            document.getElementById("questionHeader").innerHTML = "Question 12/21";
            //document.getElementById("imgClickAndChange").src = "data12";
            sessionStorage.setItem("buttonClicks", "13")
            break;
        case 13:
            document.getElementById("questionHeader").innerHTML = "Question 13/21";
            //document.getElementById("imgClickAndChange").src = "data13";
            sessionStorage.setItem("buttonClicks", "14")
            break;
        case 14:
            document.getElementById("questionHeader").innerHTML = "Question 14/21";
            //document.getElementById("imgClickAndChange").src = "data14";
            sessionStorage.setItem("buttonClicks", "15")
            break;
        case 15:
            document.getElementById("questionHeader").innerHTML = "Question 15/21";
            //document.getElementById("imgClickAndChange").src = "data15";
            sessionStorage.setItem("buttonClicks", "16")
            break;
        case 16:
            document.getElementById("questionHeader").innerHTML = "Question 16/21";
            //document.getElementById("imgClickAndChange").src = "data16";
            sessionStorage.setItem("buttonClicks", "17")
            break;
        case 17:
            document.getElementById("questionHeader").innerHTML = "Question 17/21";
            //document.getElementById("imgClickAndChange").src = "data17";
            sessionStorage.setItem("buttonClicks", "18")
            break;
        case 18:
            document.getElementById("questionHeader").innerHTML = "Question 18/21";
            //document.getElementById("imgClickAndChange").src = "data18";
            sessionStorage.setItem("buttonClicks", "19")
            break;
        case 19:
            document.getElementById("questionHeader").innerHTML = "Question 19/21";
            //document.getElementById("imgClickAndChange").src = "data19";
            sessionStorage.setItem("buttonClicks", "20")
            break;
        case 20:
            document.getElementById("questionHeader").innerHTML = "Question 20/21";
            //document.getElementById("imgClickAndChange").src = "data20";
            sessionStorage.setItem("buttonClicks", "21")
            break;
        case 21:
            document.getElementById("questionHeader").innerHTML = "Question 21/21";
            //document.getElementById("imgClickAndChange").src = "data21";
            sessionStorage.setItem("buttonClicks", "22")
            break;
        case 22:
            document.getElementById("formButton").style.visibility = "hidden";
            break;
    }
}