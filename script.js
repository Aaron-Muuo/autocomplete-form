const sqlInput = document.getElementById('sqlInput');
const autocompleteSuggestion = document.getElementById('autocompleteSuggestion');

// List of SQL keywords for autocomplete
const sqlKeywords = [
    'SELECT', 'FROM', 'WHERE', 'INSERT', 'INTO', 'VALUES', 'UPDATE',
    'SET', 'DELETE', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'ON',
    'CREATE', 'TABLE', 'DATABASE', 'DROP', 'ALTER', 'ADD', 'AND', 'OR',
    'ORDER BY', 'GROUP BY', 'HAVING', 'LIMIT'
];

// Function to update autocomplete suggestion
function updateSuggestion() {
    const text = sqlInput.value;
    const words = text.split(/\s+/); // Split by whitespace
    const lastWord = words[words.length - 1]; // Last word the user typed

    const match = sqlKeywords.find(keyword => keyword.startsWith(lastWord.toUpperCase()));

    if (match && lastWord.length > 0 && match.length > lastWord.length) {
        const remaining = match.slice(lastWord.length); // Only show remaining part of the word
        autocompleteSuggestion.textContent = text + remaining;
    } else if (match && words.length === 1 && match === lastWord.toUpperCase()) {
        autocompleteSuggestion.textContent = match + ' '; // Suggest next keyword
    } else {
        autocompleteSuggestion.textContent = ''; // Clear suggestion if no match
    }
}

sqlInput.addEventListener('input', updateSuggestion);

sqlInput.addEventListener('blur', () => {
    autocompleteSuggestion.textContent = ''; // Clear suggestion when textarea loses focus
});
