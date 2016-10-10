// Redirect document
//
/*
    The function detects the Browser User Language
    and redict the user to other version f the website.

    The structure of the web site we use is very simple.
    We put every language version of the site,
    in diferent folders.

    So we will have the following structure

        root --> we will put the mother language of the website
        fr/  --> for the French folders
        es/  --> for the Spanish version
        pt/  --> for the Portuguese version
        de/  --> for the German version

    Quite simple.
*/


//defining the function. you just need, to update the array of objects
// and call this function, for the redirection work.
function redirectToUserLanguage() {

    // 01 - first dectect the user language of the Browser
    var userLang = navigator.language? navigator.language : navigator.userLanguage;

    // 02 - we define our array of objects.
    //      each object will contain a language and a path to the file.
    var availableLanguages = [
            {lang: "fr", path: "fr/index.html"},
            {lang: "es", path: "es/index.html"},
            {lang: "de", path: "de/index.html"},
            {lang: "pt", path: "pt/index.html"},
        ];

    //03 - it will work in a simple way.
    //      If the user language exists in the array it will redirect to this new one.
    //      otherwise it will do nothing and show the languege by default.
    for(var i = 0; i < availableLanguages.length; i++){
        // We will make the test, to see
        // if the language in the array exists inside the user language
        // indexOf will return the index of the array or -1 if the language don't exist.
        var index = userLang.indexOf(availableLanguages[i].lang);

        // if the userLang exists them it will redirect to the path of the language.
        if (index >= 0){
            window.location.replace(availableLanguages[i].path);
            break;
        }// end if

    }//end for


}// end function redirectToUserLanguage()
