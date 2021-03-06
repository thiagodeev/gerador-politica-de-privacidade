function createPrivacyPolicy(){

    let submit = document.getElementById("submit");

    [...document.querySelectorAll("div[data-list]")].forEach(function (element, index){
        console.log(element)
    });

    // get fields values
    fields = {
        "websiteGender": document.querySelectorAll('input[name="website-gender"]'),
        "website": document.getElementsByName('catch-website-name'),
        "websiteUrl": document.getElementsByName('catch-website-url'),
        "companyGender": document.querySelectorAll('input[name="company-gender"]'),
        "company": document.getElementsByName('catch-company-name'),
        "razao-social": document.getElementsByName('catch-razao-social'),
        "cnpj": document.getElementsByName('catch-cnpj',),
        "language": document.getElementsByName('language-list'),
        "consent": document.getElementsByName('consent'),
    }

    // object
    Object.entries(fields).forEach(function ([key, value]) {
        value.forEach(function (element){
            if (element.tagName == "SELECT") {
                fields[key] = element.value;
            } else
            if (element.attributes.type.nodeValue == "radio"){
                fields[key] = [...value].filter(i => i.checked);
            } else {
                fields[key] = [...value];
            };
        })
    });

    console.log(fields)
    // get checkbox elements
    let checkbox = {
        "trackers": document.querySelectorAll('input[name="trackers"]'),
        "monetizers": document.querySelectorAll('input[name="monetizers"]')
    }

    // create objects to get checkbox values
    let collections = {
        'trackers': [],
        'monetizers': [],
    }

    submit.addEventListener('click', function (e) {
        e.preventDefault()

/*         let selectorsToHide = [
            "#answer-section",
            "div[id*='-answer']",
            "div#en-answer",
            "[data-checkbox-list='trackers']",
            "[data-checkbox-list='monetizers']"
            ];
    
        function hidesElements (selectorsToHide){
            let elementsToHide = document.querySelectorAll(selectorsToHide);
            [...elementsToHide].forEach.call(elementsToHide, function(element) {
                element.setAttribute("hidden", "")
            });
        };
        hidesElements(selectorsToHide); */


        // loop to get the values from checkbox
        Object.entries(checkbox).forEach(function ([key, value]) {
            collections[key] =
                Array.from(checkbox[key])
                    .filter(i => i.checked)
                    .map(i => i.value)
        })
        
        // output the all fields values, append to text and show hide sections
        Object.entries(collections).forEach(function ([key, value]) {
            console.log(key)
            if (value.length > 0){
                document.querySelector(`li[data-checkbox-list="${key}"]`).removeAttribute("hidden");
                let checkboxList = [];

                value.forEach(function (checkboxName, index, array) {
                    checkboxList.push( " " + checkboxName)
                    
                    /* if (!Object.is(array.length -1, index)){
                        checkboxList.push( " " + checkboxName)
                    } else {
                        checkboxList.push(checkboxName)
                    } */
                    


                    let checkboxDescriptionParagraph = document.querySelectorAll(`li[data-seo="${checkboxName}"]`)

                    if (checkboxDescriptionParagraph.length > 0) {
                        [...checkboxDescriptionParagraph].forEach(function (element){
                            element.removeAttribute("hidden");
                        })
                    }
                    

                    //<span data-trackers-list></span>
                });

                let path = "span[data-"+ key + "-list]";
                [...document.querySelectorAll(path)].forEach(function (element){
                    element.innerHTML = checkboxList.toString();
                })
            }
        })

        /* Object.values(fields).forEach(function (value) {

            value.forEach(function (value, index) {
                
                let name = value.attributes["name"].value;
                output = document.querySelectorAll(`[data-seo="${name}"]`);
        
                if (output !== 'undefined' || output !== 'null'){
        
                    output.forEach(function (element, index) {
                        element.innerHTML = value.value;
                    })
                }
        
            })
        
        }) */
    })




    document.querySelector("form#get-privacy-data").onsubmit = function writeFormValueOnHTML(Event) {
        return;
        Event.preventDefault();
    
        //--------- Global Vars from Form ----------
    
/*         let websiteName = document.querySelector("#catch-website-name").value;
        let websiteGenderLetter = document.querySelector( 'input[name="website-gender"]:checked').value;
        let websiteUrl = document.querySelector("#catch-website-url").value;
        let companyName = document.querySelector("#catch-company-name").value;
        let companyGenderLetter = document.querySelector( 'input[name="company-gender"]:checked').value;
        let razaoSocial = document.querySelector("#catch-razao-social").value;
        let cnpj = document.querySelector("#catch-cnpj").value; */
    

        
        let language = document.querySelector("#languages-list").value;
    
     
        function unhideElements(language){
            document.querySelector("#answer-section").removeAttribute("hidden");
            document.querySelectorAll("div[id*='answer']")[language].removeAttribute("hidden");
        };
        unhideElements(language);

        function writeDate (language){
            let date = new Date;
            monthName = new Array ("janeiro", "fevereiro", "mar??o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
            
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
    }
}

document.addEventListener("DOMContentLoaded", createPrivacyPolicy)