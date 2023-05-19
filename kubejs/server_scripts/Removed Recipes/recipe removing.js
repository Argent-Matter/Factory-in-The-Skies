ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:oak_slab' })
    event.remove({ id: 'minecraft:spruce_slab' })
    event.remove({ id: 'minecraft:brich_slab' })
    event.remove({ id: 'minecraft:jungle_slab' })
    event.remove({ id: 'minecraft:acacia_slab' })
    event.remove({ id: 'minecraft:dark_oak_slab' })
    event.remove({ id: 'minecraft:mangrove_slab' })
    event.remove({ id: 'minecraft:crimson_slab' })
    event.remove({ id: 'minecraft:warped_slab' })
    event.remove({ id: 'ad_astra:recipes/aeronos_slab' })
    event.remove({ id: 'ad_astra:recipes/strophar_slab' })
    event.remove({ id: 'ad_astra:glacian_slab' })
    event.remove({ id: 'botania:livingwood_planks' })
    event.remove({ id: 'tconstruct:world/wood/greenheart/planks' })
    event.remove({ id: 'minecraft:chest' })
    event.remove({ id: 'botania:elven_trade/dragonstone' })
    event.remove({ id: 'ae2:misc/tiny_tnt' })
    event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])
    event.remove([{ type: 'minecraft:smelting', output: 'minecraft:copper_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:copper_ingot' }])
    event.remove([{ type: 'minecraft:smelting', output: 'minecraft:gold_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:gold_ingot' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.zinc' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.zinc' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.nickel' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.nickel' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.cobalt' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.cobalt' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.tin' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.tin' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.beryllium' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.beryllium' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.manganese' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.manganese' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.lead' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.lead' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.antimony' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.antimony' }])
    event.remove([{ type: 'minecraft:smelting', output: 'gtceu:ingot.silver' }, { type: 'minecraft:blasting', output: 'gtceu:ingot.silver' }])
})