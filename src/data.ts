import type { Question } from "./types/questions";
export const mockQuestions: Question[] = [
 {
        "id": 1,
        "question": "Which of the following best defines the concept of 'data' in an analytical context? [1, 2]",
        "options": [
            "A) Only highly structured numerical values stored in SQL databases.",
            "B) **Anything that is recorded, including raw, disorganized facts, observations, and opinions.**",
            "C) Information that has been processed and aggregated for management reporting.",
            "D) Exclusively continuous variables measured on an infinite scale."
        ],
        "correctAnswer": "B) **Anything that is recorded, including raw, disorganized facts, observations, and opinions.**",
        "hint": "Correct: Data refers to raw, disorganized facts and figures, including observations, anecdotes, and opinions, which become information when processed [1, 2]. Incorrect: Data can be text, sound, or visual, not just numerical (A) [2]. Cleansed, aggregated info describes a data warehouse (C) [3]. Discrete variables are also data (D) [4]."
    },
    {
        "id": 2,
        "question": "What is the primary function of Business Intelligence (BI)? [5, 6]",
        "options": [
            "A) To manage day-to-day operational transactions in a database.",
            "B) To discover semantic relationships between text terms.",
            "C) **To analyze raw data and transform it into actionable insights for fact-based decision-making.**",
            "D) To predict machinery failures on a manufacturing assembly line."
        ],
        "correctAnswer": "C) **To analyze raw data and transform it into actionable insights for fact-based decision-making.**",
        "hint": "Correct: BI refers to applications used to transform raw data into actionable insights for better decisions [5, 6]. Incorrect: Managing daily operations is for transactional databases (A) [7]. Finding semantic relationships is text mining (B) [8]. Predicting machinery failure is specifically predictive modeling, a subset application, not the primary general function of BI (D) [9]."
    },
    {
        "id": 3,
        "question": "How does a database differ from a data warehouse regarding data volatility? [3, 10]",
        "options": [
            "A) Both databases and data warehouses update data in real-time.",
            "B) **Data in an operational database is updated regularly, whereas data in a warehouse is nonvolatile and not updated after being loaded.**",
            "C) Data warehouses overwrite old records, while operational databases keep a cumulative history.",
            "D) Databases store unstructured data, while data warehouses only store text data."
        ],
        "correctAnswer": "B) **Data in an operational database is updated regularly, whereas data in a warehouse is nonvolatile and not updated after being loaded.**",
        "hint": "Correct: Data in a warehouse is persistently stored (nonvolatile) and not updated, unlike operational databases used for day-to-day tasks [3, 10]. Incorrect: DWs are not updated in real-time transactions (A) [10]. DWs grow cumulatively and retain data, while databases may delete old transactions (C) [3, 11]. Both typically handle structured data (D) [12, 13]."
    },
    {
        "id": 4,
        "question": "Which of the following is considered 'unstructured data'? [14]",
        "options": [
            "A) Sales figures in an Excel spreadsheet.",
            "B) Patient records in a SQL database.",
            "C) **Emails, social media posts, and multimedia files.**",
            "D) Time and date formats in a relational table."
        ],
        "correctAnswer": "C) **Emails, social media posts, and multimedia files.**",
        "hint": "Correct: Unstructured data includes text-heavy data like emails and social media posts, and multimedia [14]. Incorrect: Excel files (A), SQL databases (B), and date/time formats (D) are highly organized and represent structured data [4, 12]."
    },
    {
        "id": 5,
        "question": "Which level of measurement is used for variables that indicate order but do not quantify the exact difference between items? [15]",
        "options": [
            "A) Nominal",
            "B) **Ordinal**",
            "C) Interval",
            "D) Ratio"
        ],
        "correctAnswer": "B) **Ordinal**",
        "hint": "Correct: Ordinal measurement indicates order without quantifying differences, like 'Poor' to 'Excellent' [15]. Incorrect: Nominal lacks inherent order (A) [15]. Interval implies meaningful differences (C) [15]. Ratio includes a true zero (D) [15]."
    },
    {
        "id": 6,
        "question": "What is the primary goal of Descriptive Analytics? [16]",
        "options": [
            "A) To recommend optimal solutions using AI.",
            "B) To forecast future trends using machine learning.",
            "C) **To summarize past data and identify historical patterns.**",
            "D) To explore the underlying reasons behind past anomalies."
        ],
        "correctAnswer": "C) **To summarize past data and identify historical patterns.**",
        "hint": "Correct: Descriptive analytics answers 'What happened?' by summarizing past data [16]. Incorrect: Recommending actions is Prescriptive (A) [17]. Forecasting is Predictive (B) [18]. Exploring reasons is Diagnostic (D) [18]."
    },
    {
        "id": 7,
        "question": "In the Data Analytics Lifecycle, what is the primary focus of Phase 1: Discovery? [19]",
        "options": [
            "A) Cleaning and processing raw data.",
            "B) Selecting the most suitable analytical models.",
            "C) **Understanding the business problem and forming hypotheses.**",
            "D) Communicating results to stakeholders."
        ],
        "correctAnswer": "C) **Understanding the business problem and forming hypotheses.**",
        "hint": "Correct: Phase 1 focuses on understanding the problem, identifying decision-makers, and setting hypotheses [19]. Incorrect: Cleaning data is Phase 2 (A) [20]. Model selection is Phase 3 (B) [21]. Communicating results is Phase 5 (D) [22]."
    },
    {
        "id": 8,
        "question": "What does Extract, Transform, and Load (ETL) refer to in the context of data analytics? [20, 23]",
        "options": [
            "A) Presenting data visually using dashboards.",
            "B) **Cleaning, processing, and moving data from multiple sources into a consistent format for storage.**",
            "C) Predicting future outcomes using statistical models.",
            "D) Translating textual data into a Term Document Matrix."
        ],
        "correctAnswer": "B) **Cleaning, processing, and moving data from multiple sources into a consistent format for storage.**",
        "hint": "Correct: ETL involves extracting data from sources, cleansing/transforming it, and loading it into a data warehouse or workspace [20, 23]. Incorrect: Dashboards are for data access (A) [23, 24]. Predicting outcomes is model building (C) [25]. Matrix conversion is a specific text mining step (D) [26]."
    },
    {
        "id": 9,
        "question": "According to the principles of data warehouse design, what does 'Time-Variant' mean? [27]",
        "options": [
            "A) The database is updated in real-time as transactions occur.",
            "B) The warehouse focuses only on current, day-to-day operational metrics.",
            "C) **The warehouse stores data over different time periods, facilitating historical analysis.**",
            "D) Queries in the warehouse take a variable amount of time to execute."
        ],
        "correctAnswer": "C) **The warehouse stores data over different time periods, facilitating historical analysis.**",
        "hint": "Correct: Time-variant means storing time-series data over periods (daily, yearly) for trend comparison [27]. Incorrect: DWs are not updated in real-time (A) [10, 27]. Day-to-day metrics belong in operational databases (B) [3]. It does not refer to query execution times (D) [27]."
    },
    {
        "id": 10,
        "question": "What characterizes a Star Schema in a data warehouse? [10, 28]",
        "options": [
            "A) **It uses a central fact table linked to dimension tables, allowing for faster queries due to fewer joins.**",
            "B) It utilizes highly normalized dimension tables to reduce data redundancy.",
            "C) It exclusively stores unstructured multimedia data.",
            "D) It is only used for operational transaction processing."
        ],
        "correctAnswer": "A) **It uses a central fact table linked to dimension tables, allowing for faster queries due to fewer joins.**",
        "hint": "Correct: A Star Schema is a denormalized structure with a central fact table and dimension tables, speeding up queries [10, 28]. Incorrect: Normalized dimensions describe a Snowflake Schema (B) [28]. It is used for structured DW data, not unstructured media (C) [13, 28]. DW schemas are not for operational transactions (D) [13]."
    },
    {
        "id": 11,
        "question": "What is the primary difference between a Top-Down (EDW) and Bottom-Up (Data Mart) approach to data warehousing? [29]",
        "options": [
            "A) Top-Down is cheaper and faster to set up than Bottom-Up.",
            "B) **Top-Down creates an enterprise-wide centralized warehouse, while Bottom-Up develops departmental data marts first.**",
            "C) Bottom-Up requires high data standardization and governance compared to Top-Down.",
            "D) Top-Down focuses on single functions like marketing, whereas Bottom-Up covers the entire enterprise."
        ],
        "correctAnswer": "B) **Top-Down creates an enterprise-wide centralized warehouse, while Bottom-Up develops departmental data marts first.**",
        "hint": "Correct: The Top-Down approach creates a comprehensive EDW, while Bottom-Up builds smaller functional data marts first [29]. Incorrect: EDW requires higher investment and time (A) [29]. EDW requires higher governance/standardization (C) [29]. Data Marts are department-focused, not EDW (D) [29]."
    },
    {
        "id": 12,
        "question": "Which visual chart type is optimally used to show the relationship or correlation between two variables? [30]",
        "options": [
            "A) Line Graph",
            "B) Pie Chart",
            "C) **Scatter Plot**",
            "D) Histogram"
        ],
        "correctAnswer": "C) **Scatter Plot**",
        "hint": "Correct: Scatter plots are specifically designed to show relationships between two variables [30]. Incorrect: Line graphs show trends over time (A) [30]. Pie charts show proportions of a whole (B) [31]. Histograms show frequency distributions (D) [31]."
    },
    {
        "id": 13,
        "question": "Which of Ed Tufte's principles emphasizes maintaining data integrity in visualization? [32]",
        "options": [
            "A) Induce thinking about the data.",
            "B) **Avoid distortion.**",
            "C) Show multiple levels of detail.",
            "D) Encourage comparison."
        ],
        "correctAnswer": "B) **Avoid distortion.**",
        "hint": "Correct: Tufte advocates avoiding distortion to ensure the visual accurately and truthfully reflects the data [32]. Incorrect: While A, C, and D are valid principles, 'avoid distortion' specifically targets data integrity and preventing misleading visuals [32]."
    },
    {
        "id": 14,
        "question": "What is Text Mining primarily concerned with? [8]",
        "options": [
            "A) Translating numerical databases into natural language.",
            "B) **Extracting knowledge, insights, and patterns from unstructured textual data.**",
            "C) Converting discrete numerical variables into continuous numerical variables.",
            "D) Designing relational databases for structured data storage."
        ],
        "correctAnswer": "B) **Extracting knowledge, insights, and patterns from unstructured textual data.**",
        "hint": "Correct: Text mining involves extracting patterns and insights from textual data like documents and social media [8]. Incorrect: It does not translate databases to language (A) [8]. It deals with text, not converting numerical variables (C) [8]. It mines unstructured text, rather than designing structured databases (D) [8]."
    },
    {
        "id": 15,
        "question": "What is the purpose of a Term Document Matrix (TDM) in text mining? [26]",
        "options": [
            "A) To translate text into different languages.",
            "B) To verify the grammatical accuracy of a corpus.",
            "C) **To transform free-flowing text into numeric frequency data for data mining techniques.**",
            "D) To permanently delete unnecessary terms from a database."
        ],
        "correctAnswer": "C) **To transform free-flowing text into numeric frequency data for data mining techniques.**",
        "hint": "Correct: A TDM transforms text into numeric data by measuring the frequencies of key terms in documents, enabling analysis [26]. Incorrect: It doesn't translate languages (A) or check grammar (B) [26]. While unnecessary terms are avoided, deleting them from the source DB is not the purpose (D) [26]."
    },
    {
        "id": 16,
        "question": "When applying BI to customer relationship management (CRM), how can a company maximize customer value? [33]",
        "options": [
            "A) By analyzing social media sentiment to shape the brand's image.",
            "B) By identifying customers at risk of leaving and offering free services.",
            "C) **By utilizing every interaction as an opportunity to offer new products based on customer needs.**",
            "D) By diagnosing product quality issues on the assembly line."
        ],
        "correctAnswer": "C) **By utilizing every interaction as an opportunity to offer new products based on customer needs.**",
        "hint": "Correct: Maximizing customer value in CRM involves offering new products during interactions to increase revenue [33]. Incorrect: Analyzing sentiment manages brand image (A) [33]. Retaining at-risk customers improves retention (B) [33]. Diagnosing quality is a manufacturing application, not CRM (D) [9]."
    },
    {
        "id": 17,
        "question": "Which of the following describes an 'operational decision-making' process enhanced by BI? [34]",
        "options": [
            "A) Deciding to acquire a competing retail chain.",
            "B) Formulating a ten-year strategy for targeting a new global demographic.",
            "C) **Analyzing current website traffic to update the website for day-to-day efficiency.**",
            "D) Forecasting climate change impacts on long-term supply chains."
        ],
        "correctAnswer": "C) **Analyzing current website traffic to update the website for day-to-day efficiency.**",
        "hint": "Correct: Operational decisions are routine and focus on day-to-day efficiency, like updating a website [34]. Incorrect: Acquisitions, 10-year demographics, and long-term supply chains represent long-term strategic decisions (A, B, D) [34]."
    },
    {
        "id": 18,
        "question": "In the context of database relationships for an online store, how is a 'Many-to-Many' relationship best exemplified? [35]",
        "options": [
            "A) Each user has one unique shipping address.",
            "B) Each user can place multiple distinct orders over time.",
            "C) Each product has only one manufacturer.",
            "D) **Each order contains multiple products, and each product can be part of multiple orders.**"
        ],
        "correctAnswer": "D) **Each order contains multiple products, and each product can be part of multiple orders.**",
        "hint": "Correct: Many-to-many relationships occur when multiple records in one table associate with multiple records in another, like orders and products [35]. Incorrect: One-to-one is user to address (A) [35]. One-to-many is user to multiple orders (B) [35]. Product to one manufacturer is many-to-one (C) [35]."
    },
    {
        "id": 19,
        "question": "A bank uses past data to automate the financial loan approval process. Which analytics model is most heavily utilized here? [36]",
        "options": [
            "A) Descriptive Analytics",
            "B) **Predictive Analytics**",
            "C) Nominal Measurement",
            "D) Text Clustering"
        ],
        "correctAnswer": "B) **Predictive Analytics**",
        "hint": "Correct: Automating loan approvals relies on models based on past data to predict risk and speed up accurate decisions, a form of predictive/prescriptive analytics [36]. Incorrect: Descriptive only summarizes the past (A) [16]. Nominal is a data type (C) [15]. Text clustering is for unstructured text, not typical numeric loan variables (D) [37]."
    },
    {
        "id": 20,
        "question": "Which characteristic differentiates text mining from traditional data mining regarding data clarity? [38]",
        "options": [
            "A) Text mining relies on precise, unambiguous numerical systems.",
            "B) Data mining sentences can have mixed sentiments.",
            "C) **Text mining deals with ambiguous sentences where sentiment may contradict the literal words, while data mining uses precise numbers.**",
            "D) Text mining data is perfectly consistent across all documents, unlike data mining."
        ],
        "correctAnswer": "C) **Text mining deals with ambiguous sentences where sentiment may contradict the literal words, while data mining uses precise numbers.**",
        "hint": "Correct: Text mining sentences can be ambiguous and present mixed sentiments, whereas data mining relies on precise numbers [38]. Incorrect: Data mining relies on numbers, not text mining (A) [38]. Data mining does not analyze sentiments (B) [38]. Text mining consistency varies and parts of text can contradict each other (D) [38]."
    },
    {
        "id": 21,
        "question": "During the Data Analytics Lifecycle, a data scientist decides to employ a classification model rather than a clustering algorithm to solve a business problem. In which phase does this decision occur? [21, 39]",
        "options": [
            "A) Phase 1: Discovery",
            "B) Phase 2: Data Preparation",
            "C) **Phase 3: Model Planning**",
            "D) Phase 6: Operationalize"
        ],
        "correctAnswer": "C) **Phase 3: Model Planning**",
        "hint": "Correct: Selecting the analytical strategy or specific modeling techniques (like classification vs clustering) occurs in Phase 3: Model Planning [21, 39]. Incorrect: Discovery defines the problem (A) [19]. Data Prep cleans data (B) [20]. Operationalize deploys the model (D) [22]."
    },
    {
        "id": 22,
        "question": "Why is metadata documentation an essential design consideration for a Data Warehouse? [40]",
        "options": [
            "A) It provides real-time transaction processing rules.",
            "B) **It details data transformations and clarifies computed fields, ensuring consistency in how data is understood.**",
            "C) It converts a Snowflake schema back into an operational database.",
            "D) It ensures that text mining algorithms can identify synonymous words."
        ],
        "correctAnswer": "B) **It details data transformations and clarifies computed fields, ensuring consistency in how data is understood.**",
        "hint": "Correct: Metadata documents data transformations and calculations (e.g., total sales = sum of transactions) to ensure clarity [40]. Incorrect: DWs don't process real-time transactions (A) [10, 27]. It does not convert schemas to operational DBs (C) [40]. Text mining synonyms belong to TDM preparation, not DW metadata (D) [41]."
    },
    {
        "id": 23,
        "question": "When assessing performance, an analyst uses a Dual Line Graph to compare Revenue per Salesperson against Orders per Salesperson. What specific insight does this visualization best provide? [42, 43]",
        "options": [
            "A) The exact geographical location where each salesperson made sales.",
            "B) The proportion of tiny orders to large orders.",
            "C) **The relative efficiency and productivity between different products and salespeople.**",
            "D) The statistical significance of missing variables in the dataset."
        ],
        "correctAnswer": "C) **The relative efficiency and productivity between different products and salespeople.**",
        "hint": "Correct: The dual line graph comparing revenue vs orders per salesperson reveals relative productivity and efficiency [42, 43]. Incorrect: Locations need a Geo Map (A) [31]. Proportions of order sizes require a stacked bar graph (B) [44]. Missing variables are a data quality issue, not what this graph shows (D) [38]."
    },
    {
        "id": 24,
        "question": "Which combination of data type and level of measurement best describes the measurement of human height? [4, 15]",
        "options": [
            "A) Discrete Numeric Data, Ordinal Level",
            "B) Character Data, Nominal Level",
            "C) Continuous Numeric Data, Interval Level",
            "D) **Continuous Numeric Data, Ratio Level**"
        ],
        "correctAnswer": "D) **Continuous Numeric Data, Ratio Level**",
        "hint": "Correct: Height is measured on an infinite scale (continuous numeric) and has a true zero, making it a ratio measurement [4, 15]. Incorrect: It is not discrete (countable) or ordinal (A) [4, 15]. It is not character/nominal (B) [4, 15]. Interval lacks a true zero, whereas height has a true zero (C) [15]."
    },
    {
        "id": 25,
        "question": "A hospital administrator uses a system to forecast potential disease outbreaks by analyzing large regional health datasets to prepare resources. Which type of analytics is being applied? [18, 45]",
        "options": [
            "A) Diagnostic Analytics",
            "B) **Predictive Analytics**",
            "C) Nominal Analytics",
            "D) Unstructured Descriptive Analytics"
        ],
        "correctAnswer": "B) **Predictive Analytics**",
        "hint": "Correct: Forecasting disease outbreaks relies on predicting future trends using statistical models (Predictive Analytics) [18, 45]. Incorrect: Diagnostic explores past reasons (A) [18]. Nominal is a data type (C) [15]. Descriptive only summarizes the past (D) [16]."
    },
    {
        "id": 26,
        "question": "During the text mining process, an analyst combines the words 'ice' and 'cream' to form the single concept 'ice cream'. Which step does this represent? [41]",
        "options": [
            "A) Establishing the Corpus",
            "B) Identifying Frequent Words",
            "C) **Identifying Meaningful Phrases**",
            "D) Grouping into Topics"
        ],
        "correctAnswer": "C) **Identifying Meaningful Phrases**",
        "hint": "Correct: Combining related words like 'ice' + 'cream' = 'ice cream' is identifying meaningful phrases [41]. Incorrect: The corpus is gathering texts (A) [41]. Frequent words are single terms (B) [41]. Grouping phrases into 'Desserts' would be topics (D) [41]."
    },
    {
        "id": 27,
        "question": "If an organization wants to discover hidden relationships in a Term Document Matrix, such as the words 'tasty' and 'sweet' frequently appearing alongside 'happy', which data mining technique should they use? [37, 46]",
        "options": [
            "A) Classification",
            "B) Linear Regression",
            "C) Clustering",
            "D) **Association Rule Analysis**"
        ],
        "correctAnswer": "D) **Association Rule Analysis**",
        "hint": "Correct: Association Rule Analysis is used to discover relationships and co-occurrences between terms (e.g., 'tasty' + 'sweet' -> 'happy') [37, 46]. Incorrect: Classification predicts likelihoods (A) [37]. Regression identifies impact predictors (B) [37]. Clustering groups documents (C) [37]."
    },
    {
        "id": 28,
        "question": "Why might a business analyst choose a Star Schema over a Snowflake Schema when designing a data warehouse for rapid reporting? [28]",
        "options": [
            "A) Because the Star Schema strictly normalizes all dimension tables.",
            "B) **Because the Star Schema is denormalized, requiring fewer joins, which speeds up query performance.**",
            "C) Because the Snowflake Schema cannot handle time-variant data.",
            "D) Because the Star Schema is the only schema that supports unstructured social media data."
        ],
        "correctAnswer": "B) **Because the Star Schema is denormalized, requiring fewer joins, which speeds up query performance.**",
        "hint": "Correct: The Star Schema's denormalized design requires fewer table joins, improving query speed for reporting [28]. Incorrect: Normalizing tables describes the Snowflake Schema (A) [28]. Both handle time-variant data (C) [27, 28]. Neither is built for unstructured data (D) [27, 28]."
    },
    {
        "id": 29,
        "question": "Which of the following is a potential challenge regarding 'Quality' when performing text mining compared to data mining? [38]",
        "options": [
            "A) Data mining faces challenges with multiple extinct languages.",
            "B) **Text mining must contend with spelling errors, varying translations, and differing proper nouns.**",
            "C) Text mining frequently suffers from statistical outlier issues in continuous variables.",
            "D) Data mining must resolve the ambiguous sentiment of financial digits."
        ],
        "correctAnswer": "B) **Text mining must contend with spelling errors, varying translations, and differing proper nouns.**",
        "hint": "Correct: Text quality issues include spelling errors and varying noun values/translations [38]. Incorrect: Language issues fall under 'Language used', not 'Quality' for DM (A) [38]. Outliers apply to Data Mining (C) [38]. Digits don't have sentiment (D) [38]."
    },
    {
        "id": 30,
        "question": "A telecommunications company detects an anomaly where a specific network node receives an impossible volume of data requests, identifying it as a security threat. What type of analytics is attempting to explain *why* this anomaly occurred? [9, 18]",
        "options": [
            "A) Descriptive Analytics",
            "B) **Diagnostic Analytics**",
            "C) Prescriptive Analytics",
            "D) Nominal Analytics"
        ],
        "correctAnswer": "B) **Diagnostic Analytics**",
        "hint": "Correct: Diagnostic analytics explores the reasons behind past events by identifying anomalies and correlations [18]. Incorrect: Descriptive summarizes what happened (A) [16]. Prescriptive recommends actions (C) [17]. Nominal is a data type (D) [15]."
    },
    {
        "id": 31,
        "question": "In the Data Processing Chain, which step immediately precedes Data Visualization? [32]",
        "options": [
            "A) Data Collection",
            "B) **Data Mining (Analysis)**",
            "C) Database Storage",
            "D) Data Warehousing"
        ],
        "correctAnswer": "B) **Data Mining (Analysis)**",
        "hint": "Correct: The chain flows: Data -> Database -> Data Warehouse -> Data Mining (Analysis) -> Data Visualization [32]. Incorrect: Collection (A), Database (C), and Warehouse (D) all occur earlier in the chain [32]."
    },
    {
        "id": 32,
        "question": "What is the consequence of utilizing an Enterprise Data Warehouse (EDW) Top-Down approach rather than functional Data Marts? [29, 40]",
        "options": [
            "A) The resulting warehouse will be restricted to a single department's needs.",
            "B) The setup cost will be significantly lower.",
            "C) **It will provide centralized data governance and enterprise-wide analytics but require higher investment and time.**",
            "D) It relies heavily on unstructured NoSQL databases."
        ],
        "correctAnswer": "C) **It will provide centralized data governance and enterprise-wide analytics but require higher investment and time.**",
        "hint": "Correct: EDW provides enterprise scope and centralized governance but requires high cost and time [29, 40]. Incorrect: Single department restriction applies to Data Marts (A) [29, 40]. Data Marts have lower setup costs (B) [40]. DWs rely on structured, industrial-grade systems, not NoSQL (D) [40]."
    },
    {
        "id": 33,
        "question": "A retail manager notices that the movie 'The Matrix' sells almost exclusively in Q3. This cross-tabulation insight is a product of what process? [47, 48]",
        "options": [
            "A) Data Preparation ETL",
            "B) **Data Mining**",
            "C) Unstructured Text Clustering",
            "D) Model Operationalization"
        ],
        "correctAnswer": "B) **Data Mining**",
        "hint": "Correct: Discovering useful patterns like seasonal sales from cross-tabulation matrices is an example of Data Mining [47, 48]. Incorrect: ETL is data movement (A) [20]. Unstructured clustering is for text, not sales numbers (C) [37]. Operationalization is deployment (D) [22]."
    },
    {
        "id": 34,
        "question": "Why is 'Context' highlighted as crucial in Data Visualization? [32]",
        "options": [
            "A) Because it allows analysts to overwrite source data directly from the chart.",
            "B) **Because a reader's perception and bias matter, and poor context can lead to misleading visual elements.**",
            "C) Because aesthetic appeal is always more important than data richness.",
            "D) Because it automatically converts continuous data into discrete data."
        ],
        "correctAnswer": "B) **Because a reader's perception and bias matter, and poor context can lead to misleading visual elements.**",
        "hint": "Correct: Context is vital because reader bias and perception affect interpretation, and visuals must avoid misleading elements [32]. Incorrect: Charts don't overwrite databases (A) [32]. Data richness is greater than aesthetic appeal (C) [32]. Context doesn't alter data structures natively (D) [32]."
    },
    {
        "id": 35,
        "question": "In the text mining process, after establishing the corpus of text, what is the next major structural step before mining for patterns? [41]",
        "options": [
            "A) Applying cluster analysis algorithms.",
            "B) **Structuring the text using a Term Document Matrix (TDM).**",
            "C) Deploying pilot studies in business operations.",
            "D) Creating relational constraints and primary keys."
        ],
        "correctAnswer": "B) **Structuring the text using a Term Document Matrix (TDM).**",
        "hint": "Correct: The workflow is: Establish Corpus -> Structure using TDM -> Mine TDM for Patterns [41]. Incorrect: Clustering happens after TDM creation (A) [41]. Deploying is phase 6 of the analytics lifecycle (C) [22]. Relational constraints belong to Databases, not text mining (D) [41, 49]."
    },
    {
        "id": 36,
        "question": "A marketing agency uses a Box-Whisker chart instead of a standard Bar chart to evaluate customer ages. What specific information are they likely trying to highlight? [31]",
        "options": [
            "A) The exact percentage of customers in each geographic region.",
            "B) **Data distribution and the presence of statistical outliers.**",
            "C) A continuous trend of customer ages spanning ten years.",
            "D) The semantic relationship between the words 'young' and 'old'."
        ],
        "correctAnswer": "B) **Data distribution and the presence of statistical outliers.**",
        "hint": "Correct: Box Charts (Box-Whisker) are used to show data distribution and identify outliers [31]. Incorrect: Geo maps show regions (A) [31]. Line graphs show time trends (C) [30]. Text mining finds semantic relationships (D) [8]."
    },
    {
        "id": 37,
        "question": "An insurance company uses a decision tree model to flag potentially fraudulent claims. Which Business Intelligence application domain does this represent? [36]",
        "options": [
            "A) Manufacturing Quality Improvement",
            "B) Education Course Offerings",
            "C) **Insurance Fraud Prevention**",
            "D) Telecom Network Failure Detection"
        ],
        "correctAnswer": "C) **Insurance Fraud Prevention**",
        "hint": "Correct: Using decision trees and data mining to detect fraudulent claims is a specific BI application in Insurance [36]. Incorrect: Quality improvement is manufacturing (A) [9]. Course optimization is education (B) [45]. Network failures are telecom (D) [9]."
    },
    {
        "id": 38,
        "question": "When creating a predictive model, a data scientist tests several machine learning algorithms in Python and tweaks variables to improve accuracy. Which phase of the Data Analytics Lifecycle is this? [25]",
        "options": [
            "A) Discovery",
            "B) Data Preparation",
            "C) **Model Building**",
            "D) Communicating the Outcomes"
        ],
        "correctAnswer": "C) **Model Building**",
        "hint": "Correct: Applying machine learning in Python to training/testing datasets to improve accuracy occurs in Phase 4: Model Building [25]. Incorrect: Discovery is hypothesis setting (A) [19]. Data prep is cleaning (B) [20]. Communicating is presenting results (D) [22]."
    },
    {
        "id": 39,
        "question": "Which analytical scenario is best suited for an application of Prescriptive Analytics? [17]",
        "options": [
            "A) Generating a report of last month's supply chain expenses.",
            "B) Plotting historical sales to see which season had the most revenue.",
            "C) **Using AI to recommend the most cost-effective supply chain route for next week's shipments.**",
            "D) Identifying why a specific server crashed last night."
        ],
        "correctAnswer": "C) **Using AI to recommend the most cost-effective supply chain route for next week's shipments.**",
        "hint": "Correct: Prescriptive analytics uses AI to recommend actions (what should be done) [17]. Incorrect: Reporting past expenses is descriptive (A) [16]. Plotting historical seasons is descriptive/diagnostic (B) [16, 18]. Explaining a crash is diagnostic (D) [18]."
    },
    {
        "id": 40,
        "question": "Why is 'Data' considered a 'new natural resource' for businesses? [6]",
        "options": [
            "A) Because it is physically mined from the earth's crust.",
            "B) **Because it can be mined for insights, value, and competitive advantage in predicting trends.**",
            "C) Because it is a finite resource that is rapidly running out.",
            "D) Because it is exempt from technological and computing requirements."
        ],
        "correctAnswer": "B) **Because it can be mined for insights, value, and competitive advantage in predicting trends.**",
        "hint": "Correct: Data is termed a natural resource because mining it yields insights, predicts trends, and provides competitive advantage [6]. Incorrect: It is not physically mined (A) [6]. Data is constantly growing, not finite (C) [14]. It heavily relies on technology (D) [34]."
    },
    {
        "id": 41,
        "question": "If you are using a Pie Chart, what are you primarily attempting to communicate to the audience? [31]",
        "options": [
            "A) **The proportions of different parts relative to a whole.**",
            "B) The precise statistical correlation between two numeric variables.",
            "C) The geographical location of customers.",
            "D) The frequency distribution of continuous data."
        ],
        "correctAnswer": "A) **The proportions of different parts relative to a whole.**",
        "hint": "Correct: Pie Charts show proportions of a whole [31]. Incorrect: Scatter plots show correlations (B) [30]. Geo Maps show locations (C) [31]. Histograms show frequency distributions (D) [31]."
    },
    {
        "id": 42,
        "question": "A legal firm uses an e-discovery platform to parse through millions of court deliberations to find cases relevant to their current trial. What methodology are they leveraging? [8, 50]",
        "options": [
            "A) Operational Database Transaction Processing",
            "B) Continuous Variable Distribution",
            "C) **Text Mining**",
            "D) Predictive Supply Chain Analytics"
        ],
        "correctAnswer": "C) **Text Mining**",
        "hint": "Correct: Analyzing laws, court deliberations, and documents to search case histories is a Text Mining application in the Legal domain [50]. Incorrect: These are unstructured text docs, not transactional DBs (A) [12]. It does not involve continuous variables (B) [4]. It is unrelated to supply chains (D) [17]."
    },
    {
        "id": 43,
        "question": "A retail company collects sales transaction data in real-time, but their analysts query a separate, denormalized system to generate weekly trend reports. Why do they use two separate systems? [3, 7]",
        "options": [
            "A) To ensure that unstructured social media data is captured properly.",
            "B) **To prevent analytical queries from slowing down the day-to-day operational database performance.**",
            "C) Because data warehouses cannot handle structured numeric data.",
            "D) Because the operational database automatically deletes data every 24 hours."
        ],
        "correctAnswer": "B) **To prevent analytical queries from slowing down the day-to-day operational database performance.**",
        "hint": "Correct: DWs separate reporting from operations to provide performance optimization and reduce the load on the operational DB [7]. Incorrect: Social media is unstructured and usually requires Big Data tools, not standard DW (A) [14]. DWs excel at structured data (C) [13]. DBs don't necessarily delete data every 24hrs automatically (D) [11]."
    },
    {
        "id": 44,
        "question": "During the text mining process, grouping 'ice cream' and 'apple pie' under the category 'Desserts' represents which stage? [41, 51]",
        "options": [
            "A) Establishing the Corpus",
            "B) Identifying Frequent Words",
            "C) Identifying Meaningful Phrases",
            "D) **Grouping into Topics**"
        ],
        "correctAnswer": "D) **Grouping into Topics**",
        "hint": "Correct: Combining related phrases into broader categories like 'Desserts' is the 'Grouping into Topics' step [41]. Incorrect: The corpus is gathering documents (A) [41]. Frequent words are base terms (B) [41]. Meaningful phrases is combining words, not phrases (C) [41]."
    },
    {
        "id": 45,
        "question": "If an analyst creates a Term Document Matrix (TDM) and finds that a document contains the word 'Profit' 4 times, 'Success' 4 times, and 'Investment' 10 times, what format has the data been converted into? [26, 41]",
        "options": [
            "A) Unstructured multimedia data.",
            "B) A relational database Snowflake schema.",
            "C) **Numeric frequency data representing a bag of words.**",
            "D) A geographical mapping algorithm."
        ],
        "correctAnswer": "C) **Numeric frequency data representing a bag of words.**",
        "hint": "Correct: A TDM transforms free-flowing text into numeric data (frequencies) based on a selected 'bag of words' [26, 41]. Incorrect: It takes unstructured text and structures it (A) [26]. It is a matrix, not a Snowflake schema (B) [28]. It has no geographical component (D) [31]."
    },
    {
        "id": 46,
        "question": "A business discovers that its top 3 salespeople are responsible for 75% of the total revenue. When examining a bar chart of 'Orders by Product', they notice the number of orders is relatively uniform across all products. What critical thinking conclusion can be drawn from integrating these visualizations? [44, 52]",
        "options": [
            "A) The top 3 salespeople are taking the fewest orders.",
            "B) **Revenue does not directly correlate with the sheer volume of orders, suggesting variations in order size or product price.**",
            "C) Salespeople only sell seasonal products in Q3.",
            "D) The data is distorted and violates Ed Tufte's principles."
        ],
        "correctAnswer": "B) **Revenue does not directly correlate with the sheer volume of orders, suggesting variations in order size or product price.**",
        "hint": "Correct: If revenue is concentrated but orders are uniform, revenue does not correlate purely with order count, highlighting the importance of order size/value [44, 52]. Incorrect: The charts do not show top salespeople taking fewest orders (A) [52]. Q3 seasonality is a different example (C) [48]. It is not a distortion, but a valid insight (D) [32]."
    },
    {
        "id": 47,
        "question": "Which metric would provide a clearer indication of a salesperson's *efficiency*, rather than just their total output, based on the provided visualization examples? [42, 43]",
        "options": [
            "A) Total orders taken.",
            "B) **Revenue per Salesperson.**",
            "C) Geographic region assigned.",
            "D) Nominal count of product categories."
        ],
        "correctAnswer": "B) **Revenue per Salesperson.**",
        "hint": "Correct: Using ratios like 'Revenue per Salesperson' reveals relative productivity and efficiency rather than just gross output [42, 43]. Incorrect: Total orders (A) ignores the value/efficiency. Region (C) and nominal counts (D) don't measure efficiency [15, 42]."
    },
    {
        "id": 48,
        "question": "An enterprise wants to deploy an analytical model that scores incoming customer emails as 'Complaint' or 'Praise' using a Term Document Matrix. Which text mining technique is required? [37]",
        "options": [
            "A) **Classification**",
            "B) Linear Regression",
            "C) Association Rule Analysis",
            "D) Market Basket Analysis"
        ],
        "correctAnswer": "A) **Classification**",
        "hint": "Correct: Predicting the likelihood of a document belonging to a specific category (e.g., 'good' or 'poor') uses classification models [37]. Incorrect: Regression is for continuous variables (B) [37]. Association discovers relationships between terms (C, D) [37]."
    },
    {
        "id": 49,
        "question": "A researcher is studying the adoption of new manufacturing technology. They gather patent applications and CFO statutory statements. Which domain of Text Mining does this scenario straddle? [8, 50]",
        "options": [
            "A) Healthcare and Medicine",
            "B) Education and Governance",
            "C) **Technology and Finance**",
            "D) Marketing and Retail"
        ],
        "correctAnswer": "C) **Technology and Finance**",
        "hint": "Correct: Patent applications are part of the Technology domain, and CFO statements belong to the Finance domain [8, 50]. Incorrect: Does not mention patients (A), schools/politics (B), or consumer advertising (D) [50]."
    },
    {
        "id": 50,
        "question": "During the final phase of a data analytics project aimed at improving university course offerings based on past enrollment data, the team initiates a pilot study in the Math department. Which lifecycle phase is the team executing? [22, 45]",
        "options": [
            "A) Phase 1: Discovery",
            "B) Phase 3: Model Planning",
            "C) Phase 5: Communicating the Outcomes",
            "D) **Phase 6: Operationalize**"
        ],
        "correctAnswer": "D) **Phase 6: Operationalize**",
        "hint": "Correct: Implementing insights into business operations, such as running a pilot study, is Phase 6: Operationalize [22]. Incorrect: Discovery is hypothesis generation (A) [19]. Model planning is algorithm selection (B) [21]. Communicating is presenting results (C) [22]."
    }

];
