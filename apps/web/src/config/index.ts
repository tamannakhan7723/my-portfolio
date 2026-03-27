import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks, PiMediumLogoBold } from "react-icons/pi";
import { GoalIcon } from '@primer/octicons-react'
import { LuGithub, LuPencil, LuLinkedin, LuRss, LuPalette, LuCode, LuBrush, LuBrain, LuRocket } from "react-icons/lu";
import { FaXTwitter,FaGamepad } from "react-icons/fa6";
import { FaReact, FaAws } from "react-icons/fa";
import { SiPhp, SiDart, SiLatex, SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn, SiLangchain, SiFlutter, SiPandas, SiNumpy, SiJupyter, SiNodedotjs, SiBootstrap, } from 'react-icons/si';
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine, RiJavascriptLine } from "react-icons/ri";
import { SiFastapi, SiKubernetes, } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import {
  TbBrandCpp, TbBrandTypescript,
  TbBrandGolang, TbBrandNextjs,
  TbBrandDjango, TbBrandDocker, TbBrandMysql,
  TbMarkdown, TbBrandAstro, TbBrandTerraform,
  TbPhotoSquareRounded,
  TbBrandHtml5,
  TbBrandCss3
} from "react-icons/tb";
import { IconBaseProps } from "react-icons";
import { title } from "process";

const config = {
  avatar: '/images/my.jpeg',
  title: "TAMANNA KHAN| Computer Engineer | Web Designer and Developer",
  description: " I’m TAMANNA KHAN, a passionate Computer Science student with a strong interest in web and application design.I enjoy creating modern, user-friendly interfaces using Figma and bringing them to life through code.",
  author: "Verus56",
  keywords: ["TAMANNA KHAN", "verus56", "| Computer Engineer | Web Designer and Developer"],
  status: " Computer Engineer | Web Designer and Developer⚡️",
  siteURL: "https://tmrdata.tech/",
  openGraph: {
    url: "https://tmrdata.tech/",
    type: "website",
    siteName: "TAMANNA KHAN - | Computer Engineer | Web Designer and Developer",
    title: "TAMANNA KHAN- v56 | Computer Engineer | Web Designer and Developer",
    description: "I’m TAMANNA KHAN, a passionate Computer Science student with a strong interest in web and application design.I enjoy creating modern, user-friendly interfaces using Figma and bringing them to life through code."
  },
  navItems: [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/portfolio', label: 'Portfolio' },
    /*{ path: '/post', label: 'Post' },*/
    /*{ path: '/gallery', label: 'Gallery' },*/
    { path: '/contact', label: 'Contact' },
  ],
  socialLinks: [
    { url: `https://github.com/tamannakhan7723`, icon: LuGithub, name: 'GitHub' },
    { url: `https://www.linkedin.com/in/tamanna-khan-1a5220316`, icon: LuLinkedin, name: 'LinkedIn' },
  ],
  about: {
    "firstName": 'TAMANNA',
    "lastName": 'KHAN',
    "middleName": "",
    "preferredName": "",
    "additionalName": "",
    "pronouns": 'She/Her',
    "githubUsername": "verus56",
    "introduction": `
Hi, I’m TAMANNA KHAN, a passionate Computer Science student with a strong interest in web and application design.I enjoy creating modern, user-friendly interfaces using Figma and bringing them to life through code.

I have solid skills in HTML, CSS, and JavaSript, and a foundational understanding of C, C++, Java and TypeScript. I love designing responsive websites and continuously i proving my development skills by building real-world projects. My goal is to grow as a full-stack developer and create impactful digital experiences.

Outside of work, I enjoy Sketching✍️, Drawing 🎨, photography 📸, and Exploring Nature🦋⃤♡⃤🌈⃤. Let’s connect to explore my work!.

**Self-motivated, Artist ,Love Designing web pages and applications 👩🏻‍💻**
    `,
    "lifestyles": [
      {
        "icon": LuPalette,
        "title": "UI/UX Designer",
        "text": "Passionate about designing clean and user-friendly interfaces using Figma. I enjoy creating modern layouts and improving user experience.."
      },
      {
        "icon": LuCode,
        "title": "Web Developer",
        "text": "Skilled in HTML, CSS, and JavaScript, I build responsive and interactive websites while continuously learning new technologies."
      },
      {
        "icon": LuBrush,
        "title": "Creative Artist",
        "text": "I love sketching, drawing, and exploring creativity through art, which helps me think visually while designing interfaces."
      },
      {
        "icon": LuBrain,
        "title": "Continuous Lerner",
        "text": "Always curious to learn new technologies like Java, Python, and TypeScript, and improve my problem-solving skills."
      },
      {
        "icon": LuRocket,
        "title": "Tech Enthusiast",
        "text": "Interested in exploring new trends in web development and app design, and building projects to enhance my skills."
      }
    ],

    "techStacks": {
      programmingLanguages: [
        { name: 'Python', icon: AiOutlinePython },
        { name: 'C++', icon: TbBrandCpp },
        { name: 'C', icon: TbBrandCpp },
        { name: 'PHP', icon: SiPhp },
        { name: 'TypeScript', icon: TbBrandTypescript },
        { name: 'JavaScript', icon: RiJavascriptLine },
        { name: 'HTML', icon: TbBrandHtml5 },
        { name: 'CSS', icon: TbBrandCss3 }
      ],
      frameworks: [
        { name: 'next.js', icon: TbBrandNextjs },
        { name: 'Pandas', icon: SiPandas },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Jupyter Notebook', icon: SiJupyter },
        { name: 'Linux Terminal', icon: VscTerminalLinux },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Bootstrap', icon: SiBootstrap }
      ]
    }
  },
  resume: {
    educations: {
      icon: IoSchoolOutline,
      title: "Education",
      items: [
        {
          company: "Krishna Engineering College",
          location: "Junwani, Chhattisgarh",
          role: "B.Tech in Computer Science and Engineering",
          duration: "2024 - Present",
          tasksMarkdown: `
- Currently pursuing B.Tech in CSE.
- Learning Data Structures and Web Development.
        `,
        },
        {
          company: "Uday Prasad Uday Government Polytechnic",
          location: "Durg, Chhattisgarh",
          role: "Diploma in CSE",
          duration: "2021 - 2024",
          tasksMarkdown: `
- Learned C, C++, Java, Python, HTML, CSS, JavaScript.
        `,
        },
        {
          company: "Jyoti Vidyalay Eng. Med. Hr. School",
          location: "Bhilai, Chhattisgarh",
          role: "10th Grade",
          duration: "2020 - 2021",
          tasksMarkdown: `
- Completed schooling with good marks.
        `,
        }
      ]
    },

    professionalExperiences: {
      icon: MdOutlineDevices,
      title: "Experience & Certifications",
      items: [
        {
          company: "MSME Technology Centre Durg",
          location: "Rasmada, Chhattisgarh",
          role: "Junior Web Designer Trainee",
          duration: "2024 - 2025",
          tasksMarkdown: `
- Designed websites using Figma.
- Built responsive pages using HTML, CSS, JavaScript.
        `,
        },
        {
          company: "Avish Educom",
          location: "Durg, Chhattisgarh",
          role: "Web Development Trainee",
          duration: "2023",
          tasksMarkdown: `
- Completed training in HTML, CSS, JavaScript.
        `,
        },
        {
          company: "MSME Technology Centre Durg",
          location: "Rasmada, Chhattisgarh",
          role: "Python & Data Science Trainee",
          duration: "2025",
          tasksMarkdown: `
- Learned Python and data analysis basics.
        `,
        }
      ]
    },
    awardLeaderships: {
    icon: IoSchoolOutline,
    title: "Awards and Leadership",
    items:[]
      },
    },
  googleAnalyticId: 
  process.env.NEXT_PUBLIC_GA_ID || '',
  googleTagManagerId:
   process.env.NEXT_PUBLIC_GTM_ID || '',
};

export default config;
