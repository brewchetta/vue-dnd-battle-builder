const fs = require('fs')

// this is something to quickly spin up dummy data for monsters

const adjectives = [
  "Abandoned","Able","Absolute","Academic","Acceptable","Acclaimed","Accomplished","Accurate","Aching","Acidic","Acrobatic","Active","Actual","Adept","Admirable","Admired","Adolescent","Adorable","Adored","Advanced","Adventurous","Affectionate","Afraid","Aged","Aggravating","Aggressive","Agile","Agitated","Agonizing","Agreeable","Ajar","Alarmed","Alarming","Alert","Alienated","Alive","All","Altruistic","Amazing","Ambitious","Ample","Amused","Amusing","Anchored","Ancient","Angelic","Angry","Anguished","Animated","Annual","Another","Antique","Anxious","Any","Apprehensive","Appropriate","Apt","Arctic","Arid","Aromatic","Artistic","Ashamed","Assured","Astonishing","Athletic","Attached","Attentive","Attractive","Austere","Authentic","Authorized","Automatic","Avaricious","Average","Aware","Awesome","Awful","Awkward"
]

const monsterTypes = [
  "Awakened Shrub","Baboon","Badger","Bat","Cat","Commoner","Crab","Deer","Eagle","Frog","Giant Fire Beetle","Goat","Hawk","Homunculus","Hyena","Jackal","Lemure","Lizard","Octopus","Owl","Quipper","Rat","Raven","Scorpion","Sea Horse","Shrieker","Spider","Vulture","Weasel"
]

console.log("--- Seeding Monsters ---")
console.log("Building monster list...")

let fileWrite = '{"monsters":['
const fileArray = []

for (i = 1; i < 100; i++) {

  process.stdout.write(`${i} seeded...\r`)

  monster = {
    name: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${monsterTypes[Math.floor(Math.random() * monsterTypes.length)]}`,
    armorClass: Math.floor(Math.random() * 10 + 10),
    challengeRating: Math.ceil(Math.random() * 6),
    alignmentMoral: Math.ceil(Math.random() * 3),
    alignmentLaw: Math.ceil(Math.random() * 3),
    hitPoints: Math.ceil(Math.random() * 30)
  }

  fileArray.push(`\n{\n "id":${i},\n "name": "${monster.name}",\n "armorClass": "${monster.armorClass}",\n "challengeRating": "${monster.challengeRating}",\n "alignmentMoral": "${monster.alignmentMoral}",\n "alignmentLaw": "${monster.alignmentLaw}",\n "hitpoints": "${monster.hitPoints}"\n}`)

} // end loop

console.log('---Parsing Monster List---')

fileArray.join(',')
fileWrite += `${fileArray}]}`

console.log('--- Writing To File ---');

fs.writeFile('db.json', fileWrite, err => {
  if (err) throw err;
});

console.log('---Completed Seed---')
