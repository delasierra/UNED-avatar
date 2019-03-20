/**
 * Created by csierra on 18/10/17.
 */
/**
 * ASSETS LOADER
 */
var assets,
    Assets = {

        imagesPath: "front_dist/common/components/avatar/img/",

        load: function (manifest, callBack) {

            loader = new createjs.LoadQueue(false);
            loader.addEventListener("complete", callBack);
            loader.loadManifest(manifest, true, this.imagesPath);
        },

        setBody: function (img) {

        },

        setBottomClothing: function (img) {

        },

        setTopClothing: function (img) {

        }

    };