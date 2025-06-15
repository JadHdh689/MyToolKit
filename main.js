// Book data structure
const bookData = {
  'Group 1': {
    title: 'Tiny Tools for Big Feelings',
    age: 'Ages 3-5',
    description: 'Foundation skills for emotional regulation and basic social behaviors',
    image: 'images/Group 1/Group_1.jpg',
    books: [
      {
        id: 'Book1.1',
        title: 'Just. Be. Calm',
        cover: 'images/Group 1/Book1.1/Cover1.1.png',
        assets: [
          { name: 'Story', path: 'images/Group 1/Book1.1/Story1.1.png', type: 'Story' },
          { name: 'Guide', path: 'images/Group 1/Book1.1/Guide1.1.png', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 1/Book1.1/Activity1.1.png', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 1/Book1.1/Stickers1.1.png', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 1/Book1.1/Certificate1.1.png', type: 'Certificate' }
        ]
      },
      {
        id: 'Book1.2',
        title: 'To Obey My Parents',
        cover: 'images/Group 1/Book1.2/Cover1.2.png',
        assets: [
          { name: 'Story', path: 'images/Group 1/Book1.2/Story1.2.jpg', type: 'Story' },
          { name: 'Guide Page 1', path: 'images/Group 1/Book1.2/Guide1.2-p1.jpg', type: 'Guide' },
          { name: 'Guide Page 2', path: 'images/Group 1/Book1.2/Guide1.2-p2.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 1/Book1.2/Activity1.2.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 1/Book1.2/Stickers1.2.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 1/Book1.2/Certificate1.2.jpg', type: 'Certificate' }
        ]
      },
      {
        id: 'Book1.3',
        title: 'To Speak Honestly',
        cover: 'images/Group 1/Book1.3/Cover1.3.png',
        assets: [
          { name: 'Story', path: 'images/Group 1/Book1.3/Story1.3.png', type: 'Story' },
          { name: 'Guide', path: 'images/Group 1/Book1.3/Guide1.3.png', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 1/Book1.3/Activity1.3.png', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 1/Book1.3/Stickers1.3.png', type: 'Stickers' }
        ]
      },
      {
        id: 'Book1.4',
        title: 'To Be Kind',
        cover: 'images/Group 1/Book1.4/Cover1.4.png',
        assets: [
          { name: 'Activity', path: 'images/Group 1/Book1.4/Activity1.4.png', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 1/Book1.4/Stickers1.4.png', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 1/Book1.4/Certificate1.4.png', type: 'Certificate' }
        ]
      },
      {
        id: 'Book1.5',
        title: 'To Listen and Focus',
        cover: 'images/Group 1/Book1.5/Cover1.5.jpg',
        assets: [
          { name: 'Story', path: 'images/Group 1/Book1.5/story1.5.jpg', type: 'Story' },
          { name: 'Guide Page 1', path: 'images/Group 1/Book1.5/guide1.5-p1.jpg', type: 'Guide' },
          { name: 'Guide Page 2', path: 'images/Group 1/Book1.5/guide1.5-p2.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 1/Book1.5/activity1.5.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 1/Book1.5/Stickers1.5.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 1/Book1.5/Certificate1.5.jpg', type: 'Certificate' }
        ]
      },
      {
        id: 'Book1.6',
        title: 'To Tidy Up My Things',
        cover: 'images/Group 1/Book1.6/cover1.6.jpg',
        assets: [
          { name: 'Story', path: 'images/Group 1/Book1.6/Story1.6.jpg', type: 'Story' },
          { name: 'Guide', path: 'images/Group 1/Book1.6/Guide1.6.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 1/Book1.6/Activity1.6.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 1/Book1.6/Stickers1.6.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 1/Book1.6/Certificate1.6.jpg', type: 'Certificate' }
        ]
      }
    ]
  },
  'Group 2': {
    title: 'Building Independence',
    age: 'Ages 6-8',
    description: 'Developing responsibility, leadership, and social confidence',
    image: 'images/Group 2/Group 2.jpg',
    books: [
      {
        id: 'Book2.1',
        title: 'To Focus and Be Calm',
        cover: 'images/Group 2/Book2.1/Cover2.1.jpg',
        assets: [
          { name: 'Story', path: 'images/Group 2/Book2.1/Story2.1.jpg', type: 'Story' },
          { name: 'Guide', path: 'images/Group 2/Book2.1/Guide2.1.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 2/Book2.1/Activity2.1.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 2/Book2.1/Stickers2.1.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 2/Book2.1/Certificate2.1.jpg', type: 'Certificate' }
        ]
      },
      {
        id: 'Book2.2',
        title: 'To Be a Leader',
        cover: 'images/Group 2/Book2.2/Cover2.2.jpg',
        assets: [
          { name: 'Story', path: 'images/Group 2/Book2.2/Story2.2.jpg', type: 'Story' },
          { name: 'Guide', path: 'images/Group 2/Book2.2/Guide2.2.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 2/Book2.2/Activity2.2.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 2/Book2.2/Stickers2.2.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 2/Book2.2/Certificate2.2.jpg', type: 'Certificate' }
        ]
      },
      {
        id: 'Book2.3',
        title: 'To Protect My Space',
        cover: 'images/Group 2/Book2.3/cover1.3.jpg',
        assets: [
          { name: 'Story', path: 'images/Group 2/Book2.3/story1.3.jpg', type: 'Story' },
          { name: 'Guide Page 1', path: 'images/Group 2/Book2.3/guide1.3-p1.jpg', type: 'Guide' },
          { name: 'Guide Page 2', path: 'images/Group 2/Book2.3/guide1.3-p2.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 2/Book2.3/activity1.3.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 2/Book2.3/stickers1.3.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 2/Book2.3/certificate1.3.jpg', type: 'Certificate' }
        ]
      },
      {
        id: 'Book2.4',
        title: 'To Manage My Time',
        cover: 'images/Group 2/Book2.4/Cover2.4.png',
        assets: [
          { name: 'Activity', path: 'images/Group 2/Book2.4/Activity2.4.png', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 2/Book2.4/Stickers2.4.png', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 2/Book2.4/Certificate2.4.png', type: 'Certificate' }
        ]
      },
      {
        id: 'Book2.5',
        title: 'To Make My Wish Come True',
        cover: 'images/Group 2/Book2.5/Cover2.5.png',
        assets: [
          { name: 'Guide', path: 'images/Group 2/Book2.5/Guide2.5.png', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 2/Book2.5/Activity2.5.png', type: 'Activity' }
        ]
      }
    ]
  },
  'Group 3': {
    title: 'Growing Confidence',
    age: 'Ages 9-12',
    description: 'Advanced emotional intelligence and creative problem-solving',
    image: 'images/Group 3/Group 3.jpg',
    books: [
      {
        id: 'Book3.1',
        title: 'To Know Myself',
        cover: 'images/Group 3/Book3.1/Cover3.1.png',
        assets: [
          { name: 'Guide', path: 'images/Group 3/Book3.1/Guide3.1.png', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 3/Book3.1/Activity3.1.png', type: 'Activity' }
        ]
      },
      {
        id: 'Book3.2',
        title: 'Step by Step... I Will Succeed!',
        cover: 'images/Group 3/Book3.2/Cover3.2.png',
        assets: [
          { name: 'Guide', path: 'images/Group 3/Book3.2/Guide3.2.png', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 3/Book3.2/Activity3.2.png', type: 'Activity' },
          { name: 'Certificate', path: 'images/Group 3/Book3.2/Certificate3.2.png', type: 'Certificate' }
        ]
      },
      {
        id: 'Book3.3',
        title: 'Unlock My Mind',
        cover: 'images/Group 3/Book3.3/cover3.3.jpg',
        assets: [
          { name: 'Story', path: 'images/Group 3/Book3.3/story3.3.jpg', type: 'Story' },
          { name: 'Guide Page 1', path: 'images/Group 3/Book3.3/guide3.3-p1.jpg', type: 'Guide' },
          { name: 'Guide Page 2', path: 'images/Group 3/Book3.3/guide3.3-p2.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 3/Book3.3/activity3.3.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 3/Book3.3/stickers3.3.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 3/Book3.3/certificate3.3.jpg', type: 'Certificate' }
        ]
      },
      {
        id: 'Book3.4',
        title: 'To Make Sense of My Feelings',
        cover: 'images/Group 3/Book3.4/cover3.4.jpg',
        assets: [
          { name: 'Story', path: 'images/Group 3/Book3.4/story3.4.jpg', type: 'Story' },
          { name: 'Guide', path: 'images/Group 3/Book3.4/guide3.4.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 3/Book3.4/activity3.4.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 3/Book3.4/stickers3.4.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 3/Book3.4/certificate3.4.jpg', type: 'Certificate' }
        ]
      },
      {
        id: 'Book3.5',
        title: 'To Face My Fears',
        cover: 'images/Group 3/Book3.5/cover3.5.jpg',
        assets: [
          { name: 'Story', path: 'images/Group 3/Book3.5/Story3.5.jpg', type: 'Story' },
          { name: 'Guide Page 1', path: 'images/Group 3/Book3.5/guide3.5-p1.jpg', type: 'Guide' },
          { name: 'Guide Page 2', path: 'images/Group 3/Book3.5/guide3.5-p2.jpg', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 3/Book3.5/activity3.5.jpg', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 3/Book3.5/stickers3.5.jpg', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 3/Book3.5/certificate3.5.jpg', type: 'Certificate' }
        ]
      }
    ]
  },
  'Group 4': {
    title: 'Teen Empowerment',
    age: 'Ages 13-17',
    description: 'Identity development and preparation for adulthood',
    image: 'images/Group 4/Group 4.jpg',
    books: [
      {
        id: 'Book4.1',
        title: 'Me, My Mind & More',
        cover: 'images/Group 4/Book4.1/Cover4.1.png',
        assets: [
          { name: 'Guide', path: 'images/Group 4/Book4.1/Guide4.1.png', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 4/Book4.1/Activity4.1.png', type: 'Activity' },
          { name: 'Stickers', path: 'images/Group 4/Book4.1/Stickers4.1.png', type: 'Stickers' },
          { name: 'Certificate', path: 'images/Group 4/Book4.1/Certificate4.1.png', type: 'Certificate' }
        ]
      }
    ]
  },
  'Group 5': {
    title: 'Adult Wellness',
    age: 'Ages 18+',
    description: 'CBT-based tools for emotional regulation and positive psychology',
    image: 'images/Group 5/Group 5.jpg',
    books: [
      {
        id: 'Book5.1',
        title: 'Positive CBT Workbook',
        cover: 'images/Group 5/Book5.1/Cover5.1.png',
        assets: [
          { name: 'Guide', path: 'images/Group 5/Book5.1/Guide5.1.pdf', type: 'Guide' },
          { name: 'Activity', path: 'images/Group 5/Book5.1/Activity5.1.pdf', type: 'Activity' }
        ]
      }
    ]
  }
};

// Blog data
const blogData = [
  {
    id: 'blog1',
    title: 'Big Feelings in Small Bodies: How to Help Children Understand and Express Their Emotions',
    age: 'Ages 3–8',
    image: 'Blogs/Blog1_image.jpg',
    excerpt: 'Young children often experience emotions that seem too big for their little bodies. Learn how to turn overwhelming moments into opportunities for learning and connection.',
    content: `Young children often experience emotions that seem too big for their little bodies. A toddler's tantrum over a dropped cookie or a preschooler's tears at nap time aren't just "acting out"—they're genuine signals that your child is trying to make sense of feelings they can't yet name. Drawing on positive-parenting principles and simple ABA techniques, you can turn these overwhelming moments into opportunities for learning and connection.

Start by giving your child a safe, cozy space where big feelings are welcome. Invite them to sit beside you with a favorite stuffed animal or cushion. Speak softly as you name what you see: "I notice you're feeling really mad right now." By putting words to the emotion, you help your youngster bridge the gap between raw upset and understanding. Over time, this naming transforms tantrums into conversations—your child learns that yelling doesn't "break" anything, but sharing feelings brings relief.

Next, weave in playful breathing: pretend you're both blowing up a giant balloon together. Inhale for a slow count of three, then exhale as if you're sending the balloon soaring into the sky. Turning calm-down tools into games keeps them memorable and fun. Soon, your child will pop invisible bubbles on their own whenever frustration bubbles up.

Finally, invite storytelling as a mirror for feelings. Read one of your "Tiny Tools for Big Feelings" storybooks and pause when the hero encounters a storm of emotions. Ask, "Have you ever felt like Alex when he was scared of the thunder?" Let your child recount a time they felt scared or sad. This shared narrative shows them they're not alone—and that every big feeling finds its place in a story that ends with a smile.

By naming emotions, playing "balloon breaths," and weaving stories, you give small bodies the tools to handle their biggest feelings—building confidence, connection, and emotional literacy, one page at a time.`
  },
  {
    id: 'blog2',
    title: 'More Than a Mood Swing: Understanding Teen Behavior Through ABA and Emotional Intelligence',
    age: 'Ages 9–16',
    image: 'Blogs/Blog2_image.jpg',
    excerpt: 'Adolescence brings rapid changes. Learn how to guide teens through mood swings into calmer seas of understanding and emotional resilience.',
    content: `Adolescence is a time of rapid change: hormones surge, friendships shift, and the brain remodels itself in real time. It's no wonder that your once-easygoing child now seems moody, distant, or downright unpredictable. Yet behind every eye roll and slammed door lies an opportunity: to teach teens how to recognize what drives their behavior and channel it toward their own growth.

Begin by exploring triggers together. Choose a quiet evening and spread out a simple chart. Instead of turning it into homework, frame it as an experiment: "Let's see if we can spot when stress hits you hardest." Over a week, your teen jots down moments of anxiety—perhaps before that big group presentation or after a tense text thread—and names the emotion that followed. This isn't about judgment; it's about discovery. When they notice a pattern ("I get overwhelmed right before practice"), they gain insight—and a sense of control.

Next, create space for reflection. Encourage your teen to keep a private journal—no pressure, no grading. Prompts can be as simple as, "Today I felt proud because…" or "I was frustrated when…." Writing becomes a mirror, helping them untangle swirling thoughts and see their own progress. As they flip back through the pages, they'll witness challenges conquered and strategies that actually helped.

Finally, practice conversations in real life. Role-playing isn't just for drama class: it's a rehearsal for those nerve-wracking talks we avoid—like asking a teacher for help or setting boundaries with friends. Take turns: one plays the teen, the other the listener. Offer gentle feedback: "I like how you started with 'I feel…' instead of blaming." This blend of rehearsal (an ABA staple) and emotional-intelligence coaching builds the confidence your adolescent needs to step into the world with empathy and assertiveness.

By mapping triggers, journaling reflections, and rehearsing tough conversations, you guide your teen through storms of mood swings into calmer seas of understanding—and set them on a course toward lifelong emotional resilience.`
  },
  {
    id: 'blog3',
    title: 'Healing, Growing, Thriving: How CBT and Positive Psychology Empower Adults',
    age: 'Ages 18+',
    image: 'Blogs/Blog3_image.jpg',
    excerpt: 'Adulthood brings its own emotional mountains to climb. Learn how CBT and positive psychology can transform challenges into stepping stones for thriving.',
    content: `Adulthood brings its own set of emotional mountains to climb: workplace pressures, relationship complexities, and echoes of past hurts. Yet within every challenge lies potential for transformation. By combining Cognitive Behavioral Therapy's precision with the uplifting lens of positive psychology, adults can learn not only to cope—but to flourish.

Imagine starting each day with a simple mental checklist. When a harsh self-critique ("I'm terrible at public speaking") pops into your head, pause and ask yourself: "What evidence supports this thought? What contradicts it?" This isn't navel-gazing—it's core CBT at work, teaching you to reframe "I'll embarrass myself" into "I've given presentations before and prepared well today." Such balanced thinking shifts your mood and opens doors to action.

As evening falls, invite gratitude to the table. Reflect on three good things—no matter how small—that happened today. Maybe it was a friendly chat with a colleague, a perfectly brewed cup of coffee, or simply catching a few extra minutes of sleep. Writing these moments down rewires your brain to notice positivity; over time, the practice elevates your baseline happiness and resilience against stress.

To bring theory into motion, schedule one nourishing activity each day: a brisk walk in the park, a few pages of a favorite book, or a call with a friend. Blocking out this time on your calendar honors your need for balance and reminds you that well-being isn't a luxury—it's essential.

By interrogating negative thoughts with CBT's structured tools, celebrating small wins with positive psychology, and committing to daily acts of self-care, you transform life's hurdles into stepping stones. The result isn't just relief—it's a path to thriving, every single day.`
  }
];

// About text data
const aboutTextData = {
  'Group 1': `This group helps young children learn how to listen, follow rules, speak kindly, stay calm, and build early emotional habits through simple stories and playful activities. A certificate and parental guide support learning at home.

🌀 Recommended Duration: 1 year before progressing to the next level.`,
  'Group 2': `Children in this stage develop independence, responsibility, and social skills. They learn how to manage their time, respect personal boundaries, and become confident decision-makers.

🌀 Recommended Duration: 1 year of exploration and skill-building.`,
  'Group 3': '',
  'Group 4': `This stage focuses on identity-building, self-confidence, and preparing for future goals. Teens learn how to understand themselves deeply and develop the mindset needed for success and resilience.

🌀 Recommended Duration: 1 year of guided reflection and personal growth.`,
  'Group 5': `This adult-focused group uses Cognitive Behavioral Therapy (CBT) techniques to help individuals recognize thought patterns, improve emotional regulation, and develop a more positive and empowered life perspective.

🌀 Recommended Duration: Self-paced, based on personal needs or therapeutic goals.`
};

// Book descriptions data
const bookDescriptions = {
  'Book1.1': `Just. Be. Calm is part of Tiny Tools for Big Feelings series, created especially for a short story, a calming song, and a series of practical, playful activities.

This book is based on the principles of Applied Behavior Analysis (ABA) and Positive Psychology, and is designed to help children learn and practice the essential skill of calmness.

Each page includes simple, visual, and research-based tools to help young children manage big emotions — especially anger and frustration.`,
  'Book1.2': `To Obey My Parents is part of Tiny Tools for Big Feelings series, designed to support children ages 3 to 5 in learning how to listen, follow rules, and respect their parents with love and understanding.

This book uses techniques from Applied Behavior Analysis (ABA) and Positive Psychology to encourage positive behavior through consistent routines and gentle guidance

Each page includes children practice:

Respectful listening - Following instructions - Helping around the house - using kind words`,
  'Book1.3': `To Speak Honestly is part of the Tiny Tools for Big Feelings series, created especially for a short story, a song about truth, and a set of practical, playful activities.

This book is based on the principles of Positive Psychology and Early Childhood Education. It is designed to help children understand the value of honesty and learn how to tell the truth kindly and confidently.

Each page offers visual, simple, and research-based tools to support young children in building trust, expressing their feelings, and becoming proud truth-tellers—even when it feels hard.`,
  'Book1.4': '',
  'Book1.5': `To Listen and Focus is part of the Tiny Tools for Big Feelings series, specially created to help children practice attention and focus through an engaging story, a learning activity, and playful illustrations.

In the book, Adam struggles to be a good listener. After being taught, encouraged, and given another chance to listen well, he feels proud of his accomplishment.`,
  'Book1.6': `To Tidy Up My Things is part of a Tiny Tools for Big Feelings series, created especially for a short story and a series of practical, playful activities.

This book is based on the principles of the Applied Behavioral Analysis (ABA) and Positive Psychology, and is designed to help children learn and practice the essential skill of tidiness.`,
  'Book2.1': `This is the first book in the Tiny Tools for Big Feelings series. It is thoughtfully designed to help children aged 6 to 8 develop their ability to focus, and calm themselves in everyday situations.

The book is intended for use by parents, educators, specialists, schools, and therapeutic centers. It serves as a supportive tool to help children build essential emotional and behavioral skills in a gentle and playful way.

All the activities are grounded in the principles of Applied Behavioral Analysis (ABA) and Positive Psychology. Each page encourages children to practice useful strategies for managing distractions, strengthening their attention, and understanding their emotions.

By combining drawing, storytelling, movement, and reflection, this book offers a simple and joyful path to emotional growth.`,
  'Book2.2': `To be a leader is part of the Tiny Tools for Big Feelings series, thoughtfully designed to help children aged 6 to 8 develop essential leadership skills. This book guides young readers through understanding what it means to be a leader, setting goals, managing time, and making thoughtful decisions.

Children will learn how to communicate effectively, solve problems, and build self-confidence through and engaging story and interactive activities. The exercises are crafted to inspire positive thinking, encourage responsibility, and nurture decision-making skills. 

This book is more than just a story, it's an educational journey that empowers children to discover their potential and grow with confidence and purpose.`,
  'Book2.3': `"To Protect My Space" was created to help young children understand the importance of personal boundaries. In a world full of movement, new experiences -- children sometimes need guidance on how to protect their space in a kind and confident way.

Each book provides 15 simple and fun exercises that teach children how to recognize their own feelings, express themselves clearly, and say "no" when needed -- always with respect and kindness. Each activity is crafted to help kids feel strong, safe, and proud of their ability to communicate their needs.

Through daily practice, children will develop the skills to set healthy limits, ask for help when they need, and treat the space of others with care -- one step-at-a-time.`,
  'Book2.4': `Learning to manage time is an important skill for young children. This book provides a series of fun and meaningful activities that help children ages 6 to 8 develop better organization, planning, and time-awareness.

Each activity encourages children to think ahead, set small goals, and build healthy daily habits. Through regular practice, children will gain confidence in managing their schedules and balancing different activities throughout their day.

Parents, teachers, and caregivers are encouraged to support children as they explore and complete the activities, helping them build confidence and independence day by day.`,
  'Book2.5': `To Make My Wish Come True is part of the Tiny Tools for Big Feelings series, designed to help children ages 6–8 learn how to set goals and follow them with confidence, joy, and persistence.

This book gently guides children through the process of dreaming, planning, and doing – one small step at a time.

includes: A prayful story to inspire action.

Practical tools to break down big goals.

Simple exercises to build focus and motivation.

With warm illustrations and positive language, this book helps children believe in themselves and understand that every goal is possible when they take steady steps.`,
  'Book3.1': `This book is your personal space to explore your thoughts and feelings. 

It is designed to help you understand your emotions better, express yourself clearly, build real confidence, and discover what makes you unique.

You can write, draw, or reflect in your own style, with no "perfect" answers. What matters most is being honest with yourself. Take it one page at a time, go at your own pace, and enjoy the journey of becoming the best version of you.`,
  'Book3.2': `Step by Step… I Will Succeed! is the second book in the Tiny Tools for Big Feelings series for children aged 9 to 11.

This book focuses on task commitment, one of the three core components of giftedness in the Renzulli Three-Ring Model. Task commitment refers to a child's ability to stay focused, be self-motivated, and complete what they start, even when things get challenging.

Through fun stories big tasks into small steps.

Track their progress and build healthy routines.

Discover their own power to persevere and succeed.

It's not about being perfect. It's about showing up, one step at a time.`,
  'Book3.3': `Unlock My Mind begins a new journey, a series of books thoughtfully designed for gifted children. This book introduces core concepts in creative thinking, task commitment, and personal growth, laying the foundation for future volumes focused on developing the mind and character of bright young learners.

Through engaging challenges and self-reflection activities, Unlock My Mind empowers children to explore their potential, ask meaningful questions, and build the inner skills they need to thrive academically, socially, and emotionally.

This series is intended for educators, therapists, and parents passionate about nurturing giftedness in all its forms. Future books will explore social emotional intelligence, leadership, and advanced problem-solving, helping children build knowledge, self-awareness, resilience, and purpose.

We hope this journey inspires you as much as it inspires the children you support.`,
  'Book3.4': `To Make Sense of My Feelings is part of the Tiny Tools for Big Feelings series, designed to support children aged 9 to 12 in understanding and managing their emotional world.

This book gently guides children through the process of identifying, naming, and reflecting on their feelings. It helps them notice the connection between their emotions, thoughts, and behaviors, empowering them to respond with awareness, not reaction.

The story and activities are developmentally appropriate and grounded in the principles of Emotional Intelligence and Positive Psychology.`,
  'Book3.5': `This book was created for professionals, caregivers, and educators who support children navigating their inner world.

It offers practical tools to help children explore their fears, express their thoughts, and build emotional strength.

Through storytelling, structured activities, and therapeutic prompts, children are gently guided to recognize what scares them, and to respond with growing confidence and resilience.

It is a resource designed to be flexible, supportive, and grounded in both empathy and evidence based strategies.`,
  'Book4.1': `Me, My Mind & More is a story-based therapeutic guide designed for teenagers in grades 8 to 11 who may struggle with self-doubt, emotional overwhelm, or feeling unseen.

The journey begins with the story of Ahmad, a teenager who learns to rebuild his self-confidence after experiencing harsh and dismissive responses from the people closest to him. Through small but powerful steps, he starts to reclaim his voice, his worth, and his place in the world.

This book is not just something to read, it's something to explore.

After the story, you'll find guided therapeutic activities that invite you to reflect, try, and grow, just like Ahmad. Whether you're a teenager going through your silent battles or a caring adult supporting one, this book offers tools, language, and hope to help build strength from the inside out.`,
  'Book5.1': `In today's world of stress and uncertainty, accessible tools for psychological well-being are more essential than ever. This book presents 40 evidence-based Positive CBT exercises designed to support individuals in managing symptoms, building strengths, and fostering emotional resilience.

Blending traditional CBT techniques with the core principles of Positive Psychology, such as gratitude, optimism, compassion, and meaning, each exercise is crafted to be practical, flexible, and adaptable to diverse settings.

Reframe unhelpful thoughts, regulate emotions, cultivate habits of self-compassion and optimism, strengthen sense of purpose and values

This is more than a workbook. It's a journey from distress to growth, and from survival to flourishing. Let every page be a starting point, and every exercise a path to lasting positive change.`
};

// Image loading optimization
class ImageLoader {
  constructor() {
    this.observer = null;
    this.loadedImages = new Set();
    this.priorityImages = new Set();
    this.init();
  }

  init() {
    // Create intersection observer for lazy loading
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    // Preload critical images immediately
    this.preloadCriticalImages();
  }

  preloadCriticalImages() {
    // Hero image
    this.preloadImage('images/Hero.jpg');
    
    // Blog images
    this.preloadImage('Blogs/Blog1_image.jpg');
    this.preloadImage('Blogs/Blog2_image.jpg');
    this.preloadImage('Blogs/Blog3_image.jpg');
    
    // Group images (first 3 groups visible on load)
    this.preloadImage('images/Group 1/Group_1.jpg');
    this.preloadImage('images/Group 2/Group 2.jpg');
    this.preloadImage('images/Group 3/Group 3.jpg');
    
    // First few book covers from each visible group
    this.preloadImage('images/Group 1/Book1.1/Cover1.1.png');
    this.preloadImage('images/Group 1/Book1.2/Cover1.2.png');
    this.preloadImage('images/Group 1/Book1.3/Cover1.3.png');
    this.preloadImage('images/Group 2/Book2.1/Cover2.1.jpg');
    this.preloadImage('images/Group 2/Book2.2/Cover2.2.jpg');
    this.preloadImage('images/Group 2/Book2.3/cover1.3.jpg');
  }

  preloadImage(src) {
    if (this.loadedImages.has(src)) return;
    
    const img = new Image();
    img.onload = () => {
      this.loadedImages.add(src);
      // Update any existing img elements with this src
      document.querySelectorAll(`img[data-src="${src}"]`).forEach(element => {
        element.src = src;
        element.classList.remove('loading');
        element.removeAttribute('data-src');
      });
    };
    img.onerror = () => {
      console.warn(`Failed to preload image: ${src}`);
    };
    img.src = src;
  }

  loadImage(img) {
    const src = img.dataset.src;
    if (!src || this.loadedImages.has(src)) return;

    img.classList.add('loading');
    
    const imageLoader = new Image();
    imageLoader.onload = () => {
      img.src = src;
      img.classList.remove('loading');
      img.removeAttribute('data-src');
      this.loadedImages.add(src);
    };
    imageLoader.onerror = () => {
      img.classList.remove('loading');
      img.alt = 'Image failed to load';
    };
    imageLoader.src = src;
  }

  observeImage(img) {
    if (img.dataset.src && !this.loadedImages.has(img.dataset.src)) {
      this.observer.observe(img);
    }
  }
}

// Initialize image loader
const imageLoader = new ImageLoader();

// DOM manipulation functions
function createImageElement(src, alt, className = '', isLazy = true) {
  const img = document.createElement('img');
  img.alt = alt;
  if (className) img.className = className;
  
  if (isLazy && !imageLoader.loadedImages.has(src)) {
    img.dataset.src = src;
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGYwZjAiLz48L3N2Zz4=';
    imageLoader.observeImage(img);
  } else {
    img.src = src;
  }
  
  return img;
}

function renderApp() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Header -->
    <header class="header">
      <nav class="nav">
        <a href="#" class="logo">MySmartKit</a>
        <ul class="nav-links" id="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#books">Books</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-overlay"></div>
      <div class="hero-content">
      </div>
    </section>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Blog Section -->
      <section class="blog-section" id="blog">
        <h2 class="section-title">Latest Insights</h2>
        <div class="blog-grid" id="blogGrid">
          <!-- Blog cards will be inserted here -->
        </div>
      </section>

      <!-- Books Section -->
      <section class="groups-section" id="books">
        <h2 class="section-title">Our Book Collections</h2>
        <div class="groups-container" id="groupsContainer">
          <!-- Group sections will be inserted here -->
        </div>
      </section>

      <!-- About Section -->
      <section class="about-section" id="about">
        <div class="about-grid">
          <div class="about-text">
            <h3>About MySmartKit</h3>
            <p>We are dedicated to creating educational resources that support emotional intelligence, behavioral development, and personal growth across all life stages. Our books combine evidence-based approaches with engaging, practical content.</p>
            <p>From early childhood through adulthood, our carefully crafted materials help individuals develop essential life skills, emotional regulation, and positive mindsets. Each book is designed with specific developmental needs in mind, ensuring age-appropriate and effective learning experiences.</p>
          </div>
          <div class="about-stats">
            <div class="stat-item">
              <h4>5</h4>
              <p>Age Groups</p>
            </div>
            <div class="stat-item">
              <h4>15+</h4>
              <p>Books Available</p>
            </div>
            <div class="stat-item">
              <h4>100+</h4>
              <p>Activities & Exercises</p>
            </div>
            <div class="stat-item">
              <h4>3</h4>
              <p>Expert Blog Posts</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section" id="contact">
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Get in Touch</h3>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@mysmartkit.com</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>123 Education Street<br>Learning City, LC 12345</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <h3>Send us a Message</h3>
            <form id="contactForm">
              <div class="form-group">
                <input type="text" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input type="email" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <textarea rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>MySmartKit</h3>
          <p>Empowering growth through educational excellence. Our books support emotional intelligence and personal development for all ages.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Age Groups</h3>
          <ul>
            <li><a href="#books">Ages 3-5</a></li>
            <li><a href="#books">Ages 6-8</a></li>
            <li><a href="#books">Ages 9-12</a></li>
            <li><a href="#books">Ages 13-17</a></li>
            <li><a href="#books">Ages 18+</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Parent Guides</a></li>
            <li><a href="#">Teacher Resources</a></li>
            <li><a href="#">Activity Sheets</a></li>
            <li><a href="#">Certificates</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 MySmartKit. All rights reserved.</p>
      </div>
    </footer>

    <!-- Modals -->
    <div class="modal" id="bookModal">
      <div class="modal-content">
        <button class="modal-close" id="closeBookModal">&times;</button>
        <div id="bookModalContent">
          <!-- Book modal content will be inserted here -->
        </div>
      </div>
    </div>

    <div class="modal" id="blogModal">
      <div class="modal-content">
        <button class="modal-close" id="closeBlogModal">&times;</button>
        <div id="blogModalContent">
          <!-- Blog modal content will be inserted here -->
        </div>
      </div>
    </div>

    <!-- Image Viewer -->
    <div class="image-viewer" id="imageViewer">
      <div class="image-viewer-overlay"></div>
      <div class="image-viewer-content">
        <button class="image-viewer-close" id="closeImageViewer">&times;</button>
        <div class="image-viewer-container">
          <img id="viewerImage" src="" alt="">
          <div class="image-viewer-info">
            <h3 id="viewerTitle"></h3>
            <p id="viewerDescription"></p>
          </div>
        </div>
        <div class="image-viewer-controls">
          <button class="image-nav-btn" id="prevImage">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="image-nav-btn" id="nextImage">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  // Render blog cards
  renderBlogCards();
  
  // Render book groups
  renderBookGroups();
  
  // Initialize event listeners
  initializeEventListeners();
}

function renderBlogCards() {
  const blogGrid = document.getElementById('blogGrid');
  
  blogGrid.innerHTML = blogData.map(blog => `
    <div class="blog-card" data-blog-id="${blog.id}">
      <div class="blog-image">
        ${createImageElement(blog.image, blog.title, '', false).outerHTML}
        <div class="blog-age-badge">${blog.age}</div>
      </div>
      <div class="blog-card-content">
        <h3>${blog.title}</h3>
        <p>${blog.excerpt}</p>
        <button class="read-more-btn">Read More</button>
      </div>
    </div>
  `).join('');
}

function renderBookGroups() {
  const groupsContainer = document.getElementById('groupsContainer');
  
  groupsContainer.innerHTML = Object.entries(bookData).map(([groupKey, group]) => `
    <div class="group-section">
      <div class="group-header">
        <div class="group-image">
          ${createImageElement(group.image, group.title, '', false).outerHTML}
        </div>
        <div class="group-info">
          <h3 class="group-title">${group.title}</h3>
          <div class="group-age">${group.age}</div>
          <p class="group-description">${group.description}</p>
          <div class="group-duration">${aboutTextData[groupKey] || ''}</div>
        </div>
      </div>
      <div class="books-grid">
        ${group.books.map(book => `
          <div class="book-card" data-book-id="${book.id}" data-group="${groupKey}">
            <div class="book-cover">
              ${createImageElement(book.cover, book.title).outerHTML}
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
  `).join('');
}

function initializeEventListeners() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        navLinks.classList.remove('active');
      }
    });
  });

  // Blog card click handlers
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      const blogId = card.dataset.blogId;
      openBlogModal(blogId);
    });
  });

  // Book card click handlers
  document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', () => {
      const bookId = card.dataset.bookId;
      const groupKey = card.dataset.group;
      openBookModal(bookId, groupKey);
    });
  });

  // Modal close handlers
  document.getElementById('closeBookModal').addEventListener('click', () => {
    document.getElementById('bookModal').classList.remove('active');
  });

  document.getElementById('closeBlogModal').addEventListener('click', () => {
    document.getElementById('blogModal').classList.remove('active');
  });

  document.getElementById('closeImageViewer').addEventListener('click', () => {
    document.getElementById('imageViewer').classList.remove('active');
  });

  // Close modals when clicking outside
  document.getElementById('bookModal').addEventListener('click', (e) => {
    if (e.target.id === 'bookModal') {
      document.getElementById('bookModal').classList.remove('active');
    }
  });

  document.getElementById('blogModal').addEventListener('click', (e) => {
    if (e.target.id === 'blogModal') {
      document.getElementById('blogModal').classList.remove('active');
    }
  });

  document.getElementById('imageViewer').addEventListener('click', (e) => {
    if (e.target.classList.contains('image-viewer-overlay')) {
      document.getElementById('imageViewer').classList.remove('active');
    }
  });

  // Contact form handler
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('bookModal').classList.remove('active');
      document.getElementById('blogModal').classList.remove('active');
      document.getElementById('imageViewer').classList.remove('active');
    }
  });
}

function openBlogModal(blogId) {
  const blog = blogData.find(b => b.id === blogId);
  if (!blog) return;

  const modalContent = document.getElementById('blogModalContent');
  modalContent.innerHTML = `
    <div class="blog-modal-header">
      ${createImageElement(blog.image, blog.title, 'blog-modal-image', false).outerHTML}
      <div class="blog-modal-info">
        <h2>${blog.title}</h2>
        <p>${blog.age}</p>
      </div>
    </div>
    <div class="blog-modal-content">
      ${blog.content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
    </div>
  `;

  document.getElementById('blogModal').classList.add('active');
}

function openBookModal(bookId, groupKey) {
  const group = bookData[groupKey];
  const book = group.books.find(b => b.id === bookId);
  if (!book) return;

  const modalContent = document.getElementById('bookModalContent');
  modalContent.innerHTML = `
    <div class="modal-book-header">
      <div class="modal-book-cover">
        ${createImageElement(book.cover, book.title, '', false).outerHTML}
      </div>
      <div class="modal-book-info">
        <h2>${book.title}</h2>
        <div class="modal-book-id"><strong>Book ID:</strong> ${book.id}</div>
        <div class="modal-collection"><strong>Collection:</strong> ${group.title}</div>
        <div class="modal-age-range"><strong>Age Range:</strong> ${group.age}</div>
      </div>
    </div>
    <div class="modal-description">
      <h3>About This Book</h3>
      <p>${bookDescriptions[book.id] || 'Description coming soon...'}</p>
    </div>
    <div class="modal-assets">
      <h3>Available Resources</h3>
      <div class="assets-grid">
        ${book.assets.map(asset => `
          <div class="asset-item" data-asset-path="${asset.path}" data-asset-name="${asset.name}" data-asset-type="${asset.type}">
            ${createImageElement(asset.path, asset.name).outerHTML}
            <p>${asset.name}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Add click handlers for asset items
  modalContent.querySelectorAll('.asset-item').forEach(item => {
    item.addEventListener('click', () => {
      const assetPath = item.dataset.assetPath;
      const assetName = item.dataset.assetName;
      const assetType = item.dataset.assetType;
      openImageViewer(assetPath, assetName, assetType, book.assets);
    });
  });

  document.getElementById('bookModal').classList.add('active');
}

let currentImageIndex = 0;
let currentAssets = [];

function openImageViewer(imagePath, title, type, assets) {
  currentAssets = assets;
  currentImageIndex = assets.findIndex(asset => asset.path === imagePath);
  
  updateImageViewer();
  document.getElementById('imageViewer').classList.add('active');
  
  // Update navigation buttons
  updateNavigationButtons();
}

function updateImageViewer() {
  const asset = currentAssets[currentImageIndex];
  const viewerImage = document.getElementById('viewerImage');
  const viewerTitle = document.getElementById('viewerTitle');
  const viewerDescription = document.getElementById('viewerDescription');
  
  viewerImage.src = asset.path;
  viewerImage.alt = asset.name;
  viewerTitle.textContent = asset.name;
  viewerDescription.textContent = `Type: ${asset.type}`;
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  
  prevBtn.disabled = currentImageIndex === 0;
  nextBtn.disabled = currentImageIndex === currentAssets.length - 1;
  
  prevBtn.onclick = () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateImageViewer();
      updateNavigationButtons();
    }
  };
  
  nextBtn.onclick = () => {
    if (currentImageIndex < currentAssets.length - 1) {
      currentImageIndex++;
      updateImageViewer();
      updateNavigationButtons();
    }
  };
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  
  // Add fade-in animation for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe elements for fade-in animation
  setTimeout(() => {
    document.querySelectorAll('.blog-card, .book-card, .group-section').forEach(el => {
      el.classList.add('fade-in');
      fadeObserver.observe(el);
    });
  }, 100);
});