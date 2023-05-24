const getMeaning = async (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  let meaning;

  try {
    const response = await fetch(url);
    const result = await response.json();
    meaning = {
      word: result[0].word,
      phonetic: result[0].phonetic,
      definition: result[0].meanings[0].definitions[0].definition,
    };
    return meaning;
  } catch (error) {
    console.log("Word not found or fetch fails")
  }
};

export { getMeaning };
