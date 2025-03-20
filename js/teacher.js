// Populate student counts initially
document.querySelectorAll('.classroom').forEach(classroom => {
    if (!classroom.querySelector('.student-count').textContent) {
        let randomStudents = Math.floor(Math.random() * 30) + 1;
        classroom.querySelector('.student-count').textContent = randomStudents;
    }
});

// Select all classrooms and content area
const classrooms = document.querySelectorAll('.classroom');
const titleElement = document.querySelector(".classroom-title");
const contentArea = document.querySelector(".classroom-content");

function setActiveClass(selectedClass) {
    // Ensure all classrooms lose the 'active' class first
    document.querySelectorAll('.classroom').forEach(classroom => {
        classroom.classList.remove("active");
    });

    // Add 'active' class only to the clicked classroom
    selectedClass.classList.add("active");
}

// Function to add click event to a classroom
function addClassroomClickEvent(classroom) {
    classroom.addEventListener("click", () => {
        const classNameElem = classroom.querySelector('.class-name');
        if (classNameElem) {
            const className = classNameElem.textContent.trim();
            titleElement.textContent = className;
            contentArea.innerHTML = `<h3 class="classroom-desc">Welcome to ${className}! Here you can manage all your students, assignments and more.</h3>`;
            setActiveClass(classroom);
            
            // Show delete button when a class is selected
            document.querySelector('.delete-btn').style.display = 'block';
        }
    });
}

// Add click events to existing classrooms
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

// Create new classrooms dynamically
const createClassBtn = document.querySelector('.create-btn');
const classList = document.getElementById('class-list');

if (createClassBtn) {
    createClassBtn.addEventListener('click', () => {
        const classCounter = document.querySelectorAll('.classroom').length + 1;
        const newClass = document.createElement('li');
        newClass.classList.add('classroom');
        newClass.id = `classroom${classCounter}`;

        const className = `Class ${classCounter}`;
        newClass.innerHTML = `
            <span class="class-name">${className}</span>
            <span class="student-count">${Math.floor(Math.random() * 30) + 1}</span>`;

        classList.appendChild(newClass);

        // Add click event to the new classroom
        addClassroomClickEvent(newClass);

        // Set active class immediately for the newly created classroom
        setActiveClass(newClass);

        // Update title and content
        titleElement.textContent = className;
        contentArea.innerHTML = `<h3 class="classroom-desc">Welcome to ${className}! Here you can manage all your students, assignments, and more.</h3>`;

        // Show delete button when a new class is created and selected
        document.querySelector('.delete-btn').style.display = 'block';
    });
}

// Handle delete button
const deleteBtn = document.querySelector('.delete-btn');
if (deleteBtn) {
    // Hide delete button initially
    deleteBtn.style.display = 'none';
    
    deleteBtn.addEventListener('click', () => {
        const activeClass = document.querySelector('.classroom.active');
        if (activeClass) {
            if (confirm('Are you sure you want to delete this class?')) {
                activeClass.remove();
                titleElement.textContent = 'Select a Classroom';
                contentArea.innerHTML = '<h3 class="classroom-desc">Click on the classroom to see details here.</h3>';
                deleteBtn.style.display = 'none';
            }
        }
    });
}