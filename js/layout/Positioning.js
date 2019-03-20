/**
 * POSITIONING CLASS
 */
var positioning,
    Positioning = {

        settings: {
            canvas: document.getElementById("avatarCanvas"),
            stage: null,
            avatarMinHeight: null,
            canvasWidth: null,
            canvasHeight: null
        },

        init: function (avatarMinHeight, canvasWidth, canvasHeight) {
            this.settings.avatarMinHeight = avatarMinHeight;
            this.settings.canvasWidth = canvasWidth;
            this.settings.canvasHeight = canvasHeight;
            positioning = this.settings;
        },

        getStageWidth: function () {
            return app.stage.canvas.width;
        },

        getStageHeight: function () {
            return app.stage.canvas.height;
        },

        //setters

        update: function () {
            this.resize();
            app.stage.update();
        },

        posiotionAvatar: function () {
            var avatarWidth = avatar.avatar.getBounds().width;
            var avatarHeight = avatar.avatar.getBounds().height;

            //pos x
            avatar.avatar.x = (this.getStageWidth() - avatarWidth) / 6;
            //pos y
            if (avatarHeight >= this.getStageHeight()) {
                avatar.avatar.y = 0;
            } else {
                avatar.avatar.y = this.getStageHeight() - (avatarHeight * 1.15);
            }
        },

        positionSpeechBubble: function () {
            if (speechBubble) {
                //pos x
                speechBubble.domElement.x = avatar.avatar.x + 250;
                //pos y
                if (avatar.avatar.y - 70 < 0) {
                    speechBubble.domElement.y = 0;
                } else {
                    speechBubble.domElement.y = avatar.avatar.y;
                }
            }
        },

        positionOverlayLayer: function () {
            if (overlayLayer) {
                //pos x
                overlayLayer.domElement.x = -15;
                document.getElementById("overlayLayer").style.backgroundPosition = avatar.avatar.x - 120 + "px bottom";
                //pos y
                overlayLayer.domElement.y = 0;
            }
        },

        //stage event handlers
        resize: function (pushWindowHeight) {
            if (this.settings.canvasWidth) {
                app.stage.canvas.width = this.settings.canvasWidth;

            } else {
                app.stage.canvas.width = app.canvas.parentNode.clientWidth;
                // app.stage.canvas.width = window.innerWidth;
            }

            if (this.settings.canvasHeight) {
                app.stage.canvas.height = this.settings.canvasHeight;

            } else {
                if (window.innerHeight - app.canvas.parentNode.offsetTop > this.settings.avatarMinHeight) {
                    app.stage.canvas.height = window.innerHeight - app.canvas.parentNode.offsetTop;
                } else {
                    app.stage.canvas.height = this.settings.avatarMinHeight;
                }
            }
            this.posiotionAvatar();
            this.positionSpeechBubble();
            this.positionOverlayLayer();
        }
    };