/* Scroll reveal */

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.animate(
                        [
                            {
                                opacity: 0,
                                transform: "translateY(25px)"
                            },
                            {
                                opacity: 1,
                                transform: "translateY(0)"
                            }
                        ],
                        {
                            duration: 750,
                            easing: "cubic-bezier(.2,.7,.2,1)",
                            fill: "forwards"
                        }
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.style.opacity = "1";
        element.style.transform = "translateY(0)";

    });

}

/* Mobile navigation */

const menuButton =
    document.getElementById("menuButton");

const mobileNav =
    document.getElementById("mobileNav");

if (menuButton && mobileNav) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}

/* Project data */

const projects = {

    "Capstone Project": [

        {
            image: "assets/Capstone.png",
            title: "MangoSense",
            description:
                "A four-member capstone project focused on developing a mango leaf disease identification system using object detection and convolutional neural networks. I contributed primarily to the project’s documentation, organizing the research, system processes, and supporting materials while working with the team on the overall project."

        }

    ],

    "Web & Mobile Development": [

        {
            image: "assets/1st.png",
            title: "Registration Form",
            description:
                "A 1st year front-end project focused on creating a clean and organized registration interface using HTML, CSS, and Bootstrap."
        },

        {
            image: "assets/2nd.png",
            title: "Portfolio WebApp v1",
            description:
                "A Mobile Portfolio App that I developed during my 2nd year that showcases my projects, technical skills, and background, while also featuring an Atbash Cipher tool for entering, encrypting, decrypting, and displaying text."
        },

        {
            image: "assets/6th.png",
            title: "Portfolio Website v2",
            description:
                "An updated version of my portfolio created during my 2nd year, featuring my background, skills, projects, and interests."
        },

        {
            image: "assets/7th.png",
            title: "Portfolio Website v3",
            description:
                "A redesigned and further updated portfolio developed during the final semester of my 2nd year, with an improved layout and presentation."
        },

        {
            image: "assets/8th.png",
            title: "Portfolio Website v4",
            description:
                "A 4th-year portfolio featuring a refined design and an updated presentation of my background, skills, projects, and experience."
        },
        {
            image: "assets/3rd.png",
            title: "Google Site",
            description:
                "A group project created during our first year to help visitors explore their interests through activities, resources, and interactive content."
        },

        {
            image: "assets/4th.png",
            title: "PDIC CRUD Project",
            description:
                "A CRUD-based project designed for efficient record management through create, read, update, and delete operations."
        },

        {
            image: "assets/5th.png",
            title: "Student Information Database",
            description:
                "A database project designed to organize student records and make information easier to manage."
        },

        {
            image: "assets/9th.png",
            title: "Login & Registration System",
            description:
                "A login and registration system with Google Sign-In, integrated with Firebase Authentication for secure account management."
        },

        {
            image: "assets/10th.png",
            title: "JavaScript Information Activity",
            description:
                "A JavaScript activity demonstrating string manipulation, loops, and date calculations by processing user input to reverse names, count vowels and consonants, and calculate age."
        }

    ],

    "Figma Prototypes": [

        {
            image: "assets/Prototype1.png",
            title: "WebApp Prototype v1",
            description:
                "An initial web app prototype used to map out the main screens, content flow, and user interactions before development."
        },

        {
            image: "assets/Prototype2.png",
            title: "Portfolio Website Prototype v3",
            description:
                "A third-version prototype of my portfolio website, created to plan its page structure, content placement, and interactive elements before building the actual site."
        },

        {
            image: "assets/Prototype3.png",
            title: "LearnBright App Prototype",
            description:
                "A group prototype developed with a teammate for LearnBright, where we planned the app screens, user flow, and key interactions in Figma."
        },

        {
            image: "assets/Prototype4.png",
            title: "Website Enhancement",
            description:
                "A UI/UX activity focused on improving an existing website by refining its layout, visual presentation, and overall user experience through Figma."
        }

    ],

    "Graphic Design": [

        {
            image: "assets/SIMS.png",
            title: "SIMS User Manual",
            description:
                "A technical user manual developed as part of a documentation team during OJT for the company's School Information Management System, where I contributed to documenting system workflows and features while also creating and organizing the manual's layout."
        },

        {
            image: "assets/TASKFLOW.png",
            title: "TaskFlow User Manual",
            description:
                "A technical user manual created with the documentation team during OJT for a workflow and task management system developed by another team, where I contributed to documenting its setup and procedures while also creating and organizing the manual's layout."
        },

        {
            image: "assets/PICKLEPRO.png",
            title: "Pickle Pro World User Manual",
            description:
                "A technical user manual created with the documentation team during OJT for a pickleball-related system developed by another team, where I contributed to documenting its features and navigation while also creating and organizing the manual's layout."
        },

        {
            image: "assets/brochure1.png",
            title: "Safe Space Act Leaflet",
            description:
                "An informational leaflet where I researched, developed the content, and designed the layout to present key information about the Safe Spaces Act in a clear and organized way."
        },

        {
            image: "assets/brochure2.png",
            title: "VAWC Awareness Brochure",
            description:
                "An awareness brochure where I researched, developed the content, and designed the layout to present information about Violence Against Women and Children in an accessible visual format."
        },

        {
            image: "assets/brochure3.png",
            title: "GreenGlam Brochure",
            description:
                "A project where I developed the content and designed a brochure for GreenGlam, an eco-friendly beauty brand concept focused on natural and sustainable products."
        },

        {
            image: "assets/poster1.png",
            title: "GreenGlam Poster",
            description:
                "A project where I developed the promotional content and designed a poster for the GreenGlam eco-friendly beauty brand concept."
        },

        {
            image: "assets/poster2.png",
            title: "Maria Makiling Poster",
            description:
                "A first-year activity where I researched and developed content about the Philippine folklore of Maria Makiling and designed the accompanying poster."
        }

    ],

    "Video Production": [

        {
            image: "assets/film1.png",
            title: "Horror Film: The Rent",
            description:
                "A student horror film about a group renting a secluded house with a dark history, where I took part as one of the actresses."
        },

        {
            image: "assets/film2.png",
            title: "Short Film: Linear Programming",
            description:
                "A short academic film where I developed the concept, directed the production, and helped bring the story and project together on screen."
        },

        {
            image: "assets/film3.png",
            title: "Short Film: VAWC",
            description:
                "A short awareness film about Violence Against Women and Children, where I helped develop the concept and also took part as an actress."
        }

    ]

};

/* Project elements */

const projectTabs =
    document.getElementById("projectTabs");

const projectImage =
    document.getElementById("projectImage");

const projectTitle =
    document.getElementById("projectTitle");

const projectDescription =
    document.getElementById("projectDescription");

const previousProject =
    document.getElementById("previousProject");

const nextProject =
    document.getElementById("nextProject");

/* Project state */

let currentCategory =
    "Capstone Project";

let currentProject =
    0;

let projectUpdateTimer;

/* Render project tabs */

function renderProjectTabs() {

    if (!projectTabs) {
        return;
    }

    projectTabs.innerHTML =
        Object.keys(projects)
            .map((category) => {

                const activeClass =
                    category === currentCategory
                        ? "active"
                        : "";

                return ` <button
class="project-tab ${activeClass}"
data-category="${category}"
type="button">

${category}

</button>
`;

            })
            .join("");

    const buttons =
        projectTabs.querySelectorAll(".project-tab");

    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                currentCategory =
                    button.dataset.category;

                currentProject = 0;

                renderProjectTabs();

                updateProject();

            }
        );

    });

}

/* Update project */

function updateProject() {

    const list =
        projects[currentCategory];

    if (!list || !list.length) {
        return;
    }

    /* Hide arrows for single projects */

    if (previousProject && nextProject) {

        const hasMultipleProjects =
            list.length > 1;

        previousProject.style.display =
            hasMultipleProjects
                ? ""
                : "none";

        nextProject.style.display =
            hasMultipleProjects
                ? ""
                : "none";

    }

    const project =
        list[currentProject];

    if (
        !projectImage ||
        !projectTitle ||
        !projectDescription
    ) {
        return;
    }

    clearTimeout(projectUpdateTimer);

    /* Fade image out */

    projectImage.style.opacity = "0";

    projectUpdateTimer =
        setTimeout(() => {

            projectImage.src =
                project.image;

            projectImage.alt =
                project.title;

            projectTitle.textContent =
                project.title;

            projectDescription.textContent =
                project.description;

            projectImage.style.opacity =
                "1";

        }, 180);

}

/* Previous project */

if (previousProject) {

    previousProject.addEventListener(
        "click",
        () => {

            const list =
                projects[currentCategory];

            if (!list || !list.length) {
                return;
            }

            currentProject =
                (
                    currentProject -
                    1 +
                    list.length
                ) % list.length;

            updateProject();

        }
    );

}

/* Next project */

if (nextProject) {

    nextProject.addEventListener(
        "click",
        () => {

            const list =
                projects[currentCategory];

            if (!list || !list.length) {
                return;
            }

            currentProject =
                (
                    currentProject +
                    1
                ) % list.length;

            updateProject();

        }
    );

}

/* Keyboard project navigation */

document.addEventListener(
    "keydown",
    (event) => {

        const activeElement =
            document.activeElement;

        /* Don't interfere while typing */

        if (
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA" ||
                activeElement.tagName === "SELECT"
            )
        ) {
            return;
        }

        /* Don't trigger with modifier keys */

        if (
            event.ctrlKey ||
            event.altKey ||
            event.shiftKey ||
            event.metaKey
        ) {
            return;
        }

        if (event.key === "ArrowLeft") {

            if (previousProject) {
                previousProject.click();
            }

        }

        if (event.key === "ArrowRight") {

            if (nextProject) {
                nextProject.click();
            }

        }

    }
);

/* Certificate data */

const certificates = {

    "DNSC Activities": [

        {
            image: "assets/BINHI Certificate of Recognition.png",
            title: "BINHI Certificate of Recognition"
        },

        {
            image: "assets/Binhi Certificate_page-0001.png",
            title: "BINHI Certificate"
        },

        {
            image: "assets/Capstone Project Certificate.png",
            title: "Capstone Project Certificate"
        },

        {
            image: "assets/Capstone Project Exhibit Certificate.png",
            title: "Capstone Project Exhibit Certificate"
        },

        {
            image: "assets/Day 1 of Advanced Seminar Series.png",
            title: "Advanced Seminar Series – Day 1"
        },

        {
            image: "assets/Day 2 of Advanced Seminar Series.png",
            title: "Advanced Seminar Series – Day 2"
        },

        {
            image: "assets/Certificate of participation any community development or engagement.png",
            title: "Certificate of Participation – Community Development"
        },

        {
            image: "assets/Certificate of Participation(Vishwagan).png",
            title: "Viswagan Certificate of Participation"
        }

    ],

    "OJT": [

        {
            image: "assets/OJT Certificate.png",
            title: "OJT Certificate"
        }

    ],

    "External": [

        {
            image: "assets/DOST Certificate.png",
            title: "DOST Certificate"
        }

    ],

    "Cisco": [

        {
            image: "assets/C++ Essentials 1.jpg",
            title: "C++ Essentials 1"
        },

        {
            image: "assets/C++ Essentials 2.jpg",
            title: "C++ Essentials 2"
        },

        {
            image: "assets/C++ Advanced.jpg",
            title: "C++ Advanced"
        },

        {
            image: "assets/HTML Essentials.jpg",
            title: "HTML Essentials"
        },

        {
            image: "assets/CSS Essentials.jpg",
            title: "CSS Essentials"
        },

        {
            image: "assets/JavaScript Essentials 1.jpg",
            title: "JavaScript Essentials 1"
        },

        {
            image: "assets/JavaScript Essentials 2.jpg",
            title: "JavaScript Essentials 2"
        },

        {
            image: "assets/Introduction to Cybersecurity.jpg",
            title: "Introduction to Cybersecurity"
        },

        {
            image: "assets/Cybersecurity Essentials.jpg",
            title: "Cybersecurity Essentials"
        },

        {
            image: "assets/Introduction to Packet Tracer.jpg",
            title: "Introduction to Packet Tracer"
        },

        {
            image: "assets/Ethical Hacker.jpg",
            title: "Ethical Hacker"
        },

        {
            image: "assets/Introduction to Modern AI.jpg",
            title: "Introduction to Modern AI"
        }

    ]

};

/* Certificate elements */

const certificateTabs =
    document.getElementById("certificateTabs");

const certificateImage =
    document.getElementById("certificateImage");

const certificateCategory =
    document.getElementById("certificateCategory");

const certificateTitle =
    document.getElementById("certificateTitle");

const previousCertificate =
    document.getElementById("prevCertificate");

const nextCertificate =
    document.getElementById("nextCertificate");

/* Certificate state */

let currentCertificateCategory =
    "DNSC Activities";

let currentCertificate =
    0;

let certificateUpdateTimer;

/* Render certificate tabs */

function renderCertificateTabs() {

    if (!certificateTabs) {
        return;
    }

    certificateTabs.innerHTML =
        Object.keys(certificates)
            .map((category) => {

                const activeClass =
                    category === currentCertificateCategory
                        ? "active"
                        : "";

                return ` <button
class="certificate-tab ${activeClass}"
data-category="${category}"
type="button">

${category}

</button>
`;

            })
            .join("");

    const buttons =
        certificateTabs.querySelectorAll(
            ".certificate-tab"
        );

    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                currentCertificateCategory =
                    button.dataset.category;

                currentCertificate = 0;

                renderCertificateTabs();

                updateCertificate();

            }
        );

    });

}

/* Update certificate */

function updateCertificate() {

    const list =
        certificates[currentCertificateCategory];

    if (!list || !list.length) {
        return;
    }

    /* Hide arrows for single certificates */

    if (previousCertificate && nextCertificate) {

        const hasMultipleCertificates =
            list.length > 1;

        previousCertificate.style.display =
            hasMultipleCertificates
                ? ""
                : "none";

        nextCertificate.style.display =
            hasMultipleCertificates
                ? ""
                : "none";

    }

    const certificate =
        list[currentCertificate];

    if (
        !certificateImage ||
        !certificateCategory ||
        !certificateTitle
    ) {
        return;
    }

    clearTimeout(certificateUpdateTimer);

    /* Fade image out */

    certificateImage.style.opacity = "0";

    certificateUpdateTimer =
        setTimeout(() => {

            certificateImage.src =
                certificate.image;

            certificateImage.alt =
                certificate.title;

            certificateCategory.textContent =
                currentCertificateCategory;

            certificateTitle.textContent =
                certificate.title;

            certificateImage.style.opacity =
                "1";

        }, 180);

}

/* Previous certificate */

if (previousCertificate) {

    previousCertificate.addEventListener(
        "click",
        () => {

            const list =
                certificates[currentCertificateCategory];

            if (!list || !list.length) {
                return;
            }

            currentCertificate =
                (
                    currentCertificate -
                    1 +
                    list.length
                ) % list.length;

            updateCertificate();

        }
    );

}

/* Next certificate */

if (nextCertificate) {

    nextCertificate.addEventListener(
        "click",
        () => {

            const list =
                certificates[currentCertificateCategory];

            if (!list || !list.length) {
                return;
            }

            currentCertificate =
                (
                    currentCertificate +
                    1
                ) % list.length;

            updateCertificate();

        }
    );

}

/* Initialize */

renderProjectTabs();

updateProject();

renderCertificateTabs();

updateCertificate();
