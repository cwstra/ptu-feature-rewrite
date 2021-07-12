import { Entry } from "./types.ts";

const introductory: Entry[] = [
  //  name: "Pokémon Raising & Battling",
  {
    name: "Command Versatility",
    prerequisites: "Adept Command, Guile, or Pokémon Education",
    frequency: "1 AP – Free Action",
    trigger: "Your Pokémon takes its turn.",
    effect:
      "Your Pokémon may give up use of a Scene or Daily Move to regain use of a Scene or Daily Move which it has already used. Your Pokémon may give up use of a Daily Move to regain use of a Scene Move, but not vice-versa. You may use Command Versatility only once per Scene per Pokémon.",
    book: "Core",
    pageNum: 59,
  },
  {
    name: "Press",
    prerequisites: "Adept Intimidate",
    frequency: "At-Will – Standard Action",
    target: "Your own Pokémon.",
    effect:
      "You hit your Pokémon, and they lose 1/6th of their Max Hit Points and are cured of Sleep. Raise any two of their Stats by +1 CS each, and you may add half of your Intimidate Rank to any Skill Checks made this round to make this Pokémon obey orders. Using Press on a Pokémon may make them dislike you.",
    book: "Core",
    pageNum: 59,
  },
  {
    name: "Quick Switch",
    prerequisites: "Novice Acrobatics or Guile",
    frequency: "2 AP – Free Action",
    trigger: "Your Pokémon Faints; or an opponent sends out a Pokémon",
    effect:
      "You may return and send out a Pokémon as a Free Action. You may perform this Feature on your turn without a Trigger. Pokémon sent out by Quick Switch cannot trigger another trainer’s Quick Switch. When you swap Pokémon using Quick Switch, you do not lose a Pokémon turn.",
    book: "Core",
    pageNum: 59,
  },
  {
    name: "Species Savant",
    prerequisites:
      "3 different individual Pokémon of the same evolutionary line",
    frequency: "Static",
    effect:
      "When you take Species Savant, choose a single Evolutionary Family. Your Pokémon of your Chosen Evolutionary Family have each of their Base Stats increased by +1.",
    book: "Core",
    pageNum: 59,
  },
  {
    name: "Tutoring",
    prerequisites: "Novice General Education, Special (See Effect)",
    frequency: "One Time Use x3 – Extended Action",
    effect:
      "When activating this Feature, select a Move known either by yourself or by 3 Pokémon you own. This Move is Mastered. As an Extended Action, you may have Pokémon spend 2 Tutor Points to learn a Move you have Mastered. Pokémon targeted this way can only learn Moves that they could learn by Level Up, TM, Egg Move, or Move Tutor. You may take Tutoring multiple times, each time gaining 3 uses of the Feature.",
    note: "To be clear, this Feature lets you choose a total of three different Moves you can Tutor. The use limitation isn't on how often you can Tutor them; once you have Mastered a Move, you can Tutor it At-Will.",
    book: "Core",
    pageNum: 59,
  },
  //  name: "Pokémon Training & Orders",
  {
    name: "Agility Training",
    tags: ["Training", "Orders"],
    prerequisites: "Novice Athletics, Untrained Command",
    frequency: "At-Will – Special",
    effect:
      "The target becomes Agile until the end of the effect duration. Agile Pokémon gain a +1 bonus to Movement Capabilities and +4 to Initiative.",
    book: "Core",
    pageNum: 60,
  },
  {
    name: "Brutal Training",
    tags: ["Training", "Orders"],
    prerequisites: "Novice Intimidate, Untrained Command",
    frequency: "At-Will – Special",
    effect:
      "The target becomes Brutal until the end of the effect duration. Brutal Pokémon increase the Critical-Hit and Effect Range of all attacks by +1.",
    book: "Core",
    pageNum: 60,
  },
  {
    name: "Focused Training",
    tags: ["Training", "Orders"],
    prerequisites: "Novice Command",
    frequency: "At-Will – Special",
    effect:
      "The target becomes Focused until the end of the effect duration. Focused Pokémon gain a +1 bonus to Accuracy Rolls and +2 to Skill Checks.",
    book: "Core",
    pageNum: 60,
  },
  {
    name: "Inspired Training",
    tags: ["Training", "Orders"],
    prerequisites: "Novice Charm, Untrained Command",
    frequency: "At-Will – Special",
    effect:
      "The target becomes Inspired until the end of the effect duration. Inspired Pokémon gain a +1 bonus to Evasion and +2 to Save Checks.",
    book: "Core",
    pageNum: 60,
  },
  {
    name: "Commander's Voice",
    prerequisites: "Two Features with the [Orders] tag",
    frequency: "Static",
    effect:
      "You may give two different [Orders] as a single Standard Action, or you may give one set of [Orders] as a Swift Action.",
    note: "If this is used to use Focused Command and another [Order] that has targets, the second Order applies to both Pokémon you are commanding that turn. Commander’s Voice doesn’t allow you to use Focused Command as a Swift Action.",
    book: "Core",
    pageNum: 60,
  },
  {
    name: "Focused Command",
    tags: ["Orders"],
    prerequisites:
      "Master Command, one of Focus, Guile, Intimidate, or Pokémon Education at Expert",
    frequency: "At-Will – Standard Action + Swift Action",
    effect:
      "You may have a second Pokémon take a turn this round, but both Pokémon can only take At-Will actions that round. Additionally, both Pokémon receive a -5 Penalty on all Damage Rolls. You may pay 1 AP at the beginning of the round to lift the Frequency Restriction OR the Damage Penalty for the remainder of the round, or pay 2 AP to lift both.",
    note: "Focused Command has no targets, which may be relevant to cetain Features which refer to [Orders]",
    book: "Core",
    pageNum: 60,
  },
  {
    name: "Ravager Orders",
    prerequisites: "Expert Command or Intimidate",
    frequency: "Static",
    effect: "You gain the Reckless Advance and Strike Again! Orders.",
    seeAlso: ["Reckless Advance", "Strike Again!"],
    book: "Core",
    pageNum: 61,
  },
  {
    name: "Reckless Advance",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Ravager Orders",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is Bound, increase the damage rolls of the target’s damaging melee attacks by +8, and these attacks Trip targets on Accuracy Rolls of 18+. When the target of Reckless Advance hits with a damaging melee attack, they become Vulnerable for one full round.",
    book: "Core",
    pageNum: 61,
  },
  {
    name: "Strike Again!",
    tags: ["Orders"],
    prerequisites: "Ravager Orders",
    frequency: "Scene – Standard Action",
    target: "Your Pokémon",
    effect:
      "The target may immediately take an additional Standard Action to use an At-Will attack.",
    book: "Core",
    pageNum: 61,
  },
  {
    name: "Marksman Orders",
    prerequisites: "Expert Perception or Guile",
    frequency: "Static",
    effect: "You gain the Trick Shot and Long Shot Orders.",
    seeAlso: ["Trick Shot", "Long Shot"],
    book: "Core",
    pageNum: 61,
  },
  {
    name: "Trick Shot",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Marksman Orders",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is Bound, decrease the Accuracy Roll of the target’s damaging ranged attacks by -2. The Critical Hit range of those attacks is increased by +3. This Feature does not affect Moves without an AC value.",
    book: "Core",
    pageNum: 61,
  },
  {
    name: "Long Shot",
    tags: ["Orders"],
    prerequisites: "Marksman Orders",
    frequency: "Scene x2 – Standard Action",
    target: "Your Pokémon",
    effect:
      "The target’s damaging ranged attacks have their range doubled until the end of their next turn, and deal X additional damage. X is equal to the distance in meters that the attack traveled. Long Shot does not increase the size of area of effect attacks. If attacks altered by Long Shot are Critical Hits, add the value of the Damage Dice Roll an additional time to the total damage.",
    book: "Core",
    pageNum: 61,
  },
  {
    name: "Trickster Orders",
    prerequisites: "Expert Charm or Guile",
    frequency: "Static",
    effect: "You gain the Capricious Whirl and Dazzling Dervish Orders.",
    seeAlso: ["Capricious Whirl", "Dazzling Dervish"],
    book: "Core",
    pageNum: 62,
  },
  {
    name: "Capricious Whirl",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Trickster Orders",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is Bound, the target has a +3 bonus to its Evasion but deals 5 less damage with all damaging attacks.",
    book: "Core",
    pageNum: 62,
  },
  {
    name: "Dazzling Dervish",
    tags: ["Orders"],
    prerequisites: "Trickster Orders",
    frequency: "Scene x2 – Standard Action",
    target: "Your Pokémon",
    effect:
      "Until the end of their next turn, the target adds their non-stat Evasion to their Movement Capabilities and whenever they attack a foe or Shift through a square occupied by a foe, that foe suffers a -3 penalty to all rolls until the end of their next turn. This effect may only affect a foe once per round.",
    book: "Core",
    pageNum: 62,
  },
  {
    name: "Guardian Orders",
    prerequisites: "Expert Charm or Intimidate",
    frequency: "Static",
    effect: "You gain the Brace for Impact and Sentinel Stance Orders.",
    seeAlso: ["Brace for Impact", "Sentinel Stance"],
    book: "Core",
    pageNum: 62,
  },
  {
    name: "Brace for Impact",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Guardian Orders",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is Bound, once a round, when the target uses a self-targeting Status Move, they may gain 5 Damage Reduction until the end of their next turn. They may also activate this effect as a Standard Action.",
    book: "Core",
    pageNum: 62,
  },
  {
    name: "Sentinel Stance",
    tags: ["Orders"],
    prerequisites: "Guardian Orders",
    frequency: "Scene x2 – Standard Action",
    target: "Your Pokémon",
    effect:
      "Until the end of your next turn, the target may attempt to Intercept attacks for allies as a Shift Action. If they do so, they gain 10 Damage Reduction against the attack. If the target is also under the effect of Brace for Impact, they may gain 5 Damage Reduction from it as if they had used a self-targeting Status Move.",
    book: "Core",
    pageNum: 62,
  },
  {
    name: "Precision Orders",
    prerequisites: "Expert Command or Perception",
    frequency: "Static",
    effect: "You gain the Pinpoint Strike and Perfect Aim Orders.",
    seeAlso: ["Pinpoint Strike", "Perfect Aim"],
    book: "Core",
    pageNum: 62,
  },
  {
    name: "Pinpoint Strike",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Precision Orders",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "Increase the Accuracy and Effect Range of the target’s damaging attacks by +2. These attacks deal 5 less damage, before applying weakness and resistance.",
    book: "Core",
    pageNum: 62,
  },
  {
    name: "Perfect Aim",
    tags: ["Orders"],
    prerequisites: "Precision Orders",
    frequency: "Scene x2 – Standard Action",
    target: "Your Pokémon",
    effect:
      "The next damaging attack the target performs before the end of your next turn automatically hits and ignores Defensive Abilities but deals damage as if it were resisted one step further than normal. You may still roll to trigger any Effect Ranges or Critical Hits. All targets of the attack may not activate any Blessings in response, and the attack may not be Intercepted or avoided in any way (ex: with Dodge, Shield Moves, etc).",
    book: "Core",
    pageNum: 62,
  },
  //name: "Combat",
  {
    name: "Blur",
    tags: ["+Speed"],
    prerequisites: "Expert Acrobatics, Expert Stealth",
    frequency: "Static",
    effect:
      "Attacks and Moves targeting you that don’t require an Accuracy Check now require one, as though they had Accuracy Check of 2. You may only apply half of your Evasion to these Attacks and Moves.",
    book: "Core",
    pageNum: 63,
  },
  {
    name: "Defender",
    tags: ["+HP"],
    prerequisites: "Adept Athletics",
    frequency: "Static",
    effect:
      "Using the Intercept Maneuvers requires only a Shift Action Interrupt.",
    book: "Core",
    pageNum: 63,
  },
  {
    name: "Dive",
    tags: ["+Speed"],
    prerequisites: "Adept Acrobatics",
    frequency: "Scene x2 – Shift Action, Interrupt",
    trigger:
      "You are targeted by a Ranged 1-Target Attack, or are in a Cone, Burst, Blast, or Line.",
    effect:
      "You may immediately Shift 1 Meter, and then become Tripped. This Feature cannot be used if you are Stuck, Grappled, or otherwise impaired from Shifting. This Feature causes you to dodge Ranged attacks aimed at you, and may let you avoid Cones, Bursts, Blasts, or Lines if the shift removes you from the area of effect.",
    book: "Core",
    pageNum: 63,
  },
  {
    name: "Fighter's Versatility",
    tags: ["+Any"],
    prerequisites: "Learned two Scene or Daily Moves",
    frequency: "Scene – Free Action",
    trigger: "You gain Initiative.",
    effect:
      "You may give up use of a Scene or Daily Move to regain use of a Scene or Daily Move which you have already used. You may give up use of a Daily Move to regain use of a Scene Move, but not vice-versa.",
    book: "Core",
    pageNum: 63,
  },
  {
    name: "Multi-Tasking",
    tags: ["+Speed"],
    prerequisites: "20 Speed Stat, Master Acrobatics",
    frequency: "Scene x2 – Swift Action",
    effect:
      "You may take two Standard Actions instead of one this turn, but both actions must have an At-Will Frequency.",
    book: "Core",
    pageNum: 63,
  },
  {
    name: "Signature Move",
    tags: ["+Any"],
    prerequisites: "Learned four Moves",
    frequency: "Static",
    effect:
      "Choose a Move you know. Increase the Move’s Frequency one step, as if you had used a PP Up. This choice cannot be changed once made. This Feature may not select Moves known through temporary means, nor can these Moves be used to qualify for this Feature.",
    book: "Core",
    pageNum: 63,
  },
  {
    name: "Type Expertise",
    tags: ["Ranked 2", "+Any"],
    prerequisites: "Level 9, 3 Moves of the Chosen Type in your Move List",
    frequency: "Static",
    effect:
      "Each Rank, choose a Type of which you know at least 3 Moves. You gain STAB for the chosen Type. STAB is never applied to Struggle Attacks.",
    book: "Core",
    pageNum: 63,
  },
  {
    name: "Walk It Off",
    tags: ["+HP"],
    prerequisites: "Adept Athletics, Novice Focus",
    frequency: "Daily – Extended Action",
    effect:
      "Remove one Injury from yourself and regain 1/4th of your maximum Hit Points. This Injury removal doesn’t count against the natural healing limit on Injuries each day.",
    book: "Core",
    pageNum: 63,
  },
  //  name: "Other",
  {
    name: "First Aid Expertise",
    prerequisites: "Medic Training, Expert Medicine Education",
    frequency: "Daily x3 – Extended Action",
    target: "Pokemon or Trainers",
    effect:
      "The target may remove one Injury, has all Hit Points restored, and is cured of all Status Afflictions. You may use First Aid Expertise only once per day per target. First Aid Expertise requires access to a First Aid Kit.",
    book: "Core",
    pageNum: 64,
  },
  {
    name: "Let Me Help You With That",
    frequency: "Daily x3 – Full Action, Interrupt",
    trigger:
      "An allied Trainer fails a Skill Check in a Skill you have Ranked at Novice or higher.",
    effect:
      "The ally may re-roll the Skill Check with a Bonus equal to your Skill Rank.",
    book: "Core",
    pageNum: 64,
  },
  {
    name: "Poké Ball Crafter",
    prerequisites: "Basic Balls, Poké Ball Repair, Expert Technology Education",
    frequency: "Static",
    effect:
      "You may craft Dusk, Dive, Heal, Luxury, Net, Nest, Quick, Repeat, or Timer Balls for $700. Requires access to a Poké Ball Tool Box.",
    book: "Core",
    pageNum: 64,
  },
  {
    name: "PokéManiac",
    prerequisites: "Adept Pokémon Education",
    frequency: "At-Will – Standard Action",
    target: "A Pokémon",
    effect:
      "Make a Pokemon Education Check with a DC of 10. If you succeed, you determine the target’s Level, Types, Nature, and Abilities.",
    book: "Core",
    pageNum: 64,
  },
  {
    name: "Psionic Sight",
    tags: ["+Special Defense"],
    prerequisites: "Elemental Connection (Psychic)",
    frequency: "Static",
    effect:
      "You are able to visibly see any Psychic Residue left on Humans or Pokémon due to the effects of Psionic abilities. Each Human or Pokémon leaves distinct Psychic Residue on their targets; you are easily able to distinguish which targets have been affected by the same Psionic, though to identify that Psionic you need to have a way of knowing their signature (such as simply seeing them do it, and seeing the resulting signature).",
    book: "Core",
    pageNum: 64,
  },
  {
    name: "Skill Monkey",
    prerequisites: "Three Skills at Adept Rank or higher",
    frequency: "Daily x3 – Free Action",
    trigger: "You make a Skill Check",
    effect:
      "You may re-roll the triggering Skill Check with a +2 Bonus, taking the new result. This Feature may be used to re-roll a specific roll only once.",
    book: "Core",
    pageNum: 64,
  },
]

export default introductory;
