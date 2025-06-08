document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjust for sticky navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('.navbar').offsetHeight - 1; // Adjust by a pixel or two
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Project Modal Functionality
    const projectModal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const projectItems = document.querySelectorAll('.project-item');
    const modalProjectDetails = document.getElementById('modal-project-details');

    // Example project data (Replace with your actual project details)
    const projectsData = {
        'library-management': {
            title: 'Library Management System',
            description: 'Developed intuitive and easy-to-navigate interface for seamless interaction with 88% user satisfaction. Boosted the efficiency of library operations, reducing manual effort by 95% and minimizing errors to 2%. Employed SQL to create and manage a structured database with 98% data integrity rate.',
            technologies: ['Python', 'SQL'],
            liveLink: '',
            githubLink: 'https://github.com/Pranoti-5/Library-Management'
        },
        'titanic-eda': {
            title: 'EDA on Titanic Dataset',
            description: 'Performed exploratory data analysis (EDA) to identify survival trends based on age, gender, and ticket class. Created summary statistics and visualizations to support data-driven insights. Gained hands-on practice with data cleaning, feature understanding, and plotting.',
            technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn (basics)', 'SkLearn (basics)'],
            liveLink: '', // No live demo for this example
            githubLink: 'https://github.com/Pranoti-5/Titanic-EDA'
        }
        // Add data for other projects here, using the same 'data-project' value as the key
    };

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            const project = projectsData[projectId];

            if (project) {
                let detailsHtml = `<h3>${project.title}</h3>`;
                detailsHtml += `<p>${project.description}</p>`;
                detailsHtml += `<p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>`;
                detailsHtml += `<div class="project-links">`;
                if (project.liveLink) {
                    detailsHtml += `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
                }
                if (project.githubLink) {
                    detailsHtml += `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub Repo</a>`;
                }
                detailsHtml += `</div>`;


                modalProjectDetails.innerHTML = detailsHtml;
                projectModal.classList.add('show'); // Use class to show modal with transition
            }
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        projectModal.classList.remove('show'); // Use class to hide modal with transition
    });

    // Close the modal when the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.classList.remove('show'); // Use class to hide modal with transition
        }
    });
});
