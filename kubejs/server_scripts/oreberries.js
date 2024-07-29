//Ingredient.of(/^oreberriesreplanted:.*_oreberry$/).itemIds.forEach(id => console.log(id))
ServerEvents.recipes(event => {

  const greg = event.recipes.gtceu

  const materials = ['nickel', 'zinc', 'copper', 'osmium', 'lead', 'iron', 'uranium', 'gold', 'tin', 'silver'];

  event.remove({ id: /^oreberriesreplanted:.*_from_(smelting|blasting)$/ })

  materials.forEach((material) => {
    greg
      .macerator(`${material}_from_berries`).duration(56).EUt(2)
      .itemInputs(`oreberriesreplanted:${material}_oreberry`)
      .itemOutputs(`gtceu:tiny_${material}_dust`)
});
})