// src/data/blogsData.js

export const blogsData = [
  {
    id: 1,
    title: "Getting Started with Python: A Beginner's Guide",
    slug: "getting-started-with-python",
    excerpt: "Python is a versatile and beginner-friendly language. Learn the basics of variables, data types, and control flow to start your programming journey.",
    author: "Priya Sharma",
    authorBio: "Priya is a Python developer with over 8 years of experience in data science and web development. She loves teaching beginners how to code.",
    date: "2024-05-20",
    image: "https://picsum.photos/id/10/800/600",
    category: "Programming",
    tags: ["Python", "Beginner", "Programming"],
    readTime: "8 min read",
    views: 1250,
    likes: 42,
    comments: 8,
    content: `
      <h2>Why Python?</h2>
      <p>Python is renowned for its simplicity and readability, making it an excellent choice for beginners. Its syntax is clean and intuitive, which allows you to focus on learning programming concepts rather than getting bogged down by complex rules.</p>
      <h3>Your First Python Program</h3>
      <p>The classic "Hello, World!" program is the first step for any programmer. In Python, it's as simple as:</p>
      <pre><code>print("Hello, World!")</code></pre>
      <h3>Understanding Variables and Data Types</h3>
      <p>Variables are containers for storing data values. Python has various data types, including integers, floats, strings, and booleans. You don't need to declare the type of a variable explicitly; Python infers it automatically.</p>
      <ul>
        <li><strong>Integer:</strong> Whole numbers, e.g., <code>10</code>, <code>-5</code></li>
        <li><strong>Float:</strong> Numbers with a decimal point, e.g., <code>9.81</code>, <code>-0.01</code></li>
        <li><strong>String:</strong> Text enclosed in quotes, e.g., <code>"Lakshaya Institute"</code></li>
      </ul>
      <p>This is just the beginning. As you progress, you'll learn about lists, dictionaries, functions, and object-oriented programming, all of which make Python a powerful tool for web development, data analysis, and automation.</p>
    `
  },
  {
    id: 2,
    title: "The Roadmap to Becoming a Full-Stack Developer",
    slug: "roadmap-full-stack-developer",
    excerpt: "Curious about what it takes to become a full-stack developer? This guide outlines the essential skills, technologies, and learning path you need to follow.",
    author: "Rohan Verma",
    authorBio: "Rohan is a full-stack developer with expertise in React, Node.js, and cloud technologies. He has been working in the industry for over 10 years.",
    date: "2024-05-18",
    image: "https://picsum.photos/id/20/800/600",
    category: "Web Development",
    tags: ["Full-Stack", "JavaScript", "React", "Node.js"],
    readTime: "10 min read",
    views: 1890,
    likes: 67,
    comments: 12,
    content: `
      <h2>What is a Full-Stack Developer?</h2>
      <p>A full-stack developer is a tech professional who works on both the front-end (client-side) and back-end (server-side) of a web application. They have a comprehensive understanding of how a website functions from top to bottom.</p>
      <h3>Front-End Fundamentals</h3>
      <p>This is what the user sees and interacts with. The core technologies are:</p>
      <ul>
        <li><strong>HTML:</strong> The structure of the page.</li>
        <li><strong>CSS:</strong> The styling and layout.</li>
        <li><strong>JavaScript:</strong> The interactivity and dynamic behavior.</li>
      </ul>
      <p>After mastering the basics, you should move on to a modern JavaScript framework like <strong>React</strong>, <strong>Angular</strong>, or <strong>Vue.js</strong>.</p>
      <h3>Back-End Basics</h3>
      <p>The back-end is the engine of the application. It handles logic, database interactions, and user authentication. Key areas to learn include:</p>
      <ul>
        <li><strong>A Programming Language:</strong> Node.js (JavaScript), Python, Ruby, or Java.</li>
        <li><strong>Databases:</strong> SQL (like PostgreSQL) and NoSQL (like MongoDB).</li>
        <li><strong>APIs:</strong> Learn to create and consume RESTful APIs to connect the front-end and back-end.</li>
      </ul>
      <p>The journey is long but rewarding. Start with the front-end, get comfortable with it, and then dive into the back-end. Build projects, and you'll be on your way to becoming a proficient full-stack developer.</p>
    `
  },
  {
    id: 3,
    title: "Digital Marketing 101: SEO Basics for Your Website",
    slug: "digital-marketing-seo-basics",
    excerpt: "Learn the fundamental principles of Search Engine Optimization (SEO) to improve your website's visibility and rank higher on Google.",
    author: "Anjali Nair",
    authorBio: "Anjali is a digital marketing specialist with over 7 years of experience in SEO, content marketing, and social media strategy.",
    date: "2024-05-15",
    image: "https://picsum.photos/id/30/800/600",
    category: "Digital Marketing",
    tags: ["SEO", "Marketing", "Google"],
    readTime: "7 min read",
    views: 980,
    likes: 35,
    comments: 5,
    content: `
      <h2>What is SEO?</h2>
      <p>Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. It's about understanding what people are searching for online and creating content that answers their needs.</p>
      <h3>On-Page SEO</h3>
      <p>This refers to all the things you can do ON your website to help you rank higher. Key elements include:</p>
      <ul>
        <li><strong>Keyword Research:</strong> Finding the right keywords your target audience is using.</li>
        <li><strong>Quality Content:</strong> Creating valuable, informative, and engaging content.</li>
        <li><strong>Title Tags & Meta Descriptions:</strong> Crafting compelling titles and descriptions for search engine results pages.</li>
        <li><strong>Internal Linking:</strong> Linking to other pages within your website.</li>
      </ul>
      <h3>Off-Page SEO</h3>
      <p>This involves actions taken outside of your own website to impact your rankings within search engine results pages. The primary technique is <strong>link building</strong>, which is getting other reputable websites to link back to your site.</p>
      <p>SEO is a marathon, not a sprint. By consistently applying these basic principles, you can steadily improve your website's search engine ranking and attract more visitors.</p>
    `
  },
  {
    id: 4,
    title: "Introduction to Data Structures in C++",
    slug: "introduction-data-structures-cpp",
    excerpt: "Data structures are a fundamental concept in computer science. This post introduces you to the most common data structures using C++.",
    author: "Vikram Singh",
    authorBio: "Vikram is a C++ developer and competitive programmer with a passion for teaching data structures and algorithms.",
    date: "2024-05-12",
    image: "https://picsum.photos/id/40/800/600",
    category: "Programming",
    tags: ["C++", "Data Structures", "Algorithms"],
    readTime: "12 min read",
    views: 760,
    likes: 28,
    comments: 4,
    content: `
      <h2>Why are Data Structures Important?</h2>
      <p>Data structures are a way of organizing and storing data so that it can be accessed and used efficiently. Choosing the right data structure for a particular problem is crucial for writing optimized and scalable code.</p>
      <h3>Common Data Structures</h3>
      <ul>
        <li><strong>Arrays:</strong> A collection of elements of the same type, stored at contiguous memory locations.</li>
        <li><strong>Linked Lists:</strong> A linear structure where elements are not stored at contiguous locations. Each element (node) points to the next.</li>
        <li><strong>Stacks:</strong> A Last-In, First-Out (LIFO) structure. Think of a stack of plates.</li>
        <li><strong>Queues:</strong> A First-In, First-Out (FIFO) structure. Like a line at a checkout counter.</li>
        <li><strong>Trees:</strong> A hierarchical structure with a root value and subtrees of children.</li>
      </ul>
      <p>Mastering data structures is key to solving complex programming problems and is a common topic in technical interviews. Start by understanding the theory and then implement them in a language like C++ to solidify your knowledge.</p>
    `
  },
  {
    id: 5,
    title: "How to Master Tally for Accounting",
    slug: "how-to-master-tally",
    excerpt: "Tally is a powerful accounting software. This guide provides tips and tricks to help you master its features for efficient business accounting.",
    author: "Sneha Patel",
    authorBio: "Sneha is a certified accountant and Tally expert with over 15 years of experience in financial management and teaching.",
    date: "2024-05-10",
    image: "https://picsum.photos/id/50/800/600",
    category: "Accounting",
    tags: ["Tally", "Accounting", "Finance"],
    readTime: "9 min read",
    views: 620,
    likes: 22,
    comments: 3,
    content: `
      <h2>Getting Started with Tally</h2>
      <p>Tally is designed to simplify complex accounting processes. The first step is to understand its interface and basic functionalities like creating a company, ledgers, and voucher entries.</p>
      <h3>Key Features to Master</h3>
      <ul>
        <li><strong>Voucher Entry:</strong> Learn to record all types of transactions accurately.</li>
        <li><strong>Banking:</strong> Manage bank reconciliation and payments efficiently.</li>
        <li><strong>Taxation (GST & TDS):</strong> Tally simplifies tax calculation and return filing. Understanding this is vital.</li>
        <li><strong>Financial Reports:</strong> Generate Balance Sheets, Profit & Loss statements, and other reports with a single click.</li>
      </ul>
      <p>Practice is key. Use sample data to simulate real-world business transactions. The more you use Tally, the more proficient you will become, making you a valuable asset in any accounting role.</p>
    `
  },
  {
    id: 6,
    title: "The Future of Artificial Intelligence in Education",
    slug: "future-of-ai-in-education",
    excerpt: "AI is poised to revolutionize the education sector. Explore how personalized learning, smart content, and automated admin tasks are shaping the future of learning.",
    author: "Arjun Reddy",
    authorBio: "Arjun is an AI researcher and educator who specializes in applying machine learning techniques to educational challenges.",
    date: "2024-05-08",
    image: "https://picsum.photos/id/60/800/600",
    category: "Technology",
    tags: ["AI", "Education", "Machine Learning"],
    readTime: "11 min read",
    views: 1450,
    likes: 58,
    comments: 9,
    content: `
      <h2>Personalized Learning Paths</h2>
      <p>AI can analyze a student's performance and learning style to create a customized educational path. This ensures that each student learns at their own pace and focuses on areas where they need the most improvement.</p>
      <h3>Smart Content Creation</h3>
      <p>AI tools can help educators create and curate content, from generating practice questions to summarizing complex topics. This frees up teachers' time, allowing them to focus more on student interaction.</p>
      <h3>Automation of Administrative Tasks</h3>
      <p>Tasks like grading assignments, managing admissions, and scheduling can be automated with AI, reducing the administrative burden on institutions and making processes more efficient.</p>
      <p>The integration of AI in education is not about replacing teachers but empowering them with tools to provide a better, more effective learning experience for every student.</p>
    `
  },
  {
    id: 7,
    title: "Web Design Trends to Watch in 2024",
    slug: "web-design-trends-2024",
    excerpt: "Stay ahead of the curve with the latest web design trends. From bold typography to immersive 3D elements, see what's defining the digital landscape this year.",
    author: "Kavita Joshi",
    authorBio: "Kavita is a UI/UX designer with a keen eye for emerging design trends and a passion for creating intuitive digital experiences.",
    date: "2024-05-05",
    image: "https://picsum.photos/id/70/800/600",
    category: "Design",
    tags: ["Web Design", "UI/UX", "Trends"],
    readTime: "6 min read",
    views: 890,
    likes: 41,
    comments: 7,
    content: `
      <h2>Bold and Experimental Typography</h2>
      <p>Typography is taking center stage. Designers are using oversized, bold, and artistic fonts to make a strong statement and capture user attention instantly.</p>
      <h3>Immersive 3D Elements</h3>
      <p>With advancements in web technologies, integrating 3D models and interactive elements is becoming more common. This creates a more engaging and memorable user experience.</p>
      <h3>Dark Mode with a Twist</h3>
      <p>Dark mode remains popular, but with a new focus on soft, muted color palettes and super-dark backgrounds that reduce eye strain and create a sleek, modern look.</p>
      <p>Keeping up with design trends helps ensure your website feels fresh, modern, and relevant to today's users.</p>
    `
  },
  {
    id: 8,
    title: "A Guide to Motion Graphics for Beginners",
    slug: "guide-to-motion-graphics",
    excerpt: "Motion graphics bring static designs to life. Learn the basics of animation, keyframes, and software to start creating your own engaging visual content.",
    author: "Rahul Bose",
    authorBio: "Rahul is a motion graphics artist and animator who has worked on various advertising campaigns and educational videos.",
    date: "2024-05-01",
    image: "https://picsum.photos/id/80/800/600",
    category: "Design",
    tags: ["Motion Graphics", "Animation", "Visual Design"],
    readTime: "8 min read",
    views: 540,
    likes: 19,
    comments: 2,
    content: `
      <h2>What are Motion Graphics?</h2>
      <p>Motion graphics are pieces of animation or digital footage which create the illusion of motion or rotation, and are usually combined with audio for use in multimedia projects.</p>
      <h3>Core Concepts</h3>
      <ul>
        <li><strong>Keyframes:</strong> The start and end points of any smooth transition.</li>
        <li><strong>Timing and Easing:</strong> Controlling the speed and acceleration of animations to make them feel natural.</li>
        <li><strong>Layers:</strong> Organizing different elements of your animation separately.</li>
      </ul>
      <h3>Software to Get Started</h3>
      <p>Popular software for motion graphics includes Adobe After Effects, Blender, and for simpler animations, tools like Canva or Adobe Express. Start with the basics, follow tutorials, and practice animating simple shapes to build your foundation.</p>
    `
  },
  {
    id: 9,
    title: "Why Learn Java in 2024?",
    slug: "why-learn-java-2024",
    excerpt: "Despite being around for decades, Java remains one of the most popular programming languages. Discover its enduring relevance and the career opportunities it offers.",
    author: "Meera Iyer",
    authorBio: "Meera is a senior Java developer and technical architect with over 12 years of experience in enterprise application development.",
    date: "2024-04-28",
    image: "https://picsum.photos/id/90/800/600",
    category: "Programming",
    tags: ["Java", "Programming", "Career"],
    readTime: "7 min read",
    views: 1120,
    likes: 48,
    comments: 6,
    content: `
      <h2>Platform Independence</h2>
      <p>Java's "Write Once, Run Anywhere" (WORA) capability, thanks to the Java Virtual Machine (JVM), makes it incredibly versatile. Code written on one platform can run on any other platform that has a JVM.</p>
      <h3>Robust Ecosystem and Community</h3>
      <p>Java has a vast ecosystem of libraries, frameworks (like Spring and Hibernate), and tools. Its large, active community means that help and resources are readily available.</p>
      <h3>Career Opportunities</h3>
      <p>Java is heavily used in enterprise-level applications, Android development, and big data systems. This creates a consistent demand for skilled Java developers across various industries.</p>
      <p>Learning Java is a solid investment in your programming career, providing a strong foundation and opening doors to numerous high-paying jobs.</p>
    `
  },
  {
    id: 10,
    title: "Advanced Excel Tips for Data Analysis",
    slug: "advanced-excel-tips",
    excerpt: "Move beyond basic spreadsheets. Learn powerful Excel functions like PivotTables, VLOOKUP, and INDEX-MATCH to analyze data like a pro.",
    author: "Nitin Kumar",
    authorBio: "Nitin is a data analyst and Excel trainer who helps professionals leverage spreadsheet tools for business intelligence.",
    date: "2024-04-25",
    image: "https://picsum.photos/id/100/800/600",
    category: "Data Analysis",
    tags: ["Excel", "Data Analysis", "Spreadsheets"],
    readTime: "9 min read",
    views: 780,
    likes: 33,
    comments: 5,
    content: `
      <h2>Mastering PivotTables</h2>
      <p>PivotTables are Excel's most powerful data analysis tool. They allow you to summarize large datasets quickly and easily, helping you uncover trends and patterns without complex formulas.</p>
      <h3>Essential Functions: VLOOKUP and INDEX-MATCH</h3>
      <p><strong>VLOOKUP</strong> is great for beginners to search for a value in the first column of a table and return a value in the same row from a specified column. For more power and flexibility, <strong>INDEX-MATCH</strong> is the superior combination, allowing you to look up values in any column.</p>
      <h3>Data Visualization with Charts</h3>
      <p>Learn to create dynamic charts that update automatically as your data changes. Choosing the right chart type (bar, line, pie) is crucial for effectively communicating your findings.</p>
      <p>These advanced skills can dramatically increase your productivity and make you an invaluable asset in any data-driven role.</p>
    `
  },
  {
    id: 11,
    title: "The Importance of MIS in Business Management",
    slug: "importance-of-mis",
    excerpt: "A Management Information System (MIS) is the backbone of modern business operations. Learn how it helps in decision-making, control, and strategic planning.",
    author: "Divya Aggarwal",
    authorBio: "Divya is an MIS consultant with expertise in designing information systems that improve business efficiency and decision-making.",
    date: "2024-04-22",
    image: "https://picsum.photos/id/110/800/600",
    category: "Management",
    tags: ["MIS", "Business Management", "Information Systems"],
    readTime: "8 min read",
    views: 450,
    likes: 17,
    comments: 3,
    content: `
      <h2>What is an MIS?</h2>
      <p>A Management Information System (MIS) is a computerized database of financial information organized and programmed in such a way that it produces regular reports on operations for every level of management in a company.</p>
      <h3>Benefits of a Good MIS</h3>
      <ul>
        <li><strong>Informed Decision-Making:</strong> Provides managers with timely and accurate data to make strategic decisions.</li>
        <li><strong>Improved Efficiency:</strong> Automates routine tasks, streamlining business processes.</li>
        <li><strong>Better Control:</strong> Helps monitor performance against targets and identify deviations.</li>
      </ul>
      <p>Understanding MIS is crucial for anyone aspiring to a management role, as it bridges the gap between business operations and information technology.</p>
    `
  },
  {
    id: 12,
    title: "C++ vs. Java: Which Language Should You Learn?",
    slug: "cpp-vs-java",
    excerpt: "Choosing your first programming language can be tough. We compare C++ and Java across various factors to help you make an informed decision.",
    author: "Sanjay Gupta",
    authorBio: "Sanjay is a software engineer who has worked with both C++ and Java in various industries, from gaming to enterprise applications.",
    date: "2024-04-20",
    image: "https://picsum.photos/id/120/800/600",
    category: "Programming",
    tags: ["C++", "Java", "Programming", "Comparison"],
    readTime: "10 min read",
    views: 920,
    likes: 39,
    comments: 8,
    content: `
      <h2>Performance and Control</h2>
      <p><strong>C++</strong> is known for its high performance and low-level control over system resources. It's often used in game development, high-frequency trading, and system programming.</p>
      <h2>Portability and Ease of Use</h2>
      <p><strong>Java</strong> prioritizes portability and ease of use with its automated memory management (garbage collection) and WORA principle. It's a dominant force in enterprise applications and Android development.</p>
      <h3>Which One to Choose?</h3>
      <ul>
        <li>Choose <strong>C++</strong> if you are interested in system-level programming, game engines, or performance-critical applications.</li>
        <li>Choose <strong>Java</strong> if you want to build enterprise software, Android apps, or prefer a language with a steeper learning curve for memory management.</li>
      </ul>
      <p>Both are powerful languages. The best choice depends on your career goals and interests.</p>
    `
  },
  {
    id: 13,
    title: "Building Your First Website with HTML and CSS",
    slug: "building-first-website-html-css",
    excerpt: "Ready to create your own corner of the web? This step-by-step guide will walk you through building a simple, beautiful website using only HTML and CSS.",
    author: "Pooja Das",
    authorBio: "Pooja is a front-end developer and educator who specializes in teaching web development to beginners.",
    date: "2024-04-18",
    image: "https://picsum.photos/id/130/800/600",
    category: "Web Development",
    tags: ["HTML", "CSS", "Web Development", "Beginner"],
    readTime: "12 min read",
    views: 1580,
    likes: 72,
    comments: 15,
    content: `
      <h2>Step 1: Structure with HTML</h2>
      <p>HTML (HyperText Markup Language) provides the basic structure of your site. Think of it as the skeleton. You'll use tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code> to organize your content.</p>
      <h3>Step 2: Style with CSS</h3>
      <p>CSS (Cascading Style Sheets) is what you use to style your HTML. It's the clothes and makeup. You'll control colors, fonts, spacing, and layout. Start by learning how to select elements and apply properties like <code>color</code>, <code>font-family</code>, and <code>margin</code>.</p>
      <h3>Step 3: Make it Responsive</h3>
      <p>Use media queries in CSS to make your website look good on all devices, from desktops to mobile phones. This is a crucial skill in modern web design.</p>
      <p>Building your first website is a milestone. Start small, experiment, and don't be afraid to break things. That's how you learn!</p>
    `
  },
  {
    id: 14,
    title: "Career in Graphic Designing: Skills and Scope",
    slug: "career-in-graphic-designing",
    excerpt: "Graphic design is a creative and rewarding career. Learn about the essential skills, tools, and the vast scope of opportunities in this dynamic field.",
    author: "Amit Khanna",
    authorBio: "Amit is a creative director with over 15 years of experience in graphic design and brand strategy.",
    date: "2024-04-15",
    image: "https://picsum.photos/id/140/800/600",
    category: "Design",
    tags: ["Graphic Design", "Career", "Creative"],
    readTime: "9 min read",
    views: 670,
    likes: 31,
    comments: 4,
    content: `
      <h2>Essential Skills for a Graphic Designer</h2>
      <p>Beyond creativity, a successful graphic designer needs a strong understanding of design principles (balance, contrast, hierarchy), typography, and color theory. Proficiency in industry-standard software like Adobe Photoshop, Illustrator, and InDesign is a must.</p>
      <h3>Career Paths and Opportunities</h3>
      <p>Graphic designers are needed in almost every industry. You can work in advertising, branding, web design, publishing, or even as a freelancer. Job roles include UI/UX designer, brand identity designer, and print designer.</p>
      <h3>Building Your Portfolio</h3>
      <p>Your portfolio is your most important asset. It showcases your skills and style to potential employers. Work on personal projects, take on freelance work, and continuously refine your portfolio to reflect your best work.</p>
      <p>If you have a passion for visual communication, a career in graphic design can be incredibly fulfilling.</p>
    `
  },
  {
    id: 15,
    title: "What is Desktop Publishing (DTP)?",
    slug: "what-is-dtp",
    excerpt: "DTP is the process of creating visual communications for print and digital media. Learn about the tools and techniques used in this essential field.",
    author: "Fiona D'Souza",
    authorBio: "Fiona is a DTP specialist with expertise in print design and digital publishing for educational materials.",
    date: "2024-04-12",
    image: "https://picsum.photos/id/150/800/600",
    category: "Design",
    tags: ["DTP", "Publishing", "Print Design"],
    readTime: "7 min read",
    views: 420,
    likes: 15,
    comments: 2,
    content: `
      <h2>Understanding DTP</h2>
      <p>Desktop Publishing (DTP) combines a personal computer and WYSIWYG (What You See Is What You Get) page layout software to create publication documents. It's used for creating anything from business cards and brochures to books and magazines.</p>
      <h3>Key DTP Software</h3>
      <ul>
        <li><strong>Adobe InDesign:</strong> The industry standard for professional page layout.</li>
        <li><strong>Adobe PageMaker:</strong> An older but still known software.</li>
        <li><strong>CorelDRAW:</strong> A vector graphics editor often used for DTP tasks.</li>
      </ul>
      <h3>Core Concepts</h3>
      <p>Key concepts in DTP include page layout, typography, image manipulation, and color management. A good DTP artist has a keen eye for detail and a strong understanding of how to combine text and graphics effectively.</p>
      <p>DTP is a vital skill for anyone looking to work in printing, advertising, or corporate communications.</p>
    `
  }
];