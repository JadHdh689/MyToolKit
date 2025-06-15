// Enhanced App class with GitHub image URLs and performance optimizations
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO_NAME/main/';

// Book data with GitHub image URLs
const bookData = {
  group1: {
    title: "Tiny Tools for Big Feelings (Ages 3-5)",
    description: "This group helps young children learn how to listen, follow rules, speak kindly, stay calm, and build early emotional habits through simple stories and playful activities. A certificate and parental guide support learning at home.",
    ageRange: "Ages 3-5",
    duration: "🌀 Recommended Duration: 1 year before progressing to the next level.",
    books: [
      {
        id: "book1.1",
        title: "Just. Be. Calm",
        description: "Just. Be. Calm is part of Tiny Tools for Big Feelings series, created especially for a short story, a calming song, and a series of practical, playful activities. This book is based on the principles of Applied Behavior Analysis (ABA) and Positive Psychology, and is designed to help children learn and practice the essential skill of calmness. Each page includes simple, visual, and research-based tools to help young children manage big emotions — especially anger and frustration.",
        cover: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Cover1.1.png`,
        activity: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Activity1.1.png`,
        certificate: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Certificate1.1.png`,
        guide: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Guide1.1.png`,
        story: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Story1.1.png`,
        stickers: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Stickers1.1.png`
      },
      {
        id: "book1.2",
        title: "To Obey My Parents",
        description: "To Obey My Parents is part of Tiny Tools for Big Feelings series, designed to support children ages 3 to 5 in learning how to listen, follow rules, and respect their parents with love and understanding. This book uses techniques from Applied Behavior Analysis (ABA) and Positive Psychology to encourage positive behavior through consistent routines and gentle guidance. Each page includes children practice: Respectful listening - Following instructions - Helping around the house - using kind words",
        cover: `${GITHUB_BASE_URL}images/Group%201/Book1.2/Cover1.2.png`,
        activity: `${GITHUB_BASE_URL}images/Group%201/Book1.2/Activity1.2.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%201/Book1.2/Certificate1.2.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%201/Book1.2/Guide1.2-p1.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%201/Book1.2/Story1.2.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%201/Book1.2/Stickers1.2.jpg`
      },
      {
        id: "book1.3",
        title: "To Speak Honestly",
        description: "To Speak Honestly is part of the Tiny Tools for Big Feelings series, created especially for a short story, a song about truth, and a set of practical, playful activities. This book is based on the principles of Positive Psychology and Early Childhood Education. It is designed to help children understand the value of honesty and learn how to tell the truth kindly and confidently. Each page offers visual, simple, and research-based tools to support young children in building trust, expressing their feelings, and becoming proud truth-tellers—even when it feels hard.",
        cover: `${GITHUB_BASE_URL}images/Group%201/Book1.3/Cover1.3.png`,
        activity: `${GITHUB_BASE_URL}images/Group%201/Book1.3/Activity1.3.png`,
        certificate: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Certificate1.1.png`,
        guide: `${GITHUB_BASE_URL}images/Group%201/Book1.3/Guide1.3.png`,
        story: `${GITHUB_BASE_URL}images/Group%201/Book1.3/Story1.3.png`,
        stickers: `${GITHUB_BASE_URL}images/Group%201/Book1.3/Stickers1.3.png`
      },
      {
        id: "book1.4",
        title: "Learning Fundamentals",
        description: "Essential learning tools and activities designed for young children to develop fundamental skills through engaging exercises and interactive content.",
        cover: `${GITHUB_BASE_URL}images/Group%201/Book1.4/Cover1.4.png`,
        activity: `${GITHUB_BASE_URL}images/Group%201/Book1.4/Activity1.4.png`,
        certificate: `${GITHUB_BASE_URL}images/Group%201/Book1.4/Certificate1.4.png`,
        guide: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Guide1.1.png`,
        story: `${GITHUB_BASE_URL}images/Group%201/Book1.1/Story1.1.png`,
        stickers: `${GITHUB_BASE_URL}images/Group%201/Book1.4/Stickers1.4.png`
      },
      {
        id: "book1.5",
        title: "To Listen and Focus",
        description: "To Listen and Focus is part of the Tiny Tools for Big Feelings series, specially created to help children practice attention and focus through an engaging story, a learning activity, and playful illustrations. In the book, Adam struggles to be a good listener. After being taught, encouraged, and given another chance to listen well, he feels proud of his accomplishment.",
        cover: `${GITHUB_BASE_URL}images/Group%201/Book1.5/Cover1.5.jpg`,
        activity: `${GITHUB_BASE_URL}images/Group%201/Book1.5/activity1.5.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%201/Book1.5/Certificate1.5.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%201/Book1.5/guide1.5-p1.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%201/Book1.5/story1.5.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%201/Book1.5/Stickers1.5.jpg`
      },
      {
        id: "book1.6",
        title: "To Tidy Up My Things",
        description: "To Tidy Up My Things is part of a Tiny Tools for Big Feelings series, created especially for a short story and a series of practical, playful activities. This book is based on the principles of the Applied Behavioral Analysis (ABA) and Positive Psychology, and is designed to help children learn and practice the essential skill of tidiness.",
        cover: `${GITHUB_BASE_URL}images/Group%201/Book1.6/cover1.6.jpg`,
        activity: `${GITHUB_BASE_URL}images/Group%201/Book1.6/Activity1.6.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%201/Book1.6/Certificate1.6.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%201/Book1.6/Guide1.6.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%201/Book1.6/Story1.6.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%201/Book1.6/Stickers1.6.jpg`
      }
    ]
  },
  group2: {
    title: "Building Independence (Ages 6-8)",
    description: "Children in this stage develop independence, responsibility, and social skills. They learn how to manage their time, respect personal boundaries, and become confident decision-makers.",
    ageRange: "Ages 6-8",
    duration: "🌀 Recommended Duration: 1 year of exploration and skill-building.",
    books: [
      {
        id: "book2.1",
        title: "Focus and Attention Skills",
        description: "This is the first book in the Tiny Tools for Big Feelings series. It is thoughtfully designed to help children aged 6 to 8 develop their ability to focus, and calm themselves in everyday situations. The book is intended for use by parents, educators, specialists, schools, and therapeutic centers. It serves as a supportive tool to help children build essential emotional and behavioral skills in a gentle and playful way. All the activities are grounded in the principles of Applied Behavioral Analysis (ABA) and Positive Psychology. Each page encourages children to practice useful strategies for managing distractions, strengthening their attention, and understanding their emotions. By combining drawing, storytelling, movement, and reflection, this book offers a simple and joyful path to emotional growth.",
        cover: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Cover2.1.jpg`,
        activity: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Activity2.1.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Certificate2.1.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Guide2.1.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Story2.1.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Stickers2.1.jpg`
      },
      {
        id: "book2.2",
        title: "To Be a Leader",
        description: "To be a leader is part of the Tiny Tools for Big Feelings series, thoughtfully designed to help children aged 6 to 8 develop essential leadership skills. This book guides young readers through understanding what it means to be a leader, setting goals, managing time, and making thoughtful decisions. Children will learn how to communicate effectively, solve problems, and build self-confidence through and engaging story and interactive activities. The exercises are crafted to inspire positive thinking, encourage responsibility, and nurture decision-making skills. This book is more than just a story, it's an educational journey that empowers children to discover their potential and grow with confidence and purpose.",
        cover: `${GITHUB_BASE_URL}images/Group%202/Book2.2/Cover2.2.jpg`,
        activity: `${GITHUB_BASE_URL}images/Group%202/Book2.2/Activity2.2.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%202/Book2.2/Certificate2.2.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%202/Book2.2/Guide2.2.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.2/Story2.2.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%202/Book2.2/Stickers2.2.jpg`
      },
      {
        id: "book2.3",
        title: "To Protect My Space",
        description: '"To Protect My Space" was created to help young children understand the importance of personal boundaries. In a world full of movement, new experiences -- children sometimes need guidance on how to protect their space in a kind and confident way. Each book provides 15 simple and fun exercises that teach children how to recognize their own feelings, express themselves clearly, and say "no" when needed -- always with respect and kindness. Each activity is crafted to help kids feel strong, safe, and proud of their ability to communicate their needs. Through daily practice, children will develop the skills to set healthy limits, ask for help when they need, and treat the space of others with care -- one step-at-a-time.',
        cover: `${GITHUB_BASE_URL}images/Group%202/Book2.3/cover1.3.jpg`,
        activity: `${GITHUB_BASE_URL}images/Group%202/Book2.3/activity1.3.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%202/Book2.3/certificate1.3.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%202/Book2.3/guide1.3-p1.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.3/story1.3.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%202/Book2.3/stickers1.3.jpg`
      },
      {
        id: "book2.4",
        title: "Time Management Skills",
        description: "Learning to manage time is an important skill for young children. This book provides a series of fun and meaningful activities that help children ages 6 to 8 develop better organization, planning, and time-awareness. Each activity encourages children to think ahead, set small goals, and build healthy daily habits. Through regular practice, children will gain confidence in managing their schedules and balancing different activities throughout their day. Parents, teachers, and caregivers are encouraged to support children as they explore and complete the activities, helping them build confidence and independence day by day.",
        cover: `${GITHUB_BASE_URL}images/Group%202/Book2.4/Cover2.4.png`,
        activity: `${GITHUB_BASE_URL}images/Group%202/Book2.4/Activity2.4.png`,
        certificate: `${GITHUB_BASE_URL}images/Group%202/Book2.4/Certificate2.4.png`,
        guide: `${GITHUB_BASE_URL}images/Group%202/Book2.4/Guide2.4.png`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Story2.1.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%202/Book2.4/Stickers2.4.png`
      },
      {
        id: "book2.5",
        title: "To Make My Wish Come True",
        description: "To Make My Wish Come True is part of the Tiny Tools for Big Feelings series, designed to help children ages 6–8 learn how to set goals and follow them with confidence, joy, and persistence. This book gently guides children through the process of dreaming, planning, and doing – one small step at a time. includes: A prayful story to inspire action. Practical tools to break down big goals. Simple exercises to build focus and motivation. With warm illustrations and positive language, this book helps children believe in themselves and understand that every goal is possible when they take steady steps.",
        cover: `${GITHUB_BASE_URL}images/Group%202/Book2.5/Cover2.5.png`,
        activity: `${GITHUB_BASE_URL}images/Group%202/Book2.5/Activity2.5.png`,
        certificate: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Certificate2.1.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%202/Book2.5/Guide2.5.png`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Story2.1.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Stickers2.1.jpg`
      }
    ]
  },
  group3: {
    title: "Growing Confidence (Ages 9-12)",
    description: "This stage focuses on building self-awareness, emotional intelligence, and developing critical thinking skills for pre-teens.",
    ageRange: "Ages 9-12",
    duration: "🌀 Recommended Duration: 1 year of guided growth and development.",
    books: [
      {
        id: "book3.1",
        title: "Personal Growth Journal",
        description: 'This book is your personal space to explore your thoughts and feelings. It is designed to help you understand your emotions better, express yourself clearly, build real confidence, and discover what makes you unique. You can write, draw, or reflect in your own style, with no "perfect" answers. What matters most is being honest with yourself. Take it one page at a time, go at your own pace, and enjoy the journey of becoming the best version of you.',
        cover: `${GITHUB_BASE_URL}images/Group%203/Book3.1/Cover3.1.png`,
        activity: `${GITHUB_BASE_URL}images/Group%203/Book3.1/Activity3.1.png`,
        certificate: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Certificate2.1.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%203/Book3.1/Guide3.1.png`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Story2.1.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Stickers2.1.jpg`
      },
      {
        id: "book3.2",
        title: "Step by Step... I Will Succeed!",
        description: "Step by Step… I Will Succeed! is the second book in the Tiny Tools for Big Feelings series for children aged 9 to 11. This book focuses on task commitment, one of the three core components of giftedness in the Renzulli Three-Ring Model. Task commitment refers to a child's ability to stay focused, be self-motivated, and complete what they start, even when things get challenging. Through fun stories big tasks into small steps. Track their progress and build healthy routines. Discover their own power to persevere and succeed. It's not about being perfect. It's about showing up, one step at a time.",
        cover: `${GITHUB_BASE_URL}images/Group%203/Book3.2/Cover3.2.png`,
        activity: `${GITHUB_BASE_URL}images/Group%203/Book3.2/Activity3.2.png`,
        certificate: `${GITHUB_BASE_URL}images/Group%203/Book3.2/Certificate3.2.png`,
        guide: `${GITHUB_BASE_URL}images/Group%203/Book3.2/Guide3.2.png`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Story2.1.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Stickers2.1.jpg`
      },
      {
        id: "book3.3",
        title: "Unlock My Mind",
        description: "Unlock My Mind begins a new journey, a series of books thoughtfully designed for gifted children. This book introduces core concepts in creative thinking, task commitment, and personal growth, laying the foundation for future volumes focused on developing the mind and character of bright young learners. Through engaging challenges and self-reflection activities, Unlock My Mind empowers children to explore their potential, ask meaningful questions, and build the inner skills they need to thrive academically, socially, and emotionally. This series is intended for educators, therapists, and parents passionate about nurturing giftedness in all its forms. Future books will explore social emotional intelligence, leadership, and advanced problem-solving, helping children build knowledge, self-awareness, resilience, and purpose. We hope this journey inspires you as much as it inspires the children you support.",
        cover: `${GITHUB_BASE_URL}images/Group%203/Book3.3/cover3.3.jpg`,
        activity: `${GITHUB_BASE_URL}images/Group%203/Book3.3/activity3.3.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%203/Book3.3/certificate3.3.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%203/Book3.3/guide3.3-p1.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%203/Book3.3/story3.3.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%203/Book3.3/stickers3.3.jpg`
      },
      {
        id: "book3.4",
        title: "To Make Sense of My Feelings",
        description: "To Make Sense of My Feelings is part of the Tiny Tools for Big Feelings series, designed to support children aged 9 to 12 in understanding and managing their emotional world. This book gently guides children through the process of identifying, naming, and reflecting on their feelings. It helps them notice the connection between their emotions, thoughts, and behaviors, empowering them to respond with awareness, not reaction. The story and activities are developmentally appropriate and grounded in the principles of Emotional Intelligence and Positive Psychology.",
        cover: `${GITHUB_BASE_URL}images/Group%203/Book3.4/cover3.4.jpg`,
        activity: `${GITHUB_BASE_URL}images/Group%203/Book3.4/activity3.4.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%203/Book3.4/certificate3.4.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%203/Book3.4/guide3.4.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%203/Book3.4/story3.4.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%203/Book3.4/stickers3.4.jpg`
      },
      {
        id: "book3.5",
        title: "Understanding My Fears",
        description: "This book was created for professionals, caregivers, and educators who support children navigating their inner world. It offers practical tools to help children explore their fears, express their thoughts, and build emotional strength. Through storytelling, structured activities, and therapeutic prompts, children are gently guided to recognize what scares them, and to respond with growing confidence and resilience. It is a resource designed to be flexible, supportive, and grounded in both empathy and evidence based strategies.",
        cover: `${GITHUB_BASE_URL}images/Group%203/Book3.5/cover3.5.jpg`,
        activity: `${GITHUB_BASE_URL}images/Group%203/Book3.5/activity3.5.jpg`,
        certificate: `${GITHUB_BASE_URL}images/Group%203/Book3.5/certificate3.5.jpg`,
        guide: `${GITHUB_BASE_URL}images/Group%203/Book3.5/guide3.5-p1.jpg`,
        story: `${GITHUB_BASE_URL}images/Group%203/Book3.5/Story3.5.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%203/Book3.5/stickers3.5.jpg`
      }
    ]
  },
  group4: {
    title: "Teen Identity & Growth (Ages 13-17)",
    description: "This stage focuses on identity-building, self-confidence, and preparing for future goals. Teens learn how to understand themselves deeply and develop the mindset needed for success and resilience.",
    ageRange: "Ages 13-17",
    duration: "🌀 Recommended Duration: 1 year of guided reflection and personal growth.",
    books: [
      {
        id: "book4.1",
        title: "Me, My Mind & More",
        description: "Me, My Mind & More is a story-based therapeutic guide designed for teenagers in grades 8 to 11 who may struggle with self-doubt, emotional overwhelm, or feeling unseen. The journey begins with the story of Ahmad, a teenager who learns to rebuild his self-confidence after experiencing harsh and dismissive responses from the people closest to him. Through small but powerful steps, he starts to reclaim his voice, his worth, and his place in the world. This book is not just something to read, it's something to explore. After the story, you'll find guided therapeutic activities that invite you to reflect, try, and grow, just like Ahmad. Whether you're a teenager going through your silent battles or a caring adult supporting one, this book offers tools, language, and hope to help build strength from the inside out.",
        cover: `${GITHUB_BASE_URL}images/Group%204/Book4.1/Cover4.1.png`,
        activity: `${GITHUB_BASE_URL}images/Group%204/Book4.1/Activity4.1.png`,
        certificate: `${GITHUB_BASE_URL}images/Group%204/Book4.1/Certificate4.1.png`,
        guide: `${GITHUB_BASE_URL}images/Group%204/Book4.1/Guide4.1.png`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Story2.1.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%204/Book4.1/Stickers4.1.png`
      }
    ]
  },
  group5: {
    title: "Adult CBT & Positive Psychology",
    description: "This adult-focused group uses Cognitive Behavioral Therapy (CBT) techniques to help individuals recognize thought patterns, improve emotional regulation, and develop a more positive and empowered life perspective.",
    ageRange: "Ages 18+",
    duration: "🌀 Recommended Duration: Self-paced, based on personal needs or therapeutic goals.",
    books: [
      {
        id: "book5.1",
        title: "40 Positive CBT Exercises",
        description: "In today's world of stress and uncertainty, accessible tools for psychological well-being are more essential than ever. This book presents 40 evidence-based Positive CBT exercises designed to support individuals in managing symptoms, building strengths, and fostering emotional resilience. Blending traditional CBT techniques with the core principles of Positive Psychology, such as gratitude, optimism, compassion, and meaning, each exercise is crafted to be practical, flexible, and adaptable to diverse settings. Reframe unhelpful thoughts, regulate emotions, cultivate habits of self-compassion and optimism, strengthen sense of purpose and values. This is more than a workbook. It's a journey from distress to growth, and from survival to flourishing. Let every page be a starting point, and every exercise a path to lasting positive change.",
        cover: `${GITHUB_BASE_URL}images/Group%205/Book5.1/Cover5.1.png`,
        activity: `${GITHUB_BASE_URL}images/Group%205/Book5.1/Activity5.1.pdf`,
        certificate: `${GITHUB_BASE_URL}images/Group%203/Book3.2/Certificate3.2.png`,
        guide: `${GITHUB_BASE_URL}images/Group%205/Book5.1/Guide5.1.pdf`,
        story: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Story2.1.jpg`,
        stickers: `${GITHUB_BASE_URL}images/Group%202/Book2.1/Stickers2.1.jpg`
      }
    ]
  }
};

// Blog data with GitHub image URLs
const blogData = [
  {
    id: 1,
    title: "Big Feelings in Small Bodies: How to Help Children Understand and Express Their Emotions",
    ageRange: "(Ages 3–8)",
    excerpt: `Young children often experience emotions that seem too big for their little bodies. A toddler's tantrum over a dropped cookie or a preschooler's tears at nap time aren't just "acting out"—they're genuine signals that your child is trying to make sense of feelings they can't yet name.`,
    image: `${GITHUB_BASE_URL}Blogs/Blog1_image.jpg`,
    content: `Young children often experience emotions that seem too big for their little bodies. A toddler's tantrum over a dropped cookie or a preschooler's tears at nap time aren't just "acting out"—they're genuine signals that your child is trying to make sense of feelings they can't yet name. Drawing on positive-parenting principles and simple ABA techniques, you can turn these overwhelming moments into opportunities for learning and connection.

Start by giving your child a safe, cozy space where big feelings are welcome. Invite them to sit beside you with a favorite stuffed animal or cushion. Speak softly as you name what you see: "I notice you're feeling really mad right now." By putting words to the emotion, you help your youngster bridge the gap between raw upset and understanding. Over time, this naming transforms tantrums into conversations—your child learns that yelling doesn't "break" anything, but sharing feelings brings relief.

Next, weave in playful breathing: pretend you're both blowing up a giant balloon together. Inhale for a slow count of three, then exhale as if you're sending the balloon soaring into the sky. Turning calm-down tools into games keeps them memorable and fun. Soon, your child will pop invisible bubbles on their own whenever frustration bubbles up.

Finally, invite storytelling as a mirror for feelings. Read one of your "Tiny Tools for Big Feelings" storybooks and pause when the hero encounters a storm of emotions. Ask, "Have you ever felt like Alex when he was scared of the thunder?" Let your child recount a time they felt scared or sad. This shared narrative shows them they're not alone—and that every big feeling finds its place in a story that ends with a smile.

By naming emotions, playing "balloon breaths," and weaving stories, you give small bodies the tools to handle their biggest feelings—building confidence, connection, and emotional literacy, one page at a time.`
  },
  {
    id: 2,
    title: "More Than a Mood Swing: Understanding Teen Behavior Through ABA and Emotional Intelligence",
    ageRange: "(Ages 9–16)",
    excerpt: "Adolescence is a time of rapid change: hormones surge, friendships shift, and the brain remodels itself in real time. It's no wonder that your once-easygoing child now seems moody, distant, or downright unpredictable.",
    image: `${GITHUB_BASE_URL}Blogs/Blog2_image.jpg`,
    content: `Adolescence is a time of rapid change: hormones surge, friendships shift, and the brain remodels itself in real time. It's no wonder that your once-easygoing child now seems moody, distant, or downright unpredictable. Yet behind every eye roll and slammed door lies an opportunity: to teach teens how to recognize what drives their behavior and channel it toward their own growth.

Begin by exploring triggers together. Choose a quiet evening and spread out a simple chart. Instead of turning it into homework, frame it as an experiment: "Let's see if we can spot when stress hits you hardest." Over a week, your teen jots down moments of anxiety—perhaps before that big group presentation or after a tense text thread—and names the emotion that followed. This isn't about judgment; it's about discovery. When they notice a pattern ("I get overwhelmed right before practice"), they gain insight—and a sense of control.

Next, create space for reflection. Encourage your teen to keep a private journal—no pressure, no grading. Prompts can be as simple as, "Today I felt proud because…" or "I was frustrated when…." Writing becomes a mirror, helping them untangle swirling thoughts and see their own progress. As they flip back through the pages, they'll witness challenges conquered and strategies that actually helped.

Finally, practice conversations in real life. Role-playing isn't just for drama class: it's a rehearsal for those nerve-wracking talks we avoid—like asking a teacher for help or setting boundaries with friends. Take turns: one plays the teen, the other the listener. Offer gentle feedback: "I like how you started with 'I feel…' instead of blaming." This blend of rehearsal (an ABA staple) and emotional-intelligence coaching builds the confidence your adolescent needs to step into the world with empathy and assertiveness.

By mapping triggers, journaling reflections, and rehearsing tough conversations, you guide your teen through storms of mood swings into calmer seas of understanding—and set them on a course toward lifelong emotional resilience.`
  },
  {
    id: 3,
    title: "Healing, Growing, Thriving: How CBT and Positive Psychology Empower Adults",
    ageRange: "(Ages 18+)",
    excerpt: "Adulthood brings its own set of emotional mountains to climb: workplace pressures, relationship complexities, and echoes of past hurts. Yet within every challenge lies potential for transformation.",
    image: `${GITHUB_BASE_URL}Blogs/Blog3_image.jpg`,
    content: `Adulthood brings its own set of emotional mountains to climb: workplace pressures, relationship complexities, and echoes of past hurts. Yet within every challenge lies potential for transformation. By combining Cognitive Behavioral Therapy's precision with the uplifting lens of positive psychology, adults can learn not only to cope—but to flourish.

Imagine starting each day with a simple mental checklist. When a harsh self-critique ("I'm terrible at public speaking") pops into your head, pause and ask yourself: "What evidence supports this thought? What contradicts it?" This isn't navel-gazing—it's core CBT at work, teaching you to reframe "I'll embarrass myself" into "I've given presentations before and prepared well today." Such balanced thinking shifts your mood and opens doors to action.

As evening falls, invite gratitude to the table. Reflect on three good things—no matter how small—that happened today. Maybe it was a friendly chat with a colleague, a perfectly brewed cup of coffee, or simply catching a few extra minutes of sleep. Writing these moments down rewires your brain to notice positivity; over time, the practice elevates your baseline happiness and resilience against stress.

To bring theory into motion, schedule one nourishing activity each day: a brisk walk in the park, a few pages of a favorite book, or a call with a friend. Blocking out this time on your calendar honors your need for balance and reminds you that well-being isn't a luxury—it's essential.

By interrogating negative thoughts with CBT's structured tools, celebrating small wins with positive psychology, and committing to daily acts of self-care, you transform life's hurdles into stepping stones. The result isn't just relief—it's a path to thriving, every single day.`
  }
];

class App {
  constructor() {
    this.currentModal = null;
    this.currentBook = null;
    this.currentImageAssets = [];
    this.currentImageIndex = 0;
    this.init();
  }

  init() {
    this.renderPage();
    this.bindEvents();
    this.setupImageOptimizations();
  }

  setupImageOptimizations() {
    // Add loading states to images
    document.addEventListener('DOMContentLoaded', () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.addEventListener('load', () => {
          img.classList.remove('loading');
          img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
          img.classList.remove('loading');
          // Keep the existing fallback behavior
        });
        
        if (!img.complete) {
          img.classList.add('loading');
          img.style.opacity = '0.7';
        }
      });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe elements for animation
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.book-card, .blog-card, .group-section');
      animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
      });
    }, 100);
  }

  renderPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${this.renderHeader()}
      ${this.renderHero()}
      ${this.renderMainContent()}
      ${this.renderFooter()}
      ${this.renderModal()}
      ${this.renderImageViewer()}
    `;
  }

  renderHeader() {
    return `
      <header class="header">
        <nav class="nav">
          <a href="#" class="logo">MySmartKit</a>
          <ul class="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button class="mobile-menu-btn" id="mobileMenuBtn">
            <i class="fas fa-bars"></i>
          </button>
        </nav>
      </header>
    `;
  }

  renderHero() {
    return `
      <section class="hero" id="home">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1>Welcome to MySmartKit</h1>
          <p>Your comprehensive toolkit for emotional growth, learning, and personal development across all ages</p>
          <a href="#books" class="cta-button">Explore Our Collections</a>
        </div>
      </section>
    `;
  }

  renderMainContent() {
    return `
      <main class="main-content">
        ${this.renderBlogSection()}
        ${this.renderGroupsSection()}
        ${this.renderAboutSection()}
        ${this.renderContactSection()}
      </main>
    `;
  }

  renderBlogSection() {
    return `
      <section class="blog-section" id="blogs">
        <h2 class="section-title">Latest Insights & Articles</h2>
        <div class="blog-grid">
          ${blogData.map(blog => `
            <article class="blog-card" data-blog-id="${blog.id}">
              <div class="blog-image">
                <img src="${blog.image}" alt="${blog.title}" loading="lazy"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJsb2cgSW1hZ2U8L3RleHQ+PC9zdmc+'">
                <div class="blog-age-badge">${blog.ageRange}</div>
              </div>
              <div class="blog-card-content">
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <button class="read-more-btn">Read Full Article</button>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderGroupsSection() {
    return `
      <section class="groups-section" id="books">
        <h2 class="section-title">Book Collections by Age Group</h2>
        <div class="groups-container">
          ${Object.entries(bookData).map(([groupKey, group]) => `
            <div class="group-section">
              <div class="group-header">
                <div class="group-image">
                  <img src="${GITHUB_BASE_URL}images/${this.getGroupImagePath(groupKey)}" alt="${group.title}" loading="lazy"
                       onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdyb3VwIEltYWdlPC90ZXh0Pjwvc3ZnPg=='" />
                </div>
                <div class="group-info">
                  <h3 class="group-title">${group.title}</h3>
                  <p class="group-age">${group.ageRange}</p>
                  <p class="group-description">${group.description}</p>
                  <p class="group-duration">${group.duration}</p>
                </div>
              </div>
              <div class="books-grid">
                ${group.books.map(book => `
                  <div class="book-card" data-book-id="${book.id}" data-group="${groupKey}">
                    <div class="book-cover">
                      <img src="${book.cover}" alt="${book.title}" loading="lazy"
                           onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJvb2sgQ292ZXI8L3RleHQ+PC9zdmc+'" />
                      <div class="book-overlay">
                        <i class="fas fa-eye"></i>
                        <span>View Details</span>
                      </div>
                    </div>
                    <div class="book-info">
                      <h4 class="book-title">${book.title}</h4>
                      <p class="book-id">${book.id}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  getGroupImagePath(groupKey) {
    const groupImages = {
      'group1': 'Group%201/Group_1.jpg',
      'group2': 'Group%202/Group%202.jpg',
      'group3': 'Group%203/Group%203.jpg',
      'group4': 'Group%204/Group%204.jpg',
      'group5': 'Group%205/Group%205.jpg'
    };
    return groupImages[groupKey] || 'Group%201/Group_1.jpg';
  }

  renderAboutSection() {
    return `
      <section class="about-section" id="about">
        <div class="about-content">
          <h2 class="section-title">About MySmartKit</h2>
          <div class="about-grid">
            <div class="about-text">
              <h3>Empowering Growth Through Evidence-Based Tools</h3>
              <p>MySmartKit is dedicated to providing comprehensive educational and therapeutic resources that support emotional, social, and cognitive development across all life stages. Our carefully curated collection combines the latest research in Applied Behavior Analysis (ABA), Cognitive Behavioral Therapy (CBT), and Positive Psychology to create practical tools for real-world application.</p>
              
              <h3>Our Mission</h3>
              <p>We believe that everyone deserves access to quality resources that promote mental health, emotional intelligence, and personal growth. From helping young children manage big feelings to supporting adults in developing resilience and thriving, our books and materials are designed to make a meaningful difference in people's lives.</p>
              
              <h3>Evidence-Based Approach</h3>
              <p>All our resources are grounded in scientific research and best practices from psychology and education. We work with professionals, educators, and families to ensure our materials are both effective and accessible.</p>
            </div>
            <div class="about-stats">
              <div class="stat-item">
                <h4>5</h4>
                <p>Age-Specific Collections</p>
              </div>
              <div class="stat-item">
                <h4>20+</h4>
                <p>Educational Books</p>
              </div>
              <div class="stat-item">
                <h4>3-18+</h4>
                <p>Age Range Covered</p>
              </div>
              <div class="stat-item">
                <h4>100%</h4>
                <p>Evidence-Based Content</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderContactSection() {
    return `
      <section class="contact-section" id="contact">
        <div class="contact-content">
          <h2 class="section-title">Get in Touch</h2>
          <div class="contact-grid">
            <div class="contact-info">
              <h3>Contact Information</h3>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+96103755615</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@mysmartkit.com</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Beirut, Lebanon</p>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <h3>Send us a Message</h3>
              <form id="contactForm">
                <div class="form-group">
                  <input type="text" id="name" name="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                  <input type="email" id="email" name="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                  <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderFooter() {
    return `
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>MySmartKit</h3>
            <p>Empowering learners with quality educational resources and innovative learning solutions for emotional growth and personal development.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#books">Books</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contact Information</h3>
            <p><i class="fas fa-phone"></i> +96103755615</p>
            <p><i class="fas fa-envelope"></i> info@mysmartkit.com</p>
            <p><i class="fas fa-map-marker-alt"></i> Beirut, Lebanon</p>
          </div>
          <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="https://wa.me/96103755615" target="_blank" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/iug__2025/" target="_blank" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/Quality.oflife2000" target="_blank" title="Facebook">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/dr-souheir-al-hariri-74a08162/" target="_blank" title="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 MySmartKit. All rights reserved.</p>
        </div>
      </footer>
    `;
  }

  renderModal() {
    return `
      <div class="modal" id="bookModal">
        <div class="modal-content">
          <button class="modal-close" id="modalClose">&times;</button>
          <div id="modalBody">
            <!-- Modal content will be inserted here -->
          </div>
        </div>
      </div>
      
      <div class="modal" id="blogModal">
        <div class="modal-content">
          <button class="modal-close" id="blogModalClose">&times;</button>
          <div id="blogModalBody">
            <!-- Blog modal content will be inserted here -->
          </div>
        </div>
      </div>
    `;
  }

  renderImageViewer() {
    return `
      <div class="image-viewer" id="imageViewer">
        <div class="image-viewer-overlay"></div>
        <div class="image-viewer-content">
          <button class="image-viewer-close" id="imageViewerClose">&times;</button>
          <div class="image-viewer-container">
            <img id="imageViewerImg" src="" alt="" loading="lazy">
            <div class="image-viewer-info">
              <h3 id="imageViewerTitle"></h3>
              <p id="imageViewerDescription"></p>
            </div>
          </div>
          <div class="image-viewer-controls">
            <button id="imageViewerPrev" class="image-nav-btn">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button id="imageViewerNext" class="image-nav-btn">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn?.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Book card clicks
    document.addEventListener('click', (e) => {
      if (e.target.closest('.book-card')) {
        const bookCard = e.target.closest('.book-card');
        const bookId = bookCard.dataset.bookId;
        const groupKey = bookCard.dataset.group;
        this.openBookModal(bookId, groupKey);
      }
    });

    // Blog card clicks
    document.addEventListener('click', (e) => {
      if (e.target.closest('.blog-card') || e.target.closest('.read-more-btn')) {
        const blogId = e.target.closest('.blog-card').dataset.blogId;
        this.openBlogModal(blogId);
      }
    });

    // Asset item clicks for image viewer
    document.addEventListener('click', (e) => {
      if (e.target.closest('.asset-item')) {
        const assetItem = e.target.closest('.asset-item');
        const img = assetItem.querySelector('img');
        const title = assetItem.querySelector('p').textContent;
        this.openImageViewer(img.src, title, this.getCurrentBookAssets(), this.getAssetIndex(assetItem));
      }
    });

    // Modal close events
    const bookModal = document.getElementById('bookModal');
    const modalClose = document.getElementById('modalClose');
    const blogModal = document.getElementById('blogModal');
    const blogModalClose = document.getElementById('blogModalClose');

    modalClose?.addEventListener('click', () => {
      this.closeModal('book');
    });

    blogModalClose?.addEventListener('click', () => {
      this.closeModal('blog');
    });

    bookModal?.addEventListener('click', (e) => {
      if (e.target === bookModal) {
        this.closeModal('book');
      }
    });

    blogModal?.addEventListener('click', (e) => {
      if (e.target === blogModal) {
        this.closeModal('blog');
      }
    });

    // Image viewer events
    const imageViewer = document.getElementById('imageViewer');
    const imageViewerClose = document.getElementById('imageViewerClose');
    const imageViewerPrev = document.getElementById('imageViewerPrev');
    const imageViewerNext = document.getElementById('imageViewerNext');

    imageViewerClose?.addEventListener('click', () => {
      this.closeImageViewer();
    });

    imageViewer?.addEventListener('click', (e) => {
      if (e.target === imageViewer || e.target.classList.contains('image-viewer-overlay')) {
        this.closeImageViewer();
      }
    });

    imageViewerPrev?.addEventListener('click', () => {
      this.navigateImage(-1);
    });

    imageViewerNext?.addEventListener('click', () => {
      this.navigateImage(1);
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
      this.handleContactForm(e);
    });

    // Smooth scrolling for navigation links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          navLinks.classList.remove('active');
        }
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (document.getElementById('imageViewer').classList.contains('active')) {
          this.closeImageViewer();
        } else {
          this.closeModal();
        }
      } else if (document.getElementById('imageViewer').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          this.navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
          this.navigateImage(1);
        }
      }
    });
  }

  openBookModal(bookId, groupKey) {
    const group = bookData[groupKey];
    const book = group.books.find(b => b.id === bookId);
    
    if (!book) return;
    
    this.currentBook = book;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
      <div class="modal-book-header">
        <div class="modal-book-cover">
          <img src="${book.cover}" alt="${book.title}" loading="lazy"
               onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJvb2sgQ292ZXI8L3RleHQ+PC9zdmc+'" />
        </div>
        <div class="modal-book-info">
          <h2>${book.title}</h2>
          <p class="modal-book-id"><strong>Book ID:</strong> ${book.id}</p>
          <p class="modal-collection"><strong>Collection:</strong> ${group.title}</p>
          <p class="modal-age-range"><strong>Age Range:</strong> ${group.ageRange}</p>
        </div>
      </div>
      
      <div class="modal-description">
        <h3>About this book</h3>
        <p>${book.description}</p>
      </div>
      
      <div class="modal-assets">
        <h3>Book Components</h3>
        <div class="assets-grid">
          ${book.cover ? `
            <div class="asset-item" data-asset-type="cover">
              <img src="${book.cover}" alt="Cover" loading="lazy"
                   onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNvdmVyPC90ZXh0Pjwvc3ZnPg=='" />
              <p>Cover</p>
            </div>
          ` : ''}
          ${book.activity ? `
            <div class="asset-item" data-asset-type="activity">
              <img src="${book.activity}" alt="Activity" loading="lazy"
                   onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFjdGl2aXR5PC90ZXh0Pjwvc3ZnPg=='" />
              <p>Activity Pages</p>
            </div>
          ` : ''}
          ${book.story ? `
            <div class="asset-item" data-asset-type="story">
              <img src="${book.story}" alt="Story" loading="lazy"
                   onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlN0b3J5PC90ZXh0Pjwvc3ZnPg=='" />
              <p>Story</p>
            </div>
          ` : ''}
          ${book.guide ? `
            <div class="asset-item" data-asset-type="guide">
              <img src="${book.guide}" alt="Guide" loading="lazy"
                   onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkd1aWRlPC90ZXh0Pjwvc3ZnPg=='" />
              <p>Parent/Teacher Guide</p>
            </div>
          ` : ''}
          ${book.certificate ? `
            <div class="asset-item" data-asset-type="certificate">
              <img src="${book.certificate}" alt="Certificate" loading="lazy"
                   onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNlcnRpZmljYXRlPC90ZXh0Pjwvc3ZnPg=='" />
              <p>Certificate</p>
            </div>
          ` : ''}
          ${book.stickers ? `
            <div class="asset-item" data-asset-type="stickers">
              <img src="${book.stickers}" alt="Stickers" loading="lazy"
                   onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlN0aWNrZXJzPC90ZXh0Pjwvc3ZnPg=='" />
              <p>Stickers</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;
    
    document.getElementById('bookModal').classList.add('active');
    this.currentModal = 'book';
    document.body.style.overflow = 'hidden';
  }

  openBlogModal(blogId) {
    const blog = blogData.find(b => b.id == blogId);
    if (!blog) return;
    
    const blogModalBody = document.getElementById('blogModalBody');
    blogModalBody.innerHTML = `
      <div class="blog-modal-header">
        <img src="${blog.image}" alt="${blog.title}" class="blog-modal-image" loading="lazy"
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJsb2cgSW1hZ2U8L3RleHQ+PC9zdmc+'" />
        <div class="blog-modal-info">
          <span class="blog-age-badge">${blog.ageRange}</span>
          <h2>${blog.title}</h2>
        </div>
      </div>
      
      <div class="blog-modal-content">
        ${blog.content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
      </div>
    `;
    
    document.getElementById('blogModal').classList.add('active');
    this.currentModal = 'blog';
    document.body.style.overflow = 'hidden';
  }

  openImageViewer(src, title, assets = [], index = 0) {
    const imageViewer = document.getElementById('imageViewer');
    const imageViewerImg = document.getElementById('imageViewerImg');
    const imageViewerTitle = document.getElementById('imageViewerTitle');
    const imageViewerDescription = document.getElementById('imageViewerDescription');
    
    this.currentImageAssets = assets;
    this.currentImageIndex = index;
    
    imageViewerImg.src = src;
    imageViewerTitle.textContent = title;
    imageViewerDescription.textContent = `Component ${index + 1} of ${assets.length}`;
    
    imageViewer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeImageViewer() {
    document.getElementById('imageViewer').classList.remove('active');
    document.body.style.overflow = '';
  }

  navigateImage(direction) {
    if (!this.currentImageAssets || this.currentImageAssets.length === 0) return;
    
    this.currentImageIndex += direction;
    
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.currentImageAssets.length - 1;
    } else if (this.currentImageIndex >= this.currentImageAssets.length) {
      this.currentImageIndex = 0;
    }
    
    const asset = this.currentImageAssets[this.currentImageIndex];
    const imageViewerImg = document.getElementById('imageViewerImg');
    const imageViewerTitle = document.getElementById('imageViewerTitle');
    const imageViewerDescription = document.getElementById('imageViewerDescription');
    
    imageViewerImg.src = asset.src;
    imageViewerTitle.textContent = asset.title;
    imageViewerDescription.textContent = `Component ${this.currentImageIndex + 1} of ${this.currentImageAssets.length}`;
  }

  getCurrentBookAssets() {
    if (!this.currentBook) return [];
    
    const assets = [];
    const assetTypes = ['cover', 'activity', 'story', 'guide', 'certificate', 'stickers'];
    
    assetTypes.forEach(type => {
      if (this.currentBook[type]) {
        assets.push({
          src: this.currentBook[type],
          title: this.getAssetTitle(type),
          type: type
        });
      }
    });
    
    return assets;
  }

  getAssetTitle(type) {
    const titles = {
      cover: 'Cover',
      activity: 'Activity Pages',
      story: 'Story',
      guide: 'Parent/Teacher Guide',
      certificate: 'Certificate',
      stickers: 'Stickers'
    };
    return titles[type] || type;
  }

  getAssetIndex(assetItem) {
    const assetType = assetItem.dataset.assetType;
    return this.getCurrentBookAssets().findIndex(asset => asset.type === assetType);
  }

  closeModal(type = null) {
    const modalType = type || this.currentModal;
    
    if (modalType === 'book') {
      document.getElementById('bookModal').classList.remove('active');
    } else if (modalType === 'blog') {
      document.getElementById('blogModal').classList.remove('active');
    }
    
    this.currentModal = null;
    this.currentBook = null;
    document.body.style.overflow = '';
  }

  handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
    e.target.reset();
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

// Global escape key handler
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    new App().closeModal();
  }
});