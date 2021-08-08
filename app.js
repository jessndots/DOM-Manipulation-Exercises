let container = document.getElementById("container")

container = document.querySelector("#container")

const secondItems = document.querySelectorAll("li.second")

const orderedThird = document.querySelector("ol li.third")

container.innerHTML += "Hello!" 
// i tried changing the text completely with innerText but it got rid of the lists that made exercise 10 not work. decided to just add Hello to the end using innerHTML

const footer = document.querySelector("div.footer")
footer.className += " main"

footer.classList.remove('main')

const newListItem = document.createElement('li')

newListItem.innerText = 'four'

const ul = document.querySelector('ul')
ul.append(newListItem)

const ol = document.querySelectorAll('ol li')
for (let i=0; i<ol.length; i++) {
    ol[i].style.backgroundColor = 'green'
}

footer.remove()

