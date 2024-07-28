GTCEuStartupEvents.registry('gtceu:material', (event) => {
  event
    .create('fluix')
    .dust()
    .components('1x nether_quartz', '1x certus_quartz', '1x redstone')
    .color(0x8f5ccb)
    .iconSet(GTMaterialIconSet.DULL)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR);
  event
    .create('tumbaga')
    .ingot()
    .components('7x gold', '3x copper')
    .color(0xf4ab0e)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME);
  event
    .create('cactus_charcoal')
    .gem()
    .components('1x carbon')
    .color(0x80a745)
    .burnTime(400)
    .iconSet(GTMaterialIconSet.LIGNITE);
  event
    .create('cactus_coke')
    .gem()
    .components('1x carbon')
    .color(0x678339)
    .burnTime(800)
    .iconSet(GTMaterialIconSet.LIGNITE);
  event
    .create('sugar_charcoal')
    .gem()
    .components('1x carbon')
    .color(0x80a745)
    .burnTime(400)
    .iconSet(GTMaterialIconSet.LIGNITE);
  event
    .create('sugar_coke')
    .gem()
    .components('1x carbon')
    .color(0xc0c0c0)
    .burnTime(800)
    .iconSet(GTMaterialIconSet.LIGNITE);
});
