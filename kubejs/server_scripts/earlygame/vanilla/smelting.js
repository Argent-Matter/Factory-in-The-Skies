ServerEvents.recipes(e => {
    let minecraftOres = ['iron', 'gold']
    let gtceuOres = ['zinc', 'nickel', 'cobalt', 'tin', 'beryllium', 'manganese', 'lead', 'antimony', 'silver', 'copper']
    minecraftOres.forEach(ore => e.blasting(`minecraft:${ore}_nugget`, `#c:${ore}_ores`).xp(0.5).id(`kubejs:${ore}_ore_to_${ore}_nugget`))
    minecraftOres.forEach(ore => e.smelting(`minecraft:${ore}_nugget`, `#c:${ore}_ores`).xp(0.25).id(`kubejs:${ore}_ore_to_${ore}_nugget`))
    gtceuOres.forEach(ore => e.blasting(`gtceu:${ore}_nugget`, `#c:${ore}_ores`).xp(0.5).id(`kubejs:${ore}_ore_to_${ore}_nugget`))
    gtceuOres.forEach(ore => e.smelting(`gtceu:${ore}_nugget`, `#c:${ore}_ores`).xp(0.25).id(`kubejs:${ore}_ore_to_${ore}_nugget`))
    
    gtceuOres.forEach(ore => e.smelting(`gtceu:${ore}_nugget`, `#c:netherrack_${ore}_ores`).xp(0.25).id(`kubejs:netherrack_${ore}_ore_to_${ore}_nugget`))
    gtceuOres.forEach(ore => e.blasting(`gtceu:${ore}_nugget`, `#c:netherrack_${ore}_ores`).xp(0.5).id(`kubejs:netherrack_${ore}_ore_to_${ore}_nugget`))

    gtceuOres.forEach(ore => e.smelting(`gtceu:${ore}_nugget`, `#c:endstone_${ore}_ores`).xp(0.25).id(`kubejs:endstone_${ore}_ore_to_${ore}_nugget`))
    gtceuOres.forEach(ore => e.blasting(`gtceu:${ore}_nugget`, `#c:endstone_${ore}_ores`).xp(0.5).id(`kubejs:endstone_${ore}_ore_to_${ore}_nugget`))
})