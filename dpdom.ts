import { Entry } from "./types";

const dpdom: Entry[] = [
  {
    name: "Type Sync",
    prerequisites:
      "Elemental Connection, a Type-Linked Class*, Adept Medicine, Occult, or Tech Education.",
    frequency: "Static",
    effect:
      "The Target gains the Type of your Elemental Connection as an additional Type, or has one of their Types replaced by that Type. See the Type Changes section (page 436) for more information and suggestions. A Pokémon may be targeted by Type Sync only once. This Feature may be performed One Time for each Rank above Untrained you have of your highest of Medicine, Occult, or Tech Education, up to a maximum of 4 times at Master Rank.",
    note: "Type-Linked Classes include Type Ace and all Elementalist Classes, all of which are linked to their respective Types. Additionally, Aura Guardian is linked to Fighting; and Telekinetic, Telepath, and Warper are linked to Psychic. Obviously, your Type Linked Class must match your Elemental Connection to apply for Type Sync!",
    book: "DPDoM",
    pageNum: 77,
  },
  {
    name: "Engineer",
    prerequisites: "Pokebot Training",
    frequency: "Static",
    effect: "You may craft any Engineer Recipe for which you qualify.",
    seeAlso: ["Engineer Recipes"],
    book: "DPDoM",
    pageNum: 80,
  },
  {
    name: "Robofighter",
    prerequisites: "Engineer, Adept Technology Education",
    frequency: "Bind 2 AP – Standard Action",
    effect:
      "As long as this feature is Bound, you can command your Pokébot using a Standard Action rather than a Pokémon turn. Your Pokébots may still only act once a round.",
    book: "DPDoM",
    pageNum: 80,
  },
  {
    name: "Overclock",
    prerequisites: "Engineer, Expert Technology Education",
    frequency: "Scene – Swift Action",
    target: "Your Pokébot",
    effect:
      "The target is cured of all Persistent Statuses, resets all negative Combat Stages to default, and gains two Ticks of Temporary Hit Points. For the rest of the Scene, it deals and takes additional damage with all attacks equal to your Technology Education Rank.",
    book: "DPDoM",
    pageNum: 80,
  },
  {
    name: "Experimental AI",
    prerequisites: "Engineer, Master Technology Education",
    frequency: "Static",
    effect:
      "Increase the maximum complexity of all Pokébots you create by 2, and increase the maximum complexity of Pokébots you can control by 2.",
    book: "DPDoM",
    pageNum: 80,
  },
  {
    name: "Jailbreaker",
    prerequisites: "Basic Balls",
    frequency: "At-Will – Extended Action",
    effect: "You may craft any Poké Ball Case Recipe for which you qualify.",
    seeAlso: ["Poké Ball Case Recipes"],
    book: "DPDoM",
    pageNum: 82,
  },
  {
    name: "Poké Ball Mods",
    prerequisites: "Jailbreaker",
    frequency: "Static",
    effect: "You may craft any Poké Ball Modification.",
    seeAlso: ["Poké Ball Modifications"],
    book: "DPDoM",
    pageNum: 82,
  },
  {
    name: "Fusion Cases",
    tags: ["Jailbreaker Research Field"],
    prerequisites: "Jailbreaker, Master Technology Education",
    frequency: "At-Will – Extended Action",
    effect:
      "You combine the two Poké Ball Cases into a single Fusion Case with both effects and types. Fusion Cases may not be used as Ingredients for this Feature.",
    extraFields: { Ingedients: ": Two different types of Poké Ball Cases." },
    book: "DPDoM",
    pageNum: 82,
  },
  {
    name: "Case Specialist",
    tags: ["Jailbreaker Research Field"],
    prerequisites: "Jailbreaker, Adept Technology Education",
    frequency: "1 AP – Swift Action",
    trigger:
      "You hit a target with a Poké Ball with a Spray, Flash, Bounce, or Zap Case applied to it.",
    effect:
      "The Case has additional effects according to its type(s).\n\n»» Spray Case: After resolving the effects of the Case, the target loses a Tick of Health Points for each Persistent or Volatile Status Affliction they have. This may only affect a target once per Scene.\n\n»» Flash Case: The Case uses the Move Flash as a Burst 2 instead of a Cone 2\n\n»» Bounce Case: The Poké Ball bounces an additional time. This may not cause it to hit a target more than once.\n\n»» Zap Case: The target can only use At-Will actions until the end of their next turn. This may only affect a target once per Scene.",
    book: "DPDoM",
    pageNum: 82,
  },
  {
    name: "Upgrader",
    tags: ["Upgrader Research Field"],
    prerequisites: "Novice Medicine Education, Novice Technology Education",
    frequency: "At-Will – Extended Action",
    effect:
      "You may craft any Augmentation Recipe for which you qualify and install them on yourself and willing Pokémon and Trainers.",
    seeAlso: ["Augmentation Recipes"],
    book: "DPDoM",
    pageNum: 84,
  },
  {
    name: "Emergency Reactivation",
    tags: ["Upgrader Research Field"],
    prerequisites: "Upgrader, Adept Technology Education",
    frequency: "1 AP – Free Action",
    trigger: "You or your Pokémon suffer Augmentation Shock",
    effect:
      "The triggering user does not suffer Augmentation Shock and their Augmentations are not disabled. This Feature may affect a target only once per Scene.",
    book: "DPDoM",
    pageNum: 84,
  },
  {
    name: "Efficient Installation",
    tags: ["Upgrader Research Field"],
    prerequisites: "Upgrader, Expert Technology Education",
    frequency: "Static",
    effect:
      "You and your Pokémon gain a +2 boost to their maximum Augmentation Capacity and count their used Capacity as 2 lower for the purposes of Augmentation Shock. You and your Pokémon can install multiple Augmentations in the same Slot.",
    book: "DPDoM",
    pageNum: 84,
  },
  {
    name: "Experimental Designs",
    tags: ["Upgrader Research Field"],
    prerequisites: "Upgrader, Master Technology Education",
    frequency: "At-Will – Extended Action ",
    target: "You or your Pokémon with Augmentations",
    effect:
      "Choose an Augmentation the target has and apply the upgrade below. Experimental Designs may affect a target twice.\n\n»» Enhanced Sight: The user gains the X-Ray Vision Capability.\n\n»» Smart Vision: The user learns the Move Feint without taking a Move Slot.\n\n»» Synthetic Muscle: The user recovers from Injuries twice as fast and heals one more Injury per day.\n\n»» Embedded Weaponry: The weapon is Fine and gains Deadly Strike as a Master Move.\n\n»» Wired Reflexes: The user gains one more Reflex Point per Scene and may also spend Reflex Points to gain +2 Critical Hit Range for one full round.\n\n»» Medical Nanobots: Once a Scene, the user may cure themselves of all Persistent Status Afflictions as a Standard Action.\n\n»» Dermal Plating: The user may also activate Dermal Plating to resist Special Damage.\n\n»» Thermal-Optic Camo: While active, the user is invisible to Aura Reading and Thought Detection.",
    book: "DPDoM",
    pageNum: 84,
  },
  {
    name: "Glitch Bender",
    tags: ["Class", "+Special Defense"],
    prerequisites:
      "Glitched Existence, Novice Focus, Occult Education, or Perception",
    frequency: "Static",
    effect: "You gain the Synchronize Ability.",
    book: "DPDoM",
    pageNum: 86,
  },
  {
    name: "I Am Error",
    tags: ["+Special Defense"],
    prerequisites: "Glitch Bender",
    frequency: "2 AP – Free Action",
    trigger: "You gain a Status Affliction",
    effect:
      "Roll 1d10 and change which Status Affliction is gained according to the chart. If the target already has that Status Affliction, roll again.",
    book: "DPDoM",
    pageNum: 86,
  },
  {
    name: "Corrupt Reality",
    tags: ["+Special Defense"],
    prerequisites:
      "Glitch Bender, Adept Perception, Occult Education, or Focus",
    frequency: "Scene – Free Action",
    target: "Any roll made by an enemy",
    effect: "You may force the enemy to reroll that roll.",
    book: "DPDoM",
    pageNum: 86,
  },
  {
    name: "Code Injection",
    tags: ["+Special Defense"],
    prerequisites: "Corrupt Reality",
    frequency: "1 AP – Standard Action",
    target: "A Pokémon or Trainer within 5 meters",
    effect:
      "You may use any of the Glitches below. They are treated as a Status-Class attack with an AC of 2. You may only use each Glitch once per Scene, and each target may only be affected by Code Injection once per Scene.\n\n»» Object Not Found: The target may not benefit from Equipment, Held Items, and consumable Items for one full round.\n\n»» Access Denied: The target is Slowed and may only take At-Will actions for one full round.\n\n»» Blue Screen: The target is Blinded and Vulnerable for one full round.",
    book: "DPDoM",
    pageNum: 86,
  },
  {
    name: "Null Error",
    tags: ["+Special Defense"],
    prerequisites: "Glitch Bender",
    frequency: "Static",
    effect: "You learn the Moves Snatch and Disable.",
    book: "DPDoM",
    pageNum: 86,
  },
  {
    name: "Glitch Shuffle",
    tags: ["+Special Defense"],
    prerequisites:
      "Glitch Bender, Expert Perception, Occult Education, or Focus",
    frequency: "Static",
    effect: "You learn the Moves Metronome and Topsy-Turvy",
    book: "DPDoM",
    pageNum: 86,
  },
  {
    name: "Glitch Burst",
    tags: ["+Special Defense"],
    prerequisites:
      "Glitch Shuffle, Master Focus, Occult Education, or Perception",
    frequency: "2 AP – Swift Action",
    trigger: "You hit with Topsy-Turvy or use another Glitch Bender Move",
    effect:
      "Glitch Burst’s effect depends on the triggering Move.\n\n»» Disable: The target of Disable is also Suppressed.\n\n»» Snatch: Regain one use of a Glitch Bender Move. This may only affect each Move once per Scene.\n\n»» Metronome: Generate three random Moves instead of one, and choose which Move to use.\n\n»» Topsy-Turvy: The target of Topsy-Turvy becomes Confused. They are automatically cured The Glitch Pokémon of this Confusion at the end of their next turn.",
    book: "DPDoM",
    pageNum: 86,
  },
];

export default dpdom;
