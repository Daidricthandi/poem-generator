function displayPoem(response){

 new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput =document.querySelector("#user-instructions");
  let apiKey = "20e4aa68b937fb64db5f0o1077151t88";
  let prompt = `User instructions: Generate a French poem about flowers ${instructionsInput.value}`;
  let context = "You are a romantic Poem expert and you love to write short poems. Your mission is to generate a 4 line poem in basic HTML. don't include any quotation mark and separate each line with a <br>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong><strong/> element. DO NOT INCLUDE THE TITLE";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);  
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);