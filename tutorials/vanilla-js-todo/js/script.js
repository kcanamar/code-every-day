/////////////////////
// State Variable
/////////////////////

const state = {
    todos: [
        {
            title: "Example",
            description: "example description",
            category: "general"
        },
    ],
    categories: ["general"]
}

//////////////////////
// Todos
//////////////////////
// function to generate categories to the DOM
function generateCategories(){
    // select where todos will be populated
    const main = document.querySelector("main")
    
    // clear out hte main tag
    main.innerHTML = ""
    
    // itterate over state.catergories to create an aside on each itteration with the catergory as id
    for (let category of state.categories){
        // create aside element
        const aside = document.createElement("aside")
        // set aside attribute id="category"
        aside.setAttribute("id", category)
        // add a class of catergory to all asides
        aside.classList.add("category")
        // create a heading with each category 
        aside.innerHTML = `<h4>${category}</h4>`
        // append the asides as children to the parent main
        main.append(aside)
    }
}
// function to generate todos on the DOM
function generateTodos(){
    // iterate over state.todos to create a todo on each itteration
    for ( let todo of state.todos) {
        // select the catergory based on the todos catergory
        const cat = document.querySelector(`#${todo.category}`)
        // create the todo content
        const p = document.createElement("p")
        // add the class of todo 
        p.classList.add("todo")
        // set the html of the todo content
        p.innerHTML = `<h5>${todo.title}</h5>${todo.description}`
        // append the todo to the selelected category
        cat.append(p)
    }
}

// main function that sets and resets the app as information updates
function populateTodos(){
    generateCategories()
    generateTodos()
}

/////////////////////////
// Category Form Handler
/////////////////////////
// selecting the child form element with the parent elements id of add-category 
const catForm = document.querySelector("#add-category form")
// create event listener for category form submissions
catForm.addEventListener("submit", (event) => {
    event.preventDefault()
    // select the text input value from within the parent element with id of add-category
    const inputValue = document.querySelector("#add-category input[type='text']").value
    // update out state category array with the new category
    state.categories.push(inputValue)
    // clear out the input value
    inputValue = ""
    // populate the todos with the newly added category
    populateTodos()
})

// inital poopluation on page load
populateTodos()