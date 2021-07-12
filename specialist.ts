import { Entry } from "./types.ts";

const specialist: Entry[] = [
  // Stat Ace
  {
    name: "Stat Ace",
    tags: ["Class", "Branch"],
    prerequisites:
      "Ace Trainer or Style Expert, 1 Pokémon with the chosen stat at 15 or more, Novice Command or Focus\n\nOr\n\n3 Pokémon with the chosen stat at 20 or higher, Novice Command or Focus",
    frequency: "Static",
    effect:
      "Your Pokémon have their Chosen Base Stat increased by +1, and by +1 more for every 10 Levels they have (for example, a Level 20 Pokémon would have your Chosen Stat’s base value increased by +3). Additionally, your Pokémon may ignore Base Relations, as long as they are adding to the Stat chosen for Stat Ace, and you do not need to “correct” Stats due to this inflated Stat Value.",
    note: "When you take Stat Ace, choose Attack, Defense, Special Attack, Special Defense, or Speed. This becomes your Pokémon’s Chosen Stat. You may take Stat Ace multiple times, choosing different Stats each time. If using Style Expert to qualify for Stat Ace, your Chosen Stat must be the Stat that correlates to your Chosen Contest Stat. Beauty is Special Attack, Cool is Attack, Cute is Speed, Smart is Special Defense, and Tough is Defense.",
    book: "Core",
    pageNum: 112,
  },
  {
    name: "Stat Link",
    tags: ["Branch"],
    prerequisites: "Stat Ace",
    frequency: "1 AP – Free Action",
    trigger:
      "At the end of your Pokémon’s turn, their Chosen Stat is at its default number of Combat Stages or less",
    effect:
      "The triggering Pokémon gains +1 Combat Stage in your Chosen Stat. (Note: The “Default” number of Combat Stages is usually 0)",
    book: "Core",
    pageNum: 112,
  },
  {
    name: "Stat Training",
    tags: ["Branch"],
    prerequisites: "Stat Ace",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 1 Tutor Point",
    effect:
      "Your Pokémon loses 1 Tutor Point, and learns a Move based on your Chosen Stat, even if your Pokémon cannot normally learn this Move:\n\n»» Attack: Swords Dance or Rage\n\n»» Defense: Iron Defense or Reflect\n\n»» Special Attack: Nasty Plot or Hidden Power\n\n»» Special Defense: Amnesia or Light Screen\n\n»» Speed: Agility or After You",
    book: "Core",
    pageNum: 112,
  },
  {
    name: "Stat Stratagem",
    tags: ["Branch", "Orders", "Stratagem"],
    prerequisites: "Stat Link, Stat Training, Master Focus or Command",
    frequency: "2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is Bound, the target has the following bonuses based on your Chosen Stat:\n\nAttack Effect: The target’s damaging Melee Attacks have their Critical Hit Range increased by 1 for each positive Combat Stage they have in Attack, up to a maximum of +3.\n\nDefense Effect: The target gains a +2 bonus to Save Checks against Paralysis, Sleep, and Freeze for each positive Combat Stage they have in Defense, up to a maximum of +6.\n\nSpecial Attack Effect: The target’s damaging Ranged Attacks have their Effect Range increased by 1 for each positive Combat Stage they have in Special Attack, up to a maximum of +3.\n\nSpecial Defense Effect: The target gains a +2 bonus to Save Checks against Confusion, Rage, and Infatuation for each positive Combat Stage they have in Special Defense, up to a maximum of +6.\n\nSpeed Effect: The target’s Movement Capabilities are increased by 1 for each positive Combat Stage they have in Speed, up to a maximum of +3.",
    book: "Core",
    pageNum: 113,
  },
  {
    name: "Stat Maneuver",
    tags: ["Branch"],
    prerequisites: "Stat Ace, Adept Command or Focus",
    frequency: "Scene – Free Action",
    effect:
      "Stat Maneuver’s Effect depends on your Chosen Stat:\n\nAttack Effect: You may activate this Feature to cause one of your Pokémon to use a Physical “Melee, 1-Target” Move as if its range was “Melee, Pass” or “Melee, 3-Targets” instead.\n\nDefense Effect: You may activate this feature whenever your Pokémon is hit by a Physical Attack to receive the blow as if your Pokémon’s Defense Combat Stages were at +6 instead of their current value.\n\nSpecial Attack Effect: You may activate this Feature to allow your Pokémon to use a Special Burst, Cone, Close Blast, Ranged Blast, or Line of any size as a Burst 1, Cone 2, Close Blast 2, or Line 4 instead.\n\nSpecial Defense Effect: You may activate this feature whenever your Pokémon is hit by a Special Attack to receive the blow as if your Pokémon’s Special Defense Combat Stages were at +6 instead of their current value.\n\nSpeed Effect: You may activate this Feature at any time to cause your Pokémon to use a Move as Priority or a Priority Move as Priority (Advanced).",
    book: "Core",
    pageNum: 112,
  },
  {
    name: "Stat Mastery",
    tags: ["Branch"],
    prerequisites: "Stat Maneuver",
    frequency: "Static",
    effect:
      "Stat Mastery’s Effect depends on your Chosen Stat:\n\nAttack Effect: When your Pokémon successfully uses a Push, Disarm, or Dirty Trick Combat Maneuver, the target of the Maneuver loses a Tick of Hit Points.\n\nDefense Effect: Whenever your Pokémon do not spend their Shift Action to Shift during a turn, they gain +5 Damage Reduction for one full round.\n\nSpecial Attack Effect: The Range of your Pokémon’s Special Non-Melee Moves is increased by +2. This does not affect the size of Area-Of-Effect moves (But does affect the range at which you can place Ranged Blasts).\n\nSpecial Defense Effect: Whenever your Pokémon would lose a Tick of Hit Points from Status Afflictions, Weather, or other effects, they lose 5 fewer Hit Points, to a minimum of 1.\n\nSpeed Effect: Your Pokémon may take Disengage Maneuvers as Swift Actions.",
    book: "Core",
    pageNum: 113,
  },
  {
    name: "Stat Embodiment",
    tags: ["Branch"],
    prerequisites: "4 Stat Ace Features, Expert Command or Focus",
    frequency: "1 AP – Swift Action",
    target: "Your Pokémon",
    effect:
      "Your Pokémon gains an Ability, based on your Chosen Stat, for the remainder of the Scene. Switching does not end this effect. Stat Embodiment may only grant one Ability to a Pokémon at a time. If it is used a second time on the same target, it replaces the first granted Ability.\n\n»» Attack Aces give Sheer Force or Defiant\n\n»» Defense Aces give Filter or Battle Armor\n\n»» Special Attack Aces give Tinted Lens or Competitive\n\n»» Special Defense Aces give Multiscale or Tolerance\n\n»» Speed Aces give Speed Boost or Vanguard",
    book: "Core",
    pageNum: 113,
  },
  // Style Expert
  {
    name: "Style Expert",
    tags: ["Class", "Branch"],
    prerequisites:
      "3 Pokémon with 3d6 in a specific certain Contest Stat from Poffins\n\nOr\n\nCoordinator, 1 Pokémon with 3d6 in a specific certain Constat Stat from Poffins",
    frequency: "Static",
    effect:
      "Your Pokémon gain +2d6 to your chosen Contest Stat. These dice are counted as if coming from Poffins.\n\n",
    note: "When you take Style Expert, choose from Beauty, Cool, Cute, Smart, or Tough. This becomes your Chosen Contest Stat. You may take Style Expert multiple times, each time choosing a different Contest Stat",
    book: "Core",
    pageNum: 115,
  },
  {
    name: "Style Flourish",
    tags: ["Branch"],
    prerequisites: "3 Style Expert Features",
    frequency: "1 AP – Free Action:",
    effect:
      "Trigger: Your Pokémon uses a Move of your Chosen Type\n\nContest Effect: Re-Roll all dice that result in 1s. This effect may only be used once per Contest.\n\nBattle Effect: The target gains +1 CS in the Stat corresponding to your chosen Contest Type, after the Move and all effects have been resolved. This may only affect a target once per Scene.",
    book: "Core",
    pageNum: 115,
  },
  {
    name: "Style Entrainment",
    tags: ["Branch"],
    prerequisites: "4 Style Expert Features",
    frequency: "1 AP – Swift Action, Priority (Limited)",
    target: "Your Pokémon",
    effect:
      "Your Pokémon gains one of the following Abilities corresponding to your chosen Contest Stat for the rest of the Scene, even if it is switched out. Style Entrainment may only grant one Ability to a Pokémon at a time. If it is used a second time on the same target, it replaces the first granted Ability.\n\n»» Beauty gives Gentle Vibe or Serene Grace\n\n»» Cool gives Defiant or Sniper\n\n»» Cute gives Cute Charm or Cute Tears\n\n»» Smart gives Analytic or Anticipation\n\n»» Tough gives Sturdy or Intimidate",
    book: "Core",
    pageNum: 115,
  },
  {
    name: "Beautiful Ballet",
    tags: ["Ranked 2"],
    prerequisites: "Style Expert, Beauty as Chosen Stat, Novice Intuition",
    frequency: "1 AP – Special",
    effect:
      "Your Pokémon with at least 3d6 in their Beauty Stat from Poffins may activate Beautiful Ballet as a Standard Action to perform one of the following Moves. They must still follow frequency limits as usual for these Moves.\n\nRank 1: Captivate, Mist\nRank 2: Lovely Kiss, Mean Look",
    extraFields: {
      "Rank 1 Prerequisites":
        "Style Expert, Beauty as Chosen Stat, Novice Intuition",
      "Rank 2 Prerequisites": "Expert Intuition",
    },
    book: "Core",
    pageNum: 115,
  },
  {
    name: "Fabulous Max",
    prerequisites: "Beautiful Ballet Rank 1",
    frequency: "At-Will – Free Action",
    trigger: "Your Pokémon uses a Beauty-Type Move",
    effect:
      "Contest Effect: Treat the Move as if it were one step more aligned with the Contest Type. If the Move would be opposing the Contest Type, it is instead neutral. If it is neutral, it is instead matching. You may activate this effect only once per Contest.\n\nBattle Effect: The move gains the keyword Burst 1 if Melee, or Blast 2 if ranged. If the move is already a Burst, Blast, or Cone, increase the size of the Move’s Range by 1. This does not cause a target to be hit multiple times. You may activate Fabulous Max only once per Pokémon per Scene.",
    book: "Core",
    pageNum: 115,
  },
  {
    name: "Enticing Beauty",
    prerequisites: "Beautiful Ballet Rank 1",
    frequency: "Scene - Free Action",
    target: "Your Pokémon",
    effect:
      "The target acts as a Bait item as if it had the Alluring Capability. Add its number of Beauty Dice from Poffins as a Bonus to all d20 lure rolls.",
    book: "Core",
    pageNum: 115,
  },
  {
    name: "Cool Conduct",
    tags: ["Ranked 2"],
    frequency: "1 AP – Special",
    effect:
      "Your Pokémon with at least 3d6 in their Cool Stat from Poffins may activate Cool Conduct as a Standard Action to perform one of the following Moves. They must still follow frequency limits as usual for these Moves.\n\nRank 1: Focus Energy, Noble Roar\nRank 2: Roar, Double Team",
    extraFields: {
      "Rank 1 Prerequisites":
        "Style Expert, Cool as Chosen Stat, Novice Command",
      "Rank 2 Prerequisites": "Expert Command",
    },
    book: "Core",
    pageNum: 116,
  },
  {
    name: "Rule of Cool",
    prerequisites: "Cool Conduct Rank 1",
    frequency: "At-Will – Free Action",
    trigger: "Your Pokémon uses a Cool-Type Move",
    effect:
      "Contest Effect: Treat the Move as if it were one step more aligned with the Contest Type. If the Move would be opposing the Contest Type, it is instead neutral. If it is neutral, it is instead matching. You may activate this effect only once per Contest.\n\nBattle Effect: The triggering Move’s Crit Range is increased by 3, and the Moves with the Priority or Interrupt Keywords may not be activated in reaction to this Move. You may activate Rule of Cool only once per Pokémon per Scene.",
    book: "Core",
    pageNum: 116,
  },
  {
    name: "Action Hero Stunt",
    prerequisites: "Cool Conduct Rank 1",
    frequency: "Daily x2 – Free Action",
    trigger:
      "Your Pokémon makes a Skill Check for a dramatic, high risk action",
    effect:
      "Instead of using a Skill for this Check, your Pokémon rolls their Cool Dice from Poffins and adds their number of Cool Dice from Stats as a modifier. For example, a Pokémon with 5d6 Cool from Poffins and 2d6 from Attack rolls 5d6+2. An example trigger is charging into a burning building for a heroic rescue. Skill Checks invoked by Intercepting attacks, Combat Maneuvers, Moves, and Abilities don’t trigger this Feature.",
    note: "To decide whether an action triggers Action Hero Stunt, ask yourself if there are dramatic consequences for the outcome, and if the player chose a risky and cool option over safer alternatives.",
    book: "Core",
    pageNum: 116,
  },
  {
    name: "Cute Cuddle",
    tags: ["Ranked 2"],
    frequency: "1 AP – Special",
    effect:
      "Your Pokémon with at least 3d6 in their Cute Stat from Poffins may activate Cute Cuddle as a Standard Action to perform one of the following Moves. They must still follow frequency limits as usual for these Moves.\n\nRank 1: Charm, Block\nRank 2: Teeter Dance, Attract",
    extraFields: {
      "Rank 1 Prerequisites": "Style Expert, Cute as Chosen Stat, Novice Charm",
      "Rank 2 Prerequisites": "Expert Charm",
    },
    book: "Core",
    pageNum: 116,
  },
  {
    name: "Gleeful Steps",
    prerequisites: "Cute Cuddle Rank 1",
    frequency: "At-Will – Free Action",
    trigger: "Your Pokémon uses a Cute-Type Move",
    effect:
      "Contest Effect: Treat the Move as if it were one step more aligned with the Contest Type. If the Move would be opposing the Contest Type, it is instead neutral. If it is neutral, it is instead matching. You may activate this effect only once per Contest.\n\nBattle Effect: The triggering Pokémon may immediately shift up to half their Movement speed in meters in any direction after their attack is resolved. You may activate Gleeful Steps only once per Pokémon per Scene.",
    book: "Core",
    pageNum: 116,
  },
  {
    name: "Let's Be Friends!",
    prerequisites: "Cute Cuddle Rank 1",
    frequency: "Scene – Free Action",
    target: "Your Pokémon",
    effect:
      "The target may attempt to improve the disposition of a Wild Pokémon as if making a Charm Check. They roll their Cute Dice from Poffins and add their number of Cute Dice from Stats as a modifier. For example, a Pokémon with 4d6 Cute from Poffins and 3d6 Cute from Speed rolls 4d6+3 in place of a Charm Check.",
    book: "Core",
    pageNum: 116,
  },
  {
    name: "Calculated Assault",
    prerequisites: "Smart Scheme Rank 1",
    frequency: "At-Will – Free Action",
    trigger: "Your Pokémon uses a Smart-Type Move",
    effect:
      "Contest Effect: Treat the Move as if it were one step more aligned with the Contest Type. If the Move would be opposing the Contest Type, it is instead neutral. If it is neutral, it is instead matching. You may activate this effect only once per Contest.\n\nBattle Effect: Choose one: The triggering Pokémon gains a +1 bonus on its Accuracy Roll for each ally that hit a target of its Move this round, or all allies get a +1 bonus to their Accuracy Rolls against targets of the triggering Pokémon’s Move until the end of your Pokémon’s next turn. You may activate Calculated Assault only once per Pokémon per Scene.",
      "Rank 1 Prerequisites":
        "Style Expert, Smart as Chosen Stat, Novice Guile",
    book: "Core",
    pageNum: 117,
  },
  {
    name: "Learn From Your Mistakes",
    prerequisites: "Smart Scheme Rank 1",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Pokémon fails a Skill Check",
    effect:
      "Your Pokémon may re-roll the Skill Check with a Bonus equal to its number of Smart Dice from Poffins.",
    book: "Core",
    pageNum: 117,
  },
  {
    name: "Tough Tumble",
    tags: ["Ranked 2"],
    frequency: "1 AP – Special",
    effect:
      "Your Pokémon with at least 3d6 in their Tough Stat from Poffins may activate Tough Tumble as a Standard Action to perform one of the following Moves. They must still follow frequency limits as usual for these Moves.\n\nRank 1: Scary Face, Spite\nRank 2: Glare, Bide",
    extraFields: {
      "Rank 1 Prerequisites": "Style Expert, Tough as Chosen Stat, Novice Intimidate",
      "Rank 2 Prerequisites": "Expert Intimidate",
    },
    book: "Core",
    pageNum: 117,
  },
  {
    name: "Macho Charge",
    prerequisites: "Tough Tumble Rank 1",
    frequency: "At-Will – Free Action",
    trigger: "Your Pokémon takes falling damage, begins to suffocate, or is Heavily Injured",
    effect:
      "Contest Effect: Treat the Move as if it were one step more aligned with the Contest Type. If the Move would be opposing the Contest Type, it is instead neutral. If it is neutral, it is instead matching. You may activate this effect only once per Contest.\n\nBattle Effect: All targets hit by the Move are pushed away from the triggering Pokémon by 3 meters. You may activate Macho Charge only once per Pokémon per Scene.",
    book: "Core",
    pageNum: 117,
  },
  {
    name: "Endurance",
    prerequisites: "Tough Tumble Rank 1",
    frequency: "Scene – Free Action",
    trigger: "Your Pokémon takes falling damage, begins to suffocate, or is Heavily Injured",
    effect:
      "Your Pokémon can ignore up to X meters of falling when calculating falling damage, act without beginning to suffocate for X additional rounds, or ignore the Hit Point loss effects from acting while Heavily Injured for X rounds. X is equal to half its number of Tough Dice from Poffins.",
    book: "Core",
    pageNum: 117,
  },
  // Type Ace
  {
    name: "Type Ace",
    tags: ["Class", "Branch"],
    prerequisites:
      "2 Different Pokémon of the chosen Type, Type-Linked Skill at Novice\n\nOR\n\nElemental Connection (of the chosen Type), 1 Pokémon of the chosen Type, Type-Linked Skill at Novice",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points remaining.",
    effect:
      "The target loses 2 Tutor Points and learns the Last Chance or Type Strategist Ability for your Chosen Type. You may target a Pokémon only once with Type Ace.",
    note: "You may take Type Ace multiple times. Each time, you must choose a different Type and must specify for which Type you take a Feature. Skill prerequisites for Type Ace always match the Type-Linked Skills for that Type.",
    seeAlso: ["Type-Linked Skills","Type Strategist","Last Chance (Ability)"],
    book: "Core",
    pageNum: 119,
  },
  {
    name: "Type Refresh",
    tags: ["Branch", "Orders"],
    prerequisites: "Type Ace",
    frequency: "2 AP – Standard Acrion",
    target:
      "Your Pokémon",
    effect:
      "The target regains one use of a Scene-Frequency Move of your Chosen Type, and refreshes the Frequency of all EOT-Frequency Moves of your chosen Type. A Target can be affected by Type Refresh only once per Scene.",
    book: "Core",
    pageNum: 119,
  },
  {
    name: "Move Sync",
    tags: ["Branch"],
    prerequisites: "3 Type Ace Features",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 1 Tutor Point.",
    effect:
      "The target loses 1 Tutor Point. Pick a Move in the target’s Move List. The picked move is now permanently of your Chosen Type, and may have different effects. See the Types Changes section on page 468 of the Core handbook for more information and suggestions. A Pokémon may have only one Move-Sync’d Move in their Move List at a time; to Sync a new Move, the old Move must be forgotten.",
    book: "Core",
    pageNum: 119,
  },
  {
    name: "Insectoid Utility",
    prerequisites: "Type Ace, Bug as Chosen Type",
    frequency: "Static",
    effect:
      "Your Pokémon with the following Capabilities have the upgrades below applied to them.\n\n»» Threaded: Your Pokémon may use its Threaded attack to perform Combat Maneuvers, including Grapple and Push.\n\n»» Wallclimber: Your Pokémon becomes Immune to Push and Trip effects.\n\n»» Naturewalk: Your Pokémon cannot be Slowed or Stuck in its appropriate Terrains.\n\n»» Sky: Your Pokémon has a +1 bonus to its Speed Evasion.",
    book: "Core",
    pageNum: 120,
  },
  {
    name: "Iterative Evolution",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Insectoid Utility, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    trigger: "Your Pokémon hits with a damaging Bug-Type attack",
    effect:
      "While this Feature is bound, if the triggering attack would deal Super-Effective Damage, it gains a +2 Bonus to Accuracy Check. If it would deal Neutral Damage, it gains a Bonus to its Damage Roll equal to your Type-Linked Skill Rank. If it would be resisted, it is resisted one step less. This is calculated after applying any other effects that would modify effectiveness before the Accuracy Roll is made, such as the Tinted Lens Ability.",
    book: "Core",
    pageNum: 120,
  },
  {
    name: "Chitin Shield",
    prerequisites: "Insectoid Utility, Type Linked Skill at Expert",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Bug-Type Pokémon is hit by a Status-Class Move",
    effect:
      "The effect misses, and your Pokémon becomes immune to that Move for the rest of the Scene. Chitin Shield may be triggered once per Scene per Pokémon.",
    book: "Core",
    pageNum: 120,
  },
  {
    name: "Disruption Order",
    prerequisites: "Insectoid Utility, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Pokémon hits with a Bug-Type Move",
    effect:
      "Until the end of user’s next turn, all targets hit by the Move are Slowed, suffer a -X to Accuracy Rolls, and are Flinched by Damaging Attacks on 16+.",
    book: "Core",
    pageNum: 120,
  },
  {
    name: "Sneak Attack",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Clever Ruse, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Dark-Type Pokémon",
    effect:
      "While this Feature is bound, when attacking foes that are Fainted, Flanked, Flinched, Sleeping, Stuck, Tripped, unaware of your Pokémon’s presence, or otherwise do not expect an attack, the target gains a +2 bonus to Accuracy Rolls and a bonus to Damage Rolls equal to your Type-Linked Skill Rank.",
    book: "Core",
    pageNum: 120,
  },
  {
    name: "Clever Ruse",
    prerequisites: "Type Ace, Dark as Chosen Type",
    frequency: "At-Will – Free Action",
    trigger:
      "Your Pokémon misses all targets with a Dark-Type attack on their turn",
    effect:
      "Your Pokémon may apply two of the effects below after the triggering attack is resolved. Your Pokémon may also take a Standard Action to trigger this Feature. This Feature may be triggered only once per round.\n\n»» They gain +4 Evasion for one full round.\n\n»» Their attacks ignore Evasion from Stats until the end of their next turn.\n\n»» They may immediately Disengage as a Free Action.",
    book: "Core",
    pageNum: 120,
  },
  {
    name: "Devious",
    prerequisites: "Clever Ruse, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Dark-Type Pokémon uses a Move with the Social keyword.",
    effect:
      "Your Pokémon may immediately use a naturally Dark-Typed Status-Class Move or a Move with the Social keyword as a Free Action. This must be a different Move than the triggering Move, and must follow all Frequency limitations. Devious may be used only once per Scene per Pokémon.",
    book: "Core",
    pageNum: 120,
  },
  {
    name: "Black-Out Strike",
    prerequisites: "Clever Ruse, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Pokémon hits with a damaging Dark-Type Move",
    effect:
      "After the triggering attack is resolved, the target of the attack gains an Injury and falls asleep. If this attack would put them are 3 or more injuries or at or under 25% of their maximum Hit Points, the target instead becomes Fainted. Black-Out Strike may be used only once per Scene.",
    book: "Core",
    pageNum: 120,
  },
  {
    name: "Highlander",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Tyrant's Roar, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Dragon-Type Pokémon",
    effect:
      "While this Feature is Bound, the target gains X Damage Reduction against Dragon-Type attacks, and gain a +X Bonus to Damage Rolls with Dragon-Typed attacks against other Dragon-Typed targets. X is equal to your Type-Linked Skill Rank.",
    book: "Core",
    pageNum: 121,
  },
  {
    name: "Unconquerable",
    prerequisites: "Tyrant's Roar, Type-Linked Skill at Expert",
    frequency: "Daily x3 – Free Action",
    trigger:
      "Your Pokémon uses a Dragon-Type Move while they have 3 or more Status Afflictions",
    effect: "Your Pokémon is cured of up to three Status Afflictions.",
    book: "Core",
    pageNum: 121,
  },
  {
    name: "Tyrant’s Roar",
    prerequisites: "Type Ace, Dragon as Chosen Type",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon hits with a Dragon-Type Move",
    effect:
      "Your Pokémon creates a Burst 2, Slowing all Foes in the area and causing those foes to lose 1 Combat Stage in any Stat in which they have positive Combat Stages.",
    book: "Core",
    pageNum: 121,
  },
  {
    name: "This Will Not Stand",
    prerequisites: "Tyrant's Roar, Type-Linked Skill at Master",
    frequency: "At-Will – Free Action",
    trigger: "Your Dragon-Type Pokémon takes a Critical Hit or Massive Damage",
    effect:
      "Your Pokémon gains +1 Combat Stage in each of Attack, Special Attack, and Speed. This Will Not Stand may trigger only once per Scene per Pokémon.",
    book: "Core",
    pageNum: 121,
  },
  {
    name: "Lockdown",
    prerequisites: "Type Ace, Electric as Chosen Type",
    frequency: "At-Will – Free Action",
    trigger:
      "Your Pokémon’s Damaging Electric Attack would inflict Paralysis on an already Paralyzed foe",
    effect:
      "For 1 full round, that foe is instead Stuck and may only use At-Will Frequency Moves.",
    book: "Core",
    pageNum: 121,
  },
  {
    name: "Chain Lightning",
    prerequisites: "Lockdown, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Pokémon hits with a damaging 1-target Electric Attack",
    effect:
      "Pick another Pokémon or Trainer within 3 meters of the target of the attack. You may repeat the triggering attack against the target, with a -5 Damage penalty. If you hit, you may repeat the attack a third time against a foe within 3 meters of the second target, this time with a -10 Damage penalty. The third target cannot be the same as the original target.",
    book: "Core",
    pageNum: 121,
  },
  {
    name: "Shocking Speed",
    prerequisites: "Lockdown, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    effect:
      "You may activate this Feature to have your Electric-Type Pokémon may use an Electric-Type Move with a Frequency of At-Will as if it had Priority (Advanced).",
    book: "Core",
    pageNum: 121,
  },
  {
    name: "Overload",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Lockdown, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is Bound, whenever the target hits a foe with an Electric Attack, they may choose to have the foe lose Hit Points equal to the target’s Tick value plus your Type-Linked Skill Rank. If they do, the target loses a Tick of Hit Points after the attack is resolved.",
    book: "Core",
    pageNum: 121,
  },
  {
    name: "Arcane Favor",
    prerequisites: "Fairy Lights, Type-Linked Skill at Adept",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon uses a Fairy-Type Move",
    effect:
      "Your Pokémon and all allies on the Field gain a +1 Bonus to all rolls for one full round.",
    book: "Core",
    pageNum: 122,
  },
  {
    name: "Fey Trance",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Fairy Lights, Type-Linked Skill at Expert",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is bound, whenever the target uses a 1-Target Move with the Social Keyword or a Fairy-Type Status Move, the foe hit by the triggering Move becomes Infatuated with your Pokémon, and immediately Shifts towards your Pokémon, forfeiting their next Shift Action. This may affect a specific foe only once per Scene.",
    book: "Core",
    pageNum: 122,
  },
  {
    name: "Fairy Lights",
    prerequisites: "Type Ace, Fairy as Chosen Type",
    frequency: "At-Will – Special",
    effect:
      "Your Fairy-Type Pokémon may activate Fairy Lights as a Standard Action to create 3 Fairy Lights that hover around themselves. Whenever the target is attacked by a foe within 6 meters, they may expend a Fairy Light to either immediately gain a Tick of Temporary Hit Points, or to use the Move Fairy Wind as a Free Action",
    note:"Fairy Lights also provide mild lighting, comparable to a candle. As an extended action your Pokémon can control the lights individually, but they must stay within 6 meters of the Pokémon that created them.",
    book: "Core",
    pageNum: 122,
  },
  {
    name: "Fairy Rite",
    prerequisites: "Fairy Lights, Type-Linked Skill at Master",
    frequency: "Daily x3 – Special",
    trigger: "Your Pokémon creates Fairy Lights as a Standard Action",
    effect:
      "Your Fairy-Type Pokémon may activate Fairy Rite as a Standard Action to lose any number of Hit Points, up to a maximum equal to your Pokémon’s Level, and heal an adjacent Ally by that many Hit Points. Then, if your Fairy-Type Pokémon has any Fairy Lights, they may immediately expend any Fairy Lights to gain a Tick of Hit Points, or cause an ally within 6 meters to gain a Tick of Hit Points.",
    book: "Core",
    pageNum: 122,
  },
  {
    name: "Close Quarters Mastery",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Type Ace, Fighting as Chosen Type",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is Bound, the target’s Fighting-Type Moves cause foes to become Marked by the target for 1 full round. If the target is a Fighting-Type Pokémon, they may also Mark the Foe for one full round when hitting with a Grapple, Trip, or Push Maneuver.\n\nMarked Foes provoke an attack of Opportunity from the Pokémon that marked them if they Shift out of an adjacent square into a square that is not adjacent, even if they use a Disengage Maneuver. Targets cannot be Marked by more than one Pokémon at a time.",
    book: "Core",
    pageNum: 122,
  },
  {
    name: "Brawler",
    prerequisites: "Close Quarters Mastery, Type-Linked Skill at Adept",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon makes a Struggle Attack",
    effect:
      "This Struggle Attack has a range of Burst 1, Friendly instead of the usual range, and deals Fighting-Type Damage.",
    book: "Core",
    pageNum: 122,
  },
  {
    name: "Face Me Whelp",
    prerequisites: "Close Quarters Mastery, Type-Linked Skill at Expert",
    frequency: "Static",
    effect:
      "While your Pokémon is adjacent to a foe they Marked, that foe gains a -X penalty to Accuracy Rolls and a -10 penalty to Damage Rolls on attacks that do not target the Pokémon that Marked them. X is equal to half your Type-Linked Skill Rank.",
    book: "Core",
    pageNum: 122,
  },
  {
    name: "Smashing Punishment",
    prerequisites: "Close Quarters Mastery, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger:
      "A Marked Foe provokes an Attack of Opportunity from your Fighting-Type Pokémon",
    effect:
      "The Attack of Opportunity automatically hits, deals Fighting-Type Damage, and is a Critical Hit.",
    book: "Core",
    pageNum: 122,
  },
  {
    name: "Brightest Flame",
    prerequisites: "Type Ace, Fire as Chosen Type",
    frequency: "Static",
    effect:
      "Your Pokémon’s damaging Fire-Type Moves Burn their target on a roll of 18+. If a Move already has a chance to Burn a target, this Effect Range is instead increased by +3. Additionally, your Pokémon’s damaging Fire-Type Moves deal additional damage equal to your Type-Linked Skill Rank against Burned targets.",
    book: "Core",
    pageNum: 123,
  },
  {
    name: "Trail Blazer",
    prerequisites: "Brightest Flame, Type-Linked Skill at Adept",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Fire-Type Pokémon Shifts",
    effect:
      "Your Pokémon sets the ground aflame and leaves a Fire Hazard in each square it shifts through this round, up to a maximum of 8 squares. Anyone who begins or ends their turn on a Fire Hazard are Burned. Anyone that passes through a Fire Hazard loses a Tick of Hit Points. If a Ground, Rock, or Water-Type Move targets a square (or a target in a square) with Fire Hazard in them, the Fire Hazards are destroyed. All effects that destroy Hazards extinguish Fire Hazards. Trail Blazer may only be used once per Scene.",
    book: "Core",
    pageNum: 123,
  },
  {
    name: "Incandescence",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Brightest Flame, Type-Linked Skill at Expert",
    frequency: "Bind 2 AP – Standard Action",
    trigger: "Your Fire-Type Pokémon",
    effect:
      "While this Feature is Bound, the target adds both their Attack and Special Attack Stat to all damaging Fire-Type Attacks, instead of one or the other. This does not stack with Twisted Power.",
    book: "Core",
    pageNum: 123,
  },
  {
    name: "Fan The Flames",
    prerequisites: "Brightest Flame, Type-Linked Skill at Master",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon uses a 1-Target Fire-Type Move",
    effect:
      "Instead of its usual range, the attack may be performed as if it had a range of Burst 1 if melee, or Cone 2 if ranged.",
    book: "Core",
    pageNum: 123,
  },
  {
    name: "Celerity",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Type Ace, Flying as Chosen Type",
    frequency: "Bind 2 AP – Standard Action",
    target: "A Flying-Type Pokémon, or a Pokémon with a Sky or Levitate Speed",
    effect:
      "While this Feature is Bound, add your Type-Linked Skill to the target’s Initiative. Additionally, if the Target uses a Disengage Maneuver, they may Shift as if Slowed instead of shifting only 1 Meter.",
    book: "Core",
    pageNum: 123,
  },
  {
    name: "Gale Strike",
    prerequisites: "Celerity, Type-Linked Skill at Adept",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon uses a Flying-Type Move with an Accuracy Check",
    effect:
      "You may roll the Accuracy Check twice, and resolve using either result. If both results would hit and you resolve the attack using the lower result, Gale Strike’s Frequency is not expended.",
    book: "Core",
    pageNum: 123,
  },
  {
    name: "Zephyr Shield",
    prerequisites: "Celerity, Type-Linked Skill at Expert",
    frequency: "At-Will – Special",
    effect:
      "Your Flying-Type Pokémon may activate Zephyr Shield as a Standard Action Interrupt, or as a Shift Action during their turn. If they do, until the end of the user’s next turn, all ranged attacks targetting them take a -1 penalty to Accuracy and -10 penalty to damage, they become immune to the effects of Moves with the Powder keyword, and they do not lose Hit Points from Weather effects. Additionally, if Zephyr Shield is used as a Standard Action, that Pokémon may use the Resolution Effect of a Flying-Type Move with the Set-Up keyword on their next turn, skipping the Set-Up phase.",
    book: "Core",
    pageNum: 123,
  },
  {
    name: "Tornado Charge",
    prerequisites: "Celerity, Type-Linked Skill at Master",
    frequency: "Daily x3 – Special",
    trigger: "Your Pokémon gains Initiative",
    effect:
      "Your Pokémon gains 2 additional Standard Actions this turn. Your Pokémon may also Shift between taking each action, so long as their total Movement does not exceed their Movement Capabilities. All three of your Pokémon’s Standard Actions this turn must be used to perform Zephyr Shield, or Flying-Type Moves with a Frequency of At-Will or EOT. Tornado Charge may be used only once per day per Pokémon.",
    book: "Core",
    pageNum: 123,
  },
  {
    name: "Ghost Step",
    prerequisites: "Type Ace, Ghost as Chosen Type",
    frequency: "At-Will – Free Action",
    effect:
      "Your Ghost-Type Pokémon may activate this Feature by spending a Shift Action to remove themselves from the field. They may not be targeted in any way during this time. At the beginning of their next turn, they reappear in any square of their choice that they could have Shifted to from their previous location. Each Pokémon may activate Ghost Step only once per Scene.",
    book: "Core",
    pageNum: 124,
  },
  {
    name: "Haunting Curse",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Ghost Step, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is bound, the target gains a Curse Token each time they use a Ghost-Type Move or Ghost Step. Ghost-Type Moves with a Set-Up and Resolution Phase give a Curse Token for each Phase. As a Standard Action during their turn, or as Free Action upon Fainting, the target may spend their Curse Tokens to apply conditions to a foe within 6 meters.\n\n»» 1 Curse Token: The target loses a Combat Stage of your choice.\n\n»» 2 Curse Tokens: The target becomes Cursed.\n\n»» 3 Curse Tokens: The target becomes Suppressed.\n\n»» 4 Curse Tokens: The target falls Asleep and gains Bad Sleep.",
    book: "Core",
    pageNum: 124,
  },
  {
    name: "Vampirism",
    prerequisites: "Ghost Step, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon hits an adjacent foe with a Ghost-Type Move",
    effect:
      "Choose a Stat. The triggering foe loses a Tick of Hit Points and a Combat Stage in that Stat. Your Pokémon gains 1 Combat Stage in the chosen Stat, and a Tick of Temporary Hit Points.",
    book: "Core",
    pageNum: 124,
  },
  {
    name: "Boo!",
    prerequisites: "Ghost Step, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger:
      "Your Pokémon reappears after using Ghost Step, or the set-up phase of Phantom Force or Shadow Force",
    effect:
      "The next Ghost-Type attack the target makes that turn gains the Smite keyword and can’t be Intercepted or avoided in any way (Dodge, Parry, Shield Moves, etc).",
    book: "Core",
    pageNum: 124,
  },
  {
    name: "Foiling Foliage",
    prerequisites: "Type Ace, Grass as Chosen Type",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with a Grass-Type Status Move",
    effect:
      "Pick a Grass-Type Status-Class Move known by the target. The chosen Move no longer takes up a Move Slot. A Pokémon may have only one Move bypass the Move Limit at a time; if a new Move is chosen for a Pokémon, the previous Move loses this effect.",
    book: "Core",
    pageNum: 124,
  },
  {
    name: "Sunlight Within",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Foiling Foliage, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Stratagem is bound, your Pokémon may activate Moves and Abilities as if they were in Sunny Weather.",
    book: "Core",
    pageNum: 124,
  },
  {
    name: "Enduring Bloom",
    prerequisites: "Foiling Foliage, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    trigger:
      "Your Grass-Type Pokémon is hit by a damaging Bug, Fire, Flying, Ice, or Poison attack that deals Super-Effective Damage",
    effect:
      "Your Pokémon gains Temporary Hit Points equal to twice your Type-Linked Skill Rank, and gains +1 Combat Stage in the Stat of your choice. If it is Sunny, they may gain +1 Combat Stage in a second, different Stat. You may activate Enduring Bloom only once per Scene per Pokémon.",
    book: "Core",
    pageNum: 124,
  },
  {
    name: "Cross-Pollinate",
    prerequisites: "Foiling Foliage, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Grass-Type Pokémon uses a damaging Grass-Type Move",
    effect:
      "Your Pokémon may immediately use a Grass-Type Status-Class move as a Free Action.",
    book: "Core",
    pageNum: 124,
  },
  {
    name: "Mold the Earth",
    prerequisites: "Type Ace, Ground as Chosen Type",
    frequency: "Scene x2 – Free Action",
    trigger:
      "Your Pokémon with the Groundshaper Capability uses a Ground-Type Move",
    effect:
      "Your Pokémon may use the Groundshaper Capability as a Free Action. When used this way, Groundshaper creates Spike Hazards in each square turned into Rough or Slow Terrain. If you wish, instead of Groundshaper’s normal range, you may choose to affect the square targeted by the attack and all cardinally adjacent squares. If the triggering Move is a Burst, Blast, Line, or Cone, you may choose to affect all squares in the targeted area instead.",
    book: "Core",
    pageNum: 125,
  },
  {
    name: "Desert Heart",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Mold the Earth, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Stratagem is bound, your Pokémon may activate Moves and Abilities as if they were in a Sandstorm.",
    book: "Core",
    pageNum: 125,
  },
  {
    name: "Earthroil",
    prerequisites: "Mold the Earth, Type-Linked Skill at Expert",
    frequency: "At-Will – Free Action",
    effect:
      "Your Ground-Type Pokémon may activate Earthroil as a Shift Action to use a damaging Ground-Type Move as it had a range of Line 4 or Burst 1 instead of its usual range, and as if it had the Groundsource keyword. 1-Target Moves performed this way take a -5 penalty to their Damage Rolls.",
    book: "Core",
    pageNum: 125,
  },
  {
    name: "Upheaval",
    prerequisites: "Mold the Earth, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger:
      "Your Pokémon uses the Groundshaper Capability, or a Move with the Groundsource keyword",
    effect:
      "Your Pokémon may make a Trip Attempt as a Free Action against any Pokémon targeted by the Move, or standing on a square changed by the Groundshaper capability. Your Pokémon gains a bonus to their Combat Roll equal to half of your Type-Linked Skill Rank.",
    book: "Core",
    pageNum: 125,
  },
  {
    name: "Glacial Ice",
    prerequisites: "Type Ace, Ice as Chosen Type",
    frequency: "Static",
    effect:
      "Your Ice-Type Pokémon gain Damage Reduction equal to your Type-Linked Skill Rank against Fighting, Fire, Rock, and Steel-Typed Attacks from which they would take Super-Effective Damage.",
    book: "Core",
    pageNum: 125,
  },
  {
    name: "Polar Vortex",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Glacial Ice, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Stratagem is bound, your Pokémon may activate Moves and Abilities as if they were in Hail.",
    book: "Core",
    pageNum: 125,
  },
  {
    name: "Arctic Zeal",
    prerequisites: "Glacial Ice, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Ice-Type Pokémon uses an Ice-Type Move",
    effect:
      "Your Pokémon uses the Move Mist as if it were on their Move List. When used this way, in addition to its normal effects, your Ice-Type Pokémon may expend uses of the Mist Blessing to do the following:\n\n»» As a Swift Action on their turn to cause a foe within 5 meters to take a -5 penalty to Damage Rolls and become Slowed for one full round.\n\n»» As a Free Action when being hit by a Fighting, Fire, Rock, or Steel-Typed attack dealing Super-Effective Damage to add their Tick Value to their Damage Reduction gained from Glacial Ice.\n\n»» As a Swift Action on their turn to increase their Defense or Special Defense by 1 Combat Stage.",
    note: "Hey other players! Be nice and ask the Ice Ace for permission before using up all their Blessings from this feature for yourself. They kinda need 'em.",
    book: "Core",
    pageNum: 125,
  },
  {
    name: "Deep Cold",
    prerequisites: "Glacial Ice, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Pokémon hits with a damaging Ice-Type Move",
    effect:
      "The target is Frozen, and has their Attack, Special Attack, and Speed Combat Stages lowered by 1 each. The target is automatically cured of the Frozen Condition after 1 full round. A foe may be affected by Deep Cold only once per Scene.",
    book: "Core",
    pageNum: 125,
  },
  {
    name: "Extra Ordinary",
    prerequisites: "Type Ace, Normal as Chosen Type",
    frequency: "At-Will – Extended Action",
    target: "Your Normal-Type Pokémon with Last Chance or Normal Strategist",
    effect:
      "Your Pokémon gains the Last Chance or Normal Strategist Ability, whichever one they do not already have. Extra Ordinary can target a Pokémon only once.",
    book: "Core",
    pageNum: 126,
  },
  {
    name: "Plainly Perfect",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Extra Ordinary, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Feature is bound, instead of rolling for damage with Normal-Type Moves, your Pokémon acts as if they rolled the maximum value on their Damage Dice Roll. Plainly Perfect only works for the first instance of the Damage Dice Roll on Critical Hits.",
    book: "Core",
    pageNum: 126,
  },
  {
    name: "New Normal",
    prerequisites: "Extra Ordinary, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    trigger:
      "Your Pokémon hits with a Normal-Type Move with conditional modifiers which increase or decrease its damage",
    effect:
      "You use the highest damage value for the triggering Move. New Normal may only be used once per Scene per Pokémon. New Normal may not raise a Move’s Damage Base above 14; if a Move would have its Damage Base raised above that value, it is instead raised to 14. (Examples: Return is DB 9, Wring Out never has its damage decreased due to the target’s Hit Points, Retaliate is DB 14.) New Normal may only be used once per Scene per Pokémon. New Normal may not raise a Move's Damage Base above 14; if a move would have its Damage Base raised above that value, it is instead raised to 14.",
    book: "Core",
    pageNum: 126,
  },
  {
    name: "Simple Improvements",
    prerequisites: "Extra Ordinary, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Normal-Type Pokémon gains Initiative",
    effect:
      "Add your Type-Linked Skill Rank to all of your Pokémon’s rolls this turn. Your Pokémon gains Temporary Hit Points equal to twice your Type-Linked Skill Rank. Simple Improvements may only be used once per Scene per Pokémon.",
    book: "Core",
    pageNum: 126,
  },
  {
    name: "Potent Venom",
    prerequisites: "Type Ace, Poison as Chosen Type",
    frequency: "At-Will – Free Action",
    trigger: "Your Poison-Type Pokémon inflicts Poison on a foe",
    effect:
      "The foe does not necessarily lose Special Defense Combat Stages from Poison; instead, they lose Combat Stages in the Combat Stat of your choice. Whenever the target loses Hit Points from Poison, they lose additional Hit Points equal to your Type-Linked Skill Rank.",
    book: "Core",
    pageNum: 126,
  },
  {
    name: "Debilitate",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Potent Venom, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Poison-Type Pokémon",
    effect:
      "While this Feature is Bound, when the target sucessfully hits a Poisoned or Blighted foe with a Poison-Type Move, the foe gains a -2 penalty to Accuracy Rolls and Evasion for one full round.",
    book: "Core",
    pageNum: 126,
  },
  {
    name: "Corrosive Blight",
    prerequisites: "Potent Venom, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Pokémon hits a foe with a Poison-Type Attack",
    effect:
      "The target gains the Blight Condition for one full round. Blighted targets lose a Tick of Hit Points upon being hit by any attack. If the attack is Poison-Typed, the Blight effect’s duration is refreshed.",
    book: "Core",
    pageNum: 126,
  },
  {
    name: "Miasma",
    prerequisites: "Potent Venom, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon misses with a Poison-Type Move",
    effect:
      "Your Pokémon may use either Smokescreen or Poison Gas as if they were on their Move List. When used this way, these Moves ignore Frequency Limitations, and are used as a Ranged Blast 3, with the blast centered on the square targeted by the triggering attack. Poison-Type Pokémon are not negatively affected by Smoke Screens created this way. Your Pokémon may also trigger Miasma deliberately as a Standard Action.",
    book: "Core",
    pageNum: 126,
  },
  {
    name: "Psionic Sponge",
    prerequisites: "Type Ace, Psychic as Chosen Type",
    frequency: "At-Will – Special",
    effect:
      "Your Psychic-Type Pokémon may activate Psychic Sponge as a Shift Action to add a Psychic Type Move known by an ally within X meters to their Move List until the end of their turn. This does not allow them to have duplicate Moves in their Move List. This Feature may only be used once per Pokémon per Scene, and X is equal to your Type-Linked Skill Rank.",
    book: "Core",
    pageNum: 127,
  },
  {
    name: "Mindbreak",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Psionic Sponge, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Psychic-Type Pokémon",
    effect:
      "While this Feature is Bound, the target’s damaging Psychic-Type Moves gain a +1 Bonus to Effect Range and a +3 Bonus to Damage Rolls for each of the following conditions that the target is suffering: Bad Sleep, Confusion, Curse, Disabled, Flinch, Infatuation, Rage, or Suppression.",
    book: "Core",
    pageNum: 127,
  },
  {
    name: "Psychic Resonance",
    prerequisites: "Psionic Sponge, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon hits a foe with a Psychic-Type Status Move",
    effect:
      "Your Pokémon may use the Move Encore against the triggering foe, as if it was on their Move List.",
    book: "Core",
    pageNum: 127,
  },
  {
    name: "Force of Will",
    prerequisites: "Psionic Sponge, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger:
      "Your Pokémon uses a Psychic-Type Status Move with a range of Blessing, Field, Hazard, or Self.",
    effect:
      "Your Pokémon may immediately use another Psychic-Type Status Move from its Move List with a range of Blessing, Field, Hazard, or Self.",
    book: "Core",
    pageNum: 127,
  },
  {
    name: "Gravel Before Me",
    prerequisites: "Type Ace, Rock as Chosen Type",
    frequency: "At-Will – Free Action",
    trigger:
      "Your Rock-Type Pokémon misses all targets with a Rock-Type attack, receives an Injury, suffers a Critical Hit, or Faints.",
    effect: "Create a Stealth Rock Hazard adjacent to your Pokémon.",
    book: "Core",
    pageNum: 127,
  },
  {
    name: "Bigger and Boulder",
    prerequisites: "Gravel Before Me, Type-Linked Skill at Adept",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon hits with a damaging Rock-Type Move",
    effect:
      "All targets hit by the triggering Move are pushed a number of meters equal to half your Type-Linked Skill Rank or less, and they become Vulnerable for one full round. Create a Stealth Rock Hazard adjacent to each foe hit this way.",
    book: "Core",
    pageNum: 127,
  },
  {
    name: "Tough as Schist",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Gravel Before Me, Type-Linked Skill at Expert",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Rock-Type Pokémon",
    effect:
      "While this Feature is Bound, allied Stealth Rock Hazards within 4 meters of your Pokémon are not used when a foe triggers them unless you want them to be. Whenever the target takes Super-Effective Damage from a Water, Grass, Ground, Fighting, or Steel Type Attack, they may consume an allied Stealth Rock Hazard within 4 meters to create temporary armor that grants them Damage Reduction equal to your Type-Linked Skill Rank for one full round.",
    book: "Core",
    pageNum: 127,
  },
  {
    name: "Gneiss Aim",
    prerequisites: "Gravel Before Me, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Pokémon misses with a Damaging Rock-Type Move",
    effect: "The Move gains the Smite keyword for that use.",
    book: "Core",
    pageNum: 127,
  },
  {
    name: "Polished Shine",
    prerequisites: "Type Ace, Steel as Chosen Type",
    frequency: "Static",
    effect:
      "The Effect Range of your Pokémon’s Steel-Type Moves is increased by +2.",
    book: "Core",
    pageNum: 128,
  },
  {
    name: "Iron Grit",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Polished Shine, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    effect:
      "When this Feature becomes Bound, the target gains +1 Defense Combat Stage. While the Feature remains bound, the target’s Defense Stat cannot be lowered, and its Defense Combat Stages cannot be lowered.",
    book: "Core",
    pageNum: 128,
  },
  {
    name: "Assault Armor",
    prerequisites: "Polished Shine, Type-Linked Skill at Expert",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon hits with a Steel-Type attack",
    effect:
      "Your Pokémon may add its Defense Stat to their Damage Roll in place of the attack’s normal offensive stat.",
    book: "Core",
    pageNum: 128,
  },
  {
    name: "True Steel",
    prerequisites: "Polished Shine, Type-Linked Skill at Master",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Steel-Type Pokémon is hit by a damaging attack",
    effect:
      "Your Pokémon gains Damage Reduction against the attack equal to your Type-Linked Skill Rank. Additionally, calculate Type Effectiveness with this attack as if your Pokémon has no Typings besides Steel.",
    book: "Core",
    pageNum: 128,
  },
  {
    name: "Flood!",
    prerequisites: "Type Ace, Water as Chosen Type",
    frequency: "At-Will – Free Action",
    effect:
      "Your Water-Type Pokémon may activate Flood! as a Shift Action to use a damaging Water-Type Move as if had a range of Line 4 or Close Blast 2 instead of its usual range.",
    book: "Core",
    pageNum: 128,
  },
  {
    name: "Fishbowl Technique",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Flood!, Type-Linked Skill at Adept",
    frequency: "Bind 2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "While this Stratagem is bound, your Pokémon may activate Moves and Abilities as if they were in Rainy Weather.",
    book: "Core",
    pageNum: 128,
  },
  {
    name: "Fountain of Life",
    prerequisites: "Flood!, Type-Linked Skill at Expert",
    frequency: "Daily x3 – Free Action",
    trigger: "Your Water-Type Pokémon hits with a damaging Water-Type attack",
    effect:
      "You may choose to take a penalty to the Damage Roll for the attack up to triple your Type-Linked Skill Rank or up to half the rolled damage for the triggering attack, whichever is lower. Your Pokémon gains twice that value in Temporary Hit Points and may cure themselves of one Status Affliction. Fountain of Life may only be used once per Scene per Pokémon.",
    book: "Core",
    pageNum: 128,
  },
  {
    name: "Aqua Vortex",
    prerequisites: "Flood!, Type-Linked Skill at Master",
    frequency: "Scene x2 – Free Action",
    trigger: "Your Pokémon hits with a damaging Water-Type attack",
    effect:
      "All targets of the attack are put in a Vortex, and take a penalty to all Damage Rolls equal to your Type-Linked Skill Rank while in the Vortex.",
    book: "Core",
    pageNum: 128,
  },
]

export default specialist;
