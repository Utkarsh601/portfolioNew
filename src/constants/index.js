import project1 from "../assets/projects/shoppingcart.png";
import project2 from "../assets/projects/gifgenerator.gif";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/weather.png";

export const HERO_CONTENT = `I am a final-year B.Tech Computer Science student with
 excellent problem-solving skills and a strong ability to
 perform in a team. I am passionate about coding, web
 development, and continuously learning new technologies
 to stay updated in the field. `;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a keen interest in full stack development. While I have no professional experience yet, I am passionate about creating efficient and user-friendly web applications. I have worked with technologies such as React, Node.js, MySQL, Express and MongoDB through academic projects and self-learning. My journey in web development began with a deep curiosity for how things work, and it has evolved into a commitment to continuously learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March-2024 - June-2024",
    role: "ReactJS",
    company: "Namaste React Akshay Saini",
    description: `write about react JS
ChatGPT
I have learned React.js, a powerful JavaScript library for building user interfaces, particularly single-page applications. React allows for the creation of reusable UI components, enabling efficient development and maintenance of complex user interfaces. Its virtual DOM feature enhances performance by updating only the necessary parts of the page. With React, I can manage the state of applications effectively, ensuring a seamless user experience. This library's component-based architecture and declarative syntax make it an essential tool for modern web development.`,
    technologies: ["Core ReactJS"],
  },
  {
    year: "July-2023 - Present",
    role: "Artificial Intelligence",
    company: "Ducat",
    description: `I have learned AI development using Python, leveraging its versatility and extensive libraries such as TensorFlow for building and training deep learning models. Python's simplicity and readability are advantageous for implementing various artificial intelligence algorithms, including natural language processing, image recognition, and predictive analytics. Additionally, Python's ecosystem includes tools like NumPy and pandas for data manipulation and analysis, enhancing my ability to preprocess and handle large datasets effectively in AI applications.`,
    technologies: ["Python", "SQL", "Alogrithms", "Statistics" , "Machine Learning"],
  },
  {
    year: "January-2023 - June-2023",
    role: "Mern Stack Development",
    company: "Dot Batch",
    description: `I have already learned the MERN stack, which includes MongoDB, Express.js, React, and Node.js. This full stack JavaScript framework allows me to efficiently handle both front-end and back-end development, equipping me to build efficient and user-friendly web applications.`,
    technologies: ["HTML", "CSS", "Tailwind", "ReactJS" , "ExpressJS" , "Mongodb" , "NodeJS"],
  },
  {
    year: "September-2022 - November-2022",
    role: "DSA with JAVA ",
    company: "Apna College",
    description: `I have learned Data Structures and Algorithms (DSA) using Java, which has enhanced my problem-solving skills and understanding of core programming concepts. Mastering data structures like arrays, linked lists, and trees, as well as algorithms for searching and sorting, has provided a strong foundation for efficient coding practices..`,
    technologies: ["DSA", "JAVA"],
  },
];

export const PROJECTS = [
  {
    title: "Shopping Cart Website",
    image: project1,
    description:
    "A shopping cart is an online tool where users select and manage items for purchase. It allows users to add, view update, and remove items before proceeding to checkout.",
    technologies: ["HTML", "CSS", "React" ,"Redux"],
  },
  {
    title: "Random GIF Generator",
    image: project2,
    description:
    "A Random GIFs Generator is a web application that fetches and displays random GIFs from a source like Giphy. Users can refresh to see new GIFs or type to get the desired GIFs, providing a fun and entertaining experience", 
    technologies: ["HTML", "CSS", "ReactJs", "Hooks" , "Axios"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Weather Platform",
    image: project4,
    description:
    "A weather forecast website is an online platform that provides up-to-date weather information, including current conditions, forecasts, and various weather-related data for specific locations using API fetch.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "New Delhi, India",
  phoneNo: "+919717243151 ",
  email: "utkarshmishra6102@gmail.com",
};
