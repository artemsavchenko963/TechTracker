const modal = document.querySelector('#modal')
const content = document.querySelector('#content')
const backdrop = document.querySelector('#backdrop')

content.addEventListener('click', openCard)
backdrop.addEventListener('click', closeModal)

const technologies = [
    { title: 'HTML', description: 'HTML text', type: 'html', done: true },
    { title: 'CSS', description: 'CSS text', type: 'css', done: true },
    { title: 'Java Script', description: 'Java Script text', type: 'js', done: false },
    { title: 'Git', description: 'Git text', type: 'git', done: false },
    { title: 'React', description: 'React text', type: 'react', done: false }
]

console.log(technologies);


function openCard() {
    modal.classList.add('open')
}
function closeModal() {
    modal.classList.remove('open')
}

function init() {
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

function toCard(tech) {
    const doneClass = tech.done ? 'done' : ''

    return `
        <div class="card ${doneClass}">
            <h3>${tech.title}</h3>
        </div>
    `
}


init()