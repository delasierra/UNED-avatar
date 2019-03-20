/**
 * Created by csierra on 27/10/17.
 */
;
var overlayLayer,
    OverlayLayer = {
        settings: {
            domElement: null,
            getWidth: function () {
                return document.getElementById('overlayLayer').offsetWidth;
            },

            getHeight: function () {
                // console.log("height");
                return document.getElementById('overlayLayer').offsetHeight;
            }

        },
        init: function () {
            overlayLayer = OverlayLayer.settings;
            overlayLayer.domElement = new createjs.DOMElement(document.getElementById("overlayLayer"));
            app.stage.addChild(overlayLayer.domElement);
        },

        update: function (newContent) {
            overlayLayer.content = content;
        },

        showHide: function (show) {
            if (show) {
                overlayLayer.domElement.htmlElement.style.display = "block";
            } else {
                overlayLayer.domElement.htmlElement.style.display = "none";
            }
        }
    };
