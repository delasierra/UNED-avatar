/**
 * Created by csierra on 10/9/16.
 */
;
/**
 * AVATAR MODULE
 */
var avatar,
    Avatar = {
        //public methods
        settings: {
            maxFeatures: 4,
            config: {gender: 'male', skin: 0, shoes: 1, clothingBottom: 3, clothingTop: 3, hair: 3, gadget: 0},
            type: null
        },

        //constructor
        init: function (avatarConfig, type) {
            avatar = this.settings;
            this.settings.type = type;
            if (avatarConfig) {
                this.saveConfig(avatarConfig);
            }
            Avatar.deleteAvatar();
            Assets.load(this.getAssetsManifest(avatar.config), this.onAssetsLoaded);
        },

        getConfig: function () {
            return avatar.config;

        },

        getMaxFeatures: function () {
            return avatar.maxFeatures;
        },

        getFeatureUrl: function (gender, feature, id) {
            return this.settings.type + '/' + avatarFeatures.gender + '/' + feature + '/' + feature + '_' + id + '.png';
        },

        getAssetsManifest: function (avatarFeatures) {
            var manifest;
            if (this.settings.type == 'portraitAvatar') {
                manifest = [
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'skin', avatarFeatures.skin),
                        id: 'skin'
                    },
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'c_top', avatarFeatures.clothingTop),
                        id: 'clothingTop'
                    },
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'hair', avatarFeatures.hair),
                        id: 'hair'
                    }
                ];
            } else {
                manifest = [
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'skin', avatarFeatures.skin),
                        id: 'skin'
                    },
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'shoes', avatarFeatures.shoes),
                        id: 'shoes'
                    },
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'c_bottom', avatarFeatures.clothingBottom),
                        id: 'clothingBottom'
                    },
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'c_top', avatarFeatures.clothingTop),
                        id: 'clothingTop'
                    },
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'hair', avatarFeatures.hair),
                        id: 'hair'
                    },
                    {
                        src: this.getFeatureUrl(avatarFeatures.gender, 'top_layer', avatarFeatures.skin),
                        id: 'topLayer'
                    },
                ];
            }

            return manifest;
        },

        updateAsset: function (feature, id) {
            var manifest = [];
            switch (feature) {
                case 'gender':
                    avatar.config.gender = id;
                    manifest = this.getAssetsManifest(avatar.config);
                    break;

                case 'skin':
                    manifest = [
                        {src: this.getFeatureUrl(avatarFeatures.gender, 'skin', id), id: 'skin'},
                        {src: this.getFeatureUrl(avatarFeatures.gender, 'top_layer', id), id: 'topLayer'},
                    ];
                    avatar.config.skin = id;
                    avatar.config.topLayer = id;
                    break;

                case 'shoes':
                    manifest = [{src: this.getFeatureUrl(avatarFeatures.gender, 'shoes', id), id: 'shoes'}];
                    avatar.config.shoes = id;
                    break;

                case 'clothingBottom':
                    manifest = [{src: this.getFeatureUrl(avatarFeatures.gender, 'c_bottom', id), id: 'clothingBottom'}];
                    avatar.config.clothingBottom = id;
                    break;

                case 'clothingTop':
                    manifest = [{src: this.getFeatureUrl(avatarFeatures.gender, 'c_top', id), id: 'clothingTop'}];
                    avatar.config.clothingTop = id;
                    break;

                case 'hair':
                    manifest = [{src: this.getFeatureUrl(avatarFeatures.gender, 'hair', id), id: 'hair'}];
                    avatar.config.hair = id;
                    break;

                case 'gadget':
                    manifest = [{src: this.getFeatureUrl(avatarFeatures.gender, 'gadget', id), id: 'gadget'}];
                    avatar.config.gadget = id;
                    break;
            }
            Assets.load(manifest, this.onAssetsLoaded);
        },

        saveConfig: function (avatarConfig) {
            avatar.config = avatarConfig;
        },

        //private methods
        update: function () {
            // this.update();
        },

        createAvatar: function () {
            avatar.skin = new createjs.Bitmap();
            avatar.topLayer = new createjs.Bitmap();
            avatar.shoes = new createjs.Bitmap();
            avatar.bottomClothing = new createjs.Bitmap();
            avatar.topClothing = new createjs.Bitmap();
            avatar.hair = new createjs.Bitmap();
            avatar.gadget = new createjs.Bitmap();

            avatar.avatar = new createjs.Container();
            avatar.avatar.addChild(avatar.skin, avatar.shoes, avatar.bottomClothing, avatar.topClothing, avatar.hair, avatar.topLayer); //avatar.gadget;

            app.stage.addChild(avatar.avatar);
        },

        deleteAvatar: function () {
            if (avatar.avatar) {
                app.stage.removeChild(avatar.avatar);
                avatar.avatar = null;
            }
        },

        //event handlers
        onAssetsLoaded: function () {
            if (!avatar.avatar) {
                Avatar.createAvatar();
            }

            //show avatar images
            if (loader.getResult('skin')) {
                avatar.topLayer.image = loader.getResult('topLayer');
                avatar.skin.image = loader.getResult('skin');
            }
            if (loader.getResult('shoes')) {
                avatar.shoes.image = loader.getResult('shoes');
            }
            if (loader.getResult('clothingBottom')) {
                avatar.bottomClothing.image = loader.getResult('clothingBottom');
            }
            if (loader.getResult('clothingTop')) {
                avatar.topClothing.image = loader.getResult('clothingTop');
            }
            if (loader.getResult('hair')) {
                avatar.hair.image = loader.getResult('hair');
            }
            if (loader.getResult('gadget')) {
                avatar.hair.image = loader.getResult('gadget');
            }

            this.update(); // First draw
        },
    };