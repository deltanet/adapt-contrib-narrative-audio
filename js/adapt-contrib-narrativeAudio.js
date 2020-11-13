define([
  'core/js/adapt',
  './narrativeAudioView',
  'core/js/models/itemsComponentModel'
], function(Adapt, NarrativeAudioView, ItemsComponentModel) {

  return Adapt.register('narrativeAudio', {
    model: ItemsComponentModel.extend({}),
    view: NarrativeAudioView
  });

});
