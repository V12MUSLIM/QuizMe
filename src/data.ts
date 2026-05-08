import type { Question } from "./types/questions";
export const mockQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of data analytics?",
    options: [
      "To delete unnecessary data",
      "To analyze raw data and draw conclusions",
      "To create computer hardware",
      "To replace databases completely",
    ],
    correctAnswer: "To analyze raw data and draw conclusions",
    hint: "Think about how organizations gain insights from information.",
    wrongAnswerExplanation:
      "Data analytics focuses on extracting insights and conclusions from raw data to support better decision-making. It is not mainly about deleting data, building hardware, or replacing databases.",
  },
  {
    id: 2,
    question: "Which of the following is considered data?",
    options: [
      "Only numbers",
      "Only graphs",
      "Only observations",
      "Facts, observations, numbers, and information",
    ],
    correctAnswer: "Facts, observations, numbers, and information",
    hint: "Data can exist in many forms.",
    wrongAnswerExplanation:
      "Data includes many forms such as numbers, observations, facts, text, graphs, and measurements. Restricting data to only one type is incorrect.",
  },
  {
    id: 3,
    question:
      "Which stage comes immediately after Data Warehouse in the Data Processing Chain?",
    options: [
      "Data Collection",
      "Data Mining",
      "Database Design",
      "Data Security",
    ],
    correctAnswer: "Data Mining",
    hint: "Think about the sequence shown in the processing pipeline.",
    wrongAnswerExplanation:
      "The data processing chain follows the order: Data → Database → Data Warehouse → Data Mining → Data Visualization. Therefore, Data Mining comes after Data Warehouse.",
  },
  {
    id: 4,
    question:
      "What does Business Intelligence (BI) mainly help organizations achieve?",
    options: [
      "Replace employees with robots",
      "Transform raw data into actionable insights",
      "Delete duplicate records automatically",
      "Design websites",
    ],
    correctAnswer: "Transform raw data into actionable insights",
    hint: "BI focuses on decision-making support.",
    wrongAnswerExplanation:
      "Business Intelligence systems analyze organizational data and convert it into useful insights that support strategic and operational decisions.",
  },
  {
    id: 5,
    question: "Which type of analytics answers the question 'What happened?'",
    options: [
      "Predictive Analytics",
      "Prescriptive Analytics",
      "Descriptive Analytics",
      "Diagnostic Analytics",
    ],
    correctAnswer: "Descriptive Analytics",
    hint: "It summarizes past events and trends.",
    wrongAnswerExplanation:
      "Descriptive analytics focuses on summarizing historical data and identifying trends, which directly answers the question 'What happened?'",
  },
  {
    id: 6,
    question:
      "Which type of analytics focuses on understanding why something happened?",
    options: [
      "Diagnostic Analytics",
      "Descriptive Analytics",
      "Predictive Analytics",
      "Operational Analytics",
    ],
    correctAnswer: "Diagnostic Analytics",
    hint: "It investigates causes and correlations.",
    wrongAnswerExplanation:
      "Diagnostic analytics analyzes causes, anomalies, and relationships to explain why an event occurred.",
  },
  {
    id: 7,
    question:
      "Which analytics type is mainly used for forecasting future outcomes?",
    options: [
      "Diagnostic Analytics",
      "Descriptive Analytics",
      "Predictive Analytics",
      "Data Cleaning",
    ],
    correctAnswer: "Predictive Analytics",
    hint: "Think about future trends and machine learning.",
    wrongAnswerExplanation:
      "Predictive analytics uses historical data, machine learning, and statistical models to forecast future trends and events.",
  },
  {
    id: 8,
    question: "Prescriptive analytics mainly answers which question?",
    options: [
      "What happened?",
      "What should be done?",
      "What data exists?",
      "Who created the data?",
    ],
    correctAnswer: "What should be done?",
    hint: "It recommends actions based on predictions.",
    wrongAnswerExplanation:
      "Prescriptive analytics goes beyond prediction and recommends actions or decisions that should be taken.",
  },
  {
    id: 9,
    question: "Which of the following is a common BI tool?",
    options: ["Tableau", "Photoshop", "Visual Studio Code", "AutoCAD"],
    correctAnswer: "Tableau",
    hint: "It is widely used for dashboards and visualization.",
    wrongAnswerExplanation:
      "Tableau is a Business Intelligence and visualization platform used for dashboards, reporting, and data analysis.",
  },
  {
    id: 10,
    question:
      "Which process involves extracting, transforming, and loading data?",
    options: ["CRM", "ETL", "TDM", "OLAP"],
    correctAnswer: "ETL",
    hint: "This process prepares data for analysis.",
    wrongAnswerExplanation:
      "ETL stands for Extract, Transform, and Load, which is the standard process for preparing and integrating data into warehouses.",
  },
  {
    id: 11,
    question: "What is a Data Warehouse mainly optimized for?",
    options: [
      "Gaming performance",
      "Transaction processing",
      "Reporting and analysis",
      "Graphic design",
    ],
    correctAnswer: "Reporting and analysis",
    hint: "A DW supports decision-making.",
    wrongAnswerExplanation:
      "A Data Warehouse is designed for reporting, querying, historical analysis, and business intelligence rather than daily transaction processing.",
  },
  {
    id: 12,
    question:
      "Which characteristic means data in a warehouse is stored over long periods?",
    options: ["Integrated", "Time-variant", "Temporary", "Volatile"],
    correctAnswer: "Time-variant",
    hint: "Historical analysis requires time-based data.",
    wrongAnswerExplanation:
      "Time-variant means the warehouse stores historical data over different periods, enabling trend analysis and comparisons.",
  },
  {
    id: 13,
    question: "What does the term 'Nonvolatile' mean in Data Warehousing?",
    options: [
      "Data changes every second",
      "Data is frequently deleted",
      "Data remains stable after loading",
      "Data is temporary",
    ],
    correctAnswer: "Data remains stable after loading",
    hint: "Warehouse data is not constantly updated like transactional systems.",
    wrongAnswerExplanation:
      "Nonvolatile data remains persistent and stable once loaded into the warehouse, unlike operational databases where updates happen frequently.",
  },
  {
    id: 14,
    question:
      "Which schema design uses a central fact table connected to dimension tables?",
    options: [
      "Network Schema",
      "Hierarchical Schema",
      "Star Schema",
      "Object Schema",
    ],
    correctAnswer: "Star Schema",
    hint: "It minimizes joins for faster queries.",
    wrongAnswerExplanation:
      "The Star Schema contains a central fact table connected directly to dimension tables, simplifying queries and improving performance.",
  },
  {
    id: 15,
    question: "Which schema reduces redundancy but increases query complexity?",
    options: [
      "Flat Schema",
      "Star Schema",
      "Snowflake Schema",
      "Linear Schema",
    ],
    correctAnswer: "Snowflake Schema",
    hint: "It normalizes dimension tables.",
    wrongAnswerExplanation:
      "The Snowflake Schema normalizes dimensions to reduce redundancy, but this increases the number of joins and query complexity.",
  },
  {
    id: 16,
    question: "What is the primary goal of text mining?",
    options: [
      "Encrypting files",
      "Extracting insights from textual data",
      "Deleting documents",
      "Creating databases",
    ],
    correctAnswer: "Extracting insights from textual data",
    hint: "Text mining discovers knowledge in text.",
    wrongAnswerExplanation:
      "Text mining analyzes textual information to identify patterns, sentiments, trends, and useful insights.",
  },
  {
    id: 17,
    question: "What does TDM stand for in text mining?",
    options: [
      "Text Data Mining",
      "Technical Data Mapping",
      "Term Document Matrix",
      "Term Database Model",
    ],
    correctAnswer: "Term Document Matrix",
    hint: "It maps terms to documents numerically.",
    wrongAnswerExplanation:
      "A Term Document Matrix represents how frequently terms appear across multiple documents.",
  },
  {
    id: 18,
    question: "What does a Term Document Matrix mainly store?",
    options: [
      "Images and videos",
      "Employee records",
      "Frequency of terms in documents",
      "Passwords",
    ],
    correctAnswer: "Frequency of terms in documents",
    hint: "Think about word occurrences.",
    wrongAnswerExplanation:
      "A TDM converts text into numeric form by recording the occurrence frequency of terms within documents.",
  },
  {
    id: 19,
    question: "Which text mining technique groups similar documents together?",
    options: ["Normalization", "Encryption", "Clustering", "Formatting"],
    correctAnswer: "Clustering",
    hint: "It forms groups based on similarity.",
    wrongAnswerExplanation:
      "Clustering organizes documents into groups according to shared patterns, words, or similarities.",
  },
  {
    id: 20,
    question:
      "Which analytics type would be most suitable for recommending the best business action?",
    options: [
      "Descriptive Analytics",
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
    ],
    correctAnswer: "Prescriptive Analytics",
    hint: "It suggests optimal actions.",
    wrongAnswerExplanation:
      "Prescriptive analytics recommends the best decisions or actions by combining predictions, AI, and optimization techniques.",
  },
];
