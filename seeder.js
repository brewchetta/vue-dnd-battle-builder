import fetchService from './src/fetchService'

// this is something to quickly spin up dummy data for monsters

const adjectives = [
  "abandoned","able","absolute","academic","acceptable","acclaimed","accomplished","accurate","aching","acidic","acrobatic","active","actual","adept","admirable","admired","adolescent","adorable","adored","advanced","adventurous","affectionate","afraid","aged","aggravating","aggressive","agile","agitated","agonizing","agreeable","ajar","alarmed","alarming","alert","alienated","alive","all","altruistic","amazing","ambitious","ample","amused","amusing","anchored","ancient","angelic","angry","anguished","animated","annual","another","antique","anxious","any","apprehensive","appropriate","apt","arctic","arid","aromatic","artistic","ashamed","assured","astonishing","athletic","attached","attentive","attractive","austere","authentic","authorized","automatic","avaricious","average","aware","awesome","awful","awkward"
]

const monsterTypes = [
  "Awakened Shrub","Baboon","Badger","Bat","Cat","Commoner","Crab","Deer","Eagle","Frog","Giant Fire Beetle","Goat","Hawk","Homunculus","Hyena","Jackal","Lemure","Lizard","Octopus","Owl","Quipper","Rat","Raven","Scorpion","Sea Horse","Shrieker","Spider","Vulture","Weasel"
]

console.log("--- Seeding Monsters ---")
console.log("Preparing...")

for (i = 0; i < 100; i++) {
  fetchService.postMonster({
    process.stdout.write(`${i} seeded...\r`)
    name: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${monsterTypes[Math.floor(Math.random() * adjectives.length)]}`,
    armorClass: Math.floor(Math.random() * 10 + 10),
    challengeRating: Math.ceil(Math.random() * 6),
    alignmentMoral: Math.ceil(Math.random() * 3),
    alignmentLaw: Math.ceil(Math.random() * 3),
    hitPoints: Math.ceil(Math.random() * 30)
  })
}

console.log("--- Completed Seed ---")
