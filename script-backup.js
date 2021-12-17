document.querySelector("form#get-privacy-data").onsubmit = function writeFormValueOnHTML(Event) {
    Event.preventDefault();

    //--------- Global Vars from Form ----------

    let websiteName = document.querySelector("#catch-website-name").value;
    let websiteGenderLetter = document.querySelector( 'input[name="website-gender"]:checked').value;
    let websiteUrl = document.querySelector("#catch-website-url").value;
    let companyName = document.querySelector("#catch-company-name").value;
    let companyGenderLetter = document.querySelector( 'input[name="company-gender"]:checked').value;
    let razaoSocial = document.querySelector("#catch-razao-social").value;
    let cnpj = document.querySelector("#catch-cnpj").value;

    //// Tecnologias de Tracking:
    function CheckboxObjects (name, elementSelector, spanClassSelector){

        this.name = name;
        this.checkboxSelector = elementSelector;
        this.isSelected = document.querySelector(this.checkboxSelector).checked;
        this.relatedSpanClassSelector = spanClassSelector;
    };




    const cookiesCheckbox = new CheckboxObjects("Cookies", "#cookies-checkbox", "selected-cookies-checkbox");
    const googleAnalytics = new CheckboxObjects("Google Analytics", "#google-analytics-checkbox", "selected-google-analytics-checkbox");
    const facebookPixelCheckbox = new CheckboxObjects("Facebook Pixel", "#facebook-pixel-checkbox", "selected-facebook-pixel-checkbox");
    const yandexMetricaCheckbox = new CheckboxObjects("Yandex Métrica", "#yandex-metrica-checkbox", "selected-yandex-metrica-checkbox");
    const microsoftClarityCheckbox = new CheckboxObjects("Microsoft Clarity", "#microsoft-clarity-checkbox", "selected-microsoft-clarity-checkbox");
    const webBeaconsCheckbox = new CheckboxObjects("Web Beacons", "#web-beacons-checkbox", "selected-web-beacons-checkbox");
    
    let trackingTecnology = [
        cookiesCheckbox,
        googleAnalytics,
        facebookPixelCheckbox,
        yandexMetricaCheckbox,
        microsoftClarityCheckbox,
        webBeaconsCheckbox
    ];

    //// Monetização:
    const denakopCheckbox = new CheckboxObjects("Denakop", "#denakop-checkbox", "selected-denakop-checkbox");
    const doubleclickDartCheckbox = new CheckboxObjects("DoubleClick Dart", "#doubleclick-dart-checkbox", "selected-doubleclick-dart-checkbox");
    const googleAdsenseCheckbox = new CheckboxObjects("Google Adsense", "#google-adsense-checkbox", "selected-google-adsense-checkbox");
    const googleAdexchangeCheckbox = new CheckboxObjects("Google ADExchange", "#google-adexchange-checkbox", "selected-google-adexchange-checkbox");
    const microsoftMediaNetCheckbox = new CheckboxObjects("Microsoft Media.net", "#microsoft-media-net-checkbox", "selected-microsoft-media-net-checkbox");
    const m2MonetizemoreCheckbox = new CheckboxObjects("M2 / MonetizeMore", "#m2-monetizemore-checkbox", "selected-m2-monetizemore-checkbox");
    const taboolaCheckbox = new CheckboxObjects("Taboola", "#taboola-checkbox", "selected-taboola-checkbox");
    const outbrainCheckbox = new CheckboxObjects("Outbrain", "#outbrain-checkbox", "selected-outbrain-checkbox");

    let monetization = [
        denakopCheckbox,
        doubleclickDartCheckbox,
        googleAdsenseCheckbox,
        googleAdexchangeCheckbox,
        microsoftMediaNetCheckbox,
        m2MonetizemoreCheckbox,
        taboolaCheckbox,
        outbrainCheckbox
    ];
    // -----------------------------------------

/*     console.log(cookiesCheckbox);
    console.log(cookiesCheckbox.name);
    console.log(cookiesCheckbox.checkboxSelector);
    console.log(cookiesCheckbox.isSelected);
    console.log(cookiesCheckbox.relatedSpanClassSelector);
    console.log(cookiesCheckbox.writeOnHTML);
     */

    let selectorsToHide = ["#answer-section", "div#pt-answer", "div#en-answer"];

    function hidesElements (selectorsToHide){
        let elementsToHide = document.querySelectorAll(selectorsToHide);
        [...elementsToHide].forEach.call(elementsToHide, function(element) {
            element.setAttribute("hidden", "")
        });
    };
    hidesElements(selectorsToHide);
    
    let language = document.querySelector("#languages-list").value;

 
    function unhideElements(language){
        document.querySelector("#answer-section").removeAttribute("hidden");
        document.querySelectorAll("div[id*='answer']")[language].removeAttribute("hidden");
    };
    unhideElements(language);

    function writeValuesToHTML(language, websiteName, websiteUrl){
        let webSiteNameSpans = document.querySelectorAll("div[id*='answer']")[language].getElementsByClassName("website-name");
        [...webSiteNameSpans].forEach.call(webSiteNameSpans, function(element){
            element.innerHTML = websiteName;
        })

        let webSiteUrlSpans = document.querySelectorAll("div[id*='answer']")[language].getElementsByClassName("website-url");
        [...webSiteUrlSpans].forEach.call(webSiteUrlSpans, function(element){
            element.innerHTML = websiteUrl;
        })
    };
    writeValuesToHTML(language, websiteName, websiteUrl);


    function writeCheckboxOnHTML (checkboxObject){
        let allElements = document.querySelectorAll("div[id*='answer']")[0].getElementsByClassName(checkboxObject.relatedSpanClassSelector);
        [...allElements].forEach.call(allElements, function(el){
            el.innerHTML = checkboxObject.name;
        });
    }

    for (var i = 0; i = trackingTecnology.length; i++) {
        console.log(i);
    }

    writeCheckboxOnHTML(trackingTecnology);
    writeCheckboxOnHTML(monetization);


    function writeDate (language){
        let date = new Date;
        monthName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
        
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = monthName[date.getMonth()-1];
        var yyyy = date.getFullYear();


        let currentDate = ("dia " + dd + " de " + mm  +  " de "  + yyyy);

        let dateSpan = document.querySelectorAll("div[id*='answer']")[language].getElementsByClassName("date");
        [...dateSpan].forEach.call(dateSpan, function(element){
            element.innerHTML = currentDate;
        }); 
    };
    writeDate(language);

    
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

    
