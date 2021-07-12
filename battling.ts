import { Entry } from "./types.ts";

const battling: Entry[] = [
  // Cheerleader
  {
    name: "Cheerleader",
    tags: ["Class"],
    prerequisites: "Inspired Training, Novice Charm",
    frequency: "X AP – Free Action",
    trigger: "You use [Orders]",
    effect:
      "Choose Cheered, Excited, or Motivated. All allies affected by the triggering effect gain the chosen condition.  This Feature costs 0 AP if the triggering effect affects only one ally, and costs 1 AP if it affects two or more.",
    seeAlso: "Cheerleader Conditions",
    book: "Core",
    pageNum: 93,
  },
  {
    name: "Cheer Brigade",
    prerequisites: "Cheerleader",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points remaining",
    effect:
      "Your Pokémon loses 2 Tutor Points and gains the Friend Guard Ability.",
    book: "Core",
    pageNum: 93,
  },
  {
    name: "Gleeful Interference",
    prerequisites: "Cheer Brigade, Adept Charm",
    frequency: "1 AP – Free Action",
    trigger:
      "Your Pokémon with the Friend Guard Ability hits a foe with a damaging attack",
    effect:
      "The triggering foe gains a -2 penalty to Accuracy for one full Round.",
    book: "Core",
    pageNum: 93,
  },
  {
    name: "Inspirational Support",
    prerequisites: "Cheer Brigade, Adept Charm",
    frequency: "Static",
    effect:
      "You may trigger Cheerleader as a Free Action when your Pokémon with Friend Guard activate an Ability or Status Move that affects only allies.",
    note: "When considering effects that could trigger Cheerleader this way, aside from the obvious Moves like Helping and Abilities like Plus and Minus, think about Blessings, Coats, etc too!",
    book: "Core",
    pageNum: 93,
  },
  {
    name: "Moment of Action",
    tags: ["Orders"],
    prerequisites: "Cheer Brigade, Adept Charm",
    frequency: "At-Will – Standard Action",
    target: "Up to two Allied Trainers",
    effect:
      "Each target gains 1 Temporary Action Point. These Action Points disappear after one full Round.",
    book: "Core",
    pageNum: 93,
  },
  {
    name: "Go, Fight, Win!",
    tags: ["Orders"],
    prerequisites: "Moment of Action, Expert Charm",
    frequency: "At-Will – Standard Action + Swift Action",
    effect:
      "Choose and perform one of the cheers below. You may perform each Cheer only once per Scene.\n\n»» Show Your Best!: Choose Defense or Special Defense. All allies on the field gain +1 Combat Stage in the Chosen Stat and become Motivated.\n\n»» Don’t Stop Now!: All allies on the field gain Temporary Hit Points equal to your Charm Rank and become Excited.\n\n»» I Believe In You!: All allies on the field gain a +2 bonus to Evasion for one full Round, and become Cheered.",
    book: "Core",
    pageNum: 93,
  },
  {
    name: "Keep Fighting!",
    prerequisites: "5 Cheerleader Features, Master Charm",
    frequency: "Daily x2 – Free Action",
    trigger:
      "Your Pokémon or an Ally Trainer with over 1 Hit Point is reduced to 0 Hit Points or lower",
    effect:
      "That Ally’s Hit Point count is reduced to 1 instead, and then gains Temporary Hit Points equal to your charm rank doubled.",
    book: "Core",
    pageNum: 94,
  },
  // Duelist
  {
    name: "Duelist",
    tags: ["Class"],
    prerequisites: "Focused Training, Novice Focus",
    frequency: "At-Will – Swift Action",
    target: "A Pokémon or Trainer",
    effect:
      "The Foe becomes Tagged; or if the foe is already Tagged, the foe loses the Tag. Only one foe can be Tagged this way at a time. If a new Foe is Tagged, all other Tags are lost. Your Pokémon under the effects of Focused Training gain half their Momentum (rounded up) as a Bonus to Accuracy and Evasion against Tagged Foes, but as long as a Foe is Tagged, they do not benefit from Focused Training’s Accuracy Bonus against other foes.",
    seeAlso: "Momentum",
    book: "Core",
    pageNum: 96,
  },
  {
    name: "Expend Momentum",
    tags: ["Orders"],
    prerequisites: "Duelist",
    frequency: "At-Will – Standard Action",
    target: "Your Pokémon under the effects of Focused Training",
    effect:
      "Apply one of the following effects on the target by spending that much Momentum.\n\n»» Spend 1 Momentum: Your Pokémon regains use of a EOT Frequency Move.\n\n»» Spend 2 Momentum: Your Pokémon automatically rolls an 11 on one d20 Roll of your choice on their next turn.\n\n»» Spend 3 Momentum: Your Pokémon regains a use of Scene Frequency Move. May be chosen only once per Scene per Pokémon.",
    book: "Core",
    pageNum: 96,
  },
  {
    name: "Effective Methods",
    prerequisites: "Duelist",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points remaining",
    effect:
      "Your Pokémon loses 2 Tutor Points and gains your choice of the Exploit or Tolerance Ability. You may only target a Pokémon once with Effective Methods.",
    book: "Core",
    pageNum: 96,
  },
  {
    name: "Directed Focus",
    prerequisites: "Effective Methods",
    frequency: "Static",
    effect:
      "Whenever your Pokémon with the Exploit or Tolerance Ability are targeted by [Orders], deal Super-Effective Damage, or take Super-Effective Damage, they gain +1 Momentum after all effects of the Move or Order are resolved.",
    book: "Core",
    pageNum: 96,
  },
  {
    name: "Type Methodology",
    prerequisites: "Effective Methods, Adept Focus",
    frequency: "Scene x2 – Free Action",
    effect:
      "Effects depend on whether your Pokémon has the Tolerance or Exploit ability.\n\n»» Whenever your Pokémon with Tolerance takes Super-Effective damage from a Tagged foe, your Pokémon may lose 2 Momentum to Resist that attack one step.\n\n»» Whenever your Pokémon with Exploit deals Resisted damage to a Tagged foe, your Pokémon may lose 2 Momentum to increase the effectiveness of the attack one step.",
    book: "Core",
    pageNum: 96,
  },
  {
    name: "Duelist's Manual",
    tags: ["Orders"],
    prerequisites: "Expend Momentum, Effective Methods, Expert Focus",
    frequency: "2 AP – Standard Action",
    target: "Your Pokémon under the effects of Focused Training",
    effect:
      "Apply one of the following effects. To choose an effect, your Pokémon must have a certain amount of Momentum. (Duelist’s Manual does not spend Momentum).\n\n»» 1 Momentum: Your Pokémon doubles their bonuses from Tolerance or Exploit until the end of their next turn and may change their Tolerance Ability into Exploit, or vice versa, until the end of their next turn.\n\n»» 2 Momentum: Your Pokémon’s next Pass, Cone, Close Blast, or Burst attack becomes a single target Melee attack, or their next Line or Ranged Blast attack becomes a single target Ranged attack. If this attack hits, the target becomes Vulnerable for one full round and has their Initiative set to 0 until the end of their next turn.\n\n»» 3 Momentum: Your Pokémon may act while ignoring the Confused, Rage, Infatuation, and Suppressed Volatile Status on their next turn as long as they attempt to attack a Tagged foe. May only be used once per Scene per Pokémon.",
    book: "Core",
    pageNum: 97,
  },
  {
    name: "Seize The Moment",
    prerequisites: "Duelist, Master Focus",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon would gain Momentum while already at 6 Momentum",
    effect:
      "Your Pokémon loses 6 Momentum, and then gains +1 Momentum. Your Pokémon may immediately make an attack as an Interrupt, but this attack must target only a Tagged Foe. If the attack misses, it still deals damage as if it had the Smite keyword. If the attack hits, it’s automatically a Critical Hit. If it would have already been a Critical Hit, your Pokémon gains Hit Points equal to half of its maximum Hit Points. May be used only once per Scene per Pokémon.",
    book: "Core",
    pageNum: 97,
  },
  // Enduring Soul
  {
    name: "Enduring Soul",
    tags: ["Class"],
    prerequisites: "Novice Athletics and Focus",
    frequency: "Static",
    effect:
      "You may add to your Pokémon’s HP stat when they level up, ignoring Base Relation, and you do not need to “correct” Stats due to this inflated HP.",
    book: "Core",
    pageNum: 99,
  },
  {
    name: "Staying Power",
    prerequisites: "Enduring Soul",
    frequency: "Scene – Free Action",
    trigger: "Your Pokémon Takes a Breather",
    effect:
      "Your Pokémon may “Take a Breather” even if it is Confused or Enraged, and it does not Trip or have to Shift away from enemies as part of the action. You may choose whether or not your Pokémon resets their Combat Stages to default.",
    book: "Core",
    pageNum: 99,
  },
  {
    name: "Shrug Off",
    prerequisites: "Staying Power",
    frequency: "Static",
    effect:
      "Once per day, each of your Pokémon may spend Shift Action to remove 1 Injury from themselves; this may also be activated as a Free Action whenever your Pokémon Take a Breather.",
    book: "Core",
    pageNum: 99,
  },
  {
    name: "Awareness",
    prerequisites: "Enduring Soul, 3 Pokémon with a Defensive Ability",
    frequency: "Static",
    effect: "Your Pokémon add +2 to all Save Checks.",
    book: "Core",
    pageNum: 99,
  },
  {
    name: "Resilience",
    prerequisites: "Awareness, Expert Athletics or Focus",
    frequency: "2 AP – Free Action",
    trigger:
      "Your Pokémon is hit by a Critical Hit or gains a Status Affliction (or both)",
    effect:
      "Your Pokémon does not gain a Status Affliction, and the triggering attack does damage as if it was not a Critical Hit. Resilience may only be used once per target per Scene.",
    book: "Core",
    pageNum: 99,
  },
  {
    name: "Not Yet!",
    prerequisites: "Enduring Soul, Expert Athletics or Focus",
    frequency: "Scene – Free Action",
    trigger:
      "Your Pokémon is Fainted, but is not at less than -100% Hit Points",
    effect:
      "Before fainting, the targeted Pokémon gains an Injury, and may then use a Move as an Interrupt. When the Move is resolved, the Pokémon then immediately faints. This consumes a Command as normal. This cannot be used with the Move Explosion, Flail, Pain Split, Reversal or Selfdestruct.",
    book: "Core",
    pageNum: 99,
  },
  {
    name: "Vim and Vigor",
    prerequisites: "Shrug Off, Master Athletics or Focus",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points",
    effect:
      "You spend an hour with the target. The target loses 2 Tutor Points, and gains the Vigor Ability.",
    book: "Core",
    pageNum: 99,
  },
  // Juggler
  {
    name: "Juggler",
    tags: ["Class", "+Speed"],
    prerequisites: "Quick Switch, Novice Acrobatics, Novice Guile",
    frequency: "Static",
    effect:
      "Using Quick Switch costs only 1 AP. Whenever you send a Pokémon into an encounter from a Poké Ball, they receive a +10 bonus to their Initiative during that round.",
    book: "Core",
    pageNum: 101,
  },
  {
    name: "Bounce Shot",
    tags: ["+Speed"],
    prerequisites: "Juggler",
    frequency: "At-Will – Free Action",
    trigger: "You throw a Poké Ball",
    effect:
      "After hitting its mark or landing, your Poké Ball bounces 3 meters in any direction. You may have your Poké Ball trigger captures or releases before or after the bounce.",
    book: "Core",
    pageNum: 101,
  },
  {
    name: "Juggling Show",
    tags: ["+Speed"],
    prerequisites: "Juggler",
    frequency: "Static",
    effect:
      "You may roll an additional Xd6 during the Introduction Stage of a Contest, where X is half of your Acrobatics Rank. You may choose any Contest Stat to attempt to gain Dice for with this roll.",
    book: "Core",
    pageNum: 101,
  },
  {
    name: "Round Trip",
    tags: ["+Speed"],
    prerequisites: "Juggler, Adept Acrobatics or Guile",
    frequency: "1 AP – Free Action",
    trigger: "Your Pokémon uses a Move",
    effect:
      "You may immediately switch your Pokémon that just performed a Move for another of your Pokémon. This effect lets Pokémon with the Trapped condition switch out.",
    book: "Core",
    pageNum: 101,
  },
  {
    name: "Tag In",
    tags: ["+Speed"],
    prerequisites: "Round Trip, Expert Acrobatics or Guile",
    frequency: "1 AP – Free Action",
    trigger: "You recall a Pokémon",
    effect:
      "The next Pokémon you send out is treated as if the recalled Pokémon had used Baton Pass on it.",
    book: "Core",
    pageNum: 101,
  },
  {
    name: "Emergency Release",
    tags: ["+Speed"],
    prerequisites: "Juggler, Expert Acrobatics or Guile",
    frequency: "2 AP – Shift Action",
    effect: "You may Release a Pokémon as an Interrupt.",
    book: "Core",
    pageNum: 101,
  },
  {
    name: "First Blood",
    tags: ["+Speed"],
    prerequisites: "Tag In, Master Acrobatics or Guile",
    frequency: "Scene – Free Action",
    trigger: "You release a Pokémon from its Poké Ball",
    effect:
      "If you have a Pokémon turn available this round or next, your Pokémon may use a Move as an Interrupt as soon as it is sent out. This consumes your Pokémon turn for the round (or the following round) as normal.",
    book: "Core",
    pageNum: 101,
  },
  // Rider
  {
    name: "Rider",
    tags: ["Class", "+Speed"],
    prerequisites:
      "Mounted Prowess, Agility Training, Novice Acrobatics or Athletics",
    frequency: "Static",
    effect:
      "While you are Mounted on a Pokemon under the effects of Agility Training, the bonuses from Agility Training are doubled.",
    book: "Core",
    pageNum: 103,
  },
  {
    name: "Ride as One",
    tags: ["+Speed"],
    prerequisites: "Rider",
    frequency: "Static",
    effect:
      "While you are Mounted, you and your Mount each use the highest of each other’s Speed Evasion. If both you and your Mount have the same Speed Evasion, you instead each receive a +1 bonus to Speed Evasion. Whenever one of you receives Initiative, either of you may take your turn. When the next person would receive initiative, the person that did not take their turn then takes it.",
    book: "Core",
    pageNum: 103,
  },
  {
    name: "Conqueror’s March",
    tags: ["Orders", "+Speed"],
    prerequisites: "Ramming Speed, Adept Acrobatics or Athletics",
    frequency: "At-Will – Standard Action",
    target: "Your Pokémon with Run Up",
    effect:
      "This round, if being used as a Mount, the target may use Dash, Burst, Blast, Cone, or Line range Moves with a range of Pass instead of their usual range.",
    book: "Core",
    pageNum: 103,
  },
  {
    name: "Ramming Speed",
    tags: ["+Speed"],
    prerequisites: "Rider",
    frequency: "At-Will - Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points",
    effect: "The target loses 2 Tutor Points and gains the Run Up Ability.",
    book: "Core",
    pageNum: 103,
  },
  {
    name: "Lean In",
    tags: ["+Speed"],
    prerequisites: "Ride as One",
    frequency: "Scene x2 – Free Action",
    trigger:
      "You and your Mount both take Damage from a Burst, Blast, Cone, or Line",
    effect: "Both you and your Mount Resist the attack one step further.",
    book: "Core",
    pageNum: 103,
  },
  {
    name: "Cavalier's Reprisal",
    tags: ["+Speed"],
    prerequisites: "Ride as One, Expert Acrobatics or Athletics",
    frequency: "1 AP – Free Action",
    trigger: "An adjacent foe hits your Mount with an attack",
    effect: "You may make a Struggle Attack against the triggering foe.",
    book: "Core",
    pageNum: 103,
  },
  {
    name: "Overrun",
    tags: ["+Speed"],
    prerequisites: "Conqueror's March, Expert Acrobatics or Athletics",
    frequency: "Scene x2 – Free Action",
    trigger:
      "Your Mount with Run Up makes a Damage Roll for a Dash or Pass Move",
    effect:
      "Your Pokémon adds their Speed Stat in addition to their normal attacking Stat to their Damage Roll. The target gains Damage Reduction against this attack equal to their own Speed Stat.",
    book: "Core",
    pageNum: 103,
  },
  // Taskmaster
  {
    name: "Taskmaster",
    tags: ["Class"],
    prerequisites: "Brutal Training, Novice Intimidate",
    frequency: "At-Will – Free Action",
    trigger: "You apply Brutal Training as a Training action",
    effect:
      "You may grant your Pokémon up to three injuries. If your Pokémon has at least one Injury, it becomes Hardened.",
    seeAlso: "Hardened",
    book: "Core",
    pageNum: 105,
  },
  {
    name: "Quick Healing",
    prerequisites: "Taskmaster",
    frequency: "At-Will – Extended Action",
    effect:
      "Your Hardened Pokémon may use Quick Healing to remove up to three injuries, and gains two Ticks of Hit Points for each Injury removed this way.",
    note: "The Injury Removal from this Feature counts as Natural Healing, and thus counts against the total number of Injuries that can be removed in a day",
    book: "Core",
    pageNum: 105,
  },
  {
    name: "Savage Strike",
    prerequisites: "Taskmaster",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points",
    effect: "The target loses 2 Tutor Points, and gains the Cruelty Ability.",
    book: "Core",
    pageNum: 105,
  },
  {
    name: "Strike of the Whip",
    prerequisites: "Taskmaster, Press",
    frequency: "At-Will – Swift Action",
    trigger: "You use Press",
    effect:
      "You may apply 1 or more of the following effects to the Pokémon hit by Press:\n\n»» Give the target 1 Injury and a Tick of Temporary Hit Points.\n\n»» Spend 1 AP and cure the target of Confusion, Infatuation, Rage, and Suppression.\n\n»» Use an [Orders] with targets you have on the target as a Free Action.",
    book: "Core",
    pageNum: 105,
  },
  {
    name: "Pain Resistance",
    prerequisites: "Taskmaster, Adept Intimidate",
    frequency: "1 AP – Free Action",
    trigger: "Your Pokémon with 1 or more injuries takes Damage",
    effect:
      "Your Pokémon gains X Damage Reduction against the triggering attack, where X is its Tick Value multiplied by the number of Injuries it has. This may be triggered once per Scene per Pokémon.",
    book: "Core",
    pageNum: 105,
  },
  {
    name: "Press On!",
    prerequisites: "Taskmaster, Expert Intimidate",
    frequency: "Static",
    effect:
      "Your Hardened Pokemon gain the following benefits, based on your Intimidate Rank\n\n»» Expert: When your Pokemon Faints, you may pay 1 AP. If you do, your Pokemon Faints at -30% Hit Points instead.\n\n»» Master: While acting at 0 Hit Points or less, your Pokemon’s Critical Hit, Effect Range, Evasion, Initiative, Damage Reduction, and Resistance Bonuses from being Hardened are doubled.",
    note: "Pokémon cannot use the Moves Explosion, Endure, Pain Split, or Self-Destruct while they have 0 Hit Points or less. Pokémon with the Soulless capability cannot benefit from Press On!",
    book: "Core",
    pageNum: 105,
  },
  {
    name: "Desperate Strike",
    prerequisites: "Savage Strike, Expert Intimidate",
    frequency: "Scene x2 – Free Action",
    trigger:
      "Your Pokémon triggers Cruelty, or scores a Critical Hit with damaging attack.",
    effect:
      "Your Pokémon may apply the effects of Cruelty to the attack without expending Cruelty’s Frequency. Cruelty’s effects may be purchased as if the foe had additional injuries equal to the number of injuries on the user. Desperate Strike may be used once per Scene per Pokémon.",
    book: "Core",
    pageNum: 106,
  },
  {
    name: "Deadly Gambit",
    prerequisites: "5 Taskmaster Features, Master Intimidate",
    frequency: "Scene – Free Action",
    trigger: "Your Pokémon is the target of a foe’s damaging melee attack",
    effect:
      "The triggering attack automatically hits as if it was a Critical Hit. Before damage resolves, your Pokémon may use a 1-Target damaging attack on the foe making the triggering attack as an Interrupt, Frequency allowing, and also automatically hits as a Critical Hit. Damage for both attacks then resolve at the same time.",
    note: "This effect bypasses immunity to Critical Hits on your own Pokémon, but not on the target. Though both attacks hit automatically and are Critical Hits, you may still roll to activate effects.",
    book: "Core",
    pageNum: 106,
  },
  // Trickster
  {
    name: "Trickster",
    tags: ["Class"],
    prerequisites: "Novice Guile",
    frequency: "1 AP – Free Action",
    trigger:
      "Your Pokémon hits a foe with a Status-Class Move or a foe triggers your Pokémon’s Hazard",
    effect:
      "After the Move is resolved, your Pokémon may perform a Dirty Trick or Manipulate Maneuver on that foe as a Free Action. The Maneuver automatically hits, but the target must be in range for the chosen Maneuver. Use your own Guile to resolve Manipulate Rolls.",
    book: "Core",
    pageNum: 108,
  },
  {
    name: "Bag of Tricks",
    tags: ["Ranked 2"],
    frequency: "Static",
    effect: "You gain two Trickster Techniques of your choice.",
    seeAlso: "Trickster Techniques",
    extraFields: { "All Ranks Prerequisites": "Trickster" },
    book: "Core",
    pageNum: 108,
  },
  {
    name: "Stacked Deck",
    image: "",
    prerequisites: "Trickster, Adept Guile",
    frequency: "1 AP – Free Action",
    trigger:
      "Your Pokémon hits a foe suffering from a Status Affliction or one of the other conditions in the table on page 108 of the Core handbook",
    effect:
      "Choose a Status Affliction or condition the triggering target is suffering from; the target suffers an additional effect according to the table. Stacked Deck may only affect a foe once per Scene.",
    book: "Core",
    pageNum: 108,
  },
  {
    name: "Flourish",
    prerequisites: "Trickster",
    frequency: "Static",
    effect:
      "Your Pokémon’s Status-Class Moves that affect foes ignore non-Stat Evasion. They may Critically Hit like damaging Moves on a roll of 20. Upon such a Critical Hit, choose one effect from the list below. This Critical Hit rate may be modified as normal.\n\n»» If the Move inflicts a Status Affliction with a Save Check, all affected targets get a -4 penalty to their first Save Check.\n\n»» If the Move lowers Combat Stages, then pick a Stat that the Move lowers and lower it by 1 additional Combat Stage.\n\n»» Your Pokémon gains a Tick of Temporary Hit Points.",
    book: "Core",
    pageNum: 108,
  },
  {
    name: "Encore Performance",
    prerequisites: "3 Trickster Features, Expert Guile",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Pokémon uses a Status-Class move that does not target foes.",
    effect:
      "Choose one of the following.\n\n»» Your Pokémon gains +1 Combat Stage in any Stat in which they haven’t gained a Combat Stage this turn.\n\n»» Your Pokémon gains a second Standard Action this round that must be used to make an At-Will action that does not trigger Encore Performance.\n\n»» If your Pokémon is placing Hazards, they may place an additional two units.\n\n»» If your Pokémon is activating a Weather Effect, it lasts an additional two turns.\n\n»» If your Pokémon is activating a Blessing, it gains one additional use.",
    book: "Core",
    pageNum: 108,
  },
  {
    name: "Sleight",
    prerequisites: "4 Trickster Features, Master Guile",
    frequency: "Scene x2 – Free Action",
    effect:
      "Your Pokémon may activate Sleight as an Interrupt to immediately take their turn and use a Status-Class Move as a Standard Action. If this Move targets a foe, it ignores Substitute and Defensive Abilities, and Blessings may not be activated against the Move.",
    book: "Core",
    pageNum: 108,
  },
]

export default battling;
