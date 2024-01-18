const Date_Ending = "21 January 2024 12:00:50 AM"
document.getElementById("EndingDate").innerText = Date_Ending;
// console.log(Date_Ending);
const Input_Fields = document.querySelectorAll("input");
const Msg = document.getElementById("Message")
// console.log(Input_Fields);

function CountDown()
{
    const EndDate = new Date (Date_Ending);
    // console.log(Date_Ending);
    const CurrentDate = new Date();
    // console.log(CurrentDate);


    const difference = (EndDate - CurrentDate) / 1000;
    // console.log(difference);


    if (difference < 0)
    {
        Msg.innerHTML = "We are Live";
        Msg.style.color='white';
        Msg.style.fontSize='40px';
        Msg.style.marginTop='20px';



        return;
    }

    else
    {
    // 1st method to insert values in text fields.
    // DaysLeft = Days(difference);
    // HoursLeft = Hours(difference);
    // MinutesLeft = Minutes(difference);
    // SecondsLeft = Seconds(difference);

    

    // 2nd method to insert values in textFields.
    Input_Fields[0].value = Days(difference);
    Input_Fields[1].value = Hours(difference);
    Input_Fields[2].value = Minutes(difference);
    Input_Fields[3].value = Seconds(difference);
    }



};

function Days (diff)
{
   const DaysLeft =  Math.floor(diff / 3600 / 24);
   return DaysLeft;
}

function Hours(diff)
{
    const HoursLeft = Math.floor(diff / 3600) % 24;
    return HoursLeft;
}

function Minutes(diff)
{
    const MinutesLeft = Math.floor(diff / 60) % 60;
    return MinutesLeft;
}

function Seconds(diff)
{
    const SecondsLeft =  Math.floor(diff) % 60;
    return SecondsLeft;
}


setInterval(CountDown,1000);




                                                        // Explanation
                                                        
/* Variable Date_Ending holds the ending date where we want the countdown to end and then using inner html we insert it into
our text field.

Input_Fields holds a Node List of all the input elements in our HTML document.

Function Days , Hours , Minutes and Seconds are responsible to calculate the remaining time .

Our main Function Countdown is responsible to calculate remaining time using date objects . The difference is actually
being calculated in milliseconds.

We then have 2 methods to insert values in our fields , one is to save the return value to variables and then by accessing
our Node List (Input_fields) insert to each of them , alternately second approach is to directly insert return values in input
fields this time using the property of Node list.



Lastly we use setInterval on CountDown function so that our function gets called every 1s and recalculate the remaining time 
and then to update the text fields acccording to the remaining time . 


The check (difference < 0 ) is used to prevent the case when our end date has reached and negative values start to appear inside
the input fields.



For further clarity you can uncomment all console log statements to get a better understanding of what is actually
behind the scenes.
*/