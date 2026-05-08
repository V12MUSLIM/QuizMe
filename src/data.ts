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
  },
  {
    id: 6,
    question:
      "Which type of analytics focuses on understanding why something happened?",
    options: [
      "Diagnostic Analytics",
      "Descriptive Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
    ],
    correctAnswer: "Diagnostic Analytics",
    hint: "It investigates causes and correlations.",
  },
  {
    id: 7,
    question:
      "Which analytics type is mainly used for forecasting future outcomes?",
    options: [
      "Diagnostic Analytics",
      "Descriptive Analytics",
      "Predictive Analytics",
      "Operational Analytics",
    ],
    correctAnswer: "Predictive Analytics",
    hint: "Think about future trends and machine learning.",
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
  },
  {
    id: 9,
    question: "Which of the following is a common BI tool?",
    options: ["Tableau", "Photoshop", "Visual Studio Code", "AutoCAD"],
    correctAnswer: "Tableau",
    hint: "It is widely used for dashboards and visualization.",
  },
  {
    id: 10,
    question:
      "Which process involves extracting, transforming, and loading data?",
    options: ["CRM", "ETL", "TDM", "OLAP"],
    correctAnswer: "ETL",
    hint: "This process prepares data for analysis.",
  },
  {
    id: 11,
    question:
      "Which phase of the Data Analytics Lifecycle focuses on understanding the business problem?",
    options: [
      "Model Building",
      "Discovery",
      "Operationalize",
      "Communicate Results",
    ],
    correctAnswer: "Discovery",
    hint: "It is the first phase in the lifecycle.",
  },
  {
    id: 12,
    question: "What is the purpose of data visualization?",
    options: [
      "To make databases larger",
      "To hide trends in data",
      "To present insights clearly and effectively",
      "To remove all raw data",
    ],
    correctAnswer: "To present insights clearly and effectively",
    hint: "Visualization helps communicate conclusions.",
  },
  {
    id: 13,
    question: "Which of the following is an application of BI in healthcare?",
    options: [
      "Predicting machinery failure",
      "Diagnosing diseases using patient data",
      "Designing buildings",
      "Creating social media profiles",
    ],
    correctAnswer: "Diagnosing diseases using patient data",
    hint: "Healthcare analytics often supports diagnosis.",
  },
  {
    id: 14,
    question: "Which BI application is common in banking?",
    options: [
      "Movie recommendation",
      "Automated loan approval",
      "Weather forecasting only",
      "Manufacturing robots",
    ],
    correctAnswer: "Automated loan approval",
    hint: "Banks use historical financial data.",
  },
  {
    id: 15,
    question: "What is a Data Warehouse mainly optimized for?",
    options: [
      "Gaming performance",
      "Transaction processing",
      "Reporting and analysis",
      "Social networking",
    ],
    correctAnswer: "Reporting and analysis",
    hint: "A DW supports decision-making.",
  },
  {
    id: 16,
    question:
      "Which characteristic means data in a warehouse is stored over long periods?",
    options: ["Integrated", "Subject-oriented", "Time-variant", "Volatile"],
    correctAnswer: "Time-variant",
    hint: "Historical analysis requires time-based data.",
  },
  {
    id: 17,
    question: "What does the term 'Nonvolatile' mean in Data Warehousing?",
    options: [
      "Data changes every second",
      "Data is frequently deleted",
      "Data remains stable after loading",
      "Data is never stored",
    ],
    correctAnswer: "Data remains stable after loading",
    hint: "Warehouse data is not constantly updated like transactional systems.",
  },
  {
    id: 18,
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
  },
  {
    id: 19,
    question: "Which schema reduces redundancy but increases query complexity?",
    options: ["Star Schema", "Flat Schema", "Snowflake Schema", "Graph Schema"],
    correctAnswer: "Snowflake Schema",
    hint: "It normalizes dimension tables.",
  },
  {
    id: 20,
    question:
      "Which approach to building a data warehouse starts with small departmental data marts?",
    options: [
      "Top-Down Approach",
      "Bottom-Up Approach",
      "Centralized Approach",
      "Hierarchical Approach",
    ],
    correctAnswer: "Bottom-Up Approach",
    hint: "It begins with smaller functional systems.",
  },
  {
    id: 21,
    question:
      "Which approach creates a centralized enterprise-wide data warehouse first?",
    options: [
      "Bottom-Up Approach",
      "Distributed Approach",
      "Top-Down Approach",
      "Incremental Approach",
    ],
    correctAnswer: "Top-Down Approach",
    hint: "It focuses on organization-wide integration.",
  },
  {
    id: 22,
    question:
      "Which component of Data Warehouse architecture is responsible for cleaning and transforming data?",
    options: [
      "Data Sources",
      "Data Access",
      "ETL Processing",
      "Reporting Dashboard",
    ],
    correctAnswer: "ETL Processing",
    hint: "This stage standardizes and prepares data.",
  },
  {
    id: 23,
    question:
      "Which of the following is an example of external data sources in a DW?",
    options: ["ERP Systems", "CRM Systems", "Weather Data", "Employee Tables"],
    correctAnswer: "Weather Data",
    hint: "External sources come from outside the organization.",
  },
  {
    id: 24,
    question: "What is the primary goal of text mining?",
    options: [
      "Encrypting files",
      "Extracting insights from textual data",
      "Deleting duplicate documents",
      "Creating databases",
    ],
    correctAnswer: "Extracting insights from textual data",
    hint: "Text mining discovers knowledge in text.",
  },
  {
    id: 25,
    question:
      "Which domain commonly uses text mining for analyzing patient histories?",
    options: ["Finance", "Marketing", "Medicine", "Manufacturing"],
    correctAnswer: "Medicine",
    hint: "Healthcare generates large textual records.",
  },
  {
    id: 26,
    question: "What is a 'bag of words' in text mining?",
    options: [
      "A database table",
      "A collection of unrelated images",
      "A representation of words used in text",
      "A programming language",
    ],
    correctAnswer: "A representation of words used in text",
    hint: "It focuses on terms and frequencies.",
  },
  {
    id: 27,
    question: "What does TDM stand for in text mining?",
    options: [
      "Term Data Management",
      "Term Document Matrix",
      "Text Discovery Method",
      "Technical Data Mining",
    ],
    correctAnswer: "Term Document Matrix",
    hint: "It maps terms to documents numerically.",
  },
  {
    id: 28,
    question: "What does a Term Document Matrix mainly store?",
    options: [
      "Video metadata",
      "Relationships between employees",
      "Frequency of terms in documents",
      "Database passwords",
    ],
    correctAnswer: "Frequency of terms in documents",
    hint: "Think about word occurrences.",
  },
  {
    id: 29,
    question: "Which text mining technique groups similar documents together?",
    options: ["Clustering", "Encryption", "Normalization", "Sorting"],
    correctAnswer: "Clustering",
    hint: "It forms groups based on similarity.",
  },
  {
    id: 30,
    question:
      "Which analytics type would be most suitable for recommending the best marketing strategy?",
    options: [
      "Descriptive Analytics",
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
    ],
    correctAnswer: "Prescriptive Analytics",
    hint: "It suggests optimal actions.",
  },
  {
    id: 31,
    question: "Why are dashboards important in BI systems?",
    options: [
      "They permanently delete records",
      "They provide interactive insights and summaries",
      "They replace databases",
      "They increase hardware costs",
    ],
    correctAnswer: "They provide interactive insights and summaries",
    hint: "Managers use them for monitoring performance.",
  },
  {
    id: 32,
    question: "Which activity belongs to the Data Preparation phase?",
    options: [
      "Building hypotheses",
      "Cleaning missing values",
      "Deploying final reports",
      "Defining KPIs only",
    ],
    correctAnswer: "Cleaning missing values",
    hint: "Preparation improves data quality.",
  },
  {
    id: 33,
    question: "Which of the following best describes descriptive analytics?",
    options: [
      "Predicting future events",
      "Explaining why events happened",
      "Summarizing historical data",
      "Suggesting optimal decisions",
    ],
    correctAnswer: "Summarizing historical data",
    hint: "It focuses on past information.",
  },
  {
    id: 34,
    question:
      "A company uses historical customer purchases to forecast future buying behavior. Which analytics type is this?",
    options: ["Descriptive", "Diagnostic", "Predictive", "Prescriptive"],
    correctAnswer: "Predictive",
    hint: "Forecasting is the key clue.",
  },
  {
    id: 35,
    question:
      "Which BI application helps telecom companies reduce customer loss?",
    options: [
      "Fraud prevention",
      "Customer retention management",
      "Medical diagnosis",
      "Legal e-discovery",
    ],
    correctAnswer: "Customer retention management",
    hint: "It focuses on keeping subscribers loyal.",
  },
  {
    id: 36,
    question: "Why is metadata documentation important in a Data Warehouse?",
    options: [
      "It stores passwords",
      "It explains transformations and calculations",
      "It removes all duplicate data",
      "It replaces ETL processes",
    ],
    correctAnswer: "It explains transformations and calculations",
    hint: "Metadata describes how data is handled.",
  },
  {
    id: 37,
    question:
      "Which characteristic of a Data Warehouse ensures consistency from multiple data sources?",
    options: ["Integrated", "Volatile", "Temporary", "Fragmented"],
    correctAnswer: "Integrated",
    hint: "It combines data into a unified view.",
  },
  {
    id: 38,
    question:
      "What is one major advantage of the Bottom-Up data warehouse approach?",
    options: [
      "Unlimited scalability",
      "Quick benefits for departments",
      "No need for integration",
      "Eliminates all transformation work",
    ],
    correctAnswer: "Quick benefits for departments",
    hint: "Small data marts are easier to implement.",
  },
  {
    id: 39,
    question:
      "Which technique in text mining identifies relationships between terms like 'sweet' and 'happy'?",
    options: [
      "Association Rule Analysis",
      "Normalization",
      "Indexing",
      "Backup Recovery",
    ],
    correctAnswer: "Association Rule Analysis",
    hint: "It discovers co-occurrence relationships.",
  },
  {
    id: 40,
    question: "Why is data conditioning important during preparation?",
    options: [
      "It increases data randomness",
      "It reduces data quality",
      "It improves consistency and usability",
      "It deletes historical records",
    ],
    correctAnswer: "It improves consistency and usability",
    hint: "Prepared data should be cleaner and reliable.",
  },
  {
    id: 41,
    question:
      "A retailer analyzes seasonal purchasing trends to improve promotions. Which BI benefit does this demonstrate?",
    options: [
      "Improved decision-making",
      "Hardware optimization",
      "Database normalization",
      "File encryption",
    ],
    correctAnswer: "Improved decision-making",
    hint: "The insights directly guide business actions.",
  },
  {
    id: 42,
    question: "Which scenario best represents diagnostic analytics?",
    options: [
      "Forecasting stock prices next year",
      "Summarizing yearly revenue",
      "Investigating why sales suddenly dropped",
      "Recommending the best supplier automatically",
    ],
    correctAnswer: "Investigating why sales suddenly dropped",
    hint: "Diagnostic analytics explains causes.",
  },
  {
    id: 43,
    question:
      "Why does the Star Schema generally provide faster query performance?",
    options: [
      "It removes all dimensions",
      "It stores only images",
      "It requires fewer joins",
      "It avoids fact tables",
    ],
    correctAnswer: "It requires fewer joins",
    hint: "Simpler relationships improve query speed.",
  },
  {
    id: 44,
    question:
      "Which of the following is a challenge in identifying frequent words during text mining?",
    options: [
      "Too much structured data",
      "Spelling variations and synonyms",
      "Lack of documents",
      "Having only numbers",
    ],
    correctAnswer: "Spelling variations and synonyms",
    hint: "Different words may have similar meanings.",
  },
  {
    id: 45,
    question:
      "What is the main reason organizations use predictive maintenance in manufacturing?",
    options: [
      "To redesign factories",
      "To forecast machinery failures",
      "To reduce employee salaries",
      "To eliminate warehouses",
    ],
    correctAnswer: "To forecast machinery failures",
    hint: "The goal is minimizing downtime.",
  },
  {
    id: 46,
    question:
      "Which Data Analytics Lifecycle phase involves selecting analytical models such as clustering or classification?",
    options: [
      "Discovery",
      "Data Preparation",
      "Model Planning",
      "Operationalize",
    ],
    correctAnswer: "Model Planning",
    hint: "This phase decides suitable analytical methods.",
  },
  {
    id: 47,
    question:
      "A healthcare system uses AI to recommend the best treatment for a patient. Which analytics type is primarily involved?",
    options: ["Descriptive", "Diagnostic", "Predictive", "Prescriptive"],
    correctAnswer: "Prescriptive",
    hint: "The system suggests actions, not just predictions.",
  },
  {
    id: 48,
    question:
      "Which statement best explains why Data Warehouses improve operational database performance?",
    options: [
      "They replace operational systems entirely",
      "They reduce the analytical load on transactional systems",
      "They remove historical data",
      "They eliminate ETL processes",
    ],
    correctAnswer: "They reduce the analytical load on transactional systems",
    hint: "Operational databases focus on daily transactions.",
  },
  {
    id: 49,
    question:
      "In text mining, why is transforming text into numeric form important?",
    options: [
      "To make documents shorter",
      "To allow data mining algorithms to process text",
      "To remove all words",
      "To encrypt sensitive information",
    ],
    correctAnswer: "To allow data mining algorithms to process text",
    hint: "Algorithms typically require numerical input.",
  },
  {
    id: 50,
    question:
      "A global company wants a single, enterprise-wide source of truth with centralized governance and standardized data. Which solution is most appropriate?",
    options: [
      "Independent spreadsheets for each department",
      "Bottom-Up data marts only",
      "Enterprise Data Warehouse (Top-Down)",
      "Flat file systems",
    ],
    correctAnswer: "Enterprise Data Warehouse (Top-Down)",
    hint: "The requirement emphasizes enterprise-wide integration and governance.",
  },
];
