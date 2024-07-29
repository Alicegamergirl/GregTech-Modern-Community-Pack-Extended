LootJS.modifiers((event) => {
  event
    .addEntityLootModifier('blaze')
    .replaceLoot('blaze_rod', 'gtceu:sulfur_dust', true);
  event
    .addEntityLootModifier('enderman')
    .replaceLoot('ender_pearl', 'gtceu:ender_pearl_dust', true);

    event
    .addEntityLootModifier('zombified_piglin')
    .removeLoot('gold_nugget');

    
  event
  .addEntityLootModifier('iron_golem')
  .removeLoot('iron_ingot');
});
