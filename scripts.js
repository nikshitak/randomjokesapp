function onClick() {
    var request = new XMLHttpRequest()

    request.open('GET', 'https://official-joke-api.appspot.com/random_joke', true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
                document.getElementById('setup').innerHTML = "" + data.setup;
                document.getElementById('punchline').innerHTML = "" + data.punchline;
            
        } else {
            console.log('error')
        }
    }

    request.send()
}
