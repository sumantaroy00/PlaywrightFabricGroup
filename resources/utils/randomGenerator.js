function generateNiceName() {
  const adjectives = [
    'Sunny',
    'Gentle',
    'Happy',
    'Clever',
    'Brave',
    'Kind',
    'Bright',
    'Charming',
    'Cozy',
    'Witty',
  ];
  const nouns = [
    'River',
    'Breeze',
    'Star',
    'Leaf',
    'Echo',
    'Feather',
    'Glow',
    'Nest',
    'Spark',
    'Whisper',
  ];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective}${randomNoun}`;
}

function generateRandomEmail() {
  const names = ['sunny', 'clever', 'happy', 'brave', 'kind', 'witty', 'bright', 'gentle'];
  const domains = ['example.com', 'mail.com', 'test.org', 'demo.net'];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomNumber = Math.floor(Math.random() * 10000);
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  return `${randomName}${randomNumber}@${randomDomain}`;
}

// Example usage:
console.log(generateRandomEmail());

// Example usage:
console.log(generateNiceName());
export default { generateNiceName, generateRandomEmail };
