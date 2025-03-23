// Select all assignments and content area
const classrooms = document.querySelectorAll('.classroom');
const titleElement = document.querySelector(".classroom-title");
const contentArea = document.querySelector(".classroom-content");

function setActiveClass(selectedClass) {
    // Ensure all assignments lose the 'active' assignments first
    document.querySelectorAll('.classroom').forEach(classroom => {
        classroom.classList.remove("active");
    });

    // Add 'active' assignments only to the clicked assignments
    selectedClass.classList.add("active");
}

// Function to add click event to a classroom
function addClassroomClickEvent(classroom) {
    classroom.addEventListener("click", () => {
        const classNameElem = classroom.querySelector('.class-name');
        if (classNameElem) {
            const className = classNameElem.textContent.trim();
            titleElement.textContent = className;
            contentArea.innerHTML = `<h3 class="classroom-desc">Welcome to ${className}! Here you can write and submit your assignments.</h3>`;
            setActiveClass(classroom);
        }
    });
}

// Add click events to existing assignments
classrooms.forEach(classroom => {
    addClassroomClickEvent(classroom);
});

// Theme toggle logic
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    if (!themeToggle) return;

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    themeToggle.checked = currentTheme === 'dark';

    themeToggle.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme', this.checked);
        localStorage.setItem('theme', newTheme);
    });
});