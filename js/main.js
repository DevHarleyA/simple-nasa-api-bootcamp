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
            document.querySelector('img').src = data.hdurl
            document.querySelector('img').classList.remove('hidden')
            document.querySelector('.description').innerText = 'Photo Description: ' + data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}