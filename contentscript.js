// Create var called promptMessage and use the prompt() method to prompt the user for soemthing to search for
var promptMessage = prompt("Please enter the users name or email and click okay.\r\nAdd '--' to the end of your search to search for inactive users.");

/* Create a var called inactive and set this to true */
var inactive = true;

/* ------------------------------------------------------------------------------------------------------
    Create a var called sub and use the indexOf() method to search for the -- string, this will either
    output -1 if the string was not found or the position where the string was found.
    Create an IF() statement to check the sub var, if it is not set to -1 (as in -- was found) then it 
    will run the code in the IF()
------------------------------------------------------------------------------------------------------  */
var sub = promptMessage.indexOf("--");
if(sub  != -1){
    // Set inactive to false
    inactive = false;
    // Use the .substring() method to cut the string.
    // This will start at position 0 as in just before the first letter.
    // It will then stop just before where the -- was found
    promptMessage = promptMessage.substring(0,sub);
    /* --------------------------------------------------------------------------
        Use the trim() method to remove any trailing or leading spaces, this will
        update "    Timothy     " to "Timothy"
    -------------------------------------------------------------------------- */
    promptMessage = promptMessage.trim();
}


// Use window.location to navigate to the correct URL, as you can see I have used the + sybol to append the relevant text
window.location = "https://echosign.com/account/viewUsers?searchQuery=" + promptMessage + "&hideInactive=" + inactive;

/* ------------------------------------------------------------------------------------------------------
    As you can see in the above the generic EchoSign URL, the web URL where you can search and view
    users: "https://echosign.com/account/viewUsers". I have added on the end "?searchQuery=", if you
    look into the HTML of the webpage by right clicking on the text bocx and then clicking on
    "inspect element", you will see that each field has a "name", this name is what we can use in the URL
    to control what happens inside that textbox, checkbox, radion button, etc... in this case I have
    updated the searchQuery box or the text box where the user enters their search criteria and I have
    added in the users search information, once I have cleaned this up. I have also taken "hideInactive"
    which is the name of the checkbox, however, this time it follows an & symbol, this is because we have
    already added in the ? in previously so the browser knows we are "querying" the following field and
    updating it with the value that we are placing after the = symbol.
------------------------------------------------------------------------------------------------------ */