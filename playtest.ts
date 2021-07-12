import { Entry } from "./types";

const got: Entry[] = [
  // May Packet
  // Backpacker
  {
    name: "Backpacker",
    tags: ["Class", "+Speed"],
    prerequisites: "Traveler",
    frequency: "Static",
    effect:
      "You gain the Skill Enhancement Edge. You then gain an instance of the Skill Stunt Edge for each of the two Skills you chose with Skill Enhancement.",
    book: "May",
    pageNum: 3,
  },
  {
    name: "Item Mastery",
    tags: ["+Speed"],
    prerequisites: "Backpacker",
    frequency: "Static",
    effect: "You learn the Moves Fling and Recycle.",
    book: "May",
    pageNum: 3,
  },
  {
    name: "Equipment Savant",
    tags: ["+Speed"],
    prerequisites: "Backpacker, Expert Survival",
    frequency: "2 AP – Swift Action",
    effect:
      "Use or Equip an Item or piece of Equipment which would normally require a Standard Action to use or equip. You may not make an Attack with a Weapon this way - using other Items or Equipment that requires “Attacks” (such as Cap Cannons or Poké Balls) is acceptable.",
    book: "May",
    pageNum: 3,
  },
  {
    name: "Hero's Journey",
    tags: ["Ranked 4", "+Speed"],
    frequency: "Static",
    effect:
      "Each Rank, you may gain two Backpacker Talents for which you qualify.",
    seeAlso: ["Backpacker Talents"],
    extraFields: {
      "Rank 1 Prerequisites": "Backpacker",
      "Rank 2 Prerequisites": "Backpacker, Adept Survival",
      "Rank 3 Prerequisites": "Backpacker, Expert Survival",
      "Rank 4 Prerequisites": "Backpacker, Expert Survival",
    },
    book: "May",
    pageNum: 3,
  },
  // Researcher
  {
    name: "Improvised Gadgets",
    prerequisites: "Novice Technology Education",
    frequency: "Bind 2 AP – Extended Action",
    target:
      "A willing Pokémon with the Magnetic, Zapper, or Threaded Capability",
    effect:
      "Choose one of the Capabilities listed in the Target line that the target Pokémon has. You create a Main or Off-Hand Equipment Item usable by Trainers that grants the user the chosen Capability. Whenever a Trainer makes Struggle Attacks using Zapper through this Item, they may choose to use your Technology Education Rank tripled in place of an offensive Stat. When this Feature is Unbound, the Equipment Item breaks and cannot be repaired. You may only have X instances of this Feature Bound at once, where X is equal to half your Technology Education Rank.",
    book: "May",
    pageNum: 5,
  },
  {
    name: "I Meant to Do That",
    prerequisites: "Improvised Gadgets, Adept Technology Education",
    frequency: "At-Will – Special",
    effect:
      "Choose one of your equipped items you created with Improved Gadgets. It is destroyed and cannot be repaired, and that instance of Improvised Gadgets is immediately Unbound. Use the effect below corresponding to the Capability granted by the chosen item.\n\n»» Magnetic: You may activate this effect as a Standard Action Interrupt whenever a Steel or Electric-Type attack or an attack with a metal Weapon would hit a target within 5 meters. The attack instead misses all targets within 5 meters.\n\n»» Threaded: Choose up to 3 targets within 4 meters and perform an AC 4 Status Attack against them as a Standard Acion. All hit targets become Stuck and Trapped for one full round.\n\n»» Zapper: You may activate this effect as a Swift Action upon hitting a foe with a Zapper-modified Struggle Attack. The foe is Paralyzed.",
    extraFields: {
      Condition:
        "You must have at least one Equipment Item you created with Improvised Gadgets equipped to use this Feature.",
    },
    book: "May",
    pageNum: 5,
  },
  {
    name: "Capsule Science",
    prerequisites: "Improvised Gadgets, Expert Technology Education",
    frequency: "Static",
    effect:
      "You learn the Cap Cannon, Cap Ammo, and Wonder Launcher recipes, and you gain the following additional effects when using those items.\n\n»» Bean Caps: You gain a +10 Damage Bonus when using Bean Caps.\n\n»» Glue Caps: Your Effect Range when using Glue Caps is increased by +3.\n\n»» Nets Caps: Targets affected by your Net Caps gain a -X penalty to all Damage Rolls, where X is your Technology Education Rank.\n\n»» Wonder Launcher: Whenever you apply an item to a target using the Wonder Launcher, they gain Temporary Hit Points equal to your Technology Education Rank.",
    seeAlso: ["Gadgeteer Recipes"],
    book: "May",
    pageNum: 5,
  },
  {
    name: "Enhanced Capsules",
    prerequisites: "Capsule Science, Master Technology Education",
    frequency: "Daily x3 – Extended Action",
    target: "A willing Pokémon with one of the Capabilities listed below",
    effect:
      "Choose one of the Capabilities below which the target Pokémon has. You create a consumable item with the effect below, depending on the chosen Capability. All unused items created with Enhanced Capsules are rendered inert after an Extended Rest (including modifications to other items).\n\n»» Glow: This item may be attached to a Wonder Launcher as a Standard Action to give the following effect for the rest of the Scene: Whenever you apply an Item to a target using this Wonder Launcher, that target gains the Illuminate Ability for one full round.\n\n»» Magnetic: This item may be loaded into a Cap Cannon to provide two Bean Cap Ammo. When fired, these Bean Caps cannot miss.\n\n»» Threaded: This item may be loaded into a Cap Cannon to provide two Glue Cap Ammo. When fired, they affect a Blast 2 instead of a single target.\n\n»» Zapper: This item may be loaded into a Cap Cannon as a single Net Cap Ammo. Targets trapped by this Net Cap are Suppressed while trapped. Targets immune to Electric-Type attacks are immune to this effect.",
    book: "May",
    pageNum: 5,
  },
  {
    name: "Breadth of Knowledge",
    prerequisites: "Novice General Education",
    frequency: "Static",
    effect:
      "You gain three Edges for which you qualify. These Edges must be used to gain a Skill Edge with an Education Skill, or to gain an Edge that has an Education Skill as a Prerequisite that you meet.",
    book: "May",
    pageNum: 7,
  },
  {
    name: "Bookworm",
    prerequisites: "Breadth of Knowledge",
    frequency: "Static",
    effect:
      "You gain X Study Points, where X is equal to 2 plus one more for every other General Research Feature you have. You may Drain Study Points to benefit from studying Books, instead of Draining your Action Points. Study Points are restored to your maximum after an Extended Rest, just like Action Points.",
    book: "May",
    pageNum: 7,
  },
  {
    name: "Well Read",
    prerequisites: "Bookworm, Expert General Education",
    frequency: "Static",
    effect:
      "You may use your General Education Rank to qualify for Books, instead of the Book’s usual Skill Prerequisites, provided you have the normal Prerequisite at at least Novice Rank.",
    book: "May",
    pageNum: 7,
  },
  {
    name: "Echoes of the Future",
    prerequisites: "Breadth of Knowledge, Master General Education",
    frequency: "Daily x2 – Free Action",
    trigger: "You or your Pokémon make a roll",
    effect: "You may roll twice and keep the best result.",
    book: "May",
    pageNum: 7,
  },
  // Cheerleader
  {
    name: "Cheerleader",
    tags: ["Class"],
    prerequisites: "Inspired Training, Novice Charm",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points remaining",
    effect:
      "Your Pokémon loses 2 Tutor Points and gains the Friend Guard Ability.",
    book: "Sept.",
    pageNum: 3,
  },
  {
    name: "Moment of Action",
    tags: ["Orders"],
    prerequisites: "Cheerleader",
    frequency: "At-Will – Standard Action",
    target: "Up to two Allied Trainers",
    effect:
      "Each target gains 1 Temporary Action Point. These Action Points disappear after one full Round.",
    book: "Sept.",
    pageNum: 3,
  },
  {
    name: "Cheers",
    prerequisites: "Cheerleader",
    frequency: "X AP – Swift Action",
    trigger: "You use [Orders]",
    effect:
      "The target or targets of the triggering [Orders] are Cheered for 1 full round. While Cheered, the target’s Combat Stages cannot be lowered by foe’s attacks, features, or abilities. This Feature costs 0 AP if the triggering effect affects only one ally, and costs 1 AP if it affects two or more.",
    book: "Sept.",
    pageNum: 3,
  },
  {
    name: "Inspirational Support",
    prerequisites: "Cheers, Adept Charm",
    frequency: "Static",
    effect:
      "Whenever your Pokémon with Friend Guard targets an Ally with an Ability or Status Move, the targeted Ally becomes Cheered.",
    book: "Sept.",
    pageNum: 3,
  },
  {
    name: "Bring It On!",
    prerequisites: "Cheers, Adept Charm",
    frequency: "1 AP – Free Action",
    effect:
      "You may trigger Bring It On! whenever...\n\n»» A Cheered Ally takes Damage, to grant them 5 Damage Reduction agains the triggering Damage.\n\n»» A Cheered Ally makes a Save Check, to grant them a +2 Bonus on that check.\n\n»» A Cheered Ally Takes a Breather, to grant them Temporary Hit Points equal to your Charm Rank.\n\nA target may benefit from each “Bring It On!” effect only once per Scene.",
    book: "Sept.",
    pageNum: 3,
  },
  {
    name: "Go, Fight, Win!",
    tags: ["Orders"],
    prerequisites: "Moment of Action, Expert Charm",
    frequency: "Scene x3 – Standard Action",
    effect:
      "Choose and perform one of the cheers below. You may perform each Cheer only once per Scene.\n\n»» Show Your Best!: Choose Def or Sp.Def, all allies on the Field gain +1 CS in the chosen Stat.\n\n»» Don’t Stop Now!: All allies on the Field gain Temporary Hit Points equal to your Charm Rank.\n\n»» I Believe In You!: All allies on the Field gain a +2 Bonus to evasion for 1 full round.",
    book: "Sept.",
    pageNum: 3,
  },
  {
    name: "Keep Fighting!",
    prerequisites: "5 Cheerleader Features, Master Charm",
    frequency: "Daily x2 – Free Action",
    trigger:
      "Your Pokémon or an Ally Trainer with over 1 Hit Point is reduced to 0 Hit Points or lower",
    effect:
      "That Ally’s Hit Point count is reduced to 1 instead, and then gains Temporary Hit Points equal to your Charm Rank doubled.",
    book: "Sept.",
    pageNum: 3,
  },
  {
    name: "Medic",
    tags: ["Class"],
    prerequisites: "Novice Medicine Education",
    frequency: "Static",
    effect:
      "You are always considered to have access to a First Aid Manual and a Combat Medic’s Primer, and are always considered to be Binding their Rank 1 Effects without actually using any AP.",
    book: "Sept.",
    pageNum: 6,
  },
  {
    name: "Front Line Healer",
    prerequisites: "Medic",
    frequency: "Static",
    effect:
      "When you apply a Restorative, you gain +5 Damage Reduction for 1 full round. Whenever you use Combat Medic’s Primer’s Rank 2 effect, you may apply the same effect on yourself. Damage Reduction from this Feature does not stack with itself.",
    book: "Sept.",
    pageNum: 6,
  },
  {
    name: "Medical Techniques",
    prerequisites: "Medic, Adept Medicine Education",
    frequency: "1 AP – Free Action",
    trigger: "You apply a Restorative Item",
    effect:
      "The target of the triggering action gains a Tick of Hit Points, plus an additional amount of Hit Points equal to your Medicine Education Rank.",
    book: "Sept.",
    pageNum: 6,
  },
  {
    name: "I'm A Doctor",
    tags: ["Ranked 2", "Gift"],
    frequency: "Static",
    effect:
      "Each Rank, you gain one of Field Clinic or Medic Training and one of Nurse or First Aid Expertise.",
    extraFields: {
      "Rank 1 Prerequisites": "Medic",
      "Rank 2 Prerequisites": "Medic, Adept Medicine Education",
    },
    book: "Sept.",
    pageNum: 6,
  },
  {
    name: "Proper Care",
    prerequisites: "I'm a Doctor, Field Clinic, Expert Medicine Education",
    frequency: "Static",
    effect:
      "You gain additional bonuses to using Restoratives and Features while in a Field Clinic, Poke Center, Hospital, or other dedicated healing space that lets you access supplies.\n\n»» When you trigger First Aid Expertise here, the injury that is Removed does not count towards the total number of Injuries that may be removed each day.\n\n»» When you trigger Nurse here, Bandages cure 1 Injury after three hours, in addition the injury healed after 6 hours.\n\n»» All Restoratives heal an additional 5 Hit Points. This stacks with the bonus granted by Field Clinic.",
    book: "Sept.",
    pageNum: 6,
  },
  {
    name: "Stay With Us!",
    prerequisites: "Front Line Healer, Master Medicine Education",
    frequency: "Daily x3 – Full Action, Reaction",
    trigger: "An Ally is hit by an attack",
    effect:
      "You must be able to Shift to your target to use this Feature. If you can, you immediately do so, and may apply a Potion, Super Potion, Hyper Potion, Energy Powder, or Energy Root. Though damage, injuries, and all other effects of the triggering attack are finalized before this Feature is applied, do not determine if the target has been Fainted, Killed, or gained Injuries from Hit Point Markers until after the effects of the action chosen through use of this Feature has been resolved.",
    book: "Sept.",
    pageNum: 6,
  },
  // General
  {
    name: "Nurse",
    prerequisites: "Expert Medicine Education",
    frequency: "Drain 2 AP – Free Action",
    trigger: "You take an Extended Rest",
    effect:
      "During this Extended Rest, Pokémon and Trainers in your care gain the benefits listed below. The AP Drain cost from triggering this Feature is applied after the Extended Rest is completed and AP Drain has otherwise been restored.\n\n»» They heal 1/8th of their Max Hit Points per half hour of rest instead of 1/16th (does not stack with Bandages).\n\n»» If the Extended Rest lasts at least 6 hours, they may remove 1 Injury.",
    book: "Sept.",
    pageNum: 7,
  },
  // Apothecary
  {
    name: "Affliction Techniques",
    prerequisites: "Patch Cure, Expert Medicine Education",
    frequency: "1 AP – Free Action",
    trigger: "You use a Antidote, Burn Heal, Ice Heal, or Paralyze Heal",
    effect:
      "If the target successfully cures the target of its linked Status Affliction, the item has additional effects.\n\n»» Antidote: The target gains +1 Special Defense Combat Stage.\n\n»» Burn Heal: The target gains +1 Defense Combat Stage.\n\n»» Ice Heal: The target gains +1 Attack or Special Attack Combat Stage\n\n»» Paralyze Heal: The target gains +1 Speed Combat Stage.",
    book: "Sept.",
    pageNum: 7,
  },
  // Capture Specialist
  {
    name: "Gotta Catch 'Em All",
    tags: ["+Speed"],
    prerequisites: "Advanced Capture Techniques Rank 3",
    frequency: "Static",
    effect:
      "Every time you Capture a Wild Pokémon that is a member of an evolutionary family of which you own no other Pokémon, you gain 1 Collector Stack. Whenever you make a Capture Roll, you may spend up to three Collector Stacks to gain an equal bonus to your Capture Roll, or you may spend three Collector Stacks to re-roll entirely.",
    book: "Sept.",
    pageNum: 8,
  },
  // Fire Ace
  {
    name: "Incandescence",
    tags: ["Orders", "Stratagem"],
    prerequisites: "Brightest Flame, Type-Linked Skill at Expert",
    frequency: "Bind 2 AP – Standard Action",
    trigger: "Your Fire-Type Pokémon",
    effect:
      "While this Feature is Bound, the target gains the Mixed Power Poké Edge effect when using damaging Fire-Type Attacks. If the target already has Mixed Power, they instead add their entire Attack and Special Attack Stats to all damaging Fire-Type Attacks, instead of one or the other. This does not stack with Twisted Power.",
    book: "Sept.",
    pageNum: 9,
  },
];

export default got;
