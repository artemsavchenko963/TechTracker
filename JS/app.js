const modal = document.querySelector('#modal')
const content = document.querySelector('#content')
const backdrop = document.querySelector('#backdrop')
const progress = document.querySelector('#progress')

content.addEventListener('click', openCard)
backdrop.addEventListener('click', closeModal)

const technologies = [
    { title: 'HTML', description: 'HTML text', type: 'html', done: true },
    { title: 'CSS', description: 'CSS text', type: 'css', done: true },
    { title: 'Java Script', description: 'Java Script text', type: 'js', done: true },
    { title: 'Git', description: 'Git text', type: 'git', done: true },
    { title: 'React', description: 'React text', type: 'react', done: false },
]

console.log(technologies);


function openCard() {
    modal.classList.add('open')
}
function closeModal() {
    modal.classList.remove('open')
}

function init() {
    renderCards()
    renderProgress()
}

function renderCards() {
    if (technologies.length === 0) {
        content.innerHTML = `<p class="empty">There are nothing...</p>`
    } else {
        let html = ''
        for (let i = 0; i < technologies.length; i++) {
            const tech = technologies[i]
            html += toCard(tech)
        }
        content.innerHTML = html
    }
}

function renderProgress() {
    const percent = computeProgressPercent()

    let background

    if (percent <= 30) {
        background = 'red'
    } else if (percent > 30 && percent < 70) {
        background = '#ff6a00'
    } else {
        console.log('biibibibi')
        background = '#73BA3C'
    }

    progress.style.background = background
    progress.style.width = percent + '%'
    progress.textContent = percent ? percent + '%' : ''  //----!!!!!!------------------------------------------------
}

function computeProgressPercent() {
    if (technologies.length === 0) {
        return 0
    }
    let doneCount = 0
    for (let i = 0; i < technologies.length; i++) {
        if (technologies[i].done === true) doneCount++
    }
    return Math.round((100 * doneCount) / technologies.length)
}

function toCard(tech) {
    const doneClass = tech.done ? 'done' : ''
    return `
        <div class="card ${doneClass}">
            <h3>${tech.title}</h3>
        </div>
    `
}


init()