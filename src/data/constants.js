import chbsImage from '../images/chbs.jpeg';
import nitpImage from '../images/nitp.jpg';
import SRM from '../images/SRM_University_Amaravati_Logo.jpg';
import tumor from '../images/tumor.jpg';
import chat from '../images/chatt.png';
import sudoko from '../images/Sudoko.webp';
import loan from '../images/loan.png';
import tsfImage from '../images/tsf.png';
import ieeeImage from '../images/ieee.png';
import navjeevanImage from '../images/navjeevan.png';
import jobireImage from '../images/jobire.png';
import portfolioImage from '../images/portfolio.png';
import helpingHandsImage from '../images/helpinghands.png';
import chhotu from '../images/chhotu.png'
import HeroImage from '../images/singh.jpeg'
import birla from '../images/birla.png'
import iot from '../images/iot.jpg'


export const Bio = {
  name: "Ankush Singh",
  roles: [
    "Web developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile final-year Electronics and Communication Engineering student with a passion for data structures and full-stack web development. Always eager to take on new challenges, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make meaningful contributions and achieve great things in the tech industry.",
  github: "https://github.com/Ash0508",
  resume:
    "https://drive.google.com/file/d/1PfJggC3S2ph845_GSthIlj9trW0ADvhg/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/ankush-singh-4459a824a/",
  insta: "https://www.instagram.com/_axkush_singh/",
  xicon: "https://x.com/AnkushS00373636",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: tsfImage,
    role: "Amazon ML Summer School 2023",
    company: "Amazon",
    date: "June'24",
    desc: "Learned and Implemented Supervised,Reinforcement Learning and Neural Networks Trained and tested the model. Achieved high accuracy.",
    skills: [
      "Machine Learning",
      " Pandas, NumPy",
      "Matplotlib",
    ],
  },
  {
    id: 1,
    img: ieeeImage,
    role: "DATA SCIENCE INTERN",
    company: "Code_Clause",
    date: "Nov 2023 - Dec 2023",
    desc: "The Image Caption Generator is a powerful tool that combines computer vision and natural language processing to generate descriptive captions for images. This project leverages state-of-the-art deep learning techniques to automatically generate human-like captions that accurately depict the content of input images.",
    skills: [
      "convolutional neural networks (CNNs)",
      " recurrent neural networks (RNNs)",
    ],
  },
  {
    id: 2,
    img: ieeeImage,
    role: "Data Science Intern",
    company: "CodSoft",
    date: "OCt 2023 - Nov 2023",
    desc: "Utilized machine learning algorithms on the famous Titanic Disaster Dataset to predict passenger survival. This project, aimed at beginners, serves as an introductory guide to starting with Kaggle competitions. The repository explains every topic with a naive approach, making it easy for newcomers to grasp fundamental machine learning concepts.",
    skills: [
      "KNN",
      "Ramdom forest Algorithm",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: SRM,
    school: "SRM University , AP",
    date: "Dec'21-May'25",
    grade: "8.61 CGPA",
    desc: 
    "I am a motivated and versatile final-year Computer Science and Engineering student at SRM University, Andhra Pradesh, with a CGPA of 8.60. I have a strong foundation in Data Structures and Algorithms (DSA), Database Management System (DBMS), Operating Systems, and Object-Oriented Programming Concepts (OOPS). I have gained experience through various internships and projects, including Amazon ML Summer School 2023, where I learned and implemented advanced concepts in Machine Learning. I have worked on projects such as tumor disease detection, a mental health care chatbot, and an AI-based Sudoku solver. I am proficient in languages like Java, Python, C++, C, JavaScript, and SQL, and I have experience with technologies and frameworks such as HTML5, Spring Boot, CSS3, MongoDB, Express, React, NodeJS, and Bootstrap. I am always eager to take on new challenges and deliver high-quality results with a positive attitude and growth mindset.",
    degree: "Bachelor of Technology - Computer Science and Engineering",
  },
  {
    id: 1,
    img: navjeevanImage,
    school: "St Thomas College, Lucknow",
    grade: "95%",
    desc: "I completed my 12th standard education at St Thomas College, Lucknow, where I studied Mathematics with Science.",
    degree: "ISC(XII), Physics,Chemistry and Mathematics",
  },
  {
    id: 2,
    img: navjeevanImage,
    school: "St Thomas College, Lucknow",
    grade: "86.0%",
    desc: "I completed my 10th education at St Thomas College, Lucknow where I studied Science and Computers with Mathematics.",
    degree: "ICSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: " Chatbot for Mental Health Care",
    date: "Jun'24",
    description:
      "Developed a responsive chatbot using the MERN stack (MongoDB, Express, React, Node.js) to provide mental health support and resources Integrated Natural Language Processing (NLP) techniques to accurately interpret and respond to user queries,improving user interaction and support effectiveness.Implemented machine learning models trained with Stochastic Gradient Descent (SGD) to enhance anomaly detection and bolster network security.",
    image: chat,
    member: [
      {
        name: "Ankush Singh",
        img: HeroImage,
       
        },
      ],
    tags: [
      "MERN",
      "ML and NLP",
    ],
    category: "web app",
    github: "https://github.com/Ash0508/Mental_Health_ChatBot",
    // webapp: "https://payment-app-phi.vercel.app/",
  },
  {
    id: 1,
    title: "Tumor Disease Detection using Feature Selection",
    date: "Jun'23",
    description:
      "Researched tumor disease detection using Mutual Information and Chi-Square Test for feature selection  Implemented various training algorithms: Decision Trees, Random Forests, Logistic Regression, Naive Bayes,SVM, and KNN Analyzed feature selection impact on tumor detection accuracy",
    image: tumor,
    member: [
      {
        name: "Ankush Singh",
        img: HeroImage,
       
        },
      ],
    tags: ["Mutual Information and Chi-Square Test"],
    category: "web app",
    github: "https://github.com/Ash0508/Tumor-Disease-Detection-using-Feature-Selection-",
    webapp: "",
  },
  {
    id: 3,
    title: "AI-based Sudoku Solver using CSP Technique ",
    date: "Jul'24",
    description:
      "Developed a personal portfolio website to showcase my professional journey and skills. About section provides a detailed overview of my background, interests, and goals. In the Experience section, I highlight my professional roles and accomplishments, showcasing the growth and impact I've made in various positions.Projects section features a selection of my key projects, demonstrating my expertise and the range of my work. Lastly, the Contact section allows visitors to easily reach out to me for networking, collaboration, or inquiries. The portfolio is designed to be informative and engaging, reflecting my personal and professional brand.",
    image: sudoko,
  
      member: [
      {
        name: "Ankush Singh",
        img: HeroImage,
       
        },
      ],
    tags: [
      "CSP Technique, A* and Heuristics Search",
    ],
    category: "web app",
    github: "https://github.com/Ash0508/AI-based_Sudoku_Solver_using_CSP_Technique",
    webapp: "",
  },
   {
    id: 4,
    title: "Amazon_ML_Summer_School_Loan-Prediction",
    date: "Mar'24",
    description:
      "Loan Prediction",
    image: loan,
    tags: [
      "MPU 6050",
      "Arduino UNO",
    ],
     category: "IOT",
     github:"https://github.com/Ash0508/Amazon_ML_Summer_School_Loan-Prediction/tree/main",
     member: [
      {
        name: "Ankush Singh",
        img: loan,
       
      },
      //  {
      //    name: "Roshan Birla",
      //    img: birla,
      //  },
      //  {
      //    name: "Vishesh Verma",
      //    img: chhotu,
      //  }
    ],
    
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];


// import chbsImage from '../images/chbs.jpeg';
// import nitpImage from '../images/nitp.jpg';
// import tsfImage from '../images/tsf.png';
// import ieeeImage from '../images/ieee.png';
// import navjeevanImage from '../images/navjeevan.png';
// import jobireImage from '../images/jobire.png';
// import portfolioImage from '../images/portfolio.png';
// import helpingHandsImage from '../images/helpinghands.png';
// import chhotu from '../images/chhotu.png'
// import HeroImage from '../images/singh.jpeg'
// import birla from '../images/birla.png'
// import iot from '../images/iot.jpg'

// export const Bio = {
//   name: "Ankush Singh",
//   contact: "+91-8756684936",
//   location: "Lucknow, UP",
//   email: "singhankush0508@gmail.com",
//   roles: [
//     "Web developer",
//     "Programmer",
//   ],
//   description:
//     "I am a motivated and versatile final-year Computer Science and Engineering student with a passion for data structures and full-stack web development. Always eager to take on new challenges, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make meaningful contributions and achieve great things in the tech industry.",
//   github: "https://github.com/Ash0508",
//   linkedin: "https://www.linkedin.com/in/harsh-singh-b1abba249/",
// };

// export const education = [
//   {
//     id: 0,
//     img: nitpImage,
//     school: "SRM University, Andhra Pradesh",
//     date: "2021 – 2025",
//     grade: "8.60 CGPA",
//     location: "Amarawati, Andhra Pradesh",
//     degree: "B.Tech - Computer Science and Engineering",
//     coursework: [
//       "Data Structures and Algorithms (DSA)",
//       "Database Management System (DBMS)",
//       "Operating Systems",
//       "Object-Oriented Programming Concepts (OOPS)"
//     ],
//   },
// ];

// export const experiences = [
//   {
//     id: 0,
//     img: tsfImage,
//     role: "Advanced Concept of ML",
//     company: "Amazon ML Summer School 2023",
//     date: "Sept 2023 - Oct 2023",
//     desc: "Learned and Implemented Supervised, Reinforcement Learning, and Neural Networks. Worked on a loan prediction project using a Kaggle dataset. Trained and tested the model, achieving high accuracy. Used Python for programming, employing Pandas, NumPy, and Matplotlib for data analysis and visualization, and Pandas for data preprocessing. Utilized Jupyter Notebook as the primary environment for project development, ensuring seamless workflow for data exploration, analysis, and model prototyping.",
//     skills: [
//       "AI-ML",
//       "Software Engineering"
//     ],
//   },
// ];

// export const projects = [
//   {
//     id: 0,
//     title: "Tumor Disease Detection using Feature Selection",
//     date: "2023",
//     description: "Researched tumor disease detection using Mutual Information and Chi-Square Test for feature selection. Implemented various training algorithms: Decision Trees, Random Forests, Logistic Regression, Naive Bayes, SVM, and KNN. Analyzed feature selection impact on tumor detection accuracy.",
//   },
//   {
//     id: 1,
//     title: "Chatbot for Mental Health Care",
//     date: "2023",
//     description: "Developed a responsive chatbot using the MERN stack (MongoDB, Express, React, Node.js) to provide mental health support and resources. Integrated Natural Language Processing (NLP) techniques to accurately interpret and respond to user queries, improving user interaction and support effectiveness. Implemented machine learning models trained with Stochastic Gradient Descent (SGD) to enhance anomaly detection and bolster network security.",
//   },
//   {
//     id: 2,
//     title: "AI-based Sudoku Solver using CSP Technique",
//     date: "2023",
//     description: "Developed an artificial intelligence-based Sudoku Solver utilizing Constraint Satisfaction Problem (CSP) techniques for efficient solving. Employed A* and Heuristics Search techniques.",
//   },
// ];

// export const skills = [
//   {
//     title: "Languages",
//     skills: [
//       "JAVA",
//       "Python",
//       "C++",
//       "C",
//       "JavaScript",
//       "SQL",
//     ],
//   },
//   {
//     title: "Technologies/Frameworks",
//     skills: [
//       "HTML5",
//       "Spring Boot",
//       "CSS3",
//       "MongoDB",
//       "Express",
//       "React",
//       "NodeJS",
//       "Bootstrap",
//     ],
//   },
//   {
//     title: "Developer Tools",
//     skills: [
//       "VS Code",
//       "Jupyter Notebook",
//       "Git",
//       "Github",
//       "Postman",
//     ],
//   },
// ];

// export const certifications = [
//   {
//     title: "Data Scientist Virtual Internship",
//     provider: "BCGX",
//   },
//   {
//     title: "Software Engineering Virtual Internship",
//     provider: "Walmart Global-Tech",
//   },
//   {
//     title: "Career Essentials in Software Development",
//     provider: "Microsoft and LinkedIn",
//   },
//   {
//     title: "Cybersecurity Foundation",
//     provider: "GOOGLE - Coursera",
//   },
// ];

// export const extracurriculars = [
//   {
//     title: "Venture Capital - The Basics",
//     description: "Investment selection processes, Startup Valuation, and Startup Growth",
//   },
//   {
//     title: "J.P.Morgan Chase - Commercial Banking company and industry overview program",
//     description: "Company and industry overview program",
//   },
// ];

// export const TimeLineData = [
//   { year: 2017, text: "Started my journey" },
//   { year: 2018, text: "Worked as a freelance developer" },
//   { year: 2019, text: "Founded JavaScript Mastery" },
//   { year: 2020, text: "Shared my projects with the world" },
//   { year: 2021, text: "Started my own platform" },
// ];
