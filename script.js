
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
 