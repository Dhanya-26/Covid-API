const submit = document.getElementById('input-btn')

const serverUrl = 'https://covid-19-data.p.rapidapi.com/country'

    function translateURL(text) {
        return (
            serverUrl + '?' + 'name=' + text
        )
    }

const click = submit.addEventListener('click', function clicked() {
    const inputText = document.getElementById('text-input')

            var text = inputText.value;
            fetch(translateURL(text), {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "319bc09d45msh75b55c718369ca8p1c89e7jsn1acd90e4ac8c",
                    "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
                }
            })
           
                .then(response => response.json())
                .then(response => {
                    console.log(response);

                    output.innerText = 'Country: ' + response[0].country + '\nCountry Code:    ' + response[0].code 
                    + '\nConfimed Cases: ' + response[0].confirmed + '\nCritical Cases: ' + response[0].critical + '\nDeath Cases: '
                    + response[0].deaths + '\nRecovered Cases: ' + response[0].recovered;
                })
                .catch(err => {
                    console.error(err);
                });
        })
