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
  {
    id: 30,
    question: "Why are dashboards important in Business Intelligence systems?",
    options: [
      "They permanently delete records",
      "They provide interactive insights and summaries",
      "They replace databases entirely",
      "They increase hardware requirements",
    ],
    correctAnswer: "They provide interactive insights and summaries",
    hint: "Managers use them to monitor business performance quickly.",
    wrongAnswerExplanation:
      "Dashboards are designed to present KPIs, reports, and visual insights interactively to support decision-making. They do not replace databases or delete records.",
  },
  {
    id: 31,
    question:
      "Which activity belongs to the Data Preparation phase of the analytics lifecycle?",
    options: [
      "Building hypotheses",
      "Cleaning missing values",
      "Deploying the final system",
      "Creating marketing campaigns",
    ],
    correctAnswer: "Cleaning missing values",
    hint: "This phase improves data quality before analysis.",
    wrongAnswerExplanation:
      "Data Preparation focuses on cleaning, transforming, and organizing data. Handling missing values and removing duplicates are core tasks in this phase.",
  },
  {
    id: 32,
    question: "Which of the following best describes descriptive analytics?",
    options: [
      "Predicting future events",
      "Explaining why events happened",
      "Summarizing historical data",
      "Suggesting the best possible action",
    ],
    correctAnswer: "Summarizing historical data",
    hint: "It focuses on understanding the past.",
    wrongAnswerExplanation:
      "Descriptive analytics summarizes historical information and trends to explain what has already happened.",
  },
  {
    id: 33,
    question:
      "A company uses historical customer purchases to forecast future buying behavior. Which analytics type is being used?",
    options: [
      "Descriptive Analytics",
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
    ],
    correctAnswer: "Predictive Analytics",
    hint: "Forecasting future outcomes is the key clue.",
    wrongAnswerExplanation:
      "Predictive analytics uses historical data and statistical models to forecast future trends, risks, or behaviors.",
  },
  {
    id: 34,
    question:
      "Which BI application helps telecom companies reduce customer churn?",
    options: [
      "Inventory management",
      "Customer retention management",
      "Website hosting",
      "Compiler optimization",
    ],
    correctAnswer: "Customer retention management",
    hint: "Telecom companies analyze user behavior to keep customers loyal.",
    wrongAnswerExplanation:
      "Customer retention management analyzes customer behavior patterns to identify users likely to leave and helps businesses retain them.",
  },
  {
    id: 35,
    question: "Why is metadata documentation important in a Data Warehouse?",
    options: [
      "It stores user passwords",
      "It explains transformations and calculations",
      "It replaces ETL systems",
      "It encrypts all company data",
    ],
    correctAnswer: "It explains transformations and calculations",
    hint: "Metadata describes how the data was processed.",
    wrongAnswerExplanation:
      "Metadata provides information about data sources, calculations, and transformations so users can understand the warehouse structure clearly.",
  },
  {
    id: 36,
    question:
      "Which Data Warehouse characteristic ensures consistency when combining multiple sources?",
    options: ["Integrated", "Volatile", "Temporary", "Distributed"],
    correctAnswer: "Integrated",
    hint: "Think about combining information into one unified format.",
    wrongAnswerExplanation:
      "Integration ensures that data from different systems is standardized and combined consistently into one unified warehouse.",
  },
  {
    id: 37,
    question:
      "What is one major advantage of the Bottom-Up Data Warehouse approach?",
    options: [
      "Instant enterprise-wide integration",
      "Quick implementation for departments",
      "No need for ETL processes",
      "Unlimited scalability",
    ],
    correctAnswer: "Quick implementation for departments",
    hint: "It starts small with departmental data marts.",
    wrongAnswerExplanation:
      "The Bottom-Up approach creates smaller data marts first, making implementation faster and easier for specific business units.",
  },
  {
    id: 38,
    question:
      "Which text mining technique identifies relationships between terms such as 'sweet' and 'happy'?",
    options: [
      "Association Rule Analysis",
      "Normalization",
      "Encryption",
      "Data Compression",
    ],
    correctAnswer: "Association Rule Analysis",
    hint: "It discovers terms that frequently occur together.",
    wrongAnswerExplanation:
      "Association Rule Analysis identifies relationships and co-occurrence patterns between terms in textual data.",
  },
  {
    id: 39,
    question: "Why is data conditioning important during data preparation?",
    options: [
      "It increases randomness in the data",
      "It improves consistency and usability",
      "It permanently removes historical records",
      "It slows down analysis",
    ],
    correctAnswer: "It improves consistency and usability",
    hint: "Prepared data should be clean and reliable.",
    wrongAnswerExplanation:
      "Data conditioning improves data quality by correcting inconsistencies, handling missing values, and standardizing formats.",
  },
  {
    id: 40,
    question:
      "A retailer analyzes seasonal sales trends to improve promotions. Which BI benefit does this demonstrate?",
    options: [
      "Improved decision-making",
      "Hardware acceleration",
      "Database normalization",
      "File encryption",
    ],
    correctAnswer: "Improved decision-making",
    hint: "Insights are being used to guide business actions.",
    wrongAnswerExplanation:
      "Analyzing trends to improve promotions demonstrates how BI supports better business decisions using data-driven insights.",
  },
  {
    id: 41,
    question: "Which scenario best represents diagnostic analytics?",
    options: [
      "Forecasting stock prices",
      "Summarizing yearly profits",
      "Investigating why sales dropped suddenly",
      "Recommending investment strategies",
    ],
    correctAnswer: "Investigating why sales dropped suddenly",
    hint: "Diagnostic analytics explains causes.",
    wrongAnswerExplanation:
      "Diagnostic analytics focuses on understanding the reasons behind events by identifying anomalies and relationships.",
  },
  {
    id: 42,
    question:
      "Why does the Star Schema generally provide faster query performance?",
    options: [
      "It removes all dimension tables",
      "It requires fewer joins",
      "It stores only numerical data",
      "It avoids fact tables",
    ],
    correctAnswer: "It requires fewer joins",
    hint: "Simpler structures improve query speed.",
    wrongAnswerExplanation:
      "The Star Schema simplifies queries by reducing the number of joins needed between fact and dimension tables.",
  },
  {
    id: 43,
    question:
      "What is a common challenge when identifying frequent words in text mining?",
    options: [
      "Too many graphs",
      "Spelling variations and synonyms",
      "Lack of storage space",
      "Having too few documents",
    ],
    correctAnswer: "Spelling variations and synonyms",
    hint: "Different words may express similar meanings.",
    wrongAnswerExplanation:
      "Variations in spelling and synonyms make it difficult to identify terms consistently during text analysis.",
  },
  {
    id: 44,
    question: "Why do manufacturing companies use predictive maintenance?",
    options: [
      "To redesign products",
      "To forecast machinery failures",
      "To increase employee workload",
      "To reduce storage capacity",
    ],
    correctAnswer: "To forecast machinery failures",
    hint: "The goal is reducing downtime and unexpected breakdowns.",
    wrongAnswerExplanation:
      "Predictive maintenance analyzes machine data to predict failures before they occur, reducing downtime and maintenance costs.",
  },
  {
    id: 45,
    question:
      "Which phase of the Data Analytics Lifecycle involves selecting models such as clustering or classification?",
    options: [
      "Discovery",
      "Data Preparation",
      "Model Planning",
      "Operationalize",
    ],
    correctAnswer: "Model Planning",
    hint: "This phase determines suitable analytical techniques.",
    wrongAnswerExplanation:
      "Model Planning focuses on selecting variables, methods, and analytical models appropriate for solving the business problem.",
  },
  {
    id: 46,
    question:
      "A healthcare system uses AI to recommend the best treatment for a patient. Which analytics type is primarily involved?",
    options: [
      "Descriptive Analytics",
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
    ],
    correctAnswer: "Prescriptive Analytics",
    hint: "The system recommends actions, not just predictions.",
    wrongAnswerExplanation:
      "Prescriptive analytics recommends optimal decisions and actions using AI, predictions, and optimization techniques.",
  },
  {
    id: 47,
    question:
      "Why do Data Warehouses improve operational database performance?",
    options: [
      "They replace operational systems entirely",
      "They reduce the analytical workload on transactional systems",
      "They remove all historical data",
      "They eliminate ETL processes",
    ],
    correctAnswer:
      "They reduce the analytical workload on transactional systems",
    hint: "Operational systems focus on daily transactions.",
    wrongAnswerExplanation:
      "Separating analytics from operational systems reduces heavy reporting queries on transactional databases, improving performance.",
  },
  {
    id: 48,
    question:
      "In text mining, why is converting text into numeric form important?",
    options: [
      "To make files smaller",
      "To allow algorithms to process the text",
      "To improve spelling automatically",
      "To encrypt sensitive information",
    ],
    correctAnswer: "To allow algorithms to process the text",
    hint: "Most data mining algorithms require numerical input.",
    wrongAnswerExplanation:
      "Text must be transformed into numerical representations like TDMs so algorithms can analyze patterns and relationships.",
  },
  {
    id: 49,
    question:
      "A company wants a single enterprise-wide source of truth with centralized governance. Which solution is most suitable?",
    options: [
      "Independent spreadsheets",
      "Bottom-Up Data Marts only",
      "Enterprise Data Warehouse",
      "Flat file storage",
    ],
    correctAnswer: "Enterprise Data Warehouse",
    hint: "The organization wants centralized integration.",
    wrongAnswerExplanation:
      "An Enterprise Data Warehouse provides centralized, standardized, and enterprise-wide analytics with consistent governance.",
  },
  {
    id: 50,
    question:
      "Which BI application analyzes customer comments and reviews to improve marketing strategies?",
    options: [
      "Sentiment Analysis",
      "Packet Routing",
      "Database Sharding",
      "Code Compilation",
    ],
    correctAnswer: "Sentiment Analysis",
    hint: "It focuses on opinions and emotions in text.",
    wrongAnswerExplanation:
      "Sentiment Analysis extracts opinions and emotions from customer feedback to improve products and marketing strategies.",
  },
  {
    id: 51,
    question: "What is the main role of OLAP in Business Intelligence?",
    options: [
      "Deleting duplicate records",
      "Supporting multidimensional data analysis",
      "Creating operating systems",
      "Encrypting databases",
    ],
    correctAnswer: "Supporting multidimensional data analysis",
    hint: "OLAP helps users analyze data from multiple perspectives.",
    wrongAnswerExplanation:
      "OLAP enables users to analyze large datasets interactively across dimensions such as time, location, and product.",
  },
  {
    id: 52,
    question: "Which of the following is an example of unstructured data?",
    options: [
      "Excel tables",
      "SQL records",
      "Social media comments",
      "Inventory IDs",
    ],
    correctAnswer: "Social media comments",
    hint: "Unstructured data does not follow a strict format.",
    wrongAnswerExplanation:
      "Social media comments are free-form textual data, making them unstructured compared to organized tables or database records.",
  },
  {
    id: 53,
    question: "What is the primary purpose of clustering in analytics?",
    options: [
      "Encrypting files",
      "Grouping similar items together",
      "Compressing databases",
      "Generating passwords",
    ],
    correctAnswer: "Grouping similar items together",
    hint: "Think about identifying similarities.",
    wrongAnswerExplanation:
      "Clustering organizes data into groups where items in the same cluster are more similar to each other than to other groups.",
  },
  {
    id: 54,
    question:
      "Which of the following best describes a fact table in a Star Schema?",
    options: [
      "A table storing detailed business measurements",
      "A table storing only text comments",
      "A backup table for security",
      "A table containing only metadata",
    ],
    correctAnswer: "A table storing detailed business measurements",
    hint: "Fact tables contain measurable business data.",
    wrongAnswerExplanation:
      "Fact tables store quantitative business data such as sales, revenue, or transactions linked to dimensions.",
  },
  {
    id: 55,
    question:
      "What is the advantage of using predictive analytics in fraud detection?",
    options: [
      "It prevents all crimes instantly",
      "It helps identify suspicious behavior patterns",
      "It removes all customer data",
      "It replaces security employees",
    ],
    correctAnswer: "It helps identify suspicious behavior patterns",
    hint: "Patterns in historical data can indicate fraud.",
    wrongAnswerExplanation:
      "Predictive analytics identifies unusual patterns and behaviors that may indicate fraudulent activity.",
  },
  {
    id: 56,
    question: "Which of the following best describes ETL?",
    options: [
      "Extract, Transform, Load",
      "Encrypt, Track, Link",
      "Evaluate, Transfer, Locate",
      "Export, Translate, Log",
    ],
    correctAnswer: "Extract, Transform, Load",
    hint: "It is a core data integration process.",
    wrongAnswerExplanation:
      "ETL stands for Extract, Transform, and Load — the process used to gather, clean, and store data in warehouses.",
  },
  {
    id: 57,
    question: "Why is historical data important in Business Intelligence?",
    options: [
      "It increases storage costs only",
      "It helps identify trends and patterns over time",
      "It automatically fixes databases",
      "It removes the need for analysis",
    ],
    correctAnswer: "It helps identify trends and patterns over time",
    hint: "Past data supports forecasting and strategy.",
    wrongAnswerExplanation:
      "Historical data allows organizations to analyze patterns, compare performance, and make informed future decisions.",
  },
  {
    id: 58,
    question:
      "Which phase of the analytics lifecycle communicates findings to stakeholders?",
    options: [
      "Communicate Results",
      "Discovery",
      "Model Planning",
      "Data Conditioning",
    ],
    correctAnswer: "Communicate Results",
    hint: "Insights must eventually be shared with decision-makers.",
    wrongAnswerExplanation:
      "The Communicate Results phase presents insights, visualizations, and recommendations to stakeholders and decision-makers.",
  },
  {
    id: 59,
    question: "Why is data visualization important in analytics?",
    options: [
      "It hides patterns in data",
      "It replaces all statistical methods",
      "It makes insights easier to understand",
      "It reduces database size",
    ],
    correctAnswer: "It makes insights easier to understand",
    hint: "Visuals improve communication and interpretation.",
    wrongAnswerExplanation:
      "Data visualization presents information in charts, dashboards, and graphs, helping users quickly understand trends and insights.",
  },
];
