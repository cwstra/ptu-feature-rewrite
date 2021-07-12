import { Entry } from "./types";

const batd_feats: Entry[] = [
  {
    name: "Major Gift",
    tags: ["Patron Stat"],
    prerequisites: "Touched, GM Permission",
    frequency: "Static",
    effect:
      "You gain one of your Patron’s Major Gifts, found in the Blessed and Damned splatbook. This Major Gift may be of your GM’s choosing. This feat is able to be taken multiple times based on your GM’s discretion.",
    book: "BatD",
    pageNum: 45,
  },
  {
    name: "Pact Gift",
    tags: ["Patron Stat"],
    prerequisites: "All of your Patrons Major Gifts, GM Permission",
    frequency: "Static",
    effect:
      "You gain your Patron’s Pact Gift, found in the Blessed and Damned splatbook. Lower Pantheon Legendaries do not have Pact Gifts.",
    book: "BatD",
    pageNum: 45,
  },
  {
    name: "Signer",
    tags: ["Patron Stat"],
    prerequisites: "Touched, GM Permission",
    frequency: "Static",
    effect:
      "Choose a Rank 1 Blessing. You gain this Blessing in the form of a Sign. Signs store the energy of the Divine, and may be activated as a Swift Action. Signs can be used once per Scene, and cost 1 AP to activate.",
    seeAlso: ["Blessings List"],
    book: "BatD",
    pageNum: 46,
  },
  {
    name: "Sign Mastery",
    tags: ["Ranked 4", "Patron Stat"],
    frequency: "Static",
    effect:
      "You acquire two Blessings in the form of Signs, marked with the Sign Mastery Rank you are gaining or lower. You must additionally meet any Prerequisites of the Blessing.",
    note: "If your Patron does not have a Pact Gift, you instead require all their Major Gifts to attain Rank 4.",
    extraFields: {
      "Rank 1 Prerequisites": "Signer, GM Permission",
      "Rank 2 Prerequisites": "A Major Gift, GM Permission",
      "Rank 3 Prerequisites": "All your Patron's Major Gifts, GM Permission",
      "Rank 4 Prerequisites": "A Pact Gift, GM Permission",
    },
    seeAlso: ["Blessings List"],
    book: "BatD",
    pageNum: 46,
  },
  {
    name: "Messiah",
    tags: ["Patron Stat"],
    prerequisites: "Touched, GM Permission",
    frequency: "One Time Use/5 - Extended Action",
    effect:
      "Your Connection with one of your Patrons has reached such a point that even you are capable of performing the miracles they are renowned and worshiped for. Expending a use of Messiah allows you to perform such a miracle. For example, in a region where Shaymin is known to restore withered forests to their former glory, a Touched who is a Messiah of Shaymin might be able to cause a forest to start to rapidly recover from the aftermath of a wildfire. Such acts are usually, but not always, noticeably supernatural and divine.",
    book: "BatD",
    pageNum: 48,
  },
  {
    name: "In My Name",
    tags: ["Ranked 4", "Patron Stat"],
    frequency: "Static",
    effect:
      "You acquire two Blessings marked with the Sign Mastery Rank you are gaining or lower. You must additionally meet any Prerequisites of the Blessing.",
    note: "If your Patron does not have a Pact Gift, you instead require all their Major Gifts to attain Rank 4.",
    extraFields: {
      "Rank 1 Prerequisites": "Messiah, GM Permission",
      "Rank 2 Prerequisites":
        "Completed a task on behalf of your Patron, GM Permission",
      "Rank 3 Prerequisites": "A Major Gift, GM Permission",
      "Rank 4 Prerequisites": "A Pact Gift, GM Permission",
    },
    seeAlso: ["Blessings List"],
    book: "BatD",
    pageNum: 48,
  },
  {
    name: "Branded",
    tags: ["Patron Stat"],
    prerequisites: "GM Permission",
    frequency: "Static",
    effect:
      "You have made a contract with a deity or other supernatural being and have been Branded for it. This Brand may or may not be of your choosing. The other party will uphold their side of the deal and expects you to do the same. Other Legendaries may be wary to grant you Gifts in the future based on the contents of this contract. Your Patron Stats for this feature are those of the being you made your contract with. If this being was not a typical Legendary, its Patron Stats are its two highest base stats.",
    book: "BatD",
    pageNum: 50,
  },
  {
    name: "Usurper",
    tags: ["Patron Stat"],
    prerequisites:
      "You have slain a God and through occult ritual or technology have absorbed its essence.",
    frequency: "Static",
    effect:
      "Your human form is now considered your Avatar, and you gain a second set of stats for your Pokémon form. This form is that of the Legendary you usurped, starts at level 1 with the nature and abilities of your choice, and may gain experience as if it were a Pokémon you owned. Switching between your human form and this one takes a Standard Action. Usurpers cannot receive Gifts or Blessings from other Legendaries, as they are divinity themselves now. Any Touched, Branded, Messiah, and Signer Edges and Features you possessed up until this point are refunded. The Patron Stats for this Feature and all other Usurper Features matches the stats of the Legendary you Usurped.",
    book: "BatD",
    pageNum: 52,
  },
  {
    name: "Shared Strengths Rank 1",
    tags: ["Ranked 3", "Patron Stat"],
    frequency: "Static",
    effect:
      "Rank 1 Effect: You gain access to your Legendary Form’s Abilities while in your Avatar form.\n\nRank 2 Effect: You gain your Legendary Form's Types while in your Avatar Form\n\nRank 3 Effect: You gain access to your Legendary Form's Move List while in your Avatar Form.",
    note: "Your Legendary Form, by default, has access to all Capabilities, Abilities, and Moves your Avatar does.",
    extraFields: {
      "Rank 1 Prerequisites": "Pokémon Form Level 20",
      "Rank 2 Prerequisites": "Pokémon Form Level 35",
      "Rank 3 Prerequisites": "True Power, Pokémon Form Level 50",
    },
    book: "BatD",
    pageNum: 52,
  },
  {
    name: "True Power",
    tags: ["Patron Stat"],
    prerequisites: "Shared Strengths Rank 2, Pokémon Form Level 40",
    frequency: "Static",
    effect:
      "You gain one of the Domains and its corresponding Legendary Aura associated with your Legendary Form. This Feature may be taken multiple times, but with the second time at Pokémon Form Level 60, and the third at Pokémon Form level 75.",
    book: "BatD",
    pageNum: 52,
  },
  {
    name: "Gift of Power",
    tags: ["Patron Stat"],
    prerequisites: "Pokémon Form Level 60",
    frequency: "One Time Use",
    target: "A Trainer",
    effect:
      "You gift your target with a Blessing of your own. Whether this makes them Touched, a Signer, or Branded is at your digression. The actual Blessings may not need be the one listed here for your Legendary Form, but ones of your own creation at your GM’s discretion.",
    book: "BatD",
    pageNum: 52,
  },
];

const gifts = [
  // Gifts
  {
    name: "Gift of Command",
    tags: ["Patron Stat"],
    prerequisites: "One Major Gift from Your Patron Legendary",
    frequency: "Static | 2 AP - Standard Action, Interrupt",
    effect:
      "Static Effect: You sense the presence of and can identify those with Gifts coming from your patron’s subservient Pokémon. You know which Gifts someone has from your patron’s subservient Pokémon by looking at them.\n\n2 AP Effect: Target Trainer within 8 meters with a Gift from your patron’s subservient Pokémon has the Gift of your choice from that subservient Pokémon disabled for the next ten minutes.",
  },
  {
    name: "Symbolsight",
    tags: ["Patron Stat"],
    prerequisites: "GM Permission",
    frequency: "Static | 1 AP - Standard Action",
    effect:
      "Static: You know when there are people, Pokémon, or objects that would appear differently to you through Symbolsight within an area of you about the size of a small town. You do not know their location, number, or distance from you, only that there is at least one within the range of your sense.\n\n1 AP Effect: For the next ten minutes, you see the world through the lens of Symbolsight. You may end this effect early as a Free Action.",
  },
  {
    name: "Giftsapper",
    tags: ["+Any"],
    prerequisites: "GM Permission, No Gifts",
    frequency: "Static",
    effect:
      "As long as Giftsapper’s user is conscious, all Trainers within 10 meters must make a Focus Check with DC equal to three times the highest Skill Rank of Giftsapper’s user between Focus, Intimidate, or Command in order to activate their Gifts. This Check is made each time a Trainer attempts to use an activated Gift, and a failure means neither any resources such as AP nor the frequency of the Gift is expended. For Gifts with Static or ongoing effects, the Check is made each turn, and a failure ends the effect for that turn. Giftsapper’s user may never gain Gifts.",
  },
  {
    name: "Godslayer",
    tags: ["Patron Stat"],
    prerequisites: "Gm Permission",
    frequency: "EOT – Standard Action",
    effect:
      "You may attempt to shatter one of the target’s Legendary Auras. The AC of this action is 10. If you successfully disabled the Aura, but rolled a 10-15, the feedback from the action gives you an Injury.",
  },
];

export default batd_feats;
