// this is something to quickly spin up dummy data for monsters
// it WILL get replaced

const fs = require('fs')

const environments = ['Desert', 'Ocean', 'Cave', 'Grassland', 'Forest', 'Mountain']

const adjectives = [
  "Abandoned","Able","Absolute","Academic","Acceptable","Acclaimed","Accomplished","Accurate","Aching","Acidic","Acrobatic","Active","Actual","Adept","Admirable","Admired","Adolescent","Adorable","Adored","Advanced","Adventurous","Affectionate","Afraid","Aged","Aggravating","Aggressive","Agile","Agitated","Agonizing","Agreeable","Ajar","Alarmed","Alarming","Alert","Alienated","Alive","All","Altruistic","Amazing","Ambitious","Ample","Amused","Amusing","Anchored","Ancient","Angelic","Angry","Anguished","Animated","Annual","Another","Antique","Anxious","Any","Apprehensive","Appropriate","Apt","Arctic","Arid","Aromatic","Artistic","Ashamed","Assured","Astonishing","Athletic","Attached","Attentive","Attractive","Austere","Authentic","Authorized","Automatic","Avaricious","Average","Aware","Awesome","Awful","Awkward"
]

const monsterTypes = [
  "Awakened Shrub","Baboon","Badger","Bat","Cat","Commoner","Crab","Deer","Eagle","Frog","Giant Fire Beetle","Goat","Hawk","Homunculus","Hyena","Jackal","Lemure","Lizard","Octopus","Owl","Quipper","Rat","Raven","Scorpion","Sea Horse","Shrieker","Spider","Vulture","Weasel"
]

console.log("--- Seeding Monsters ---")

let fileWrite = '{"monsters":['
const fileArray = []

console.log('---Parsing Monster List---\n')

for (i = 1; i < 100; i++) {


  process.stdout.write(`${i} seeded...\r`)

  monster = {
    id: i,
    name: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${monsterTypes[Math.floor(Math.random() * monsterTypes.length)]}`,
    size: Math.floor(Math.random() * 4),
    monsterType: "beast",
    alignmentMoral: Math.ceil(Math.random() * 3),
    alignmentLaw: Math.ceil(Math.random() * 3),
    armorClass: Math.floor(Math.random() * 10 + 10),
    hitPoints: Math.ceil(Math.random() * 100),
    speed: {
      land: Math.ceil(Math.random() * 4) * 5,
      climb: Math.ceil(Math.random() * 4) * 5,
      swim: Math.ceil(Math.random() * 4) * 5,
      fly: Math.ceil(Math.random() * 4) * 5,
      burrow: Math.ceil(Math.random() * 4) * 5
    },
    attributes: {
      str: Math.floor(Math.random() * 11) + 10,
      dex: Math.floor(Math.random() * 11) + 10,
      con: Math.floor(Math.random() * 11) + 10,
      int: Math.floor(Math.random() * 11) + 10,
      wis: Math.floor(Math.random() * 11) + 10,
      cha: Math.floor(Math.random() * 11) + 10,
    },
    saves: {
      cha: Math.floor(Math.random() * 11),
      dex: Math.floor(Math.random() * 11)
    },
    senses: [
      { name: 'lowlight vision', range: 60 },
      { name: 'darkvision', range: 10 }
    ],
    skills: [
      {
        name: 'history',
        bonus: Math.floor(Math.random() * 11),
      },
      {
        name: 'arcana',
        bonus: Math.floor(Math.random() * 11),
      }
    ],
    challengeRating: Math.ceil(Math.random() * 6),
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    languages: ['Common', 'Elvish', 'Orcish', 'Sylvan'],
    environments: [environments[Math.floor(Math.random() * environments.length)]]
  }

  fileArray.push(JSON.stringify(monster))

} // end loop

fileArray.join(',')
fileWrite += `${fileArray}]}`

console.log('--- Writing To File ---');

fs.writeFile('db.json', fileWrite, err => {
  if (err) throw err;
});

console.log('---Completed Seed---')
