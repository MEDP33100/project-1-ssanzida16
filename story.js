// Play sound effect
function playSound(type) {
  let audio;
  if (type === 'click') {
    audio = new Audio('https://www.soundjay.com/button/beep-07.wav'); // Sound when clicked
  } else if (type === 'hover') {
    audio = new Audio('https://www.soundjay.com/button/button-09.wav'); // Hover sound
  }
  audio.play();
}

function choosePath(path) {
  let storyText = document.getElementById('story-text');
  let options = document.getElementById('options');
  let emojiBackground = document.getElementById('emoji-background'); // Emoji background

  // Play sound when an option is clicked
  playSound('click');

  // Hide options after a choice is made
  options.style.display = 'none';

  // Animate the text (fade out and then fade in)
  storyText.style.opacity = 0;
  setTimeout(() => {
    if (path === 'forest') {
      storyText.innerHTML = `
        🌳 You venture deep into the enchanted forest, where the trees whisper secrets and magic is in the air. Suddenly, a glowing fairy appears before you! 🧚‍♀️
        <p>What will you do?</p>
      `;
      document.body.style.backgroundColor = '#c8e6c9'; // Greenish background
      emojiBackground.innerHTML = '🌳🌲🍃🦋🧚‍♀️';  // Set multiple forest-themed emojis for the background
      emojiBackground.classList.add('active'); // Make the emoji appear

      setTimeout(() => {
        options.innerHTML = `
          <button onclick="choosePath('talk')">🗣️ Talk to the fairy</button>
          <button onclick="choosePath('run')">🏃‍♀️ Run away</button>
        `;
        options.style.display = 'block';
      }, 1000);
    } else if (path === 'mountain') {
      storyText.innerHTML = `
        🏔️ You climb a towering mountain, reaching a snowy peak where a majestic dragon watches over a hidden treasure chest. 🐉
        <p>What will you do?</p>
      `;
      document.body.style.backgroundColor = '#f1f8e8'; // Snowy mountain background
      emojiBackground.innerHTML = '🏔️❄️🐉💎';  // Set multiple mountain and treasure emojis for the background
      emojiBackground.classList.add('active'); // Make the emoji appear

      setTimeout(() => {
        options.innerHTML = `
          <button onclick="choosePath('fight')">⚔️ Fight the dragon</button>
          <button onclick="choosePath('befriend')">🦸‍♂️ Befriend the dragon</button>
        `;
        options.style.display = 'block';
      }, 1000);
    } else if (path === 'talk') {
      storyText.innerHTML = `
        🧚‍♀️ The fairy smiles and offers to grant you one wish! ✨ What will you wish for? 
        <p>Choose your wish:</p>
      `;
      emojiBackground.innerHTML = '✨💖🌟';  // Wish emojis
      emojiBackground.classList.add('active'); // Make the emoji appear

      setTimeout(() => {
        options.innerHTML = `
          <button onclick="choosePath('wealth')">💰 Wish for wealth</button>
          <button onclick="choosePath('wisdom')">🧠 Wish for wisdom</button>
        `;
        options.style.display = 'block';
      }, 1000);
    } else if (path === 'run') {
      storyText.innerHTML = `
        🏃‍♀️ You sprint away from the fairy, but soon realize you're lost in the forest. A mysterious owl 🦉 offers to guide you home.
        <p>What will you do?</p>
      `;
      emojiBackground.innerHTML = '🌲🦉✨';  // Forest and owl emojis
      emojiBackground.classList.add('active');

      setTimeout(() => {
        options.innerHTML = `
          <button onclick="choosePath('trust')">🤝 Trust the owl</button>
          <button onclick="choosePath('ignore')">🚶‍♀️ Ignore the owl</button>
        `;
        options.style.display = 'block';
      }, 1000);
    } else if (path === 'fight') {
      storyText.innerHTML = `
        ⚔️ You draw your sword and prepare for battle with the dragon. After a fierce fight, you defeat the dragon and claim the treasure! 💎
        <p>The End!</p>
      `;
      emojiBackground.innerHTML = '💎💥🔥';  // Treasure and battle emojis
      emojiBackground.classList.add('active');
      options.innerHTML = `
        <button onclick="restart()">🔄 Start Again</button>
      `;
      options.style.display = 'block';
    } else if (path === 'befriend') {
      storyText.innerHTML = `
        🦸‍♂️ The dragon agrees to become your friend and shares the treasure with you! You both fly off into the sky to new adventures. 🐉✨
        <p>The End!</p>
      `;
      emojiBackground.innerHTML = '🐉✨🦸‍♂️';  // Flying dragon emoji
      emojiBackground.classList.add('active');
      options.innerHTML = `
        <button onclick="restart()">🔄 Start Again</button>
      `;
      options.style.display = 'block';
    } else if (path === 'wealth') {
      storyText.innerHTML = `
        💰 Your wish for wealth is granted! You become the richest person in the land. However, you realize that wisdom is the true treasure.
        <p>The End!</p>
      `;
      emojiBackground.innerHTML = '💰💎';  // Wealth and treasure emojis
      emojiBackground.classList.add('active');
      options.innerHTML = `
        <button onclick="restart()">🔄 Start Again</button>
      `;
      options.style.display = 'block';
    } else if (path === 'wisdom') {
      storyText.innerHTML = `
        🧠 Your wish for wisdom makes you a wise ruler, loved by all. The kingdom thrives under your guidance.
        <p>The End!</p>
      `;
      emojiBackground.innerHTML = '🧠📚';  // Wisdom and books emojis
      emojiBackground.classList.add('active');
      options.innerHTML = `
        <button onclick="restart()">🔄 Start Again</button>
      `;
      options.style.display = 'block';
    } else if (path === 'trust') {
      storyText.innerHTML = `
        🤝 You trust the owl, and it leads you safely back to the edge of the forest. You're home safe and sound.
        <p>The End!</p>
      `;
      emojiBackground.innerHTML = '🏠🦉🌳';  // Home and owl emojis
      emojiBackground.classList.add('active');
      options.innerHTML = `
        <button onclick="restart()">🔄 Start Again</button>
      `;
      options.style.display = 'block';
    } else if (path === 'ignore') {
      storyText.innerHTML = `
        🚶‍♀️ You ignore the owl, but wander deeper into the forest, forever lost. 😔
        <p>The End!</p>
      `;
      emojiBackground.innerHTML = '🌲🌳💀';  // Lost emojis
      emojiBackground.classList.add('active');
      options.innerHTML = `
        <button onclick="restart()">🔄 Start Again</button>
      `;
      options.style.display = 'block';
    }

    // Fade in new story text
    storyText.style.opacity = 1;
  }, 500);  // Wait before updating the story text
}

function restart() {
  let storyText = document.getElementById('story-text');
  let options = document.getElementById('options');
  let emojiBackground = document.getElementById('emoji-background');

  storyText.innerHTML = `
    🌳 You find yourself at the beginning of an enchanted forest, where magic and mystery await. 
    <p>Where will you go?</p>
  `;
  options.innerHTML = `
    <button onclick="choosePath('forest')">🌳 Enter the forest</button>
    <button onclick="choosePath('mountain')">🏔️ Climb the mountain</button>
  `;
  options.style.display = 'block';

  // Reset background and emojis
  emojiBackground.innerHTML = '';
  emojiBackground.classList.remove('active');
}
