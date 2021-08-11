let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    console.log("Save button clicked from addEventListener")
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    console.log(myLeads)
    console.log("DeleteAll button clicked from addEventListener")
    myLeads = []
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' rel='noopener noreferrer' href=https://${myLeads[i]}> ${myLeads[i]} </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}