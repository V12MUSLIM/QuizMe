import type { Question } from "./types/questions";
export const mockQuestions: Question[] = [
  {
    id: 1,
    question: "Which mathematical concept is primarily used to find the maximum or minimum value of a function within a given set of constraints?",
    options: ["Linear Programming", "Neural Networks", "Cryptographic Hashing", "Database Indexing"],
    correctAnswer: "Linear Programming",
    hint: "It is often used in operations research and involves variables subject to linear relationships."
  },
  {
    id: 2,
    question: "What is the primary role of an Express server in the PERN stack?",
    options: ["To render the user interface", "To store relational data natively", "To handle backend routing and middleware", "To manage browser DOM state"],
    correctAnswer: "To handle backend routing and middleware",
    hint: "It acts as the bridge between your React frontend and your database."
  },
  {
    id: 3,
    question: "In PostgreSQL, which keyword is used to combine rows from two or more tables based on a related column?",
    options: ["COMBINE", "JOIN", "ATTACH", "MERGE"],
    correctAnswer: "JOIN",
    hint: "Think of Venn diagrams representing the intersection of data sets."
  },
  {
    id: 4,
    question: "What does 'L' stand for in the SOLID principles of object-oriented design?",
    options: ["Linear Dependency", "Liskov Substitution", "Logical Abstraction", "Layered Architecture"],
    correctAnswer: "Liskov Substitution",
    hint: "It ensures that a subclass can replace its superclass without breaking the program."
  },
  {
    id: 5,
    question: "Which React hook is specifically designed to handle side effects like data fetching or subscriptions?",
    options: ["useState", "useContext", "useEffect", "useMemo"],
    correctAnswer: "useEffect",
    hint: "This hook 'runs after every render' by default unless a dependency array is provided."
  },
  {
    id: 6,
    question: "What is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(log n)"],
    correctAnswer: "O(log n)",
    hint: "Each step in the search eliminates half of the remaining nodes."
  },
  {
    id: 7,
    question: "Which HTTP method is considered 'idempotent' and typically used to update an existing resource entirely?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctAnswer: "PUT",
    hint: "Performing this operation multiple times with the same data will produce the same result as the first time."
  },
  {
    id: 8,
    question: "In the context of Node.js, what is the 'Event Loop'?",
    options: ["A tool for styling CSS", "A mechanism that handles non-blocking I/O operations", "A way to loop through SQL results", "A hardware component for processing"],
    correctAnswer: "A mechanism that handles non-blocking I/O operations",
    hint: "It allows Node.js to be asynchronous despite being single-threaded."
  },
  {
    id: 9,
    question: "Which CSS property is used to create space between the content of an element and its border?",
    options: ["Margin", "Spacing", "Padding", "Gutter"],
    correctAnswer: "Padding",
    hint: "Unlike margin, this space is inside the element's boundary."
  },
  {
    id: 10,
    question: "What is the primary purpose of a 'JWT' (JSON Web Token) in modern web applications?",
    options: ["To compress image files", "To encrypt entire databases", "To securely transmit information between parties as a JSON object", "To manage React component state"],
    correctAnswer: "To securely transmit information between parties as a JSON object",
    hint: "It is commonly used for authentication and authorization."
  }
];