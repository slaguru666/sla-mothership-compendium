const MODULE_ID = "sla-mothership-compendium";
const SYSTEM_ID = "sla-mothership";
const ROOT_FOLDER_NAME = "SLA Mothership";

const DEFAULT_ICONS = {
  item: "icons/svg/item-bag.svg",
  ammo: "icons/weapons/ammunition/shot-round.webp",
  drug: "icons/consumables/potions/potion-round-corked-red.webp",
  weapon: "icons/svg/sword.svg",
  armor: "icons/svg/shield.svg",
  ability: "icons/svg/explosion.svg",
  skill: "icons/svg/book.svg",
  species: "icons/svg/mystery-man.svg",
  package: "icons/svg/d20.svg",
  condition: "icons/svg/aura.svg"
};

const FOLDER_SPECS = [
  ["skills", "Skills", "#235f80"],
  ["weapons", "Weapons", "#7b2525"],
  ["armour", "Armour", "#4c5f78"],
  ["ammo", "Ammunition", "#6b4f2f"],
  ["drugs", "Drugs", "#6b4f3f"],
  ["gear", "Gear", "#3f6b56"],
  ["conditions", "Conditions", "#6d5a2f"],
  ["species", "Species", "#5f4d7b"],
  ["packages", "Training Packages", "#7b6a2d"],
  ["ebb", "Ebb Abilities", "#5c2470"]
];

const AMMO_CALIBRES = [
  { key: "3mm", label: "3mm", cost: 1, group: "Handgun", typical: "FEN 603, machine pistols" },
  { key: "5mm", label: "5mm", cost: 2, group: "Handgun", typical: "Compact pistols, light SMGs" },
  { key: "8mm", label: "8mm", cost: 4, group: "Handgun", typical: "Heavy pistols (GA 50 class)" },
  { key: "10mm-pistol", label: "10mm (pistol)", cost: 5, group: "Handgun", typical: "Heavy autos, SMG sidearms" },
  { key: "12mm", label: "12mm", cost: 8, group: "Handgun", typical: "Magnum pistols, hand cannons" },
  { key: "3mm-smg", label: "3mm SMG", cost: 1, group: "SMG / PDW", typical: "Micro-SMGs, machine pistols" },
  { key: "5mm-smg", label: "5mm SMG", cost: 2, group: "SMG / PDW", typical: "FEN 204 light loads" },
  { key: "10mm-smg", label: "10mm SMG", cost: 5, group: "SMG / PDW", typical: "Heavy SMGs" },
  { key: "5mm-rifle", label: "5mm rifle", cost: 3, group: "Rifle / Carbine", typical: "Light carbines, PDWs" },
  { key: "7mm-rifle", label: "7mm rifle", cost: 6, group: "Rifle / Carbine", typical: "FEN AR-class rifles" },
  { key: "8mm-rifle", label: "8mm rifle", cost: 8, group: "Rifle / Carbine", typical: "Battle rifles, DMRs, sniper" },
  { key: "10mm-rifle", label: "10mm rifle", cost: 12, group: "Rifle / Carbine", typical: "Heavy battle rifles" },
  { key: "12-gauge", label: "12-gauge", cost: 4, group: "Shotgun", typical: "Combat buck/slug shells" },
  { key: "10-gauge", label: "10-gauge", cost: 6, group: "Shotgun", typical: "Heavy buck/slug shells" },
  { key: "12-gauge-he", label: "12-gauge HE", cost: 10, group: "Shotgun", typical: "HE shotgun shells" },
  { key: "10-gauge-he", label: "10-gauge HE", cost: 14, group: "Shotgun", typical: "Heavy HE shells" },
  { key: "20mm-hedp", label: "20mm HEDP", cost: 60, group: "Heavy / Launcher", typical: "Autocannons, heavy rifles" },
  { key: "25mm-he", label: "25mm HE", cost: 80, group: "Heavy / Launcher", typical: "Autocannons, vehicle weapons" },
  { key: "30mm-heat", label: "30mm HEAT", cost: 120, group: "Heavy / Launcher", typical: "Vehicle armour-killer rounds" },
  { key: "40mm-he-grenade", label: "40mm HE grenade", cost: 40, group: "Heavy / Launcher", typical: "MILA / underslung HE" },
  { key: "40mm-smoke-gas", label: "40mm smoke / gas", cost: 25, group: "Heavy / Launcher", typical: "Obscurant and riot control" }
];

const AMMO_TAGS = [
  { key: "STD", label: "STD", multiplier: 1, summary: "Standard load." },
  { key: "AP", label: "AP", multiplier: 2, summary: "Armour-piercing load." },
  { key: "HE", label: "HE", multiplier: 3, summary: "High explosive load." },
  { key: "HEAP", label: "HEAP", multiplier: 4, summary: "High explosive armour-piercing load." }
];

const SLA_PANIC_ENTRIES = [
  { title: "Ad Spike", effect: "Your pulse kicks hard. Suffer -5 on the next roll unless an ally grounds you or you take cover." },
  { title: "Tunnel Vision", effect: "You fixate on the loudest threat. Your next action must address it or suffer Disadvantage." },
  { title: "Corporate Flinch", effect: "Training and dread collide. Lose your reaction until the start of your next turn." },
  { title: "Broadcast Slip", effect: "You mutter, shout, or open comms at the wrong moment. Nearby hostiles or listeners get your position." },
  { title: "Shakes", effect: "Hands go unreliable. Physical or firearm rolls are at -10 until the end of the next round." },
  { title: "Freeze", effect: "You lock up for a beat. Lose your next half-action or equivalent moment of tempo." },
  { title: "Bad Read", effect: "You misjudge the situation. The GM gives one immediate false assumption that feels true until contradicted." },
  { title: "Overcompensate", effect: "You move too hard or too fast. End up exposed, off-line, or out of formation." },
  { title: "Stress Leak", effect: "Gain 1d5 Stress as the scene starts to get inside your head." },
  { title: "Discipline Break", effect: "Your next roll is at Disadvantage unless a squad leader, handler, or ally snaps you back into line." },
  { title: "Wild Action", effect: "You fire, strike, run, or blurt before thinking. The GM decides the most dangerous impulsive version of your intent." },
  { title: "Collateral Opening", effect: "You create a gap in the line. An ally loses cover or a hostile gains an immediate opportunity." },
  { title: "Gear Fumble", effect: "Drop, jam, or misplace a critical piece of kit. Spend an action to recover it if possible." },
  { title: "Crack in Persona", effect: "The mask slips. Any social standing, media poise, or intimidation you were leaning on collapses for the scene." },
  { title: "Short Spiral", effect: "Gain 1d10 Stress and immediately make a Fear Save. On a failure, escalate one result higher on this table." },
  { title: "Target Blindness", effect: "You cannot willingly approach the source of panic next round without a successful Fear Save." },
  { title: "Break and Run", effect: "You bolt for the nearest hard cover, exit, or authority figure and cannot attack until you recover." },
  { title: "Friendly Threat", effect: "Everyone nearby reads you as unstable. Allies in close range take -5 on their next roll unless they disengage from you." },
  { title: "Flux-Sick Collapse", effect: "Drop prone or to one knee and lose your next full action. Ebb users must also make a Fear / Flux Save." },
  { title: "Sector Nine", effect: "You fully lose operational discipline. The GM takes your next action, then you gain 1 wound or 2d10 Stress, whichever fits the scene better." }
];

let cachedData = null;

Hooks.once("init", () => {
  game.slaMothershipCompendium = {
    seedWorld: (options = {}) => seedWorld(options),
    setupWorld: (options = {}) => ensureWorldSetup(options)
  };

  game.settings.register(MODULE_ID, "autoSeedWorld", {
    name: "SlaMothershipCompendium.AutoSeed",
    hint: "SlaMothershipCompendium.AutoSeedHint",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "seededVersion", {
    scope: "world",
    config: false,
    type: String,
    default: ""
  });

  game.settings.register(MODULE_ID, "setupVersion", {
    scope: "world",
    config: false,
    type: String,
    default: ""
  });
});

Hooks.once("ready", async () => {
  if (game.system.id !== SYSTEM_ID || !game.user?.isGM) return;
  if (!game.settings.get(MODULE_ID, "autoSeedWorld")) return;

  const moduleVersion = game.modules.get(MODULE_ID)?.version ?? "0.0.0";
  const seededVersion = game.settings.get(MODULE_ID, "seededVersion");
  const setupVersion = game.settings.get(MODULE_ID, "setupVersion");
  if (seededVersion === moduleVersion && setupVersion === moduleVersion) return;

  try {
    if (seededVersion !== moduleVersion) {
      await seedWorld({ overwrite: false, notify: true });
      await game.settings.set(MODULE_ID, "seededVersion", moduleVersion);
    }
    if (setupVersion !== moduleVersion) {
      await ensureWorldSetup({ overwrite: false, notify: true });
      await game.settings.set(MODULE_ID, "setupVersion", moduleVersion);
    }
  } catch (err) {
    console.error(`${MODULE_ID} | Auto-seed failed`, err);
  }
});

async function seedWorld({ overwrite = false, notify = true } = {}) {
  if (game.system.id !== SYSTEM_ID) {
    ui.notifications.warn("SLA Mothership Companion can only seed SLA Mothership worlds.");
    return { ok: false, reason: "wrong-system" };
  }
  if (!game.user?.isGM) {
    ui.notifications.warn("Only a GM can seed SLA Mothership content.");
    return { ok: false, reason: "not-gm" };
  }

  const data = await loadData();
  const folders = await ensureFolders();
  const existing = buildExistingIndex();
  const summary = { created: 0, updated: 0, skipped: 0 };

  const payloads = [
    ...data.skills.skills.map((entry) => buildSkill(entry, folders.skills, data.iconMap.skills)),
    ...data.species.species.map((entry) => buildSpecies(entry, folders.species, data.iconMap.species)),
    ...data.packages.packages.map((entry) => buildTrainingPackage(entry, folders.packages, data.iconMap.ebb)),
    ...data.equipment.weapons.map((entry) => buildWeapon(entry, folders.weapons, data.iconMap.weapons)),
    ...data.equipment.armour.map((entry) => buildArmour(entry, folders.armour, data.iconMap.armor)),
    ...AMMO_CALIBRES.flatMap((entry) => AMMO_TAGS.map((tag) => buildAmmoGear(entry, tag, folders.ammo))),
    ...data.drugs.drugs.map((entry) => buildDrug(entry, folders.drugs)),
    ...flattenGeneralEquipment(data.generalEquipment).map((entry) => buildGear(entry, folders.gear, data.iconMap.gear)),
    ...data.conditions.conditions.map((entry) => buildCondition(entry, folders.conditions)),
    ...data.ebb.abilities.map((entry) => buildEbbAbility(entry, folders.ebb, data.iconMap.ebb))
  ];

  for (const payload of payloads) {
    const existingDoc = existing.get(payload.flags?.[SYSTEM_ID]?.slaSeed?.key) ?? null;
    if (!existingDoc) {
      await Item.create(payload);
      summary.created += 1;
      continue;
    }
    if (!overwrite) {
      summary.skipped += 1;
      continue;
    }
    await existingDoc.update({
      name: payload.name,
      type: payload.type,
      img: payload.img,
      folder: payload.folder,
      system: payload.system,
      [`flags.${SYSTEM_ID}.slaSeed`]: payload.flags?.[SYSTEM_ID]?.slaSeed ?? {}
    });
    summary.updated += 1;
  }

  if (notify) {
    ui.notifications.info(
      `SLA Mothership seeded: ${summary.created} created, ${summary.updated} updated, ${summary.skipped} unchanged.`
    );
  }
  return { ok: true, summary };
}

async function ensureWorldSetup({ overwrite = false, notify = true } = {}) {
  if (game.system.id !== SYSTEM_ID || !game.user?.isGM) {
    return { ok: false, reason: "unavailable" };
  }

  const tableSummary = await ensureSlaPanicTables({ overwrite });
  const macroSummary = await ensureMacros({ overwrite });
  const squadSummary = game.slaMothership?.createStarterSquad
    ? await game.slaMothership.createStarterSquad({ overwrite, notify: false })
    : { created: 0, updated: 0 };

  if (notify) {
    ui.notifications.info(
      `SLA Mothership tools ready: ${tableSummary.created + tableSummary.updated} panic tables prepared, ${macroSummary.created + macroSummary.updated} macros prepared, ${squadSummary.created + squadSummary.updated} starter operatives prepared.`
    );
  }

  return {
    ok: true,
    tables: tableSummary,
    macros: macroSummary,
    squad: squadSummary
  };
}

async function loadData() {
  if (cachedData) return cachedData;

  const readJson = async (name) => {
    const response = await fetch(`modules/${MODULE_ID}/sla-data/${name}`);
    if (!response.ok) throw new Error(`Failed loading ${name}`);
    return response.json();
  };

  cachedData = {
    skills: await readJson("skills.json"),
    species: await readJson("species.json"),
    packages: await readJson("training-packages.json"),
    equipment: await readJson("equipment.json"),
    drugs: await readJson("drugs.json"),
    generalEquipment: await readJson("general-equipment.json"),
    conditions: await readJson("conditions.json"),
    ebb: await readJson("ebb-abilities.json"),
    iconMap: await readJson("icon-map.json")
  };

  return cachedData;
}

async function ensureFolders() {
  let root = game.folders.find((folder) => folder.type === "Item" && folder.name === ROOT_FOLDER_NAME && !folder.folder);
  if (!root) {
    root = await Folder.create({ name: ROOT_FOLDER_NAME, type: "Item", color: "#163447" });
  }

  const folderMap = {};
  for (const [key, label, color] of FOLDER_SPECS) {
    let folder = game.folders.find((entry) => entry.type === "Item" && entry.name === label && entry.folder?.id === root.id);
    if (!folder) {
      folder = await Folder.create({ name: label, type: "Item", folder: root.id, color });
    }
    folderMap[key] = folder;
  }
  return folderMap;
}

function buildExistingIndex() {
  const map = new Map();
  for (const item of game.items ?? []) {
    const key = item.flags?.[SYSTEM_ID]?.slaSeed?.key;
    if (key) map.set(String(key), item);
  }
  return map;
}

async function ensureMacros({ overwrite = false } = {}) {
  let folder = game.folders.find((entry) => entry.type === "Macro" && entry.name === "SLA Mothership Tools" && !entry.folder);
  if (!folder) {
    folder = await Folder.create({ name: "SLA Mothership Tools", type: "Macro", color: "#163447" });
  }

  const macros = [
    {
      name: "SLA World Tools",
      img: "icons/tools/hand/wrench-blue.webp",
      command: "game.slaMothership.openTools();"
    },
    {
      name: "Generate Random Operative",
      img: "icons/svg/dice-target.svg",
      command: "game.slaMothership.createRandomOperative();"
    },
    {
      name: "Fear / Flux Save",
      img: "icons/svg/d10-grey.svg",
      command: "game.user.character?.triggerSlaFluxPanic({ source: 'Macro Flux control check', panicOnFailure: false });"
    },
    {
      name: "Gain 1 Flux",
      img: "icons/magic/control/debuff-energy-hold-pink.webp",
      command: "game.user.character?.update({'system.sla.flux.value': Number(game.user.character.system.sla.flux.value || 0) + 1}); game.user.character?.updateSlaFluxState();"
    },
    {
      name: "Flux Panic",
      img: "icons/svg/terror.svg",
      command: "game.user.character?.triggerSlaFluxPanic({ source: 'Macro Flux panic', panicOnFailure: true, forcePanic: true });"
    },
    {
      name: "Lose 1 Flux",
      img: "icons/magic/control/debuff-energy-hold-teal.webp",
      command: "game.user.character?.update({'system.sla.flux.value': Math.max(0, Number(game.user.character.system.sla.flux.value || 0) - 1)}); game.user.character?.updateSlaFluxState();"
    }
  ];

  let created = 0;
  let updated = 0;

  for (const spec of macros) {
    const existing = game.macros.find((macro) => macro.folder?.id === folder.id && macro.name === spec.name);
    const payload = {
      name: spec.name,
      type: "script",
      scope: "global",
      img: spec.img,
      command: spec.command,
      folder: folder.id,
      flags: {
        [SYSTEM_ID]: {
          slaMacro: true
        }
      }
    };

    if (!existing) {
      await Macro.create(payload);
      created += 1;
      continue;
    }
    if (!overwrite) continue;
    await existing.update(payload);
    updated += 1;
  }

  return { created, updated };
}

function buildSkill(entry, folder, iconMap) {
  const key = `skill:${slug(entry.name)}`;
  const ebbOnly = ["Biofeedback", "Formulate", "Ebb (Core)"].includes(entry.name) || String(entry.name ?? "").startsWith("Ebb ");
  const attributeTags = Array.isArray(entry.attributes) ? entry.attributes : [];
  return {
    name: entry.name,
    type: "skill",
    img: resolveIcon(entry.name, iconMap, DEFAULT_ICONS.skill),
    folder: folder.id,
    system: {
      description: `
        <p><strong>Category:</strong> ${entry.categoryRef ?? "General"}</p>
        <p><strong>SLA BRP base:</strong> ${entry.base ?? 0}%.</p>
        ${attributeTags.length ? `<p><strong>Stat use:</strong> ${attributeTags.join(", ")}.</p>` : ""}
        ${entry.combat ? "<p><strong>Use:</strong> Combat-linked skill. Roll it when the attack, defence, or violent action maps to this discipline.</p>" : ""}
        ${ebbOnly ? "<p><strong>Restriction:</strong> Ebb-only discipline. Remove it from non-Ebon and non-Brain Waster operatives.</p>" : ""}
        ${entry.notes ? entry.notes.split(/\n+/).map(line => `<p>${line.trim()}</p>`).join("") : ""}
      `,
      rank: "SLA",
      bonus: Number(entry.base ?? 0),
      prerequisite_ids: [],
      sla: {
        category: entry.categoryRef ?? "",
        skillFamily: entry.categoryRef ?? "",
        baseBonus: Number(entry.base ?? 0),
        combat: Boolean(entry.combat),
        attributes: Array.isArray(entry.attributes) ? entry.attributes : [],
        ebbOnly,
        source: "SLA skill import"
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "skill" } } }
  };
}

function buildSpecies(entry, folder, iconMap) {
  const key = `species:${slug(entry.name)}`;
  const bonuses = (entry.skillBonuses ?? [])
    .map((bonus) => `<li>${bonus.skillRef}: +${bonus.bonus}%</li>`)
    .join("");
  const choices = (entry.choiceBonuses ?? [])
    .map((bonus) => `<li>Choose ${bonus.count} skills for +${bonus.bonus}% each.</li>`)
    .join("");
  const notes = (entry.notes ?? []).map((note) => `<li>${note}</li>`).join("");
  const specialRules = (entry.specialRules ?? [])
    .map((rule) => `<li><strong>${rule.label}</strong>: ${rule.summary}</li>`)
    .join("");

  return {
    name: entry.name,
    type: "item",
    img: resolveIcon(entry.name, iconMap, DEFAULT_ICONS.species),
    folder: folder.id,
    system: {
      quantity: 1,
      weight: 0,
      cost: 0,
      description: `
        <p><strong>Starter package:</strong> ${entry.starterPackage ?? "None"}</p>
        <p><strong>Starting SCL:</strong> ${entry.startingScl ?? "N/A"}</p>
        ${entry.identity ? `<p><strong>Identity:</strong> ${entry.identity}</p>` : ""}
        ${entry.fieldPressure ? `<p><strong>Field Pressure:</strong> ${entry.fieldPressure}</p>` : ""}
        ${entry.mothershipDescription ? `<p><strong>Mothership Template:</strong> ${entry.mothershipDescription}</p>` : ""}
        ${renderMothershipProfile(entry.mothershipStats)}
        ${bonuses ? `<p><strong>Skill bonuses</strong></p><ul>${bonuses}</ul>` : ""}
        ${choices ? `<p><strong>Choice bonuses</strong></p><ul>${choices}</ul>` : ""}
        ${specialRules ? `<p><strong>Special Rules</strong></p><ul>${specialRules}</ul>` : ""}
        ${notes ? `<p><strong>Notes</strong></p><ul>${notes}</ul>` : ""}
      `,
      sla: {
        category: "Species",
        power: "",
        manufacturer: "",
        rarity: "",
        source: "SLA species import"
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "species" } } }
  };
}

function buildTrainingPackage(entry, folder, iconMap) {
  const key = `package:${slug(entry.name)}`;
  const skills = (entry.skills ?? []).map((skill) => `<li>${skill}</li>`).join("");
  return {
    name: entry.name,
    type: "item",
    img: resolveIcon(entry.name, iconMap, DEFAULT_ICONS.package),
    folder: folder.id,
    system: {
      quantity: 1,
      weight: 0,
      cost: 0,
      description: `
        <p><strong>Wealth:</strong> ${entry.wealth ?? "Varies"}</p>
        <p><strong>Skill package</strong></p>
        <ul>${skills}</ul>
      `,
      sla: {
        category: "Training Package",
        power: "",
        manufacturer: "",
        rarity: "",
        source: "SLA training package import"
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "package" } } }
  };
}

function buildWeaponFireModes(entry) {
  const shotsPerFire = Math.max(1, Number(entry.rof ?? 1) || 1);
  const special = String(entry.special ?? "").toLowerCase();
  const rofText = String(entry.rofText ?? "").toLowerCase();
  const modes = deriveWeaponModeDefaults(shotsPerFire, special, rofText);

  const uniqueModes = modes.filter((mode, index, list) =>
    list.findIndex((entry) => entry.label === mode.label && entry.shots === mode.shots) === index
  );

  return {
    fireModes: uniqueModes.map((mode) => `${mode.label}:${mode.shots}`).join(", "),
    currentFireMode: uniqueModes[0]?.label ?? "Single",
    shotsPerFire: uniqueModes[0]?.shots ?? 1
  };
}

function deriveAmmoCalibre(entry) {
  const text = `${entry.name ?? ""} ${entry.ammoText ?? ""} ${(entry.notes ?? []).join(" ")}`.toLowerCase();
  const rules = [
    [/fen\s*603\s*heavy|heavy pistol|ga\s*50|finisher/, "8mm"],
    [/fen\s*603|auto[\s-]*pistol/, "3mm"],
    [/shiver pistol|fen\s*401/, "5mm"],
    [/gunhead|fen\s*204/, "5mm-smg"],
    [/fen\s*209|machine pistol/, "3mm-smg"],
    [/fen\s*ar|assault rifle/, "7mm-rifle"],
    [/sniper|fen\s*981/, "8mm-rifle"],
    [/urban carbine|fen\s*701|carbine/, "5mm-rifle"],
    [/street sweeper|auto-shotgun|kps|mangler|shotgun/, "12-gauge"],
    [/reaper|lmg/, "7mm-rifle"],
    [/mila|40mm/, "40mm-he-grenade"]
  ];

  for (const [rule, key] of rules) {
    if (rule.test(text)) {
      return AMMO_CALIBRES.find((entry) => entry.key === key) ?? { label: "Generic", cost: 1 };
    }
  }

  return { label: "Generic", cost: 1 };
}

function buildAmmoIconPath(calibreKey, tagKey) {
  return `systems/sla-mothership/images/icons/sla-ammo/${calibreKey}__${tagKey}.png`;
}

function buildAmmoGear(entry, tag, folder) {
  const isStd = tag.key === "STD";
  const key = isStd ? `ammo:${slug(entry.label)}` : `ammo:${slug(entry.label)}:${tag.key.toLowerCase()}`;
  const roundCost = Math.round(entry.cost * Number(tag.multiplier ?? 1));
  return {
    name: `Ammo: ${entry.label} [${tag.label}]`,
    type: "item",
    img: buildAmmoIconPath(entry.key, tag.key),
    folder: folder.id,
    system: {
      quantity: 1,
      weight: 0,
      cost: roundCost,
      description: `
        <p><strong>Calibre:</strong> ${entry.label}</p>
        <p><strong>Group:</strong> ${entry.group}</p>
        <p><strong>Ammo type:</strong> ${tag.label}</p>
        <p><strong>Cost per round:</strong> ${roundCost} cR</p>
        <p><strong>Typical use:</strong> ${entry.typical}</p>
        <p>${tag.summary} This item uses the SLA BRP ammo cost model for Mothership.</p>
      `,
      sla: {
        category: "Ammunition",
        calibre: entry.label,
        ammoTag: tag.key,
        source: "SLA ammo catalogue import"
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "ammo" } } }
  };
}

function buildWeapon(entry, folder, iconMap) {
  const key = `weapon:${slug(entry.name)}`;
  const shots = Math.max(0, Number(entry.ammo ?? 0) || 0);
  const useAmmo = shots > 0;
  const calibre = deriveAmmoCalibre(entry);
  const reserveStd = Math.max(0, Number(entry.ammoReserveStd ?? (useAmmo ? shots * 3 : 0)) || 0);
  const reserveAp = Math.max(0, Number(entry.ammoReserveAp ?? 0) || 0);
  const reserveHe = Math.max(0, Number(entry.ammoReserveHe ?? 0) || 0);
  const reserveHeap = Math.max(0, Number(entry.ammoReserveHeap ?? 0) || 0);
  const reserveAmmo = reserveStd + reserveAp + reserveHe + reserveHeap;
  const fireModeConfig = buildWeaponFireModes(entry);
  return {
    name: entry.name,
    type: "weapon",
    img: resolveIcon(entry.name, iconMap, DEFAULT_ICONS.weapon),
    folder: folder.id,
    system: {
      antiArmor: /ap|heap/i.test(`${entry.damageType ?? ""} ${entry.special ?? ""}`),
      damage: toDice(entry.damage),
      ammo: reserveAmmo,
      shots: Math.max(shots, 1),
      curShots: shots,
      shotsPerFire: fireModeConfig.shotsPerFire,
      useAmmo,
      ammoType: useAmmo ? calibre.label : "",
      ammoCalibre: useAmmo ? calibre.label : "",
      ammoBaseCost: useAmmo ? calibre.cost : 0,
      ammoTag: entry.ammoTag ?? "STD",
      ammoLoadedType: entry.ammoLoadedType ?? entry.ammoTag ?? "STD",
      ammoAllowStd: true,
      ammoAllowAp: true,
      ammoAllowHe: true,
      ammoAllowHeap: true,
      ammoReserve: reserveAmmo,
      ammoReserveStd: reserveStd,
      ammoReserveAp: reserveAp,
      ammoReserveHe: reserveHe,
      ammoReserveHeap: reserveHeap,
      wound: "",
      critDmg: "",
      woundEffect: "",
      bonus: 0,
      weight: encToKg(entry.enc),
      carryState: "equipped",
      equipped: true,
      cost: priceBand(entry.price),
      ranges: {
        short: 0,
        medium: 0,
        long: 0,
        value: entry.range ?? entry.reach ?? ""
      },
      settings: {
        firstEdition: true
      },
      description: `
        <p><strong>Skill:</strong> ${entry.skillRef ?? "Combat"}${entry.skillRefAlt ? ` / ${entry.skillRefAlt}` : ""}</p>
        <p><strong>Type:</strong> ${entry.weaponType ?? "Weapon"} | <strong>Damage type:</strong> ${entry.damageType ?? "standard"}</p>
        <p><strong>Special:</strong> ${entry.special ?? "None"}</p>
        ${renderList("Notes", entry.notes ?? [])}
      `,
      sla: {
        weaponType: entry.weaponType ?? "",
        skillRef: entry.skillRef ?? "",
        skillRefAlt: entry.skillRefAlt ?? "",
        damageType: entry.damageType ?? "",
        fireModes: fireModeConfig.fireModes,
        currentFireMode: fireModeConfig.currentFireMode,
        hands: entry.hands ?? "",
        reach: entry.reach ?? "",
      special: entry.special ?? "",
        rofText: entry.rofText ?? "",
        enc: Number(entry.enc ?? 0) || 0,
        price: entry.price ?? "",
        notes: entry.notes ?? []
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "weapon" } } }
  };
}

function buildArmour(entry, folder, iconMap) {
  const key = `armour:${slug(entry.name)}`;
  const armorPoints = Math.max(0, Number(entry.av1 ?? 0) || 0);
  const physMod = Number(entry.physmod ?? 0) || 0;
  return {
    name: entry.name,
    type: "armor",
    img: resolveIcon(entry.name, iconMap, DEFAULT_ICONS.armor),
    folder: folder.id,
    system: {
      armorPoints,
      damageReduction: Math.max(0, Math.floor(armorPoints / 2)),
      speed: physMod ? `${physMod}% physical` : (entry.burden ?? ""),
      oxygenMax: 0,
      oxygenCurrent: 0,
      weight: encToKg(entry.enc),
      carryState: "equipped",
      equipped: true,
      cost: priceBand(entry.price),
      description: `
        <p><strong>Coverage:</strong> ${entry.coverage ?? "General"}</p>
        <p><strong>Burden:</strong> ${entry.burden ?? "standard"}</p>
        ${renderList("Notes", entry.notes ?? [])}
      `,
      sla: {
        burden: entry.burden ?? "",
        coverage: entry.coverage ?? "",
        physmod: physMod,
        stealthmod: Number(entry.stealthmod ?? 0) || 0,
        enc: Number(entry.enc ?? 0) || 0,
        price: entry.price ?? "",
        locationAV: entry.locationAV ?? {},
        notes: entry.notes ?? []
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "armour" } } }
  };
}

function buildDrug(entry, folder) {
  const key = `drug:${slug(entry.id ?? entry.name)}`;
  const addictionThreshold = Number(entry.addiction?.threshold ?? 0) || 0;
  const notes = renderList("Notes", entry.notes ?? []);
  return {
    name: entry.name,
    type: "drug",
    img: entry.img || DEFAULT_ICONS.drug,
    folder: folder.id,
    system: {
      quantity: 1,
      weight: 0,
      carryState: "carried",
      cost: Number(entry.cost ?? 0) || 0,
      description: `
        <p><strong>Category:</strong> ${entry.category ?? "Drug"}</p>
        <p><strong>Rating:</strong> ${entry.rating ?? 0} | <strong>Duration:</strong> ${entry.durationLabel ?? "Instant"}</p>
        <p><strong>Active:</strong> ${entry.activeSummary ?? "See GM guidance."}</p>
        <p><strong>Withdrawal:</strong> ${entry.withdrawalSummary ?? "No withdrawal profile recorded."}</p>
        <p><strong>Addiction threshold:</strong> ${addictionThreshold ? `${addictionThreshold} failed Body Saves` : "None"}</p>
        ${notes}
      `,
      sla: {
        category: entry.category ?? "Drug",
        drugId: entry.id ?? slug(entry.name),
        rating: Number(entry.rating ?? 0) || 0,
        durationLabel: String(entry.durationLabel ?? ""),
        addictionFactor: addictionThreshold,
        source: "SLA drug import"
      }
    },
    flags: {
      [SYSTEM_ID]: {
        slaSeed: { key, kind: "drug" },
        slaDrug: { id: entry.id ?? slug(entry.name) }
      }
    }
  };
}

function buildCondition(entry, folder) {
  const key = `condition:${slug(entry.name)}`;
  const statMods = buildConditionStatMods(entry.statMods);
  const skillMods = Array.isArray(entry.skillMods)
    ? entry.skillMods
      .map((mod) => ({
        skill: String(mod?.skill ?? "").trim(),
        value: Number(mod?.value ?? 0) || 0
      }))
      .filter((mod) => mod.skill && mod.value)
    : [];

  return {
    name: entry.name,
    type: "condition",
    img: entry.img || DEFAULT_ICONS.condition,
    folder: folder.id,
    system: {
      severity: Math.max(0, Number(entry.severity ?? 1) || 1),
      description: `
        <p><strong>Category:</strong> ${entry.category ?? "Condition"}</p>
        <p><strong>Effect:</strong> ${entry.effectSummary ?? entry.description ?? "Condition effect not recorded."}</p>
        ${entry.severityScale ? `<p><strong>Severity:</strong> ${entry.severityScale}</p>` : ""}
        ${entry.treatment ? `<p><strong>Treatment:</strong> ${entry.treatment}</p>` : ""}
        ${entry.description ? `<p>${entry.description}</p>` : ""}
      `,
      treatment: {
        value: 0,
        html: ""
      },
      sla: {
        category: String(entry.category ?? "Condition"),
        effectSummary: String(entry.effectSummary ?? "").trim(),
        severityScale: String(entry.severityScale ?? "").trim(),
        treatmentGuidance: String(entry.treatment ?? "").trim(),
        scaleWithSeverity: entry.scaleWithSeverity !== false,
        statMods,
        skillMods,
        source: "SLA / Mothership condition import"
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "condition" } } }
  };
}

function buildGear(entry, folder, iconMap) {
  const key = `gear:${slug(`${entry.categoryKey}-${entry.name}`)}`;
  return {
    name: entry.name,
    type: "item",
    img: resolveIcon(entry.name, iconMap, DEFAULT_ICONS.item),
    folder: folder.id,
    system: {
      quantity: 1,
      weight: parseNumber(entry.weight),
      carryState: "carried",
      cost: parseNumber(entry.cost),
      description: `
        <p><strong>Category:</strong> ${entry.categoryTitle}</p>
        <p><strong>Power:</strong> ${entry.power ?? "N/A"}</p>
        <p>${entry.description ?? ""}</p>
        ${renderList("Stats", entry.stats ?? [])}
        <p><strong>SLA note:</strong> ${entry.brp ?? "Reference item."}</p>
      `,
      sla: {
        category: entry.categoryTitle,
        power: entry.power ?? "",
        manufacturer: "",
        rarity: "",
        source: "SLA general equipment import"
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "gear" } } }
  };
}

function buildConditionStatMods(mods = {}) {
  const result = {
    strength: 0,
    speed: 0,
    intellect: 0,
    combat: 0,
    sanity: 0,
    fear: 0,
    body: 0
  };

  for (const key of Object.keys(result)) {
    result[key] = Number(mods?.[key] ?? 0) || 0;
  }

  return result;
}

function buildEbbAbility(entry, folder, iconMap) {
  const key = `ebb:${slug(entry.name)}`;
  const basicTier = entry.tiers?.[0] ?? {};
  return {
    name: entry.name,
    type: "ability",
    img: resolveIcon(entry.name, iconMap, DEFAULT_ICONS.ability),
    folder: folder.id,
    system: {
      text: entry.effect ?? entry.name,
      description: `
        <p><strong>Skill:</strong> ${entry.skillRef ?? "Ebb"}</p>
        <p><strong>Core:</strong> ${entry.coreSkillRef ?? "Ebb (Core)"}</p>
        <p><strong>Range:</strong> ${entry.range ?? "Self"} | <strong>Duration:</strong> ${entry.duration ?? "Instant"}</p>
        <p>${entry.effect ?? ""}</p>
        ${renderTierList(entry.tiers ?? [])}
        ${renderList("Notes", entry.notes ?? [])}
      `,
      roll: toDice(basicTier.damage ?? basicTier.healing ?? ""),
      sla: {
        abilityType: "ebb",
        discipline: entry.id ?? slug(entry.name),
        skillRef: entry.skillRef ?? "",
        coreSkillRef: entry.coreSkillRef ?? "Ebb (Core)",
        impact: entry.impact ?? "",
        skillCategoryRef: entry.skillCategoryRef ?? "",
        fluxCost: Number(basicTier.cost ?? entry.pppl ?? 1) || 1,
        tier: basicTier.id ?? "basic",
        range: entry.range ?? "",
        duration: entry.duration ?? "",
      attack: Boolean(entry.attack),
      panicSave: "fear",
      rollOnUse: true,
      notes: entry.notes ?? [],
      tiers: entry.tiers ?? []
      }
    },
    flags: { [SYSTEM_ID]: { slaSeed: { key, kind: "ebb" } } }
  };
}

function flattenGeneralEquipment(data) {
  return (data.categories ?? []).flatMap((category) =>
    (category.items ?? []).map((item) => ({
      ...item,
      categoryKey: category.key,
      categoryTitle: category.title
    }))
  );
}

function resolveIcon(name, iconMap, fallback) {
  const key = slug(name).replace(/-/g, "");
  if (iconMap?.[key]) return iconMap[key];

  const aliases = {
    athletics: "icons/skills/movement/feet-winged-boots-brown.webp",
    brawl: "icons/skills/melee/unarmed-punch-fist-yellow-red.webp",
    techcomputersai: "techcomputersandai",
    craftspecialty: "craft",
    meleeblade2h: "systems/sla-mothership/images/sla-assets/Skills/Melee 2H Blade.png",
    firearmautosupport: "firearmauto",
    ebbthermalblue: "ebbbluethermal",
    ebbsenses: "systems/sla-mothership/images/sla-assets/Ebb/Senses.png",
    ebbprotect: "systems/sla-mothership/images/sla-assets/Ebb/Protect.png",
    ebbheal: "systems/sla-mothership/images/sla-assets/Ebb/Ebb Heal.png",
    streetclothesleatherjacket: "streetcloths",
    fullshiverarmour: "shiver",
    riotshield: "systems/sla-mothership/images/sla-assets/Armor/2nd try/Riot Shield.png",
    bodblockerpp644: "pp644bodyblocker",
    klippomultibandcommunicator: "klippomultibandcomm",
    vidphoneportable: "vidphoneportable",
    boopaaudio: "boopaaudio",
    uvmultispectrumtorch: "uvmultispectrumtorch",
    boopamedicalkitstandard: "medikitdisposable",
    boopamedicalkitadvanced: "boopamedikitadvanced",
    flashbanggrenade: "flashbang",
    grapplegun: "grapplegun",
    climbingharnessgear: "climbingharness",
    restraintcuffsheavyduty: "restraintcuffs",
    standardcombatknife: "slacombatknifestandard",
    collapsiblebaton: "colapsablebaton",
    itbmutilatorsword: "vibrosabre",
    vibroblade: "vibrosabre",
    chainaxe: "chainaxe1",
    chainsawimprovised: "chainsaw1",
    shaktarclaws: "shacktarclaws",
    kpsmanglershotgun: "kpsmangler",
    fen10streetsweeperautoshotgun: "fen10streetsweeper",
    milagrenadelauncher: "milagrenagelauncher",
    fragmentationgrenade: "fraggrenade",
    stungrenade: "systems/sla-mothership/images/sla-assets/Gear/FlashBang .png"
  };

  const alias = aliases[key];
  if (alias?.includes("/")) return alias;
  if (alias && iconMap?.[alias]) return iconMap[alias];

  const fuzzy = Object.entries(iconMap ?? {}).find(([candidate]) => candidate.includes(key) || key.includes(candidate));
  return fuzzy?.[1] ?? fallback;
}

async function ensureSlaPanicTables({ overwrite = false } = {}) {
  const folder = await ensureRollTableFolder("SLA Mothership Tables", "#8c3428");
  const specs = [
    {
      key: "sla-panic-1e-stress",
      name: "Panic Check (SLA 1E Stress)",
      formula: "1d20",
      results: buildPanicResults("1d20")
    },
    {
      key: "sla-panic-0e-stress",
      name: "Panic Check (SLA 0E Stress)",
      formula: "2d10",
      results: buildPanicResults("2d10")
    },
    {
      key: "sla-panic-1e-calm",
      name: "Panic Check (SLA 1E Calm)",
      formula: "1d100",
      results: buildPanicResults("1d100")
    },
    {
      key: "sla-panic-0e-calm",
      name: "Panic Check (SLA 0E Calm)",
      formula: "1d100",
      results: buildPanicResults("1d100")
    }
  ];

  let created = 0;
  let updated = 0;
  const ids = {};
  for (const spec of specs) {
    const existing = game.tables.find((table) =>
      table.folder?.id === folder.id
      && (table.getFlag(SYSTEM_ID, "slaTableKey") === spec.key || table.name === spec.name)
    );

    const payload = {
      name: spec.name,
      description: "SLA-flavoured panic fallout for operatives under extreme pressure.",
      formula: spec.formula,
      replacement: true,
      displayRoll: true,
      img: "icons/svg/terror.svg",
      folder: folder.id,
      results: spec.results,
      flags: {
        [SYSTEM_ID]: {
          slaTableKey: spec.key
        }
      }
    };
    const { results, ...tableData } = payload;

    let table = existing;
    if (!table) {
      table = await RollTable.create(payload);
      created += 1;
    } else if (overwrite || !table.results?.size) {
      await table.update(tableData);
      if (table.results?.size) {
        await table.deleteEmbeddedDocuments("TableResult", [...table.results.keys()]);
      }
      await table.createEmbeddedDocuments("TableResult", results);
      table = game.tables.get(table.id) ?? table;
      updated += 1;
    }
    ids[spec.key] = table.id;
  }

  const settings = [
    ["table1ePanicStressNormal", ids["sla-panic-1e-stress"]],
    ["table1ePanicStressAndroid", ids["sla-panic-1e-stress"]],
    ["table0ePanicStressNormal", ids["sla-panic-0e-stress"]],
    ["table0ePanicStressAndroid", ids["sla-panic-0e-stress"]],
    ["table1ePanicCalmNormal", ids["sla-panic-1e-calm"]],
    ["table1ePanicCalmAndroid", ids["sla-panic-1e-calm"]],
    ["table0ePanicCalmNormal", ids["sla-panic-0e-calm"]],
    ["table0ePanicCalmAndroid", ids["sla-panic-0e-calm"]]
  ];

  for (const [settingKey, tableId] of settings) {
    const current = game.settings.get(SYSTEM_ID, settingKey);
    if (overwrite || !current || current !== tableId) {
      await game.settings.set(SYSTEM_ID, settingKey, tableId);
    }
  }

  return { created, updated, ids };
}

async function ensureRollTableFolder(name, color = "#163447") {
  let folder = game.folders.find((entry) => entry.type === "RollTable" && entry.name === name && !entry.folder);
  if (!folder) {
    folder = await Folder.create({ name, type: "RollTable", color });
  }
  return folder;
}

function buildPanicResults(formula = "1d20") {
  const mode = String(formula).toLowerCase();
  if (mode === "1d100") {
    return SLA_PANIC_ENTRIES.map((entry, index) => ({
      type: CONST.TABLE_RESULT_TYPES.TEXT,
      text: `<strong>${entry.title}:</strong> ${entry.effect}`,
      range: [index * 5 + 1, index * 5 + 5],
      weight: 1,
      drawn: false,
      img: "icons/svg/terror.svg"
    }));
  }

  if (mode === "2d10") {
    return SLA_PANIC_ENTRIES.slice(1).map((entry, index) => ({
      type: CONST.TABLE_RESULT_TYPES.TEXT,
      text: `<strong>${entry.title}:</strong> ${entry.effect}`,
      range: [index + 2, index + 2],
      weight: 1,
      drawn: false,
      img: "icons/svg/terror.svg"
    }));
  }

  return SLA_PANIC_ENTRIES.map((entry, index) => ({
    type: CONST.TABLE_RESULT_TYPES.TEXT,
    text: `<strong>${entry.title}:</strong> ${entry.effect}`,
    range: [index + 1, index + 1],
    weight: 1,
    drawn: false,
    img: "icons/svg/terror.svg"
  }));
}

function deriveWeaponModeDefaults(shotsPerFire = 1, special = "", rofText = "") {
  const modes = [{ label: "Single", shots: 1 }];
  const text = `${special} ${rofText}`.toLowerCase();

  if (text.includes("2 shots") || text.includes("2/round")) {
    modes.push({ label: "Double", shots: 2 });
  }
  if (text.includes("burst") || (special.includes("auto") && shotsPerFire >= 3)) {
    modes.push({ label: "Burst", shots: Math.max(3, shotsPerFire) });
  } else if (shotsPerFire === 2) {
    modes.push({ label: "Double", shots: 2 });
  } else if (shotsPerFire > 2) {
    modes.push({ label: "Burst", shots: shotsPerFire });
  }
  if (text.includes("full auto") || special.includes("auto")) {
    modes.push({ label: "Auto", shots: Math.max(text.includes("full auto") ? 6 : shotsPerFire, 3) });
  }

  return modes.filter((mode, index, list) =>
    list.findIndex((entry) => entry.label === mode.label && entry.shots === mode.shots) === index
  );
}

function renderList(title, items) {
  if (!items?.length) return "";
  return `<p><strong>${title}</strong></p><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderMothershipProfile(stats) {
  if (!stats || typeof stats !== "object") return "";
  const labels = {
    strength: "Strength",
    speed: "Speed",
    intellect: "Intellect",
    combat: "Combat",
    sanity: "Sanity Save",
    fear: "Fear Save",
    body: "Body Save"
  };
  const rows = Object.entries(labels)
    .filter(([key]) => stats[key])
    .map(([key, label]) => `<li><strong>${label}:</strong> ${stats[key]}</li>`)
    .join("");
  if (!rows) return "";
  return `<p><strong>Mothership Profile</strong></p><ul>${rows}</ul>`;
}

function renderTierList(tiers) {
  if (!tiers?.length) return "";
  const rows = tiers
    .map((tier) => {
      const details = [tier.damage, tier.healing, tier.effect, tier.duration].filter(Boolean).join(" | ");
      return `<li><strong>${tier.label ?? tier.id}</strong> (${tier.cost ?? 0} Flux): ${details}</li>`;
    })
    .join("");
  return `<p><strong>Tiers</strong></p><ul>${rows}</ul>`;
}

function priceBand(value) {
  const parsed = parseNumber(value);
  if (parsed >= 500) return 500;
  if (parsed >= 250) return 250;
  if (parsed >= 100) return 100;
  if (parsed >= 50) return 50;
  if (parsed > 0) return parsed;
  return 0;
}

function parseNumber(value) {
  const match = String(value ?? "").match(/-?\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function encToKg(value) {
  return Math.round((parseNumber(value) * 1.5) * 10) / 10;
}

function toDice(value) {
  return String(value ?? "").trim().toLowerCase();
}

function slug(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
