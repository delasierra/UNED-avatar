/**
 * Created by csierra on 20/8/16.
 */
;
/**
 * APP MODULE
 */
var fullBodyAvatar = 'fullBodyAvatar';
var portraitAvatar = 'portraitAvatar';

var app,
    App = {

        settings: {
            canvas: null,
            stage: null,
            fullBodyAvatarMinHeight: 700,
            fullBodyAvatarWidth: null,
            fullBodyAvatarHeight: null,
            portraitAvatarMinHeight: 184,
            portraitAvatarWidth: 184,
            portraitAvatarHeight: 184
        },

        init: function (avatarType, avatarConfig, showMessage) {
            this.settings.canvas = document.getElementById(avatarType);
            app = this.settings;

            if (!app.canvas) {
                this.showError("No canvas ID");
                return;
            }

            //check to see if we are running in a browser with touch support
            app.stage = new createjs.Stage(app.canvas);
            app.stage.enableDOMEvents(true);
            createjs.Touch.enable(app.stage);

            Avatar.init(avatarConfig, avatarType);

            switch (avatarType) {
                case fullBodyAvatar:
                    Positioning.init(this.settings.fullBodyAvatarMinHeight, this.settings.fullBodyAvatarWidth, this.settings.fullBodyAvatarHeight);
                    SpeechBubble.init(showMessage);
                    OverlayLayer.init();
                    break;

                case portraitAvatar:
                    Positioning.init(this.settings.portraitAvatarMinHeight, this.settings.portraitAvatarWidth, this.settings.portraitAvatarHeight);
                    break;
            }

            document.getElementById(avatarType).style.display = 'block';
            window.addEventListener("resize", update);
        },

        changeAvatarFeature: function (feature) {

        },

        showError: function (msg) {
            console.log(msg);
        }
    };
/**
 * ROOT APP FUNCTIONS
 */
function update() {
    Positioning.update();
}
