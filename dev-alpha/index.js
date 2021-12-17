function form() {
    
    let submit = document.getElementById("submit")

    // get fields values
    let fields = {
        "genderWebsite": document.querySelectorAll('input[name="gender-website"]'),
        "website": document.getElementsByName('website'),
        "domain": document.getElementsByName('domain'),
        "genderCompany": document.querySelectorAll('input[name="gender-company"]'),
        "company": document.getElementsByName('company'),
        "social-reason": document.getElementsByName('social-reason'),
        "cnpj": document.getElementsByName('cnpj',),
        "language": document.getElementsByName('language'),
        "concent": document.getElementsByName('concent'),
    }

    // object
    Object.entries(fields).forEach(function ([key, value]) {
        value.forEach(function (element) {
            element.addEventListener('change', function (e) {
                fields[key] = e.target.value
                console.log(e.target.value)
            })
        })
    })

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

    // loop to get the values from checkbox when select the fields
    Object.entries(checkbox).forEach(function ([key, value]) {
        value.forEach(function (collection) {
            collection.addEventListener('change', function () {
                collections[key] =
                    Array.from(checkbox[key])
                        .filter(i => i.checked)
                        .map(i => i.value)

                console.log(collections[key])
            })
        })
    })

    submit.addEventListener('click', function (e) {
        e.preventDefault()
        // output the all fields values, append to text and show hide sections
        Object.values(collections).forEach(function (collection, index) {

            collection.forEach(function (value, index) {

                output = document.querySelectorAll(`[data-seo="${value}"]`)

                if (output !== 'undefined' || output !== 'null') {
                    output.forEach(function (element) {

                        if (element.classList.contains('uk-hidden')) {
                            element.classList.remove('uk-hidden')
                            element.classList.add('uk-visible')
                        } else if (element.classList.contains('uk-visible') == false)  {
                            element.innerHTML = value
                        }

                        console.log(value)
                    })
                }

            })

        })

        Object.values(fields).forEach(function (value) {

            value.forEach(function (value, index) {
                
                let name = value.attributes["name"].value;
                output = document.querySelectorAll(`[data-seo="${name}"]`);
        
                if (output !== 'undefined' || output !== 'null'){
        
                    output.forEach(function (element, index) {
                        element.innerHTML = value.value;
                    })
                }
        
            })
        
        })
    })

}

document.addEventListener("DOMContentLoaded", form)