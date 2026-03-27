import type { Question } from "./types/questions";
export const mockQuestions: Question[] = [
  {
    id: 1,
    question: "Information Retrieval (IR) is mainly concerned with:",
    options: [
      "Storing structured databases only",
      "Retrieving relevant information from large collections of data",
      "Designing computer hardware",
      "Encrypting files",
    ],
    correctAnswer:
      "Retrieving relevant information from large collections of data",
    hint: "It is the scientific discipline concerned with searching for information within large collections of documents, databases, or the World Wide Web. [cite: 63]",
  },
  {
    id: 2,
    question: "In an IR system, a document refers to:",
    options: [
      "Only books",
      "Only PDF files",
      "Any unit of searchable information",
      "Only webpages",
    ],
    correctAnswer: "Any unit of searchable information",
    hint: "A document is the basic unit of information that an IR system searches and retrieves, and it may take various forms including web pages, research articles, books, or any text-based content. [cite: 87, 88]",
  },
  {
    id: 3,
    question: "A user's information need is expressed in IR systems through:",
    options: ["Index", "Query", "Ranking", "Database"],
    correctAnswer: "Query",
    hint: "This is the user's input to the system representing their information need, and it can consist of single keywords, phrases, or complete natural language questions. [cite: 93, 94]",
  },
  {
    id: 4,
    question: "Relevance in IR refers to:",
    options: [
      "Document size",
      "Document storage location",
      "Degree to which a document satisfies the user's query",
      "Number of words in a document",
    ],
    correctAnswer: "Degree to which a document satisfies the user's query",
    hint: "A document is considered relevant if it contains information that is useful and appropriate for answering the user's query. [cite: 99]",
  },
  {
    id: 5,
    question: "Ranking in IR systems is used to:",
    options: [
      "Delete documents",
      "Sort documents by relevance",
      "Compress files",
      "Store data",
    ],
    correctAnswer: "Sort documents by relevance",
    hint: "Ranking is the process of ordering retrieved documents according to their estimated relevance so that the most relevant results are placed higher in the list. [cite: 102, 103]",
  },
  {
    id: 6,
    question: "The Boolean Retrieval Model represents documents as:",
    options: [
      "Probability distributions",
      "Binary term vectors",
      "Neural networks",
      "Graph structures",
    ],
    correctAnswer: "Binary term vectors",
    hint: "In this model, documents are represented using vectors where a 1 means the term is present and a 0 means the term is absent. [cite: 125, 126, 127]",
  },
  {
    id: 7,
    question:
      "Which Boolean operator retrieves documents containing both terms?",
    options: ["OR", "AND", "NOT", "XOR"],
    correctAnswer: "AND",
    hint: "This logical operator is used to retrieve documents that contain all the specified terms. [cite: 117]",
  },
  {
    id: 8,
    question: "A major limitation of the Boolean model is that it:",
    options: [
      "Requires large storage",
      "Cannot retrieve documents",
      "Does not rank documents",
      "Uses vectors",
    ],
    correctAnswer: "Does not rank documents",
    hint: "One of the key limitations of this model is that it treats all retrieved documents as equally relevant and does not rank them by relevance. [cite: 139, 140]",
  },
  {
    id: 9,
    question: "In the Vector Space Model, documents are represented as:",
    options: [
      "Logical expressions",
      "Trees",
      "Vectors of term weights",
      "Images",
    ],
    correctAnswer: "Vectors of term weights",
    hint: "Each document is represented as a numerical vector of term weights in a high-dimensional space. [cite: 148, 154]",
  },
  {
    id: 10,
    question:
      "The similarity between query and document in VSM is commonly measured using:",
    options: [
      "Euclidean sorting",
      "Cosine similarity",
      "Boolean matching",
      "Binary search",
    ],
    correctAnswer: "Cosine similarity",
    hint: "This metric measures the relevance of a document to a query by calculating the angle between the document and query vectors. [cite: 173]",
  },
  {
    id: 11,
    question: "Term Frequency (TF) measures:",
    options: [
      "Document rarity",
      "Number of documents containing a term",
      "Frequency of a term in a document",
      "Query length",
    ],
    correctAnswer: "Frequency of a term in a document",
    hint: "This metric measures how often a term appears in a document, where a higher value means the term is more important within that specific document[cite: 208, 209].",
  },
  {
    id: 12,
    question: "Inverse Document Frequency (IDF) measures:",
    options: [
      "Term importance in a single document",
      "Rarity of a term across documents",
      "Number of queries",
      "Document length",
    ],
    correctAnswer: "Rarity of a term across documents",
    hint: "This metric measures how rare a term is across all documents; a term that appears in many documents has a low score because it is less informative[cite: 220, 221].",
  },
  {
    id: 13,
    question: "TF-IDF assigns higher weight to terms that:",
    options: [
      "Appear in all documents",
      "Are rare in the collection but frequent in a document",
      "Are short words",
      "Are stop words",
    ],
    correctAnswer: "Are rare in the collection but frequent in a document",
    hint: "This weighting technique helps rank documents by giving higher importance to terms that frequently appear in a document but are rare across the whole dataset[cite: 205, 206].",
  },
  {
    id: 14,
    question:
      "Which model supports ranking of documents based on similarity scores?",
    options: [
      "Boolean Model",
      "Vector Space Model",
      "Relational Model",
      "Hierarchical Model",
    ],
    correctAnswer: "Vector Space Model",
    hint: "This model represents documents and queries as vectors, allowing relevance-based ranking through similarity measures such as cosine similarity[cite: 269].",
  },
  {
    id: 15,
    question:
      'Words such as "the", "is", and "and" usually receive low TF-IDF scores because they:',
    options: [
      "Are long words",
      "Occur rarely",
      "Appear frequently in many documents",
      "Are technical terms",
    ],
    correctAnswer: "Appear frequently in many documents",
    hint: "Common words that are not meaningful for search are called stop words. If a term appears in many documents, its IDF score decreases, making its overall weight very low[cite: 230, 865].",
  },
  {
    id: 16,
    question: "Which of the following is an example of unstructured data?",
    options: [
      "Employee ID in a database",
      "Excel spreadsheet of sales",
      "Text of research articles",
      "Product prices table",
    ],
    correctAnswer: "Text of research articles",
    hint: "Documents in Information Retrieval systems are typically unstructured data, taking forms like web pages, research articles, books, and emails.",
  },
  {
    id: 17,
    question: "In Boolean retrieval, the query A AND B NOT C retrieves:",
    options: [
      "Documents containing C only",
      "Documents containing A or B",
      "Documents containing A and B but not C",
      "Documents containing A, B, and C",
    ],
    correctAnswer: "Documents containing A and B but not C",
    hint: "The AND operator retrieves documents containing all specified terms, while the NOT operator excludes documents containing the specified term.",
  },
  {
    id: 18,
    question:
      "What is the main advantage of the Vector Space Model over the Boolean Model?",
    options: [
      "Simplicity",
      "Ability to rank documents by relevance",
      "Requires no preprocessing",
      "Works only for structured data",
    ],
    correctAnswer: "Ability to rank documents by relevance",
    hint: "Unlike the Boolean Model which only provides exact matches without sorting, the Vector Space Model supports document ranking, allowing documents to be ordered by their similarity scores.",
  },
  {
    id: 19,
    question: "TF-IDF gives high weight to:",
    options: [
      'Common words like "the" and "is"',
      "Terms that appear frequently in a document but rarely across the collection",
      "Words that appear in all documents",
      "Short words only",
    ],
    correctAnswer:
      "Terms that appear frequently in a document but rarely across the collection",
    hint: "This weighting technique helps rank documents by combining Term Frequency (how often it appears in one document) and Inverse Document Frequency (how rare it is across all documents).",
  },
  {
    id: 20,
    question: "Which of the following is NOT a step in text preprocessing?",
    options: [
      "Tokenization",
      "Stemming/Lemmatization",
      "Sorting numbers",
      "Stop-word removal",
    ],
    correctAnswer: "Sorting numbers",
    hint: "Key steps in text preprocessing to prepare raw text for analysis include Tokenization, Stemming, Lemmatization, Stop-word removal, and Normalization.",
  },
  {
    id: 21,
    question: "Lemmatization differs from stemming in that:",
    options: [
      "It always produces shorter word forms",
      "It is faster than stemming",
      "It considers context and produces meaningful words",
      "It removes punctuation",
    ],
    correctAnswer: "It considers context and produces meaningful words",
    hint: "Unlike stemming which just chops off suffixes (and can produce non-meaningful roots), lemmatization uses lexical knowledge and POS tagging to find the correct, meaningful dictionary base form.",
  },
  {
    id: 22,
    question: "Which search algorithm is most efficient for unsorted data?",
    options: [
      "Binary Search",
      "Linear Search",
      "Hash-Based Search",
      "B-Tree Search",
    ],
    correctAnswer: "Hash-Based Search",
    hint: "While Linear search checks unsorted elements one by one (O(n)), Hash-based search is the most efficient, providing constant-time O(1) direct lookups on average when implemented with a hash function.",
  },
  {
    id: 23,
    question: "In binary search, the worst-case time complexity is:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    hint: "Because the algorithm efficiently reduces the search space by half in each step, it takes logarithmic time in the worst-case scenario.",
  },
  {
    id: 24,
    question:
      "Hash-based search may have a worst-case complexity of O(n) due to:",
    options: ["Sorting", "Collisions", "Preprocessing", "Indexing"],
    correctAnswer: "Collisions",
    hint: "When multiple keys hash to the same index, it creates this issue. If all keys map to the same spot, the search degrades to O(n) as it has to sequentially check all those elements.",
  },
  {
    id: 25,
    question:
      "Which type of indexing arranges the data physically in sorted order?",
    options: [
      "Primary Index",
      "Secondary Index",
      "Clustered Index",
      "Non-Clustered Index",
    ],
    correctAnswer: "Clustered Index",
    hint: "In this type of indexing, the physical order of data records in storage matches the order of the index key, meaning only one such index can exist per table.",
  },

  {
    id: 26,
    question:
      "Which indexing structure is most commonly used in search engines for full-text search?",
    options: ["Hash table", "B-Tree", "Inverted Index", "Bitmap Index"],
    correctAnswer: "Inverted Index",
    hint: "Frequently used in search engines, this technique maps terms to their locations within a document collection, enabling efficient full-text search.",
  },
  {
    id: 27,
    question:
      "Which tokenization type is commonly used in transformer-based NLP models?",
    options: [
      "Word Tokenization",
      "Sentence Tokenization",
      "Subword Tokenization",
      "Paragraph Tokenization",
    ],
    correctAnswer: "Subword Tokenization",
    hint: "It breaks words into smaller subunits and helps handle rare or out-of-vocabulary words, often used in deep learning models like BERT and GPT.",
  },
  {
    id: 28,
    question: "Stop-word removal helps in:",
    options: [
      "Increasing document size",
      "Removing irrelevant common words",
      "Stemming words to roots",
      "Calculating TF-IDF",
    ],
    correctAnswer: "Removing irrelevant common words",
    hint: 'This process involves eliminating common words (e.g., "the," "is," "and") that do not add significant meaning to a search query, which reduces the size of the text data and improves search efficiency.',
  },
  {
    id: 29,
    question:
      "Multi-level indexing is preferred over single-level indexing because:",
    options: [
      "It uses less storage",
      "It improves search performance for large datasets",
      "It does not require sorted data",
      "It eliminates the need for preprocessing",
    ],
    correctAnswer: "It improves search performance for large datasets",
    hint: "By organizing indexes in a hierarchical structure, this approach significantly reduces the number of disk accesses required during search operations, making it highly efficient for databases with millions of records.",
  },
  {
    id: 30,
    question: "Which of the following statements about B-Trees is correct?",
    options: [
      "They are unsorted lists",
      "They are self-balancing and support efficient search, insert, and delete operations",
      "They can only store numeric data",
      "They do not support hierarchical indexing",
    ],
    correctAnswer:
      "They are self-balancing and support efficient search, insert, and delete operations",
    hint: "These are tree structures commonly used in databases and file systems to facilitate fast searches by maintaining balance automatically.",
  },

  {
    id: 31,
    question: "What is the primary purpose of an inverted index?",
    options: [
      "Store documents sequentially",
      "Map terms to documents",
      "Rank search results",
      "Compress documents",
    ],
    correctAnswer: "Map terms to documents",
    hint: "It is a fundamental data structure that inverts the relationship by associating each term with the list of documents where it appears. [cite: 835, 843]",
  },
  {
    id: 32,
    question:
      "Which of the following steps is **not** part of constructing an inverted index?",
    options: [
      "Tokenization",
      "Normalization",
      "Rendering HTML",
      "Stop-word removal",
    ],
    correctAnswer: "Rendering HTML",
    hint: "The process involves gathering documents, tokenization, normalization, and stop-word removal to prepare terms for mapping. [cite: 852, 1040]",
  },
  {
    id: 33,
    question: "Term Frequency (TF) measures:",
    options: [
      "How rare a term is across documents",
      "How often a term appears in a document",
      "The relevance of a document to a query",
      "Document length",
    ],
    correctAnswer: "How often a term appears in a document",
    hint: "A higher value means the term appears more times within a specific document, indicating its importance there. [cite: 207, 208]",
  },
  {
    id: 34,
    question: "In TF-IDF, IDF stands for:",
    options: [
      "Indexed Document Frequency",
      "Inverse Document Frequency",
      "Internal Document Factor",
      "Input Data File",
    ],
    correctAnswer: "Inverse Document Frequency",
    hint: "This component measures how rare a term is across the entire collection; rare terms receive higher scores. [cite: 219, 220]",
  },
  {
    id: 35,
    question: "BM25 improves TF-IDF by considering:",
    options: [
      "Document compression",
      "Term frequency saturation and document length",
      "Query expansion",
      "Only stop-word removal",
    ],
    correctAnswer: "Term frequency saturation and document length",
    hint: "BM25 is an extension of TF-IDF that normalizes for document length and prevents a single term from dominating the score via saturation. [cite: 909]",
  },
  {
    id: 36,
    question: "PageRank assigns scores based on:",
    options: [
      "Word frequency",
      "Document length",
      "Number and quality of links to a page",
      "User click behavior",
    ],
    correctAnswer: "Number and quality of links to a page",
    hint: "Developed by Google, this algorithm evaluates relevance based on the web's link structure. [cite: 912]",
  },
  {
    id: 37,
    question:
      "Which layer of a neural ranking model maps queries and documents into a shared vector space?",
    options: [
      "Dense retrieval",
      "Pairwise LTR",
      "Listwise LTR",
      "Contextual bandits",
    ],
    correctAnswer: "Dense retrieval",
    hint: "These models use neural networks to map data into a shared dense vector space where relevance is measured by similarity. [cite: 952, 953]",
  },
  {
    id: 38,
    question: "Stop-word removal is used to:",
    options: [
      "Increase index size",
      "Reduce irrelevant terms in the index",
      "Normalize document lengths",
      "Encode term positions",
    ],
    correctAnswer: "Reduce irrelevant terms in the index",
    hint: "By eliminating common words like 'the' or 'is', the system reduces index size and focuses on meaningful content. [cite: 865, 1073]",
  },

  {
    id: 39,
    question: "Inverted indexes are particularly useful for:",
    options: [
      "Image processing",
      "Keyword-based text retrieval",
      "Audio streaming",
      "Video encoding",
    ],
    correctAnswer: "Keyword-based text retrieval",
    hint: "Unlike traditional indexing methods, an inverted index allows fast keyword-based queries, making it crucial for large-scale text retrieval applications. [cite: 837]",
  },
  {
    id: 40,
    question:
      "Which of the following is an **interaction-based neural ranking model**?",
    options: ["BERT", "DRMM", "TF-IDF", "BM25"],
    correctAnswer: "DRMM",
    hint: "Under neural ranking models, interaction-based models explicitly model interactions between query and document terms, an example of which is the Deep Relevance Matching Model (DRMM). [cite: 956, 957, 958]",
  },
  {
    id: 41,
    question: "Incremental indexing is used to:",
    options: [
      "Rebuild the entire index daily",
      "Update the index dynamically when documents change",
      "Compress postings lists",
      "Rank documents",
    ],
    correctAnswer: "Update the index dynamically when documents change",
    hint: "This strategy maintains the index by updating it dynamically without requiring a full reconstruction when documents are added, modified, or deleted. [cite: 892, 894, 895]",
  },
  {
    id: 42,
    question: "NDCG (Normalized Discounted Cumulative Gain) evaluates:",
    options: [
      "Only the first retrieved document",
      "The quality of rankings considering positions and relevance scores",
      "Compression efficiency of the index",
      "Total number of documents in the collection",
    ],
    correctAnswer:
      "The quality of rankings considering positions and relevance scores",
    hint: "It evaluates the quality of rankings by taking into account both the positions of the relevant items and their corresponding relevance scores. [cite: 984]",
  },
  {
    id: 43,
    question:
      "Which of the following is an example of a **context-aware ranking technique**?",
    options: [
      "Pointwise LTR",
      "Contextual Bandits",
      "TF-IDF",
      "Vector Space Model",
    ],
    correctAnswer: "Contextual Bandits",
    hint: "Contextual Bandits are used to learn how to rank items based on the user's specific context. [cite: 976, 977]",
  },
  {
    id: 44,
    question: "In an inverted index, the **posting list** stores:",
    options: [
      "A list of documents for each term",
      "The query history",
      "The stop-word list",
      "The ranking score of documents",
    ],
    correctAnswer: "A list of documents for each term",
    hint: "For each unique term, this index component stores the list of documents in which the term appears. [cite: 874]",
  },
  {
    id: 45,
    question:
      "Why is ranking critical even if an inverted index retrieves all relevant documents?",
    options: [
      "It reduces query processing time",
      "It determines which results are most relevant to show first",
      "It compresses the index",
      "It removes duplicate documents",
    ],
    correctAnswer:
      "It determines which results are most relevant to show first",
    hint: "While an index allows fast retrieval, ranking mechanisms are needed to determine the order and present the most relevant results to the user at the top. [cite: 900, 901]",
  },
];
