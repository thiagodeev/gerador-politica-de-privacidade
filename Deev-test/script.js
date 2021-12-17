document.querySelector("form#get-privacy-data").onsubmit = function writeFormValueOnHTML(Event) {
    Event.preventDefault();

    let websiteName = document.querySelector("#catch-website-name").value;
    let websiteUrl = document.querySelector("#catch-website-url").value;
    let cookiesCheckbox = document.querySelector("#cookies-checkbox").checked;
    let adSenseCheckbox = document.querySelector("#adSense-checkbox").checked;

    let selectorsToHide = ["#answer-section", "div#pt-answer", "div#en-answer"];

    function hidesElements (selectorsToHide){
        let elementsToHide = document.querySelectorAll(selectorsToHide);
        [...elementsToHide].forEach.call(elementsToHide, function(element) {
            element.setAttribute("hidden", "")
        });
        console.log("cheguei aq");
    };
    hidesElements(selectorsToHide);
    

    function verifyLanguage() {
        let language = document.querySelector("#languages-list").value;
        let selectedLanguage = document.querySelectorAll("div[id*='answer']")[language];
        
        return selectedLanguage;
    };
    let selectedLanguage = verifyLanguage();

    function unhideElements(selectedLanguage){
        document.querySelector("#answer-section").removeAttribute("hidden");
        selectedLanguage.removeAttribute("hidden");
    };
    unhideElements(selectedLanguage);

    function writeValuesToHTML(selectedLanguage){
        document.selectedLanguage.getElementsByClassName("website-name").innerHTML = websiteName;
        document.selectedLanguage.getElementsByClassName("website-url").innerHTML = websiteUrl;
    };
    writeValuesToHTML(selectedLanguage);



    /* function writeCheckboxOnHTML (cookiesCheckbox, adSenseCheckbox, indexNumberOfLanguage){
        if (cookiesCheckbox || adSenseCheckbox) {
            document.querySelectorAll(".checkbox-privacy-policies-p")[indexNumberOfLanguage].removeAttribute("hidden");

            if (cookiesCheckbox && adSenseCheckbox) {
                document.getElementsByClassName("first-checkbox-answer")[indexNumberOfLanguage].innerHTML = "Cookies";
                document.getElementsByClassName("second-checkbox-answer")[indexNumberOfLanguage].innerHTML = "AdSense";

                document.getElementsByClassName("both-checkbox")[indexNumberOfLanguage].removeAttribute("hidden");
                return;
            }

            if (cookiesCheckbox) {
                document.getElementsByClassName("first-checkbox-answer")[indexNumberOfLanguage].innerHTML = "Cookies";
                return;
            }
            if (adSenseCheckbox) document.getElementsByClassName("first-checkbox-answer")[indexNumberOfLanguage].innerHTML = "AdSense";
        }
    } */

    //writeCheckboxOnHTML (cookiesCheckbox, adSenseCheckbox, indexNumberOfLanguage);
}

    
