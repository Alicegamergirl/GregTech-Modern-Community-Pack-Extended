ServerEvents.recipes((event) => {

  const greg = event.recipes.gtceu;

// new materials
  greg
    .mixer('tumbaga_dust').duration(258).EUt(16)
    .itemInputs(['7x #forge:dusts/gold', '3x #forge:dusts/copper']).circuit(12)
    .itemOutputs('10x gtceu:tumbaga_dust');
  event.replaceInput({ id: 'gtceu:shaped/steam_grinder' }, 'gtceu:lp_steam_macerator', 'gtceu:tumbaga_frame');

  greg
    .coke_oven('cactus_charcoal').duration(500)
    .itemInputs('cactus')
    .itemOutputs('gtceu:cactus_charcoal_gem')
    .outputFluids('gtceu:creosote 30');
  greg
    .coke_oven('cactus_coke').duration(500)
    .itemInputs('cactus_charcoal')
    .itemOutputs('gtceu:cactus_coke_gem')
    .outputFluids('gtceu:creosote 30');

  greg
    .coke_oven('sugar_charcoal').duration(500)
    .itemInputs('sugar_cane')
    .itemOutputs('gtceu:sugar_charcoal_gem')
    .outputFluids('gtceu:creosote 30');
  greg
    .coke_oven('sugar_coke').duration(500)
    .itemInputs('sugar_charcoal')
    .itemOutputs('gtceu:sugar_coke_gem')
    .outputFluids('gtceu:creosote 30');


});
