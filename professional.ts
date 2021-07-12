import { Entry } from "./types";

const professional: Entry[] = [
  // Chef
  {
    name: "Chef",
    tags: ["Class"],
    prerequisites: "Basic Cooking, Novice Intuition",
    frequency: "At-Will – Extended Action",
    effect: "You may use any Chef Recipe for which you qualify.",
    seeAlso: ["Chef Recipes"],
    book: "Core",
    pageNum: 131,
  },
  {
    name: "Hits the Spot",
    prerequisites: "Chef",
    frequency: "1 AP – Free Action",
    trigger: "You or your Pokémon trade in a Digestion/Food Buff",
    effect:
      "The target gains Temporary Hit Points equal to your Intuition Rank doubled. These Temporary Hit Points stack from any Temporary Hit Points granted by Accentuated Taste, the Digestion/Food Buff or by the Lunchbox Ability.\n\nRecipe - Hearty Meal",
    book: "Core",
    pageNum: 131,
  },
  {
    name: "Culinary Appreciation",
    prerequisites: "Chef",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points remaining",
    effect: "The target loses 2 Tutor Points and gains the Gluttony Ability.",
    book: "Core",
    pageNum: 131,
  },
  {
    name: "Accentuated Taste",
    prerequisites: "Chef, Adept Intuition",
    frequency: "Static",
    effect:
      "Whenever you create a Snack with a Chef Feature, you may assign it a Taste chosen from Salty, Sour, Spicy, Dry, and Sweet. Tasty Snacks must be assigned their corresponding Taste. Whenever a Pokémon trades in a Digestion/Food Buff from a Snack with an assigned Taste they do not dislike, they gain one of the following bonuses based on the assigned Taste:\n\n»» Salty: The user gains 5 Temporary Hit Points. This stacks with any Temporary Hit Points gained through Chef Features, the Lunchbox Ability, and the Digestion/Food Buff.\n\n»» Spicy: Increase the user’s Critical Hit Range by 1.\n\n»» Sour: Increase the user’s Evasion against damaging attacks by 1.\n\n»» Dry: Increase the user’s Effect Range of all attacks by 1.\n\n»» Bitter: The user gets a +1 Bonus to all Save Checks.\n\n»» Sweet: Increase the user’s Initiative by 5.\n\nMay Playtest Errata: This bonus can only be gained once per item, even if Complex Aftertaste is used to give an additional Digestion/Food Buff for the item.",
    book: "Core",
    pageNum: 131,
  },
  {
    name: "Complex Aftertaste",
    prerequisites: "Accentuated Taste",
    frequency: "1 AP – Free Action",
    trigger:
      "You or an ally trades in a Digestion/Food Buff from an item with a Taste",
    effect:
      "The target gains a Digestion/Food Buff according to the Taste of the Snack granting the Buff. This Digestion/Food Buff matches that of the corresponding basic Tasty Snack recipe.",
    book: "Core",
    pageNum: 131,
  },
  {
    name: "Dietician",
    prerequisites: "Chef, Expert Intuition",
    frequency: "Static",
    effect: "Your Pokémon can benefit from a maximum of 7 Vitamins.",
    book: "Core",
    pageNum: 131,
  },
  {
    name: "Dumplings",
    prerequisites: "4 Chef Features, Master Intuition",
    frequency: "At-Will – Extended Action",
    effect:
      "Ingredient 1: Leftovers, Preserves, or a Snack made with Chef\n\nIngredient 2: Leftovers or Preserves\n\nEffect: You mix the two ingredients into one Snack that has the same effect as its ingredients. The two ingredients must be different items.",
    book: "Core",
    pageNum: 131,
  },
  // Chronicler
  {
    name: "Chronicler",
    tags: ["Class"],
    prerequisites: "Novice Perception",
    frequency: "1 AP – Swift Action, Interrupt",
    target: "A Pokémon, Trainer, Move, or Location.",
    effect:
      "You make Record of the target. Records can be placed in an Archive as an Extended Action.\n\nWhen you take Chronicler, you gain one Archive.",
    seeAlso: ["Chronicler Archives"],
    book: "Core",
    pageNum: 134,
  },
  {
    name: "Archival Training",
    tags: ["Ranked 2"],
    frequency: "Static",
    effect: "Each rank, you gain an Archive you have not previously obtained.",
    extraFields: { "All Rank Prerequisites": "Chronicler" },
    book: "Core",
    pageNum: 134,
  },
  {
    name: "Archive Tutor",
    prerequisites: "Technique Album, Expert Perception",
    frequency: "Daily – Extended Action",
    target: "A Pokémon with 2 Tutor Points",
    effect:
      "Select a Record in your Technique Archive that is of a Move that the target can learn by Level Up, TM or by Move Tutor. The target learns the Move and loses 2 Tutor Points. You can target someone else’s Pokémon only once with Archive Tutor; you may target your own Pokémon any number of times with Archive Tutor, but they must still abide by any Move Pool Limitations (i.e.: no more than 3 of the target's Move Pool can come from TMs or Tutor Moves).",
    book: "Core",
    pageNum: 134,
  },
  {
    name: "Targeted Profiling",
    tags: ["Orders"],
    prerequisites: "Profile Album, Expert Perception",
    frequency: "2 AP – Standard Action",
    target: "Your Pokémon",
    effect:
      "Until the end of your next turn, the target acts as if they had the Mold Breaker Ability against all Pokémon and Trainers in your Profile Archive and gains a +2 bonus to Accuracy Rolls against these targets.",
    book: "Core",
    pageNum: 134,
  },
  {
    name: "Observation Party",
    prerequisites: "Travel Album, Adept Perception",
    frequency: "Static",
    effect:
      "While they are in a Location in your Travel Archive, your Pokémon have the Ability you chose when gaining Travel Archive and gain a +2 bonus to Perception Checks to notice the environment.",
    book: "Core",
    pageNum: 134,
  },
  {
    name: "Cinematic Analysis",
    prerequisites: "4 Chronicler Features, Master Perception",
    frequency: "Daily x3 – Free Action",
    effect:
      "You analyze a Record in one of your Archives. Cinematic Analysis’s effect depends on the Archive the Record is in. Each of these effects may only be used once per Scene.\n\nCharacter Study – Profile Archive: You may trigger Character Study when you or an ally makes a Charm, Command, Guile, Intimidate, or Intuition Check targeting the subject of your Record. Make a Perception Check and substitute the triggering Skill Check with the result.\n\nRecreation – Technique Archive: Recreation may be triggered as your Pokémon gains Initiative. Select a Record of a Move in your Technique Archive that your Pokémon can learn by Level Up, TM, or Move Tutor. Your Pokémon may perform that Move as if it was on its Move List. You may select a specific Move only once per day.\n\nSituational Awareness – Travel Archive: You may only use Situational Awareness if you analyze a Record of your current Location. When used this way, you may activate it as an Interrupt. Choose an ally; that ally may take their next action as an Interrupt.",
    book: "Core",
    pageNum: 134,
  },
  // Fashionista
  {
    name: "Fashionista",
    tags: ["Class"],
    prerequisites:
      "Two of Charm, Command, Guile, Intuition, or Intimidate at Novice",
    frequency: "At-Will – Extended Action",
    effect: "You may craft any Fashionista Recipe for which you qualify.",
    note: "When you take Fashionista, choose two of Charm, Command, Guile, Intimidate, or Intuition to become your Fashionista Skills. The Skills you choose must be at Novice Rank or higher.",
    seeAlso: ["Fashionista Recipes"],
    book: "Core",
    pageNum: 137,
  },
  {
    name: "Dashing Makeover",
    prerequisites: "Fashionista",
    frequency: "Bind 2 AP – Extended Action",
    target: "A Trainer or Pokémon",
    effect:
      "When you activate Dashing Makeover, choose one Equipment or Held Item you can create. While this Feature is Bound, the target gains the effects of the chosen item, as long as they would normally be able to equip it (e.g.: Trainers cannot equip Incense Items).They do not need to take up an Equipment or Held Item slot to gain this benefit. A target may only be affected by one instance of Dashing Makeover at a time.",
    book: "Core",
    pageNum: 137,
  },
  {
    name: "Style is Eternal",
    prerequisites: "Fashionista",
    frequency: "1 AP – Free Action",
    trigger:
      "Your Pokémon is Disarmed or would have their Held Item removed by another effect such as Thief or Covet",
    effect:
      "Your Pokémon instead retains their Held Item. Style is Eternal may only be used once per Scene per Pokémon.",
    book: "Core",
    pageNum: 137,
  },
  {
    name: "Accessorize",
    prerequisites: "Dashing Makeover, one Fashionista Skill at Adept",
    frequency: "Static",
    effect:
      "You may wear and benefit from two Accessory Slot Items at once. The two items must be of different types and must not share an effect. For example, a Fire Brace cannot be paired with another Fire Brace or a Fire Plate, but it could be paired with an Ice Brace, a Fire Booster, or a Stat Booster.",
    book: "Core",
    pageNum: 137,
  },
  {
    name: "Parfumier",
    prerequisites: "Fashionista, one Fashionista Skill at Expert",
    frequency: "Static",
    effect:
      "Whenever you create an Incense Held Item, choose Sweet Scent or Aromatic Mist. While your Pokémon is holding that Incense Item in an active Held Item slot, they add the chosen Move to their Move List.",
    book: "Core",
    pageNum: 137,
  },
  {
    name: "Versatile Wardrobe",
    prerequisites: "Fashionista, two Fashionista Skills at Adept",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points remaining",
    effect:
      "The target loses 2 Tutor Points and then becomes Chic. Chic Pokémon gain two extra Held Item slots with which they can carry Held Items. However, the items in these slots have no effect and are not treated as equipped. As a Swift Action on their turn, Chic Pokémon may swap a currently active Held Item with an item stored in these slots. Chic Pokémon may not carry multiple items of the same type or with repeated effects.",
    note: "A Chic Pokémon does not become Suppressed until they switch a Choice Item into their active Held Item slot, but even if they switch the Choice Item out, they remain Suppressed for the remainder of combat. A Mega-Evolved Chic Pokémon remains Mega-Evolved even if they switch their active Held Item.",
    book: "Core",
    pageNum: 137,
  },
  {
    name: "Dress to Impress",
    prerequisites: "Versatile Wardrobe, two Fashionista Skills at Expert",
    frequency: "Scene x2 – Standard Action",
    target: "Your Chic Pokémon",
    effect:
      "Your Pokémon gains the effect of all items in extra slots granted by Versatile Wardrobe for one full round. Dress to Impress may only target a Pokémon once per Scene.",
    book: "Core",
    pageNum: 137,
  },
  // Researcher
  {
    name: "Researcher",
    tags: ["Class", "Branch"],
    prerequisites: "An Education Skill at Novice Rank",
    frequency: "Static",
    effect:
      "Choose two Researcher Fields of Study. You may take Features from those Fields with this instance of Researcher. Gain one Feature from a chosen Researcher Field for which you qualify.",
    note: "Researcher is broken up into multiple Fields of Study. You may not take Features from a Field of Study you haven’t chosen with the base Researcher Feature. You may take Researcher any number of times, each time choosing two different Fields of Study.",
    book: "Core",
    pageNum: 140,
  },
  {
    name: "Breadth of Knowledge",
    prerequisites: "Novice General Education",
    frequency: "Static",
    effect:
      "You gain three Skill Edges for which you qualify. These Edges must be used to gain a Skill Edge with an Education Skill, or to gain an Edge that has an Education Skill as a Prerequisite that you meet.",
    book: "Core",
    pageNum: 140,
  },
  {
    name: "Live and Learn",
    prerequisites: "Adept General Education",
    frequency: "Daily x3 – Free Action",
    trigger:
      "You or your Pokémon miss with an attack, fail a Skill Check, or fail a Save Check",
    effect:
      "Add half of your General Education Rank to the next roll of the same type that the triggering user makes.",
    book: "Core",
    pageNum: 140,
  },
  {
    name: "Instant Analysis",
    prerequisites: "Expert General Education",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Points remaining",
    effect: "Your Pokémon loses 2 Tutor Points and gains the Forewarn Ability.",
    book: "Core",
    pageNum: 140,
  },
  {
    name: "Echoes of the Future",
    prerequisites: "Master General Education",
    frequency: "Daily x2 – Free Action",
    trigger: "You or your Pokémon make a roll",
    effect: "You may roll twice and keep the best result.",
    book: "Core",
    pageNum: 140,
  },
  {
    name: "Apothecary",
    prerequisites: "Novice Medicine Education",
    frequency: "At-Will – Extended Action",
    effect: "You may use any Apothecary Recipe for which you qualify.",
    seeAlso: ["Apothecary Recipes"],
    book: "Core",
    pageNum: 141,
  },
  {
    name: "Patch Cure",
    prerequisites: "Apothecary, Adept Medicine Education",
    frequency: "At-Will – Extended Action",
    target: "A Restorative Item",
    effect:
      "You distill the target, gaining 3 Restorative Patches. Restorative Patches have the same effect as the items from which they were created, but can only be applied as an Extended Action.",
    book: "Core",
    pageNum: 141,
  },
  {
    name: "Medical Techniques",
    prerequisites: "Apothecary, Expert Medicine Education",
    frequency: "1 AP – Swift Action",
    trigger: "You apply a Restorative Item",
    effect:
      "The target gains a Tick of Hit Points, plus an additional amount of Hit Points equal to your Medicine Education Rank.",
    book: "Core",
    pageNum: 141,
  },
  {
    name: "Medicinal Blend",
    prerequisites: "Apothecary, Master Medicine Education",
    frequency: "At-Will – Extended Action",
    effect:
      "You fuse the two Ingredients, creating an Item that has the properties of both. If you choose two Restoratives, they cannot be Restoratives with the same effect (you could not for example, mix a Potion and a Super Potion). If a Restorative Patch is used as an Ingredient, the resulting item can only be used as an Extended Action.",
    extraFields: {
      Ingredients: "Two Restoratives, or a Restorative and an X-Item",
    },
    book: "Core",
    pageNum: 141,
  },
  {
    name: "Crystal Artificer",
    prerequisites: "Gem Lore",
    frequency: "At-Will – Extended Action",
    effect: "You may use any Crystal Artificer Recipe for which you qualify.",
    seeAlso: ["Artificer Recipes"],
    book: "Core",
    pageNum: 142,
  },
  {
    name: "Crystal Resonance",
    prerequisites: "Crystal Artificer, Skill Stunt (Dowsing)",
    frequency: "Static",
    effect:
      "You roll an additional 3d6 when determining how many Shards you find when Dowsing.",
    book: "Core",
    pageNum: 142,
  },
  {
    name: "Rainbow Light",
    prerequisites: "Crystal Artificer, Expert Occult Education",
    frequency: "2 AP – Standard Action",
    effect:
      "Effects: You create a Rainbow lasting one full round. While this Rainbow persists, the Effect Range of all Allies is increased by +3.",
    extraFields: { Condition: "You are wearing a Rainbow Gem" },
    book: "Core",
    pageNum: 142,
  },
  {
    name: "Fistful of Force",
    prerequisites: "Crystal Artificer, Master Occult Education",
    frequency: "Scene – Standard Action",
    effect:
      "You may destroy the Shard to use the Move Judgment. Judgment’s Type must be one of the Types associated with the used Shard. Instead of adding your Special Attack when using this attack, you may choose to add your Occult Education Rank tripled.",
    extraFields: {
      Condition:
        "You must have a Shard in you Main Hand or Off-Hand to use Fistful of Force",
    },
    book: "Core",
    pageNum: 142,
  },
  {
    name: "Seed Bag",
    tags: ["Ranked 2"],
    frequency: "X Daily – Extended Action",
    target: "A Willing Pokémon",
    effect:
      "Rank 1 Effect: You become adept at harvesting Seeds and Spores from Pokémon. You may target a willing Grass-Type Pokémon that knows Sleep Powder, Stun Spore, or Poison Powder. Add this move to your Move list for the remainder of the day. You may not use Seed Bag to have multiple instances of the same move in your Move list. Seed Bag may be used twice per day per Rank.\n\nRank 2 Effect: You may also harvest Cotton Spore, Leech Seed, Spore, or Worry Seed.",
    extraFields: {
      "Rank 1 Prerequisites":
        "Green Thumb, Adept General Education or Survival",
      "Rank 2 Prerequisites": "Master General Education or Survival",
    },
    book: "Core",
    pageNum: 143,
  },
  {
    name: "Top Tier Berries",
    prerequisites: "Green Thumb",
    frequency: "Static",
    effect:
      "You may grow additional Berries and Herbs, depending on the higher of your General Education or Survival Rank.\n\n»» Novice: You may grow Tier 2 Berries\n\n»» Adept: You may grow Mental Herbs, Power Herbs, White Herbs, and Tiny Mushrooms.\n\n»» Expert: You may grow Revival Herbs, Energy Roots, Big Mushrooms, and Tier 3 Berries\n\n»» Master: Increase the Soil Quality of all your plants by +1.",
    book: "Core",
    pageNum: 143,
  },
  {
    name: "Herb Lore",
    prerequisites: "Seed Bag Rank 1",
    frequency: "Static",
    effect:
      "You may create Energy Powder, Heal Powder, or Poultices from ingredients, as listed below.\n\n»» Energy Powder: A Sitrus Berry or Tiny Mushroom creates x2 Energy Powders. An Energy Root creates x3 Energy Powders.\n\n»» Heal Powder: A Lum Berry or Big Mushroom creates x2 Heal Powders. A Revival Herb creates x3 Heal Powders\n\n»» Poultice: x1 Energy Powder and x1 Heal Powder create x3 Poultices.",
    book: "Core",
    pageNum: 143,
  },
  {
    name: "Chemist",
    prerequisites: "Repel Crafter",
    frequency: "At-Will – Extended Action",
    effect: "You may craft any Chemistry Recipe for which you qualify.",
    seeAlso: ["Chemistry Recipe"],
    book: "Core",
    pageNum: 144,
  },
  {
    name: "Chemical Warfare",
    prerequisites: "Chemist, Adept Technology Education",
    frequency: "Scene x2 – Free Action",
    trigger: "You throw a Pester Ball",
    effect:
      "The Pester Ball creates a Blast 2, affecting all targets in the area.",
    book: "Core",
    pageNum: 144,
  },
  {
    name: "Caustic Chemistry",
    prerequisites: "Chemist, Expert Technology Education",
    frequency: "1 AP – Swift Action",
    trigger: "You hit with a Pester Ball or apply a Repel to a Pokémon",
    effect:
      "Make a Technology Education Roll. All targets affected by this Feature’s trigger lose Hit Points equal to your roll. This may only affect a target once per Scene.",
    book: "Core",
    pageNum: 144,
  },
  {
    name: "Playing God",
    prerequisites: "Chemist, Expert Technology Education",
    frequency: "At-Will – Extended Action",
    effect:
      "Choose Castform, Grimer, Koffing, Magnemite, Porygon, Solosis, Trubbish, or Voltorb. Using your chemistry set, you create an artificial Egg of the Chosen Pokémon, that hatches within a day. The resulting Pokémon is born at level 5, with the Nature and Ability of your choice (Abilities chosen from its species’ Basic Abilities). Additionally, you may enhance the Pokémon in several ways. Choose a number of upgrades below equal to your Technology Education Rank.\n\n»» The Pokémon is of an unusual coloration, gaining a +2d6 Bonus to the Introduction Stage of a Contest toward a single Contest Stat.\n\n»» The Pokémon adds a Move from its Egg Move or Move Tutor List to its Inheritance List. This may be performed up to 3 times.\n\n»» Increase one of the Pokémon’s Base Stats by +1. This counts as use of a Vitamin. This may be performed up to 5 times.",
    extraFields: { Cost: "$3500" },
    book: "Core",
    pageNum: 144,
  },
  {
    name: "Climatology",
    prerequisites: "Novice Survival",
    frequency: "Static",
    effect: "You gain the Overcoat Ability.",
    book: "Core",
    pageNum: 145,
  },
  {
    name: "Climate Control",
    prerequisites: "Climatology",
    frequency: "1 AP – Free Action",
    trigger:
      "A Move or Ability creates a Weather Effect while non-standard Weather is already in effect",
    effect:
      "The triggering Weather Effect does not replace the already extant Weather in effect; both exist simultaneously on the field. If a new Weather effect is placed on the field after the two that are out, both are replaced by the third, unless you activate this Feature again to replace only one.",
    book: "Core",
    pageNum: 145,
  },
  {
    name: "Weather Systems",
    tags: ["Climatology Research Field", "Branch"],
    prerequisites: "Climatology, Expert Survival",
    frequency: "At-Will – Extended Action",
    target: "Your Pokémon with at least 2 Tutor Point",
    effect:
      "Your Pokémon loses 2 Tutor Points, and learns your choice of Hail, Rain Dance, Sandstorm, or Sunny Day. The target must be able to learn the chosen Move through Level-Up, TM, or Tutor Moves. If the target has the chosen Move in their Level-Up List, Weather Systems costs no Tutor Points.",
    book: "Core",
    pageNum: 145,
  },
  {
    name: "Extreme Weather",
    tags: ["Climatology Research Field", "Branch"],
    prerequisites: "Climate Control, Master Survival",
    frequency: "Daily x3 – Free Action",
    trigger: "You or your Pokémon create a Weather Condition",
    effect:
      "The Weather is particularly intense and has additional effects.\n\n»» Hail: All Trainers and Pokémon that take Hail Damage take a -5 Penalty to all Damage Rolls.\n\n»» Rain: All Trainers and Pokémon that are not Water or Grass typed are Slowed.\n\n»» Sandstorm: All Trainers and Pokémon that take Sandstorm damage take a -2 Penalty to Accuracy Rolls.\n\n»» Sun: Trainers and Pokémon that are not Fire or Grass Typed are Suppressed.",
    book: "Core",
    pageNum: 145,
  },
  {
    name: "Witch Hunter",
    prerequisites: "Novice Occult Education",
    frequency: "Static",
    effect:
      'You gain the "Psionic Sight" Feature, even if you do not meet the prerequisites. If you already had the Psionic Sight Feature, you instead gain another Feature for which you qualify.',
    book: "Core",
    pageNum: 145,
  },
  {
    name: "Psionic Analysis",
    prerequisites: "Witch Hunter, Master Occult Education",
    frequency: "Scene – Extended Action",
    effect:
      "You are able to analyze Psychic Residue and can determine the following information about the Trainer or Pokémon that left the residue:\n\n»» Whether they are a Human or a Pokémon\n\n»» Which Psychic-Type Moves they know\n\n»» If they’re Human, which of the following Class Features they have: Telepath, Telekinetic, Warper",
    book: "Core",
    pageNum: 145,
  },
  {
    name: "Mental Resistance",
    prerequisites: "Witch Hunter",
    frequency: "Static",
    effect:
      "You gain the Mindlock Capability and 10 Damage Reduction against Special Psychic, Ghost, and Dark-Type damage.",
    book: "Core",
    pageNum: 145,
  },
  {
    name: "Immutable Mind",
    prerequisites: "Mental Resistance, Expert Occult Education",
    frequency: "Scene – Free Action",
    trigger: "You’re hit by a Psychic, Ghost, or Dark-Type Move",
    effect:
      "If the triggering Move was a Status-Class Move, the Move fails. If the Triggering Move was a Damaging Move with a Secondary Effect that triggers on a certain roll, you are immune to the secondary effect.",
    book: "Core",
    pageNum: 145,
  },
  {
    name: "Fossil Restoration",
    prerequisites: "Paleontologist, Novice Pokémon Education",
    frequency: "At-Will – Extended Action",
    target: "A Fossil you are reviving",
    effect:
      "The resulting Pokémon is born with 2 fewer Tutor Points, and gains its second Basic Ability. If it has only has one Basic Ability, it gains one of its Advanced Abilities, chosen by the GM. This Feature does not affect how the Pokémon continues to gain Abilities.",
    book: "Core",
    pageNum: 146,
  },
  {
    name: "Ancient Heritage",
    prerequisites: "Fossil Restoration",
    frequency: "At-Will – Extended Action",
    target: "Your Fossil Pokémon with at least 2 Tutor Points remaining",
    effect:
      "The target loses 2 Tutor Points and learns Ancient Power. If the target has Ancient Power in its Level-Up List, Ancient Heritage costs no Tutor Points. As a static effect, whenever your Pokémon use Ancient Power, its activated effect occurs on 18+ and you may always choose whether it deals Physical or Special Damage, using the appropriate attack Stat.",
    book: "Core",
    pageNum: 146,
  },
  {
    name: "Genetic Memory",
    prerequisites: "Ancient Heritage, Expert Pokémon Education",
    frequency: "Daily x2 – Extended Action",
    target: "Your Fossil Pokémon with at least 2 Tutor Points remaining",
    effect:
      "The target loses 2 Tutor Points and learns any Move from its Egg Move or Tutor Move List. Genetic Memory may target a Pokémon only twice: once with a Tutor Move and once with an Egg Move. Egg Moves tutored this way do not count against the limit of 3 for TM and Tutor Moves.",
    book: "Core",
    pageNum: 146,
  },
  {
    name: "Prehistoric Bond",
    tags: ["Paleontology Research Field", "Branch"],
    prerequisites: "Fossil Restoration, Expert Pokémon Education",
    frequency: "At-Will – Extended Action",
    target: "The remains of a Fossil you revived",
    effect:
      "You also produce a Held Item from the remnants of the Fossil. The effect of this Held Item is based on the highest Base Stat of the individual Pokémon being Revived, counting the effects of Nature but no other effects that alter Base Stats. If there is a tie, the GM decides which Base Stat is used. This Held Item may only be used by Pokémon revived from Fossils.\n\nHP – Relic Crown: The holder gains a +2 Bonus to all Save Checks.\n\nAttack – Primal Frame: The holder’s damaging attacks have their Critical Hit Range extended by +1.\n\nDefense – Prehistoric Razors: When a foe hits the holder with a damaging Melee Attack, the holder may cause them to lose a Tick of Hit Points as a Reaction.\n\nSpecial Attack – Primal Cloak: The holder’s damaging attacks have their Effect Range extended by +1.\n\nSpecial Defense – Prehistoric Aegis: The holder gains 5 Damage Reduction against Ranged Attacks.\n\nSpeed – Relic Sash: The holder gains +2 Evasion against Status Moves.",
    book: "Core",
    pageNum: 146,
  },
  {
    name: "Pusher",
    prerequisites: "Novice Pokémon Education",
    frequency: "Static",
    effect:
      "Your Pokémon gain the Basic Ranged Attacks, Aura Pulse, Enticing Bait, Extended Invisibility, Far Reading, Precise Threadings, Seismometer, TK Mastery, and Trail Sniffer Poke Edges automatically if they qualify for them, without having to invest any Tutor Points.",
    book: "Core",
    pageNum: 147,
  },
  {
    name: "This One's Special, I Know It",
    prerequisites: "Pusher",
    frequency: "Special – Free Action",
    target: "A hatching egg.",
    effect:
      "The Pokémon is born with special qualities, determined by the GM. This Feature may be activated one time per Pokémon Education Rank above Untrained.",
    book: "Core",
    pageNum: 147,
  },
  {
    name: "Skill Trainer",
    prerequisites: "Pusher",
    frequency: "At-Will – Free Action",
    trigger: "You Train your Pokémon",
    effect:
      "For each of your Pokémon that has been Trained during this time, choose a Skill; that Skill becomes Pushed until an Extended Rest is taken. Pokémon rolls +1d6 with Pushed Skills, unless that would cause you to roll more than 6d6; if so, that Pokémon rolls with a +3 Bonus instead. A Pokémon may have only one Pushed Skill at a time.",
    book: "Core",
    pageNum: 147,
  },
  {
    name: "Re-Balancing",
    prerequisites: "Pusher, Master Pokémon Education",
    frequency: "At-Will – Extended Action",
    target: "A Pokémon with 2 Tutor Points",
    effect:
      "The target loses 2 Tutor Points, and gains one of the following: +1 to all Base Stats, +2 to two different Base Stats, or +3 to a single Base Stat. The target then redistributes their Stat Points. A Pokémon may be targeted by Re-Balancing only once.",
    book: "Core",
    pageNum: 147,
  },
  {
    name: "Survivalist",
    tags: ["Class", "+HP"],
    prerequisites: "Novice Survival",
    frequency: "One Time Use – Extended Action",
    effect:
      "Choose a Terrain in which you have spent at least three nights. You gain Naturewalk for that terrain and a +2 bonus to Athletics, Acrobatics, Stealth, Perception, and Survival Checks in that terrain. When you have 2 Survivalist Features, you may choose a second Terrain. When you have 4 Survivalist Features, you may choose a third terrain. When you have 6 Survivalist Features, you may choose a fourth terrain. The terrains are: Grassland, Forest, Wetlands, Ocean, Tundra, Mountain, Cave, Urban, Desert",
    book: "Core",
    pageNum: 149,
  },
  {
    name: "Natural Fighter",
    tags: ["+HP"],
    prerequisites: "Survivalist",
    frequency: "1 AP – Special",
    effect:
      "You and your Pokémon become adept at using the environment to your advantage in battle. You or your Pokémon may activate Natural Fighter as a Standard Action to use the Move below corresponding to the current terrain. You and your Pokémon must still follow all Frequency limitations for the Move.\n\n»» Grassland: Cotton Spore\n\n»» Forest: Grass Whistle\n\n»» Wetlands: Mud Slap\n\n»» Ocean: Aqua Ring\n\n»» Tundra: Haze\n\n»» Mountain: Smack Down\n\n»» Cave: Astonish\n\n»» Urban: Fling\n\n»» Desert: Sand Attack",
    note: "GMs! Don't be super duper strict about the terrains here. Obviously a beach is analogous enough to a desert to use Sand Attack, and a lake can count as ocean terrain. In urban terrain, there'll probably at least be trash to Fling with the standard 6 DB option. On the other hand, most standard arenas for League matches won't qualify for any of the terrains. However, some arenas may be specifically designed to emulate a terrain type, such as a rocky stadium or a set of floating platforms in a pool.",
    book: "Core",
    pageNum: 149,
  },
  {
    name: "Trapper",
    tags: ["+HP"],
    prerequisites: "Survivalist, Adept Survival",
    frequency: "Daily x2 – Extended Action",
    effect:
      "You create a consumable item that creates 8 meters of Hazard within 6 meters. All 8 meters must be adjacent with at least one other space of the Hazard. These Hazards cause foes that run into them to become Slowed until the end of their next turn and have an additional effect based on the terrain in which the item was made. When foes run into these Hazards, they are destroyed after their effects resolve. Pokémon and Trainers with Naturewalk for the terrains associated with a Hazard are immune to its effects. These items must be used the same day they are created or they lose all effect.\n\n»» Dust Trap – Grassland or Desert: A foe that runs into this Hazard is Blinded until the end of their next turn.\n\n»» Tangle Trap – Forest or Wetlands: A foe that runs into this Hazard is must immediately stop Shifting, and they are Stuck instead of Slowed until the end of their next turn.\n\n»» Slick Trap – Ocean or Tundra: A foe that runs into this Hazard becomes Vulnerable until the end of their next Turn.\n\n»» Abrasion Trap – Mountain, Cave, or Urban: A foe that runs into this Hazard lowers their Defense and Special Defense by 1 Combat Stage.",
    book: "Core",
    pageNum: 149,
  },
  {
    name: "Wilderness Guide",
    tags: ["+HP", "Orders"],
    prerequisites: "Survivalist, Expert Survival",
    frequency: "Scene x3 – Standard Action",
    effect:
      "Wilderness Guide’s effect depends on your current terrain.\n\n»» Grassland or Forest: All allies gain the Stealth Capability and a +2 bonus to their Overland Speed for one full round.\n\n»» Ocean or Wetlands: All allies gain 5 Damage Reduction and a +2 bonus to their Swim Speed for one full round.\n\n»» Desert or Tundra: All allies do not lose Hit Points from Weather and ignore the effects of foes’ Sand Veil and Snow Cloak Abilities for one full round.\n\n»» Mountain or Cave: All allies do not trigger Hazards and are not Blinded in Low-Light conditions for one full round.\n\n»» Urban: All allies gain +1 Evasion and a +2 bonus on Accuracy Rolls and Skill Checks to perform the Dirty Trick and Manipulate Combat Maneuvers for one full round.",
    book: "Core",
    pageNum: 150,
  },
  {
    name: "Terrain Talent",
    tags: ["Ranked 2", "+HP"],
    frequency: "Static",
    effect:
      "You gain two Terrain Talents, chosen from the Terrains for which you gained Naturewalk from Survivalist.",
    seeAlso: ["Terrain Talents"],
    extraFields: {
      "Rank 1 Prerequisites": "Survivalist, 2 Mastered Terrains",
      "Rank 2 Prerequisites": "Survivalist, 4 Mastered Terrains",
    },
    note: "You do not have to be in the corresponding terrain to take advantage of Terrain Talents! They work everywhere.",
    book: "Core",
    pageNum: 150,
  },
  {
    name: "Adaptive Geography",
    image: "",
    tags: ["+HP"],
    prerequisites: "4 Survivalist Features, Master Survival",
    frequency: "Scene x2 – Free Action",
    trigger: "You or your Pokémon gains Initiative",
    effect:
      "The triggering target takes their turn as if they were in a terrain adjacent to the terrain they are in on the following graphic. For example, if you are standing in Wetlands terrain, you may act as if you are standing in Forest or Ocean Terrain. This affects Survivalist Features, Naturewalk Capabilities, Moves with the Environ Keyword, etc.",
    book: "Core",
    pageNum: 150,
  },
];

export default professional;
