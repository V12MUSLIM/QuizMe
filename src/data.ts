import type { Question } from "./types/questions";
export const mockQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of a data warehouse?",
    options: [
      "To handle daily transaction processing",
      "To store temporary application files",
      "To support analysis and decision-making",
      "To replace all operational databases",
    ],
    correctAnswer: "To support analysis and decision-making",
    hint: "Think about business intelligence and strategic decisions.",
    wrongAnswerExplanation:
      "A data warehouse is designed to support analysis, reporting, and decision-making rather than handling day-to-day transactions.",
  },
  {
    id: 2,
    question:
      "Which process extracts, transforms, and loads data into a data warehouse?",
    options: ["OLAP", "Normalization", "ETL", "Indexing"],
    correctAnswer: "ETL",
    hint: "This process prepares data before loading it into the warehouse.",
    wrongAnswerExplanation:
      "ETL stands for Extract, Transform, and Load, which is the standard process used to populate a data warehouse.",
  },
  {
    id: 3,
    question:
      "Which characteristic means that a data warehouse stores historical data?",
    options: ["Integrated", "Subject-oriented", "Time-variant", "Nonvolatile"],
    correctAnswer: "Time-variant",
    hint: "The answer relates to storing data over long periods.",
    wrongAnswerExplanation:
      "Time-variant means that data warehouses maintain historical data over time for trend analysis.",
  },
  {
    id: 4,
    question: "What does the term 'nonvolatile' mean in a data warehouse?",
    options: [
      "Data changes continuously",
      "Data is mainly read-only after loading",
      "Data is deleted frequently",
      "Data exists only temporarily",
    ],
    correctAnswer: "Data is mainly read-only after loading",
    hint: "Think about stable historical records.",
    wrongAnswerExplanation:
      "Nonvolatile means that once data is loaded into the warehouse, it is not frequently updated or deleted.",
  },
  {
    id: 5,
    question: "Which system is mainly used for transaction processing?",
    options: ["OLAP", "Data warehouse", "OLTP", "Data cube"],
    correctAnswer: "OLTP",
    hint: "This system handles daily operations like banking and payroll.",
    wrongAnswerExplanation:
      "OLTP systems are designed for operational tasks and transaction processing.",
  },
  {
    id: 6,
    question: "Which type of users mainly work with OLAP systems?",
    options: [
      "Gamers",
      "Managers and analysts",
      "Network administrators only",
      "Hardware engineers only",
    ],
    correctAnswer: "Managers and analysts",
    hint: "Think about decision-makers in organizations.",
    wrongAnswerExplanation:
      "OLAP systems are designed for managers, executives, and analysts who need data analysis capabilities.",
  },
  {
    id: 7,
    question:
      "Which schema contains one central fact table connected to dimension tables?",
    options: [
      "Snowflake schema",
      "Fact constellation schema",
      "Star schema",
      "ER schema",
    ],
    correctAnswer: "Star schema",
    hint: "Its structure resembles a star shape.",
    wrongAnswerExplanation:
      "The star schema uses a central fact table surrounded by dimension tables.",
  },
  {
    id: 8,
    question: "Which schema normalizes dimension tables to reduce redundancy?",
    options: ["Star schema", "Snowflake schema", "Flat schema", "ER schema"],
    correctAnswer: "Snowflake schema",
    hint: "This schema creates more tables by normalization.",
    wrongAnswerExplanation:
      "The snowflake schema normalizes dimension tables to reduce redundancy.",
  },
  {
    id: 9,
    question: "What is the main function of OLAP?",
    options: [
      "Performing hardware maintenance",
      "Supporting multidimensional data analysis",
      "Encrypting databases",
      "Managing operating systems",
    ],
    correctAnswer: "Supporting multidimensional data analysis",
    hint: "Think about analytical queries and reporting.",
    wrongAnswerExplanation:
      "OLAP enables interactive multidimensional analysis of data.",
  },
  {
    id: 10,
    question: "What is a fact table mainly used for?",
    options: [
      "Storing images",
      "Storing measures and foreign keys",
      "Managing operating systems",
      "Storing only text files",
    ],
    correctAnswer: "Storing measures and foreign keys",
    hint: "Facts are usually numeric values.",
    wrongAnswerExplanation:
      "Fact tables store measures such as sales amounts along with references to dimensions.",
  },
  {
    id: 11,
    question: "In a data cube, what are dimensions?",
    options: [
      "Numeric calculations only",
      "Perspectives used to analyze data",
      "Database passwords",
      "Temporary variables",
    ],
    correctAnswer: "Perspectives used to analyze data",
    hint: "Examples include time, item, and location.",
    wrongAnswerExplanation:
      "Dimensions represent perspectives or entities used to analyze facts.",
  },
  {
    id: 12,
    question: "Which OLAP operation aggregates data to a higher level?",
    options: ["Slice", "Drill-down", "Roll-up", "Pivot"],
    correctAnswer: "Roll-up",
    hint: "This operation summarizes data.",
    wrongAnswerExplanation:
      "Roll-up aggregates data by moving up concept hierarchies or reducing dimensions.",
  },
  {
    id: 13,
    question:
      "Which OLAP operation moves from summarized data to detailed data?",
    options: ["Roll-up", "Slice", "Drill-down", "Dice"],
    correctAnswer: "Drill-down",
    hint: "It is the opposite of roll-up.",
    wrongAnswerExplanation: "Drill-down provides more detailed views of data.",
  },
  {
    id: 14,
    question: "What does the slice operation do in OLAP?",
    options: [
      "Deletes data permanently",
      "Selects data from one dimension",
      "Normalizes all tables",
      "Creates backup files",
    ],
    correctAnswer: "Selects data from one dimension",
    hint: "It produces a smaller view of the cube.",
    wrongAnswerExplanation:
      "Slice selects a subset of the cube based on one dimension value.",
  },
  {
    id: 15,
    question: "What does the dice operation perform?",
    options: [
      "A selection on multiple dimensions",
      "Data encryption",
      "Data deletion",
      "Database normalization",
    ],
    correctAnswer: "A selection on multiple dimensions",
    hint: "Think about filtering using several conditions.",
    wrongAnswerExplanation:
      "Dice creates a subcube using selections on two or more dimensions.",
  },
  {
    id: 16,
    question: "What is the purpose of the pivot operation in OLAP?",
    options: [
      "To rotate data views",
      "To delete dimensions",
      "To duplicate tables",
      "To compress files",
    ],
    correctAnswer: "To rotate data views",
    hint: "It changes the presentation perspective.",
    wrongAnswerExplanation:
      "Pivot rotates the axes of the data cube for alternative presentations.",
  },
  {
    id: 17,
    question:
      "Which architecture tier usually contains query and reporting tools?",
    options: ["Bottom tier", "Middle tier", "Top tier", "Storage tier"],
    correctAnswer: "Top tier",
    hint: "This layer interacts directly with users.",
    wrongAnswerExplanation:
      "The top tier contains front-end tools such as reporting and analysis applications.",
  },
  {
    id: 18,
    question: "What is the main role of metadata in a data warehouse?",
    options: [
      "Deleting records",
      "Providing information about data",
      "Replacing dimensions",
      "Generating random values",
    ],
    correctAnswer: "Providing information about data",
    hint: "Metadata is often called data about data.",
    wrongAnswerExplanation:
      "Metadata describes warehouse structures, transformations, and operational details.",
  },
  {
    id: 19,
    question: "Which type of metadata includes data lineage and audit trails?",
    options: [
      "Business metadata",
      "Operational metadata",
      "Structural metadata",
      "External metadata",
    ],
    correctAnswer: "Operational metadata",
    hint: "It tracks warehouse operations and transformations.",
    wrongAnswerExplanation:
      "Operational metadata contains information such as lineage, audit trails, and monitoring details.",
  },
  {
    id: 20,
    question: "What is a data mart?",
    options: [
      "A temporary cache",
      "A subset of a data warehouse for specific users",
      "A hardware device",
      "A network protocol",
    ],
    correctAnswer: "A subset of a data warehouse for specific users",
    hint: "It usually focuses on one department.",
    wrongAnswerExplanation:
      "A data mart is a smaller subject-focused subset of enterprise warehouse data.",
  },
  {
    id: 21,
    question: "Which warehouse model provides enterprise-wide integration?",
    options: [
      "Data mart",
      "Enterprise warehouse",
      "Virtual warehouse",
      "Local database",
    ],
    correctAnswer: "Enterprise warehouse",
    hint: "It covers the entire organization.",
    wrongAnswerExplanation:
      "Enterprise warehouses integrate data across the whole organization.",
  },
  {
    id: 22,
    question: "What is a virtual warehouse?",
    options: [
      "A set of views over operational databases",
      "A gaming database",
      "A backup disk",
      "A compressed file system",
    ],
    correctAnswer: "A set of views over operational databases",
    hint: "It may materialize only some summary views.",
    wrongAnswerExplanation:
      "A virtual warehouse is built using views instead of storing all data physically.",
  },
  {
    id: 23,
    question:
      "Which approach usually gives faster implementation but may create integration problems later?",
    options: [
      "Top-down approach",
      "Bottom-up approach",
      "Centralized approach",
      "Distributed locking approach",
    ],
    correctAnswer: "Bottom-up approach",
    hint: "It often starts with independent data marts.",
    wrongAnswerExplanation:
      "Bottom-up development is faster and cheaper initially but can lead to integration difficulties.",
  },
  {
    id: 24,
    question: "What is the central table in a star schema called?",
    options: [
      "Dimension table",
      "Fact table",
      "Bridge table",
      "Metadata table",
    ],
    correctAnswer: "Fact table",
    hint: "It stores measures.",
    wrongAnswerExplanation:
      "The fact table is the central table containing measures and references to dimensions.",
  },
  {
    id: 25,
    question: "What is the main disadvantage of snowflake schemas?",
    options: [
      "Too little normalization",
      "More joins are required",
      "No dimension tables exist",
      "They cannot store facts",
    ],
    correctAnswer: "More joins are required",
    hint: "This may reduce query performance.",
    wrongAnswerExplanation:
      "Snowflake schemas increase the number of joins, which can impact browsing and query speed.",
  },
  {
    id: 26,
    question: "What is a concept hierarchy?",
    options: [
      "A method for deleting data",
      "A sequence of mappings from low-level to higher-level concepts",
      "A type of network topology",
      "A file compression technique",
    ],
    correctAnswer:
      "A sequence of mappings from low-level to higher-level concepts",
    hint: "City to country is an example.",
    wrongAnswerExplanation:
      "Concept hierarchies organize data from detailed levels to more general levels.",
  },
  {
    id: 27,
    question: "Which cuboid contains the highest level of summarization?",
    options: [
      "Base cuboid",
      "Dimension cuboid",
      "Apex cuboid",
      "Hybrid cuboid",
    ],
    correctAnswer: "Apex cuboid",
    hint: "It is also called the 0-D cuboid.",
    wrongAnswerExplanation:
      "The apex cuboid contains the most generalized summarized data.",
  },
  {
    id: 28,
    question: "Which cuboid contains the most detailed data?",
    options: ["Apex cuboid", "Base cuboid", "Summary cuboid", "Derived cuboid"],
    correctAnswer: "Base cuboid",
    hint: "It includes all dimensions.",
    wrongAnswerExplanation:
      "The base cuboid stores the least summarized and most detailed data.",
  },
  {
    id: 29,
    question: "What is the main advantage of bitmap indexes?",
    options: [
      "Excellent for high-cardinality columns",
      "Fast filtering using bitwise operations",
      "Eliminates the need for joins",
      "Supports video processing",
    ],
    correctAnswer: "Fast filtering using bitwise operations",
    hint: "They are useful for low-cardinality data.",
    wrongAnswerExplanation:
      "Bitmap indexes efficiently filter data using operations such as AND and OR.",
  },
  {
    id: 30,
    question: "Bitmap indexes are most suitable for which type of columns?",
    options: [
      "Columns with unique IDs",
      "Columns with low cardinality",
      "Columns storing videos",
      "Columns with random binary files",
    ],
    correctAnswer: "Columns with low cardinality",
    hint: "Think of columns like gender or status.",
    wrongAnswerExplanation:
      "Bitmap indexes work best with columns containing few distinct values.",
  },
  {
    id: 31,
    question: "What is the purpose of a join index?",
    options: [
      "To accelerate joins between tables",
      "To compress image files",
      "To remove duplicate rows",
      "To replace fact tables",
    ],
    correctAnswer: "To accelerate joins between tables",
    hint: "It precomputes relationships.",
    wrongAnswerExplanation:
      "Join indexes speed up queries involving frequent joins between fact and dimension tables.",
  },
  {
    id: 32,
    question: "Which storage model is optimized for OLAP analytical queries?",
    options: [
      "Column-based storage",
      "Sequential tape storage",
      "Cache-only storage",
      "File transfer storage",
    ],
    correctAnswer: "Column-based storage",
    hint: "It reads only required columns.",
    wrongAnswerExplanation:
      "Column-based databases improve analytical query performance by storing data column-wise.",
  },
  {
    id: 33,
    question: "What is a major disadvantage of column-based databases?",
    options: [
      "Poor compression",
      "Slow aggregation queries",
      "Slower updates",
      "Inability to store numbers",
    ],
    correctAnswer: "Slower updates",
    hint: "Updating a single row affects multiple columns.",
    wrongAnswerExplanation:
      "Column-based storage is less efficient for frequent updates and transactional operations.",
  },
  {
    id: 34,
    question:
      "Which OLAP server architecture uses relational tables for storage?",
    options: ["MOLAP", "HOLAP", "ROLAP", "VOLAP"],
    correctAnswer: "ROLAP",
    hint: "The answer begins with 'Relational'.",
    wrongAnswerExplanation:
      "ROLAP stores warehouse data using relational database systems.",
  },
  {
    id: 35,
    question: "Which OLAP architecture uses multidimensional arrays?",
    options: ["ROLAP", "MOLAP", "HOLAP", "SOLAP"],
    correctAnswer: "MOLAP",
    hint: "It directly maps data cubes to arrays.",
    wrongAnswerExplanation:
      "MOLAP uses multidimensional array-based storage for fast access to summarized data.",
  },
  {
    id: 36,
    question: "What is the primary benefit of HOLAP?",
    options: [
      "It combines scalability and fast computation",
      "It removes all dimensions",
      "It eliminates storage requirements",
      "It prevents aggregation",
    ],
    correctAnswer: "It combines scalability and fast computation",
    hint: "It combines features from two architectures.",
    wrongAnswerExplanation:
      "HOLAP combines the scalability of ROLAP with the speed of MOLAP.",
  },
  {
    id: 37,
    question: "What is partial materialization?",
    options: [
      "Precomputing all cuboids",
      "Computing nothing in advance",
      "Precomputing selected cuboids only",
      "Deleting unused dimensions",
    ],
    correctAnswer: "Precomputing selected cuboids only",
    hint: "It balances performance and storage.",
    wrongAnswerExplanation:
      "Partial materialization stores only selected cuboids to balance storage cost and query speed.",
  },
  {
    id: 38,
    question: "What is an iceberg cube?",
    options: [
      "A cube storing all possible values",
      "A cube storing only cells above a threshold",
      "A frozen backup file",
      "A multidimensional network",
    ],
    correctAnswer: "A cube storing only cells above a threshold",
    hint: "It filters insignificant aggregations.",
    wrongAnswerExplanation:
      "Iceberg cubes materialize only cells meeting minimum aggregation thresholds.",
  },
  {
    id: 39,
    question:
      "Why are separate data warehouses often preferred over operational databases for OLAP?",
    options: [
      "Operational databases cannot store data",
      "OLAP queries may degrade OLTP performance",
      "Warehouses use no storage",
      "Operational databases do not support transactions",
    ],
    correctAnswer: "OLAP queries may degrade OLTP performance",
    hint: "Think about complex analytical queries.",
    wrongAnswerExplanation:
      "Complex OLAP queries can reduce the performance of operational transaction systems.",
  },
  {
    id: 40,
    question:
      "Which operation would most likely be used to summarize sales by country instead of city?",
    options: ["Slice", "Drill-down", "Roll-up", "Pivot"],
    correctAnswer: "Roll-up",
    hint: "The operation moves upward in a hierarchy.",
    wrongAnswerExplanation:
      "Roll-up aggregates data to higher hierarchy levels such as country.",
  },
  {
    id: 41,
    question:
      "A company wants quick implementation for one department only. Which solution is most suitable?",
    options: [
      "Enterprise warehouse",
      "Data mart",
      "Operational database",
      "Distributed cache",
    ],
    correctAnswer: "Data mart",
    hint: "The focus is departmental.",
    wrongAnswerExplanation:
      "Data marts are designed for specific departments and can be implemented quickly.",
  },
  {
    id: 42,
    question:
      "Why is the star schema generally more popular than the snowflake schema?",
    options: [
      "It uses no fact tables",
      "It requires fewer joins and offers better performance",
      "It stores less data than any schema",
      "It eliminates dimensions",
    ],
    correctAnswer: "It requires fewer joins and offers better performance",
    hint: "Think about query efficiency.",
    wrongAnswerExplanation:
      "Star schemas are simpler and require fewer joins, making queries faster and easier.",
  },
  {
    id: 43,
    question:
      "Which OLAP operation would best help an analyst examine monthly sales after viewing yearly sales?",
    options: ["Roll-up", "Pivot", "Drill-down", "Slice"],
    correctAnswer: "Drill-down",
    hint: "The analyst wants more detail.",
    wrongAnswerExplanation:
      "Drill-down moves from summarized yearly data to more detailed monthly data.",
  },
  {
    id: 44,
    question:
      "A query filters sales for Q1 and Vancouver only. Which OLAP operation is mainly being used?",
    options: ["Dice", "Roll-up", "Drill-down", "Pivot"],
    correctAnswer: "Dice",
    hint: "More than one dimension is filtered.",
    wrongAnswerExplanation:
      "Dice selects data based on conditions across multiple dimensions.",
  },
  {
    id: 45,
    question:
      "Which data warehouse characteristic ensures consistency among data from different sources?",
    options: ["Time-variant", "Integrated", "Nonvolatile", "Normalized"],
    correctAnswer: "Integrated",
    hint: "Think about combining heterogeneous data.",
    wrongAnswerExplanation:
      "Integrated means data from multiple sources is cleaned and standardized consistently.",
  },
  {
    id: 46,
    question:
      "Why are bitmap indexes inefficient for high-cardinality columns?",
    options: [
      "They require too many bitmap vectors",
      "They cannot store bits",
      "They prevent joins",
      "They remove dimension tables",
    ],
    correctAnswer: "They require too many bitmap vectors",
    hint: "Too many unique values create overhead.",
    wrongAnswerExplanation:
      "High-cardinality columns generate excessive bitmap vectors, reducing bitmap index efficiency.",
  },
  {
    id: 47,
    question: "What is the main purpose of concept hierarchies in OLAP?",
    options: [
      "To increase transaction speed",
      "To support aggregation at different abstraction levels",
      "To encrypt dimensions",
      "To replace fact tables",
    ],
    correctAnswer: "To support aggregation at different abstraction levels",
    hint: "Think about city → state → country.",
    wrongAnswerExplanation:
      "Concept hierarchies allow users to analyze data at multiple abstraction levels.",
  },
  {
    id: 48,
    question:
      "A company needs fast query performance for summarized analytical data but also high scalability. Which architecture is most suitable?",
    options: ["MOLAP only", "ROLAP only", "HOLAP", "Traditional OLTP"],
    correctAnswer: "HOLAP",
    hint: "It combines advantages from two approaches.",
    wrongAnswerExplanation:
      "HOLAP combines MOLAP's fast aggregation performance with ROLAP's scalability.",
  },
  {
    id: 49,
    question: "Why is column-based storage efficient for analytical queries?",
    options: [
      "It stores rows multiple times",
      "It reads only relevant columns",
      "It avoids all indexing",
      "It removes dimensions automatically",
    ],
    correctAnswer: "It reads only relevant columns",
    hint: "OLAP queries usually access few columns.",
    wrongAnswerExplanation:
      "Column-based storage minimizes I/O by accessing only needed columns.",
  },
  {
    id: 50,
    question:
      "An analyst wants to reduce storage requirements while still maintaining acceptable OLAP query performance. Which strategy is the best choice?",
    options: [
      "Full materialization",
      "No materialization",
      "Partial materialization",
      "Deleting all cuboids",
    ],
    correctAnswer: "Partial materialization",
    hint: "The goal is balancing storage and speed.",
    wrongAnswerExplanation:
      "Partial materialization stores only selected cuboids, balancing storage cost and query efficiency.",
  },
];
