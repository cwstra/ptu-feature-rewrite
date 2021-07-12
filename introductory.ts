import { Entry } from "./types.ts";

const introductory: Entry[] = [
  // Ace Trainer
  {
    name: "Ace Trainer",
    tags: ["Class"],
    prerequisites: "Novice Command",
    frequency: "Drain 1 AP – Extended Action",
    trigger: "You spend at least half an hour training your Pokémon",
    effect:
      "For each Pokémon that has been trained during this time, choose a Stat besides HP; that Stat becomes Trained until an Extended Rest is taken. The default State of Trained Stats is +1 Combat Stages instead of 0. A Pokémon may have only one Trained Stat at a time.",
    note: "Just to clarify, this Feature Drains 1 AP per training session, not per Pokémon. So train as many as you can to get the most out of this Feature!",
    book: "Core",
    pageNum: 75,
  },
  {
    name: "Perseverance",
    prerequisites: "Ace Trainer",
    frequency: "1 AP – Free Action",
    trigger: "Your Pokémon gains an Injury",
    effect:
      "The target instead does not gain an Injury. Perseverance may activate only once per Scene per target.",
    book: "Core",
    pageNum: 75,
  },
  {
    name: "Elite Trainer",
    prerequisites: "Ace Trainer",
    frequency: "Static",
    effect:
      "Choose Agility Training, Brutal Training, Focused Training, or Inspired Training. You gain the chosen Feature, even if you do not meet the prerequisites. When training, you may apply up to two different [Training] Features on each of your Pokémon. If you already have all of these Features, instead pick another Feature for which you qualify.",
    book: "Core",
    pageNum: 75,
  },
  {
    name: "Critical Moment",
    tags: ["Orders"],
    prerequisites: "Elite Trainer, Adept Command",
    frequency: "Scene x2 – Standard Action",
    target: "Your Pokemon with [Training] Features applied",
    effect:
      "The bonuses from your Pokemon’s [Training] are tripled until the end of your next turn.",
    book: "Core",
    pageNum: 75,
  },
  {
    name: "Top Percentage",
    prerequisites: "Ace Trainer, Expert Command",
    frequency: "At-Will – Free Action",
    trigger: "Your Pokémon levels up to a Level evenly divisible by 5",
    effect:
      "Your Pokémon gains an extra Tutor Point. Top Percentage may be used on a single Pokémon a maximum of 4 times. Once a Pokémon has gained 4 Tutor Points in this way, increase each of that Pokémon’s Base Stats by +1.",
    book: "Core",
    pageNum: 75,
  },
  {
    name: "Signature Technique",
    prerequisites: "Elite Trainer, Expert Command",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points remaining",
    effect:
      "The target loses 2 Tutor Points. Choose one Move on the Target’s Move List. That Move becomes the target’s Signature Technique, and you may apply one of the modifications listed in the Signature Technique List to the Move. The Move being modified must fit the category of the modification, and you must have the associated Training Feature to apply a modification. A Pokémon may only have one Signature Technique at a time. If you choose to teach a Pokémon a different Signature Technique, the old one is lost, and 1 Tutor Point is refunded. 1 Tutor Point is also refunded if the Pokémon ever forgets a Signature Technique Move.",
    seeAlso: "Signature Technique List",
    note: "Be sure to give a cool name to your Pokémon's Signature Technique!",
    book: "Core",
    pageNum: 75,
  },
  {
    name: "Champ in the Making",
    prerequisites: "4 Ace Trainer Features, Master Command",
    frequency: "Drain 1 AP – Free Action",
    trigger: "You use Ace Trainer to give Pokémon Trained Stats",
    effect:
      "Choose two Trained Stats for each Pokémon instead of one. A Pokémon may only have two Trained Stats this way.",
    book: "Core",
    pageNum: 75,
  },
  // Capture Specialist
  {
    name: "Capture Specialist",
    tags: ["Class", "+Speed"],
    prerequisites:
      "Acrobatics, Athletics, Stealth, or Survival at Novice; Guile, or Perception at Novice",
    frequency: "Static",
    effect:
      "You gain two Capture Techniques of your choice. You must meet any prerequisites of the Technique.",
    seeAlso: "Capture Technique List",
    book: "Core",
    pageNum: 78,
  },
  {
    name: "Advanced Capture Techniques",
    tags: ["Ranked 4", "+Speed"],
    frequency: "Static",
    effect:
      "Each Rank, you gain two Capture Techniques of your choice. You must meet any prerequisites of the Technique. You may qualify for Advanced Capture Techniques’ prerequisites with the Acrobatics, Athletics, Stealth, Survival, Guile, or Perception Skills only.",
    seeAlso: "Capture Technique List",
    extraFields: {
      "Rank 1 Prequisites": "Capture Specialist",
      "Rank 2 Prequisites": "Capture Specialist, any 2 Skills at Adept Rank",
      "Rank 3 Prequisites": "Capture Specialist, any 2 Skills at Expert Rank",
      "Rank 4 Prequisites": "Capture Specialist, any 3 Skills at Expert Rank",
    },
    book: "Core",
    pageNum: 78,
  },
  {
    name: "Captured Momentum",
    tags: ["+Speed"],
    prerequisites: "Advanced Capture Techniques Rank 2",
    frequency: "At-Will – Free Action",
    trigger: "You successfully Capture a Pokémon",
    effect:
      "Choose One:\n»You or your Pokémon gain a +2 bonus to their next Accuracy Roll during this combat.\n»You subtract your highest Skill Rank out of Acrobatics, Athletics, Stealth, Survival, Guile, or Perception from your next Capture Roll during this combat.\nn»You gain 1 Temporary Action Point that disappears after one full round.",
    book: "Core",
    pageNum: 78,
  },
  {
    name: "Gotta Catch 'Em All",
    tags: ["+Speed"],
    prerequisites: "Advanced Capture Techniques Rank 3",
    frequency: "Daily x3 – Swift Action",
    trigger: "Your make a Capture Roll.",
    effect:
      "You may switch the rolled digits on your 1d100 roll. For example, if you roll a 91, that can be switched to a 19. This does not turn a roll of 1 into a “Natural” roll of 100.",
    book: "Core",
    pageNum: 78,
  },
  // Commander
  {
    name: "Commander",
    tags: ["Class"],
    prerequisites: "Novice Command",
    frequency: "Static",
    effect:
      "Choose one of Ravager Orders, Marksman Orders, Trickster Orders, Guardian Orders, or Precision Orders. You gain the chosen Feature, even if you do not meet its prerequisites.",
    book: "Core",
    pageNum: 81,
  },
  {
    name: "Mobilize",
    tags: ["Orders"],
    prerequisites: "Commander",
    frequency: "At-Will – Free Action",
    target: "Any Ally",
    effect:
      "The target cannot provoke Attacks of Opportunity on their next turn. Mobilize may target an Ally only once per encounter.",
    book: "Core",
    pageNum: 81,
  },
  {
    name: "Leadership",
    prerequisites: "Commander",
    frequency: "Static",
    effect:
      "You may use [Orders] that have targets to target any Ally, even if normally those [Orders] would only let you apply the effect to your own Pokemon. Any other conditions still apply.",
    book: "Core",
    pageNum: 81,
  },
  {
    name: "Battle Conductor",
    prerequisites: "Leadership",
    frequency: "At-Will – Swift Action",
    trigger: "You give [Orders] with a Frequency of At-Will that have targets",
    effect: "You may target up to two additional Allies with the [Orders].",
    note: "This may be used with [Orders] that have AP costs, but the AP Cost must be paid separately for each target if so.",
    book: "Core",
    pageNum: 81,
  },
  {
    name: "Complex Orders",
    prerequisites:
      "Commander, at least two Features with the [Orders] Tag that have targets",
    frequency: "At-Will – Shift Action",
    trigger: "You give [Orders] that have targets.",
    effect:
      "You may choose a different Order to give to each Target. You must pay all AP costs and follow Frequency restrictions for all Orders used in this way.",
    book: "Core",
    pageNum: 81,
  },
  {
    name: "Tip the Scales",
    prerequisites: "Commander, Expert Command",
    frequency: "2 AP – Swift Action",
    trigger: "You give [Orders] that have targets.",
    effect:
      "Your [Orders] with an At-Will Frequency instead target all allies within 10 Meters.",
    book: "Core",
    pageNum: 81,
  },
  {
    name: "Scheme Twist",
    prerequisites: "Commander, Master Command",
    frequency: "Scene x2 – Swift Action",
    trigger:
      "You give [Orders] with a Daily or Scene Frequency that have Targets.",
    effect: "You may target up to two additional Allies with the [Orders].",
    book: "Core",
    pageNum: 81,
  },
  // Coordinator
  {
    name: "Coordinator",
    tags: ["Class"],
    prerequisites:
      "Grace, Novice Charm, Command, Guile, Intimidate, or Intuition",
    frequency: "At-Will – Free Action",
    effect:
      "Your Pokémon may reroll a single Appeal Roll or Damage Roll. This Ability may be used only once per Contest, and once per Pokémon per Scene.",
    book: "Core",
    pageNum: 83,
  },
  {
    name: "Decisive Director",
    tags: ["Orders"],
    prerequisites: "Coordinator",
    frequency: "At-Will – Standard Action",
    target: "A Pokémon",
    effect:
      "Add or subtract X from the target’s Initiative until the end of your next turn. X is equal to your Charm Rank doubled.",
    book: "Core",
    pageNum: 83,
  },
  {
    name: "Adaptable Performance",
    prerequisites: "Coordinator",
    frequency: "Scene – Free Action",
    trigger: "Your Pokémon’s Turn to use a Move in a Contest",
    effect:
      "Choose two of your Pokémon’s Moves. Your Pokémon may perform your Contest Move as if had the Contest Typing of one of your chosen Moves, and had the effects of the other. You may not use either move on the next round of the contest. This effect may be used once per Contest.",
    book: "Core",
    pageNum: 83,
  },
  {
    name: "Flexible Preparations",
    prerequisites:
      "Adaptable Performance, Adept Charm, Command, Guile, Intimidate, or Intuition",
    frequency: "Daily – Extended Action",
    target: "A Pokémon that has Contest Stats from Poffins",
    effect:
      "The target may reallocate up to 2d6 of Poffin-Derived Contest Stats from one Contest Stat to another. This effect lasts until the end of the day.",
    book: "Core",
    pageNum: 83,
  },
  {
    name: "Innovation",
    prerequisites: "Adaptable Performance",
    frequency: "Daily – Extended Action",
    target: "A Pokémon with at least 1 Tutor Point.",
    effect:
      "The target loses 1 Tutor Point, and then learns a Move created with Innovation. A Pokémon may only have one Move created by Innovation at a time.",
    seeAlso: ["Innovation Move List"],
    book: "Core",
    pageNum: 83,
  },
  {
    name: "Nuanced Performance",
    prerequisites:
      "Coordinator, Expert Charm, Command, Guile, Intimidate, or Intuition",
    frequency: "1 AP – Free Action",
    trigger: "Your Pokémon miss all targets with a Move",
    effect:
      "That Move’s Frequency is not expended. This does not work with Moves that may fail to activate, such as moves with the Execute keyword.",
    book: "Core",
    pageNum: 83,
  },
  {
    name: "Reliable Performance",
    prerequisites:
      "Nuanced Performance, Master Charm, Command, Guile, Intimidate, or Intuition",
    frequency: "2 AP – Free Action",
    trigger:
      "Your Pokémon makes an Appeal Roll, Accuracy Check, or Skill Check",
    effect:
      "For appeal rolls, instead of making the Appeal Roll, you gain 1 Appeal Point for each Dice you would have rolled. For Accuracy Checks, act as if you had rolled a 10. For Skill Checks, multiply 3.5 by your Pokémon’s Skill Rank, and use the resulting number as the result of your roll, rounded down. For all rolls, add or subtract any modifiers as normal.",
    book: "Core",
    pageNum: 83,
  },
  // Hobbyist
  {
    name: "Hobbyist",
    tags: ["Class"],
    prerequisites: "Novice General Education, Novice Perception",
    frequency: "Static",
    effect: "You gain three Skill Edges for which you qualify.",
    note: 'You may count Hobbyist Features as "General Features" for the purposes of any effect that would grant you a General Feature',
    book: "Core",
    pageNum: 86,
  },
  {
    name: "Dilettante",
    tags: ["Ranked 4"],
    frequency: "Static",
    effect:
      "Each Rank of Dilletante, you gain both an Edge and a General Feature from the Dilettante List. You may gain the chosen Edge and Feature even if you do not meet the Skill prerequisites. You must meet any other Prerequisites.  Whenever you gain a Feature or Edge this way, change any Skill Rank applications or Skill Checks mandated directly by the Edge or Feature into your choice of General Education or Perception Skill Checks or Rank applications instead.",
    seeAlso: "Dilettante List",
    extraFields: { "All Ranks Prerequisites": "Hobbyist" },
    book: "Core",
    pageNum: 86,
  },
  {
    name: "Dabbler",
    prerequisites: "Hobbyist, Expert General Education or Perception",
    frequency: "Static",
    effect:
      "At the Level 5, 10, 20, 30, and 40 Character Advancement Level Milestones, if you choose to gain Bonus Stats, you also gain an Edge for which you qualify. If you choose Bonus Edges or Features, you also gain +2 to your choice of Attack or Special Attack. This applies retroactively.",
    note: "It takes a long time for this feature to bear fruit. Talk to your GM about how long the campaign will last, and whether you will reach Higher Levels.",
    book: "Core",
    pageNum: 86,
  },
  {
    name: "Look and Learn",
    image: "",
    prerequisites: "Hobbyist, Expert General Education or Perception",
    frequency: "x2 Uses – Extended Action",
    effect:
      "When you activate Look and Learn, you may gain any of the Features below even though they are Features from other Classes. You do not need to meet their normal prerequisites, but you must meet the Prerequisites listed. Look and Learn can be used two times; once to learn a Feature from the Scene Features List, and once to learn a Feature from the Action Point Features List.",
    book: "Core",
    pageNum: 86,
  },
  // Mentor
  {
    name: "Mentor",
    tags: ["Class"],
    prerequisites:
      "Two of Charm, Intimidate, Intuition, or Pokémon Education at Novice Rank",
    frequency: "Daily x3 – Extended Action",
    target: "A Pokémon with at least 1 Tutor Point remaining",
    effect:
      "The target loses 1 Tutor Point, and then learns a move from its tutor list marked with a (N), or any move on its level-up list learned at X Level or lower, where X is the target’s current Level plus the sum of your Mentor Skill Ranks. Note that despite being Tutored, these Moves count as if they were “natural” for organizational purposes.",
    note: "When you take Mentor, choose two of Charm, Intimidate, Intuition, and Pokémon Education to become your Mentor Skills. The Skills you choose must be at Novice Rank or higher.",
    book: "Core",
    pageNum: 88,
  },
  {
    name: "Lessons",
    prerequisites: "Mentor",
    frequency: "Daily x3 – Extended Action",
    effect: "You may perform any Mentor Lesson for which you qualify.",
    seeAlso: "Mentor Lessons",
    book: "Core",
    pageNum: 88,
  },
  {
    name: "Expand Horizons",
    prerequisites: "Mentor",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon",
    effect:
      "Your Pokémon gains 3 Tutor Points. A Pokémon may be targeted by Expand Horizons only once.",
    book: "Core",
    pageNum: 88,
  },
  {
    name: "Guidance",
    prerequisites: "Mentor",
    frequency: "Static",
    effect:
      "Your Pokémon’s base Move List limit is increased by +1 (Reminder: The default Move List Limit is 6).",
    book: "Core",
    pageNum: 88,
  },
  {
    name: "Move Tutor",
    prerequisites: "Mentor, one Mentor Skill at Expert Rank",
    frequency: "Daily – Extended Action",
    target: "A Pokémon with at least 2 Tutor Points.",
    effect:
      "The target loses 2 Tutor Points, and learns any move from its Tutor List.",
    book: "Core",
    pageNum: 88,
  },
  {
    name: "Egg Tutor",
    prerequisites: "Move Tutor",
    frequency: "Daily – Extended Action",
    target: "A Pokémon with at least 2 Tutor Points.",
    effect:
      "The target loses 2 Tutor Points, and learns any Move from its Egg Move List. A Pokémon may be targeted by Egg Tutor only one time.",
    book: "Core",
    pageNum: 88,
  },
  {
    name: "Lifelong Learning",
    prerequisites: "Move Tutor, one Mentor Skill at Master Rank",
    frequency: "Static",
    effect:
      "Your Pokémon may have up to 4 Moves from their Move List come from TMs or Move Tutors.",
    book: "Core",
    pageNum: 88,
  },
]

export default introductory;
