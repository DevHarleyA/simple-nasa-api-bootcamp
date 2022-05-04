document.querySelector('.submitBtn').addEventListener('click', findDaily)

function findDaily() {
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=MZA7cry4WIRGEdB9y1Mw2RQxIdyJN6hz1fuvu83C&date=${date}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.date)
            console.log(data.title)
            console.log(data.hdurl)
            document.querySelector('.title').innerText = 'Photo Title: ' + data.title
            document.querySelector('.description').innerText = 'Photo Description: ' + data.explanation
            if (data.media_type === 'image'){
                document.querySelector('img').src = data.hdurl
                document.querySelector('img').classList.remove('hidden')
                document.querySelector('iframe').classList.add('hidden')
            } else if (data.media_type === 'video') {
                document.querySelector('img').classList.add('hidden')
                document.querySelector('iframe').src = data.url
                document.querySelector('iframe').classList.remove('hidden')
            } else {
                alert('Unsupported Media Type')
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}