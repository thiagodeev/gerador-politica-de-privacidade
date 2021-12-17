Object.values(fields).forEach(function (value) {

    value.forEach(function (value) {
        
        let name = value.attributes["name"].value;
        output = document.querySelectorAll(`[data-seo="${name}"]`);

        if (output !== 'undefined' || output !== 'null'){

            output.forEach(function (element) {
                element.innerHTML = value.value;
            })
        }

    })

})