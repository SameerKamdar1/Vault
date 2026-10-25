
/* Navbar */
const navbar = document.querySelector(".navbar");
const vaultTitle = document.querySelector(".title");

/*Clock*/
const clock = document.querySelector(".navbar p");

/* Page heading */
const notesHeader = document.querySelector(".notes-header");

/* Search and Add button */
const notesToolbar = document.querySelector(".notes-toolbar");
const searchBar = document.querySelector(".search-bar");
const addButton = document.querySelector(".add-button");

/* Notes section and sorting */
const notesSection = document.querySelector(".notes-section");
const sortContainer = document.querySelector(".notes-sort");
const sortIcon = document.querySelector(".sort-icon");
const notesFilter = document.querySelector(".notes-filter");

/* Notes grid */
const notesGrid = document.querySelector(".notes-grid");

/* All note cards */
const noteCards = document.querySelectorAll(".note-card");

/* Elements inside the note cards */
const notePreviews = document.querySelectorAll(".note-preview");
const noteInfos = document.querySelectorAll(".note-info");
const noteHeadings = document.querySelectorAll(".note-heading");

const noteTitles = document.querySelectorAll(".note-heading h3");
const noteLanguages = document.querySelectorAll(".note-language");
const noteTimes = document.querySelectorAll(".note-time");

/* Edit and Delete buttons */
const noteActions = document.querySelectorAll(".note-actions");
const editButtons = document.querySelectorAll(".edit-button");
const deleteButtons = document.querySelectorAll(".delete-button");

/*Function for the working clock */
function liveClock()
{
 const now = new Date();
    let period = "";
    let hours = now.getHours().toString().padStart(2, '0');
    if(hours >= 12)
    {
        period = "PM";
      
    }
    else
    {
        period = "AM";
    }
    if(hours>12)
    {
        hours = hours-12;
    }
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;
    
}
setInterval(liveClock, 1000);

/*Array of note cards */
let notes = [];
/* Function to save notes to local storage */
function saveNotes() {
    localStorage.setItem("vaultNotes", JSON.stringify(notes));
}
/*Reloading the notes */
const savedNotes = localStorage.getItem("vaultNotes");

 notes = savedNotes ? JSON.parse(savedNotes) : [];

/* Add button click event listener */
const modalContainer = document.querySelector(".modal-container");
function openModal()
{
    modalContainer.innerHTML = `<div class="modal-overlay">
    <form class="note-form">
        <input
            type="text"
            class="note-title-input"
            placeholder="Untitled Note"
            aria-label="Note title"
            required
        >

        <input
            type="text"
            class="note-tag-input"
            placeholder="# Add a tag"
            aria-label="Note tag"
        >

        <textarea
            class="note-content-input"
            placeholder="Start writing..."
            aria-label="Note content"
            required
        ></textarea>

        <div class="form-actions">
            <button type="button" class="cancel-button">
                Cancel
            </button>

            <button type="submit" class="save-button">
                Save
            </button>
        </div>
    </form>
</div>`;

}

function renderNotes() {
    notesGrid.innerHTML = notes.map(note => `
        <article class="note-card">
            <div class="note-preview">
                <p>${note.content}</p>
            </div>
            <div class="note-info">
                <div class="note-heading">
                    <h3>${note.title}</h3>
                    <span class="note-language">${note.tag}</span>
                </div>
                <time class="note-time" datetime="${note.createdAt}">
                    ${note.createdAt}
                </time>
            </div>
            <div class="note-actions">
                <button type="button" class="edit-button">Edit</button>
                <button type="button" class="delete-button">Delete</button>
            </div>
        </article>
    `).join("");
}
      
addButton.addEventListener("click", () => {
 openModal();
 
const modal = modalContainer.querySelector(".modal-overlay");
const noteForm = modalContainer.querySelector(".note-form");

const titleInput = modalContainer.querySelector(".note-title-input");
const tagInput = modalContainer.querySelector(".note-tag-input");
const contentInput = modalContainer.querySelector(".note-content-input");

const cancelButton = modalContainer.querySelector(".cancel-button");
const saveButton = modalContainer.querySelector(".save-button");
/* Save button click event listener */
saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const title = titleInput.value.trim();
    const tag = tagInput.value.trim();
    const content = contentInput.value.trim();

    /* Validate inputs */
    if (title === "" || content === "")
         {
        alert("Title and content cannot be empty.");
        return;
        }
    else
         {

        const note = {
                    id: crypto.randomUUID(),
                    title: titleInput.value.trim(),
                    tag: tagInput.value.trim(),
                    content: contentInput.value.trim(),
                    createdAt: new Date().toLocaleDateString(),
                    };
                    
                    notes.unshift(note);
                    console.log(notes);
                    saveNotes();
        modalContainer.innerHTML = "";
        renderNotes();
    }

    

})

/* Cancel button click event listener */
 cancelButton.addEventListener("click", () => {
     modalContainer.innerHTML = "";
 });

})

