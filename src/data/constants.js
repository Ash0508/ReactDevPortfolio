import chbsImage from '../images/chbs.jpeg';
import nitpImage from '../images/nitp.jpg';
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
    "https://drive.google.com/file/d/1r8CSoh-xfHlHQ1iHnw_rDWQst9y4HSrD/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/harsh-singh-b1abba249/",
  insta: "https://www.instagram.com/h_arsh__sengar?utm_source=qr&igsh=d28wMHRpbzZodHFk/",
  xicon: "https://x.com/harsh_sing47218?t=KEmwf5xuce4vcvbLfieGRw&s=08",
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
    role: "Web Developer Intern",
    company: "The Sparks Foundation",
    date: "June'24",
    desc: "Developed an application for asking donation, to help uderprivileged children.",
    skills: [
      "React JS",
      "Razorpay dashboard",
      "CSS",
    ],
  },
  {
    id: 1,
    img: ieeeImage,
    role: "Web Team",
    company: "IEEE SB NITP",
    date: "Jul'23-Oct'23",
    desc: "Managed the official website of IEEE NITP SB for nearly 3 months, where i created the Ecom'23-24 page, all necessary posts and integrated the old website of IEEE NITP SB with the new one.",
    skills: [
      "React",
      "Firebase",
    ],
  },
  {
    id: 2,
    img: ieeeImage,
    role: "Technical Team Member",
    company: "IEEE SB NITP",
    date: "Sept'22-June'23",
    desc: "Provided technical contents to be posted on social media , arranged and led technical quizzes and hackathons.",
    skills: [
      "Leadership",
      "Communication",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: nitpImage,
    school: "National Institute of Technology , Patna",
    date: "Dec'21-May'25",
    grade: "8.91 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Electronics & Communication Engineering from National Institute of Technology, Patna. I have completed 6 semesters and have a CGPA of 8.91. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the IEEE SB AT NITP, where I am learning and working on exciting projects with a team of talented individuals.",
    degree: "Bachelor of Technology - Electronics and Communication Engineering",
  },
  {
    id: 1,
    img: chbsImage,
    school: "Central Hindu Boys' School, Varanasi",
    grade: "94.2%",
    desc: "I completed my 12th standard education at Central Hindu Boys' School, Varanasi, where I studied Mathematics with Science.",
    degree: "CBSE(XII), Mathematics",
  },
  {
    id: 2,
    img: navjeevanImage,
    school: "Navjeevan English School , Ballia",
    grade: "95.0%",
    desc: "I completed my 10th education at Navjeevan English School, Ballia where I studied Science with Mathematics.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Helping Hands",
    date: "Jun'24",
    description:
      "Helping Hands is a web application which develpoed during my internship at The Sparks Foundation.This website aims to collect a donation of 100 RS through Razorpay dashboard.Here users can track their payments done to the organisation in real time as they recieve a payment receipt in realtime through mail.",
    image: helpingHandsImage,
    member: [
      {
        name: "Harsh Singh",
        img: HeroImage,
       
        },
      ],
    tags: [
      "React JS",
      "Razorpay dashboard",
    ],
    category: "web app",
    github: "https://github.com/Harsh-ngh/Payment-app",
    webapp: "https://payment-app-phi.vercel.app/",
  },
  {
    id: 1,
    title: "Jobire",
    date: "Jun'24",
    description:
      "Developed a comprehensive full-stack website designed to enhance the job search experience. Users can search for job opportunities that align with their skills using advanced filters to find the most relevant matches. The platform allows users to request referrals for job positions, increasing their chances of getting noticed by potential employers. Users can also post job openings, making it easier to attract and hire talented individuals. Additionally, the website enables users to connect with other professionals, fostering networking and collaboration. Secure access is ensured through authentication for registered users.",
    image: jobireImage,
    member: [
      {
        name: "Harsh Singh",
        img: HeroImage,
       
        },
      ],
    tags: ["React Js", "Firebase"],
    category: "web app",
    github: "https://github.com/Harsh-ngh/Jobbire",
    webapp: "",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    date: "Jul'24",
    description:
      "Developed a personal portfolio website to showcase my professional journey and skills. About section provides a detailed overview of my background, interests, and goals. In the Experience section, I highlight my professional roles and accomplishments, showcasing the growth and impact I've made in various positions.Projects section features a selection of my key projects, demonstrating my expertise and the range of my work. Lastly, the Contact section allows visitors to easily reach out to me for networking, collaboration, or inquiries. The portfolio is designed to be informative and engaging, reflecting my personal and professional brand.",
    image: portfolioImage,
  
      member: [
      {
        name: "Harsh Singh",
        img: HeroImage,
       
        },
      ],
    tags: [
      "React Js",
    ],
    category: "web app",
    github: "https://github.com/Harsh-ngh/Harsh-Portfolio",
    webapp: "https://harsh-portfolio-two.vercel.app/",
  },
   {
    id: 4,
    title: "Fall sense detection",
    date: "Mar'24",
    description:
      "Developed a fall detection system in a team of three members, using Arduino Uno and MPU 6050 to monitor elderly individuals. The system detects falls using sensors and sends notifications instantly, enhancing safety and providing timely assistance.",
    image: iot,
    tags: [
      "MPU 6050",
      "Arduino UNO",
    ],
     category: "IOT",
     member: [
      {
        name: "Harsh Singh",
        img: HeroImage,
       
      },
       {
         name: "Roshan Birla",
         img: birla,
       },
       {
         name: "Vishesh Verma",
         img: chhotu,
       }
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
