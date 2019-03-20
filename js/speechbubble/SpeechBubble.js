/**
 * Created by csierra on 10/9/16.
 */
var speechBubble,
  SpeechBubble = {
    settings: {
      domElement: null,
      getWidth: function() {
        return document.getElementById('speechBubble').offsetWidth;
      },
      getHeight: function() {
        return document.getElementById('speechBubble').offsetHeight;
      }
    },
    init: function(show) {
      speechBubble = SpeechBubble.settings;

      speechBubble.domElement = new createjs.DOMElement(document.getElementById('speechBubble'));

      speechBubble.domElement.htmlElement.onclick = function() {};

      app.stage.addChild(speechBubble.domElement);
      this.showHide(show);
    },

    update: function(newContent) {
      speechBubble.content = content;
    },

    showHide: function(show) {
      if (show) {
        speechBubble.domElement.htmlElement.style.display = 'block';
      } else {
        speechBubble.domElement.htmlElement.style.display = 'none';
      }
    }
  };
