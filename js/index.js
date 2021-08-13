let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' rel='noopener noreferrer' href=https://${leads[i]}> ${leads[i]} </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    console.log("Save button clicked from addEventListener")
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    console.log(myLeads)
    console.log("DeleteAll button clicked from addEventListener")
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    myLeads.push(tabs[0]["url"])
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
