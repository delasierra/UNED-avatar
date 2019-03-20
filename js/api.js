/**
 * Created by csierra on 16/8/17.
 */
//getters: current values
var AvatarApi = {
  //DOM elements
  show: function() {
    $('#avatarContainer').show();
  },

  hide: function() {
    $('#avatarContainer').hide();
  },

  showMessage: function(msg) {
    $('.speech-bubble')
      .children()
      .html(msg);
  },

  showErrorMessage: function(msg) {
    $('.speech-bubble').addClass('alert');
    $('.speech-bubble')
      .children()
      .html(msg);
  },

  //Module calls
  init: function(avatarType, avatarConfig, showMessage) {
    App.init(avatarType, avatarConfig, showMessage);
  },

  showSpeechBubble: function() {
    SpeechBubble.showHide(true);
  },

  hideSpeechBubble: function() {
    SpeechBubble.showHide(false);
  },

  getMaxFeatures: function() {
    return Avatar.getMaxFeatures();
  },

  getGenderId: function() {
    return Avatar.getConfig().gender;
  },

  getSkinId: function() {
    return Avatar.getConfig().skin;
  },

  getHairId: function() {
    return Avatar.getConfig().hair;
  },

  getClothingTopId: function() {
    return Avatar.getConfig().clothingTop;
  },

  getClothingBottomId: function() {
    return Avatar.getConfig().clothingBottom;
  },

  getShoesId: function() {
    return Avatar.getConfig().shoes;
  },

  //update values
  updateGender: function(id) {
    Avatar.updateAsset('gender', id);
  },

  updateSkin: function(id) {
    Avatar.updateAsset('skin', id);
  },

  updateHair: function(id) {
    Avatar.updateAsset('hair', id);
  },

  updateClothingTop: function(id) {
    Avatar.updateAsset('clothingTop', id);
  },

  updateClothingBottom: function(id) {
    Avatar.updateAsset('clothingBottom', id);
  },

  updateShoes: function(id) {
    Avatar.updateAsset('shoes', id);
  }
};
