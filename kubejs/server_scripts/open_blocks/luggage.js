ServerEvents.recipes((event) => {
  event.remove({ id: 'luggage:luggage' });
  event.shaped('luggage:luggage', ['SPS', 'PCP', 'SPS'], {
    C: 'gtceu:wood_crate',
    S: '#forge:screws/aluminium',
    P: '#forge:plates/treated_wood',
  });
  event.remove({ id: 'luggage:ender_luggage' });
  event.shaped('luggage:ender_luggage', ['SES', 'PCP', 'SPS'], {
    C: 'gtceu:wood_crate',
    S: '#forge:screws/obsidian',
    P: '#forge:plates/ender_pearl',
    E: '#forge:plates/ender_eye',
  });
});
