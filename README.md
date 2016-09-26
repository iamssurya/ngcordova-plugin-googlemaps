# Angular Cordova GoogleMaps plugin for iOS and Android
==========================
This plugin is based on https://github.com/mapsplugin/cordova-plugin-googlemaps

###Quick install

**Plugin is finally available on npm**<br>
Before you install, make sure you've read the [instructions](https://github.com/phonegap-googlemaps-plugin/cordova-plugin-googlemaps/wiki/Installation)

*npm (current stable 1.3.9)*
```bash
$> cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
```

*Github (current master, potentially unstable)*
```bash
$> cordova plugin add https://github.com/phonegap-googlemaps-plugin/cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
```
*Installing angular plugin for cordova plugin googlemaps*
```bash
$> bower install ngcordova-plugin-googlemaps
```

If you re-install the plugin, please always remove the plugin first, then remove the SDK

```bash
$> cordova plugin rm plugin.google.maps #before 1.4.0
$> cordova plugin rm cordova-plugin-googlemaps #since 1.4+
$> cordova plugin rm com.googlemaps.ios
$> cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
```

The SDK-Plugin won't be uninstalled automatically and you will stuck on an old version.

###Quick demo

```html
//Add link to plugin
<script src="bower_components/ngcordova-plugin-googlemaps/dist/ngcordova-plugin-googlemaps.min.js"></script>

// Inject in your angular app.
angular.module('',['gmap']);


```

-----


