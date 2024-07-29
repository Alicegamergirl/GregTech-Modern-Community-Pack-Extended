ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  const trees = [
    ['oak_sapling', 'oak_log'],
    ['spruce_sapling', 'spruce_log'],
    ['birch_sapling', 'birch_log'],
    ['jungle_sapling', 'jungle_log'],
    ['acacia_sapling', 'acacia_log'],
    ['dark_oak_sapling', 'dark_oak_log'],
    ['mangrove_propagule', 'mangrove_log'],
    ['cherry_sapling', 'cherry_log'],
  ];
  const plants = [
    ['pumpkin_seeds', 'pumpkin', 6],
    ['beetroot_seeds', 'beetroot', 16],
    ['sweet_berries', 'sweet_berries', 16],
    ['glow_berries', 'glow_berries', 8],
    ['wheat_seeds', 'wheat', 16],
    ['melon_seeds', 'melon', 6],
    ['carrot', 'carrot', 12],
    ['sugar_cane', 'sugar_cane', 12],
    ['kelp', 'kelp', 12],
    ['cactus', 'cactus', 12],
    ['brown_mushroom', 'brown_mushroom', 12],
    ['red_mushroom', 'red_mushroom', 12],
    ['nether_wart', 'nether_wart', 12],
    ['bamboo', 'bamboo', 16],
  ];
  
  trees.forEach((woodType) => {
    greg
      .greenhouse(woodType[0])
      .notConsumable(woodType[0])
      .inputFluids('water 1000')
      .itemOutputs(`64x ${woodType[1]}`, `6x ${woodType[0]}`)
      .duration(1200)
      .EUt(40)
      .circuit(1);

    greg
      .greenhouse(`${woodType[0]}_fertiliser`)
      .notConsumable(woodType[0])
      .itemInputs('4x gtceu:fertilizer')
      .inputFluids('water 1000')
      .itemOutputs(
        `64x ${woodType[1]}`,
        `64x ${woodType[1]}`,
        `12x ${woodType[0]}`
      )
      .duration(900)
      .EUt(60)
      .circuit(2);
  });

  plants.forEach((seedType) => {
    greg
      .greenhouse(seedType[0])
      .notConsumable(seedType[0])
      .inputFluids('water 1000')
      .itemOutputs(`${seedType[2]}x ${seedType[1]}`)
      .duration(1200)
      .EUt(40)
      .circuit(1);
    greg
      .greenhouse(seedType[0] + '_fertilizer')
      .notConsumable(seedType[0])
      .itemInputs('4x gtceu:fertilizer')
      .inputFluids('water 1000')
      .itemOutputs(`${2 * seedType[2]}x ${seedType[1]}`)
      .duration(900)
      .EUt(60)
      .circuit(2);
  });
  greg
    .greenhouse('rubber_wood')
    .notConsumable('gtceu:rubber_sapling')
    .inputFluids('water 1000')
    .itemOutputs(
      '16x gtceu:rubber_log',
      '3x gtceu:rubber_sapling',
      '4x gtceu:sticky_resin'
    )
    .duration(1200)
    .EUt(40)
    .circuit(1);
  greg
    .greenhouse('rubber_wood_fertiliser')
    .notConsumable('gtceu:rubber_sapling')
    .itemInputs('4x gtceu:fertilizer')
    .inputFluids('water 1000')
    .itemOutputs(
      '32x gtceu:rubber_log',
      '6x gtceu:rubber_sapling',
      '8x gtceu:sticky_resin'
    )
    .duration(900)
    .EUt(60)
    .circuit(2);
});
