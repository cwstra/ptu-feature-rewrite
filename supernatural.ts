import { Entry } from "./types";

const supernatural: Entry[] = [
  // Aura Guardian
  {
    name: "Aura Guardian",
    tags: ["Class", "+Attack or Special Attack"],
    prerequisites: "Elemental Connection (Fighting)",
    frequency: "Static",
    effect:
      "Choose two of Detect, Vacuum Wave, or Force Palm. You learn the chosen Moves.",
    book: "Core",
    pageNum: 177,
  },
  {
    name: "Aura Reader",
    tags: ["+Attack or Special Attack"],
    prerequisites: "Aura Guardian",
    frequency: "2 AP – Swift Action",
    effect:
      "You gain the Aura Reader Capability for the rest of the scene. If your Intuition is Adept Rank or higher, you also gain the Aura Pulse Capability.",
    book: "Core",
    pageNum: 177,
  },
  {
    name: "The Power of Aura",
    tags: ["+Attack or Special Attack", "Ranked 2"],
    frequency: "Static",
    effect:
      "Each Rank, choose Scrappy or Aura Storm. You gain the Chosen Ability.",
    extraFields: {
      "Rank 1 Prerequisites": "Aura Guardian",
      "Rank 2 Prerequisites": "Aura Guardian, Expert Intuition",
    },
    book: "Core",
    pageNum: 177,
  },
  {
    name: "Sword of Body and Soul",
    tags: ["+Attack or Special Attack"],
    prerequisites: "Aura Guardian, Adept Intuition",
    frequency: "2 AP – Swift Action",
    trigger: "You use a damaging Aura Guardian Move against an adjacent foe",
    effect:
      "You may have the triggering Move deal damage as if it was your choice of Physical or Special Classes. Regardless, add both your Attack and Special Attack Stats to the Damage Roll, and this attack ignores Damage Reduction. This does not stack with Twisted Power.",
    book: "Core",
    pageNum: 177,
  },
  {
    name: "Ambient Aura",
    tags: ["+Attack or Special Attack"],
    prerequisites: "Aura Reader, Expert Intuition",
    frequency: "Scene x2 – Swift Action",
    trigger: "You use a Move with the Aura keyword",
    effect:
      "You gain an Aura Blessing that can be spent any time as a Free Action Interrupt. When you spend an Aura Blessing, you choose one of the effects below. You may only have one Aura Blessing at a time, and you must have the Aura Pulse Capability to use Ambient Aura.\n\n»» You create an energy barrier around you or an ally within 5 meters granting Damage Reduction equal to your Intuition Rank tripled until the end of your next turn.\n\n»» You cure yourself of a Volatile Status Affliction.\n\n»» Gain the Blindsense Capability until the end of the Scene.",
    book: "Core",
    pageNum: 177,
  },
  {
    name: "Aura Mastery",
    tags: ["+Attack or Special Attack"],
    prerequisites: "Aura Guardian, Expert Intuition",
    frequency: "Static",
    effect:
      "Choose two of Aura Sphere, Focus Blast, Drain Punch, or Focus Punch. You learn the chosen Moves.",
    book: "Core",
    pageNum: 177,
  },
  // Channeler
  {
    name: "Channeler",
    tags: ["Class"],
    prerequisites: "Mystic Senses",
    frequency: "At-Will – Swift Action",
    target: "A Pokémon.",
    effect:
      "You Channel the target Pokémon. If you attempt to Channel a Hostile Pokémon, you must make an Intuition Check with a DC of 15 to Channel the target. You may stop Channeling a Pokémon as a Free Action at any time. You may Channel a number of Pokémon at a time up to your Intuition Rank. If a Channeled Pokémon goes further than 20 meters from you, they stop being Channeled.",
    note: "Channeler has a couple Features with the [Orders] tag. However, because they require that a Pokémon be Channeled, which isn't League Legal, they actually aren't of any use in League Legal battles!",
    seeAlso: ["Channelling"],
    book: "Core",
    pageNum: 179,
  },
  {
    name: "Shared Senses",
    prerequisites: "Channeler",
    frequency: "Bind 1 AP – Swift Action",
    target: "A Channeled Pokémon",
    effect:
      "You Imprint the target for the duration of this Feature. You receive all sensory information being sensed by Imprinted Pokémon, and Imprinted Pokémon are not subject to the distance limit on Channeling. If you have Imprinted more than one Pokémon, you may only concentrate on the senses of one Pokémon at a time, and only choose one such Pokémon per round. If you stop Channeling a Pokémon, they are no longer Imprinted as well.",
    book: "Core",
    pageNum: 179,
  },
  {
    name: "Battle Synchronization",
    tags: ["Orders"],
    prerequisites: "Channeler",
    frequency: "Scene x3 – Standard Action",
    effect:
      "For one full round, whenever a Channeled Pokémon successfully hits a foe, all Channeled Pokémon gain +1 Accuracy and +1 Evasion against that foe for the duration of this Feature.",
    book: "Core",
    pageNum: 179,
  },
  {
    name: "Spirit Boost",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Channeler",
    frequency: "Bind 2 AP – Standard Action",
    target: "A Channeled Pokémon",
    effect:
      "When you use Spirit Boost, choose a Channeled Pokémon. You may choose the target of Spirit Boost if you wish. While Spirit Boost is Bound, the target has one of the following effects, depending on the highest Combat Stat of the chosen Pokémon. (In the event of a tie, you choose which Stat to use)\n\n»» Attack: The target gains Bonus Damage when using Physical attacks equal to your Intuition Rank.\n\n»» Defense: The target gains Damage Reduction against Physical attacks equal to your Intuition Rank.\n\n»» Special Attack: The target gains gain Bonus Damage when using Special attacks equal to your Intuition Rank.\n\n»» Special Defense: The target gains Damage Reduction against Special attacks equal to your Intuition Rank.\n\n»» Speed: The target gains a bonus to their Initiative equal to your Intuition Rank.",
    book: "Core",
    pageNum: 179,
  },
  {
    name: "Power Conduit",
    prerequisites: "Channeler, Adept Intuition",
    frequency: "2 AP – Swift Action",
    target: "Channeled Pokémon",
    effect:
      "Choose One Effect:\n\n»» Trade all Combat Stages for a single Stat between two Channeled Pokémon\n\n»» Transfer a Coat from one Channeled Pokémon to another.\n\n»» Give up a use of Scene or Daily Move from one willing Channeled Pokémon to regain use of a Scene Move which another Channeled Pokémon has used. This effect may only refresh a Move for each Pokémon once per Scene.",
    book: "Core",
    pageNum: 180,
  },
  {
    name: "Pain Dampening",
    prerequisites: "Channeler, Expert Intuition",
    frequency: "Scene x2 – Free Action",
    trigger: "A Channeled Pokémon would be Fainted by a damaging attack",
    effect:
      "Choose any number of Channeled Pokémon, which must include the triggering Pokémon. Instead of resolving the attack normally, divide the damage from the attack by the number of chosen Pokémon. Each chosen Pokémon then loses that many Hit Points. For each chosen Pokémon that Resists or is Immune to the Type of the triggering attack, subtract your Intuition Rank from the damage of the attack before all calculations.",
    book: "Core",
    pageNum: 180,
  },
  {
    name: "Soothing Connection",
    prerequisites: "Pain Dampening, Master Intuition",
    frequency: "Daily x2 – Standard Action",
    target: "Channeled Pokémon",
    effect:
      "Distribute 5 points in any way among Pokémon you are Channeling. For each point you assign to a Channeled Pokémon, they gain a Tick of Hit Points.",
    book: "Core",
    pageNum: 180,
  },
  // Hex Maniac
  {
    name: "Hex Maniac",
    tags: ["Class", "+HP"],
    prerequisites: "Novice Occult Education",
    frequency: "Static",
    effect: "Choose Cursed Body or Omen. You gain the Chosen Ability.",
    book: "Core",
    pageNum: 182,
  },
  {
    name: "Hex Maniac Studies",
    tags: ["+HP", "Ranked 3"],
    frequency: "Static",
    effect:
      "Learn two Hex Maniac Moves. You may choose any Move marked with the Hex Maniac Studies Rank you are taking or lower.",
    note: "When using Curse, you must use Curse as if you were a Ghost-Type Pokémon",
    extraFields: {
      "Rank 1 Prerequisites": "Hex Maniac",
      "Rank 2 Prerequisites": "Hex Maniac",
      "Rank 3 Prerequisites": "Hex Maniac, Expert Occult Education",
    },
    book: "Core",
    pageNum: 182,
  },
  {
    name: "Diffuse Pain",
    tags: ["+HP"],
    prerequisites: "Hex Maniac Studies Rank 1",
    frequency: "2 AP – Swift Action",
    trigger: "You use a Status-Class Move gained from Hex Maniac Studies",
    effect: "Choose an additional target for the Move.",
    book: "Core",
    pageNum: 182,
  },
  {
    name: "Malediction",
    tags: ["+HP"],
    prerequisites: "Hex Maniax Studies Rank 1, Expert Occult Education",
    frequency: "Scene x2 – Free Action ",
    trigger: "A foe within 5 meters misses all targets with an attack",
    effect:
      "Use a Status-Class Move gained from Hex Maniac Studies targeting the triggering foe as a Free Action, Frequency-permitting.",
    book: "Core",
    pageNum: 182,
  },
  {
    name: "Grand Hex",
    tags: ["+HP"],
    prerequisites: "Hex Maniac Studies Rank 3, Master Occult Education",
    frequency: "1 AP – Swift Action",
    trigger: "You hit a foe with Hex",
    effect:
      "Regain one use of a Move gained from Hex Maniac Studies that can inflict a Status Affliction that the triggering target has. If you activated the conditional damage boost for Hex, its Frequency is not expended. You may only activate Grand Hex once per target per Scene.",
    book: "Core",
    pageNum: 182,
  },
  // Ninja
  {
    name: "Ninja",
    tags: ["Class", "+Speed"],
    prerequisites: "Novice Stealth, Novice Combat",
    frequency: "Static",
    effect: "You learn the Moves Double Team and Poison Powder.",
    book: "Core",
    pageNum: 184,
  },
  {
    name: "Ninja's Arsenal",
    prerequisites: "Ninja",
    frequency: "At-Will – Extended Action",
    effect:
      "You may craft an Antidote, Smoke Ball, Caltrops, or Toxic Caltrops for $100.",
    book: "Core",
    pageNum: 184,
  },
  {
    name: "Poison Weapon",
    tags: ["+Speed", "Weapon"],
    prerequisites: "Ninja, Adept Stealth",
    frequency: "1 AP – Free Action",
    trigger: "You make a Weapon Attack.",
    effect:
      "The attack or Move Poisons its targets on 16+, and you may have it deal Poison-Type Damage if you wish.",
    book: "Core",
    pageNum: 184,
  },
  {
    name: "Genjutsu",
    tags: ["+Speed"],
    prerequisites: "Ninja, Adept Stealth",
    frequency: "At-Will – Standard Action",
    effect:
      "You form an Illusion around yourself. This Illusion may be used to hide yourself in a shroud of darkness if in darkness, or to make yourself look like a mundane object (such as a crate, potted plant, or similar). The Illusion can even fool Aura, concealing you from Aura Sight for its duration. However, the Illusion requires complete concentration, and is broken if you take any actions at all. Anyone that interacts with the Illusion directly may make an Occult Education or Intuition Check with a DC equal to 10 plus your Stealth Rank; if they succeed, the Illusion is broken.",
    book: "Core",
    pageNum: 184,
  },
  {
    name: "Utility Drop",
    tags: ["+Speed"],
    prerequisites: "Ninja's Arsenal, Expert Stealth",
    frequency: "At-Will – Swift Action",
    trigger: "You Shift",
    effect:
      "You may use a Smoke Ball, Caltrops, or Toxic Caltrops as a Free action during your Shift. Instead of the Move’s usual area of effect, you leave one square of Smokescreen, Spikes, or Toxic Spikes on each square you leave as you Shift. Once you place 8 meters of Smoke, Spikes, or Toxic Spikes you may not place any more.",
    book: "Core",
    pageNum: 184,
  },
  {
    name: "Weightless Step",
    tags: ["+Speed"],
    prerequisites: "Ninja, Expert Stealth",
    frequency: "Static",
    effect: "You gain the Infiltrator Ability.",
    book: "Core",
    pageNum: 184,
  },
  {
    name: "Kinjutsu",
    tags: ["+Speed"],
    prerequisites: "Poison Weapons, Master Stealth",
    frequency: "Static",
    effect: "You learn the Moves Substitute and Toxic.",
    book: "Core",
    pageNum: 184,
  },
  // Oracle
  {
    name: "Oracle",
    tags: ["Class", "+Special Defense"],
    prerequisites: "Mystic Senses, Novice Perception",
    frequency: "Static",
    effect: "You gain the Pickup Ability.",
    book: "Core",
    pageNum: 186,
  },
  {
    name: "Divination",
    tags: ["+Special Defense"],
    prerequisites: "Oracle",
    frequency: "Daily x3 – Extended Action ",
    effect: "You may perform an Augury or Scrying.",
    seeAlso: ["Augury", "Scrying"],
    book: "Core",
    pageNum: 186,
  },
  {
    name: "Unveiled Sight",
    tags: ["+Special Defense"],
    prerequisites: "Oracle",
    frequency: "Static",
    effect:
      "You can see through Illusions. This means you can spot Illusions from the Illusionist capability, Illusion Ability, and Genjutsu Feature as being fake. You are immune to Moves with the Illusion keyword, Double Team cannot be activated against you, and you bypass Substitutes. As a Standard Action, you can create a Burst 4, dispelling all Illusion effects within.",
    note: "Disguises in general refer to things with physical components; a mundane disguise would be the kind with props and fake moustaches and the like. An example of a magical disguise would be a Ditto's transformation. Illusions are magical effects, such as the Move Double Team, Substitute, or the Illusion Ability",
    book: "Core",
    pageNum: 186,
  },
  {
    name: "Small Prophecies",
    tags: ["+Special Defense"],
    prerequisites: "Divination, Adept Perception",
    frequency: "1 AP – Swift Action",
    effect:
      "Roll 1d20 and note the result. Until the end of your next turn, you may choose to replace a single d20 roll you or a willing ally makes with the noted result.",
    book: "Core",
    pageNum: 186,
  },
  {
    name: "Mark of Vision",
    tags: ["+Special Defense"],
    prerequisites: "Oracle, Adept Perception",
    frequency: "Bind 1 AP – Extended Action ",
    target: "A willing Trainer",
    effect:
      "You mark the target with a mystical power which allows you to close your eyes and focus to perceive the world with their senses from their perspective. You may Bind this Ability multiple times, each time on a different target, but you may only concentrate on one Mark of Vision at a time, and you may only have a number of Marks at one time equal to half your Perception Rank. A target may choose to end this effect at any time, or to deny you access to their senses temporarily without ending the effect entirely. You have a rough sense of how far away and in what direction marked targets are.",
    book: "Core",
    pageNum: 186,
  },
  {
    name: "Two-Second Preview",
    tags: ["+Special Defense"],
    prerequisites: "3 Oracle Features, Expert Perception",
    frequency: "Static",
    effect: "You gain the Instinct Ability.",
    book: "Core",
    pageNum: 186,
  },
  {
    name: "Prescience",
    tags: ["+Special Defense"],
    prerequisites: "Unveiled Sight, Master Perception",
    frequency: "Scene – Free Action",
    trigger: "You are hit by an attack",
    effect: "The attack instead misses.",
    book: "Core",
    pageNum: 186,
  },
  // Sage
  {
    name: "Sage",
    tags: ["Class", "+HP"],
    prerequisites: "Novice Occult Education",
    frequency: "At-Will – Standard Action",
    target: "An ally within 5 meters",
    effect:
      "The target gains Damage Reduction equal to your Occult Education Rank doubled or their Tick Value, whichever is higher, for one full round.",
    note: "Multiple uses of Sage from different Trainers do not stack on one target.",
    book: "Core",
    pageNum: 189,
  },
  {
    name: "Sacred Shield",
    tags: ["+HP"],
    prerequisites: "Sage",
    frequency: "Static",
    effect: "You learn the Moves Reflect and Lucky Chant.",
    book: "Core",
    pageNum: 189,
  },
  {
    name: "Mystic Defense",
    tags: ["+HP"],
    prerequisites: "Sage",
    frequency: "Static",
    effect: "You learn the Moves Light Screen and Safeguard.",
    book: "Core",
    pageNum: 189,
  },
  {
    name: "Sage's Benediction",
    tags: ["+HP"],
    prerequisites: "Sacred Shield or Mystic Defense, Adept Occult Education",
    frequency: "1 AP – Free Action",
    trigger: "An ally activates one of your Moves with the Blessing Keyword.",
    effect:
      "The triggering ally gains an additional benefit as follows, depending on the Move used. The benefit takes effect after the Blessing and the attack that triggered it are resolved.\n\n»» Reflect: +1 Defense Combat Stage\n\n»» Light Screen: +1 Sp. Defense Combat Stage\n\n»» Safeguard: +1 Evasion\n\n»» Lucky Chant: +1 Accuracy",
    book: "Core",
    pageNum: 189,
  },
  {
    name: "Lay on Hands",
    tags: ["+HP"],
    prerequisites: "Sage, Expert Occult Education",
    frequency: "Static",
    effect: "Choose Blessed Touch or Healer. You gain the Chosen Ability.",
    book: "Core",
    pageNum: 189,
  },
  {
    name: "Highly Responsive to Prayers",
    tags: ["+HP"],
    prerequisites: "Lay on Hands",
    frequency: "Scene x3 – Free Action",
    trigger:
      "You use the Blessed Touch or Healer Ability on an ally, or an ally receives an Injury",
    effect:
      "You may use the Sage Feature as a Free Action targeting the triggering ally. Multiple instances of Sage’s effect that you use may stack when used this way.",
    book: "Core",
    pageNum: 189,
  },
  {
    name: "Divine Wind",
    tags: ["+HP"],
    prerequisites: "Sage's Benediction, Master Occult Education",
    frequency: "2 AP – Free Action, Interrupt",
    target: "Blessings you generated with a Sage Move",
    effect:
      "Choose a type of Blessing you can generate with a Sage Move. All Blessings you generated of another type become Blessings of the chosen type. This may not be used to generate more uses of a Blessing than the original Move creates. For example, three Lucky Chant Blessings would become two Reflect or Light Screen Blessings, not three. You may only choose a Blessing type once per Scene.",
    book: "Core",
    pageNum: 189,
  },
  // Telekinetic
  {
    name: "Telekinetic",
    tags: ["Class", "+Special Attack"],
    prerequisites: "Elemental Connection (Psychic), Iron Mind",
    frequency: "Static",
    effect: "You gain the Telekinetic Capability.",
    book: "Core",
    pageNum: 191,
  },
  {
    name: "PK Alpha",
    tags: ["+Special Attack"],
    prerequisites: "Telekinetic",
    frequency: "Static",
    effect: "You learn the Moves Kinesis and Barrier.",
    book: "Core",
    pageNum: 191,
  },
  {
    name: "PK Omega",
    tags: ["+Special Attack"],
    prerequisites: "PK Alpha, Expert Focus",
    frequency: "Static",
    effect: "You learn the Moves Telekinesis and Psychic.",
    book: "Core",
    pageNum: 191,
  },
  {
    name: "Power of the Mind",
    tags: ["+Special Attack"],
    prerequisites: "Telekinetic",
    frequency: "Static",
    effect: "Choose Interference or Levitate. You gain the chosen Ability.",
    book: "Core",
    pageNum: 191,
  },
  {
    name: "PK Combat",
    tags: ["+Special Attack", "Weapon"],
    prerequisites: "Telekinetic, Adept Focus",
    frequency: "Bind 1 AP – Standard Action",
    effect:
      "You may also wield weapons and items with your Telekinesis capability, as long as you are able to lift them. This means you may use Items and Melee Weapons that normally require you to be adjacent to your target at a range limited only by your Telekinesis. When wielding Weapons with your Telekinesis, you qualify for Moves using Focus instead of Combat and may add your Special Attack instead of your Attack Stat. The Attacks remain Physical, however.",
    book: "Core",
    pageNum: 191,
  },
  {
    name: "Telekinetic Burst",
    tags: ["+Special Attack"],
    prerequisites: "PK Omega, Master Focus",
    frequency: "2 AP – Swift Action",
    effect:
      "You perform a Disarm, Trip, or Push Maneuver using your Telekinetic Capability.",
    book: "Core",
    pageNum: 191,
  },
  {
    name: "Psionic Overload",
    tags: ["+Special Attack"],
    prerequisites: "PK Combat, Expert Focus",
    frequency: "1 AP – Swift Action ",
    trigger: "You hit with Psychic or use another Telekinetic Move",
    effect:
      "The effect of this Feature depends on the Triggering Move.\n\n»» Kinesis: The user of the triggering attack becomes Confused.\n\n»» Barrier: Place 2 additional segments of Barrier, and you may place the Barriers anywhere within 6 meters of yourself. They do not need to remain contiguous, nor does one segment have to touch you.\n\n»» Psychic: The target becomes Vulnerable for one full round.\n\n»» Telekinesis: At the end of each turn that the target remains Lifted, they lose a Tick of Hit Points.",
    book: "Core",
    pageNum: 191,
  },
  // Telepath
  {
    name: "Telepath",
    tags: ["Class", "+Special Defense"],
    prerequisites:
      "Elemental Connection (Psychic), Iron Mind, Novice Intuition",
    frequency: "2 AP – Swift Action",
    effect: "You gain the Telepathy Capability for the rest of the scene.",
    book: "Core",
    pageNum: 193,
  },
  {
    name: "Honed Mind",
    tags: ["+Special Defense"],
    prerequisites: "Telepath",
    frequency: "Static",
    effect: "You learn the Moves Mind Reader and Calm Mind.",
    book: "Core",
    pageNum: 193,
  },
  {
    name: "Telepathic Awareness",
    tags: ["+Special Defense"],
    prerequisites: "Telepath",
    frequency: "Static",
    effect: "Choose Gentle Vibe or Telepathy. You gain the chosen Ability.",
    book: "Core",
    pageNum: 193,
  },
  {
    name: "Thought Detection",
    tags: ["+Special Defense"],
    prerequisites: "Telepathic Awareness",
    frequency: "Scene – Standard Action",
    effect:
      "You become aware of the number of living Humans or Pokémon within X meters of yourself; X is equal to your Focus Rank tripled. Pokémon or Trainers with the Mindlock Capability are not detected by this Ability. You may only use Thought Detection as long as you have the Telepathy Capability.",
    book: "Core",
    pageNum: 193,
  },
  {
    name: "Telepathic Warning",
    tags: ["+Special Defense"],
    prerequisites: "Telepathic Awareness, Expert Focus or Intuition",
    frequency: "1 AP – Free Action",
    trigger: "You or an Ally use an Attack",
    effect:
      "You’re able to give your allies heed of attacks. All allies that would be hit by the attack may take a Shift Action as an Interrupt to move out of the area of effect of the attack. Using this leaves discoverable Psychic Residue on each affected ally. You may only use Telepathic Warning as long as you have the Telepath Capability.",
    book: "Core",
    pageNum: 193,
  },
  {
    name: "Mental Assault",
    tags: ["+Special Defense"],
    prerequisites: "Telepath, Expert Focus or Intuition",
    frequency: "Static",
    effect: "You learn the Moves Extrasensory and Psyshock.",
    book: "Core",
    pageNum: 193,
  },
  {
    name: "Suggestion",
    tags: ["+Special Defense"],
    prerequisites: "Honed Mind, Master Focus or Intuition",
    frequency: "Bind 1 AP – Standard Action",
    target: "Pokémon or Trainers",
    effect:
      "You smoothly plant a thought into the subject’s head that lasts as long as this Feature is Bound. They won’t know exactly why or how they thought of it; they will naturally assume they thought of it themselves, and their brain will attempt to get there as logically as it can. The target may not necessarily act on the Suggestion, especially if it is against their nature. Using Suggestion to plant a specific thought may cause the target to think about a specific subject, dredging up surface thoughts related to the matter. Using this on a target leaves discoverable psychic residue. You may only use Suggestion as long as you have the Telepathy Capability, though you may keep it Bound without having Telepathy active.",
    book: "Core",
    pageNum: 193,
  },
  // Warper
  {
    name: "Warper",
    tags: ["Class", "+Speed"],
    prerequisites: "Elemental Connection (Psychic), Novice Guile",
    frequency: "Static",
    effect: "You gain the Probability Control Ability.",
    book: "Core",
    pageNum: 195,
  },
  {
    name: "Space Distortion",
    tags: ["+Speed"],
    prerequisites: "Warper",
    frequency: "Static",
    effect: "You learn the Moves Teleport and Ally Switch.",
    book: "Core",
    pageNum: 195,
  },
  {
    name: "Warping Ground",
    tags: ["+Speed"],
    prerequisites: "Warper",
    frequency: "Static",
    effect: "You learn the Moves Gravity and Trick.",
    book: "Core",
    pageNum: 195,
  },
  {
    name: "Strange Energy",
    tags: ["+Speed"],
    prerequisites: "Warping Ground, Space Distortion",
    frequency: "Static",
    effect: "You learn the Moves Heal Block and Magic Coat.",
    book: "Core",
    pageNum: 195,
  },
  {
    name: "Farcast",
    tags: ["+Speed"],
    prerequisites: "Space Distortion, Expert Guile",
    frequency: "Daily x3 – Free Action",
    trigger: "You use the Move Teleport or activate the Teleporter Capability",
    effect:
      "Choose One Effect: You activate Teleporter as if your Teleporter value were three times its normal value or you may take one willing Pokémon or Trainer along with you as you teleport so long as you are touching them when you activate Farcast. You may expend two uses of Farcast at once to choose both effects.",
    book: "Core",
    pageNum: 195,
  },
  {
    name: "Warped Transmission",
    tags: ["+Speed"],
    prerequisites: "Farcast, Master Guile",
    frequency: "2 AP – Swift Action",
    trigger:
      "You activate the Teleporter Capability or use the Move Ally Switch",
    effect:
      "All adjacent foes to the square you end in after teleporting or using Ally Switch have their Evasion lowered by 3 for one full round and cannot trigger Attacks of Opportunity against you for Shifting until the end of your next turn.",
    book: "Core",
    pageNum: 195,
  },
  {
    name: "Reality Bender",
    tags: ["+Speed"],
    prerequisites: "Warper, Expert Guile",
    frequency: "Daily – Free Action",
    effect:
      "You are able to subconsciously alter the fabric of reality to change small facts or circumstances. If your character is confronting a “random” event such as a die roll, coin flip, or cards being dealt, the character may activate this Feature to influence the event. In this scenario, the GM provides you with two possible outcomes, and you pick one of them to actually occur. This means you always decide the outcome of binary events such as a coin flip; cheating cards or slot machines is much harder, as there are multiple outcomes and you only get to pick between two. This Feature can also be used to generate common items worth $250 or less that the character might normally possess, such as a Potion or Poké Ball, when in a pinch. The character just happens to find the needed item among their belongings. This Feature can only create items you wish to use at that moment, and of which you have none available; such as needing to heal a Pokémon but having no Potions left. Items created with Reality Bender must be used quickly after activating the feature and cannot be stored for later.",
    note: "To be clear, this Feature refers to _in game_ die rolls, not any die rolls used to PLAY the game. Also, GMs are encourages to whap any Warpers on the nose with a rolled up newspaper if they try to apply this to combat...except, perhaps, if they or their Pokémon attempts to use the Move Metronome...",
    book: "Core",
    pageNum: 195,
  },
];

export default supernatural;