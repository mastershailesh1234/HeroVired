const fs = require("fs");

// Get file paths
const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

// Check file paths
if (!inputFilePath || !outputFilePath || !fs.existsSync(inputFilePath)) {
  console.log("Please provide input and output file paths.");
  process.exit(1);
}

// Read file
const fileContents = fs.readFileSync(inputFilePath, "utf-8");

// Convert to array
const lines = fileContents.split("\n");

// remove empty lines and comments
const Lines = lines.filter(
  (line) => line.trim() !== "" && !line.startsWith("#")
);

// Sort the lines
const sortedLines = Lines.sort();

//sorted lines to a new file
fs.writeFileSync(outputFilePath, sortedLines.join("\n"));

console.log(sortedLines.join("\n"));
