package com.developeroptionsandroid;

import androidx.annotation.NonNull;

import android.content.ContentResolver;
import android.provider.Settings;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = DeveloperOptionsAndroidModule.NAME)
public class DeveloperOptionsAndroidModule extends ReactContextBaseJavaModule {
  
  private final ReactApplicationContext reactContext;

  public static final String NAME = "DeveloperOptionsAndroid";

  public DeveloperOptionsAndroidModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

// Check Developer Options
  @ReactMethod
  public void isDeveloperOptionsEnabled(Callback callback) {
    ContentResolver contentResolver = this.reactContext.getContentResolver();
    int developerOptions = Settings.Secure.getInt(contentResolver, Settings.Global.DEVELOPMENT_SETTINGS_ENABLED, 0);
    callback.invoke(developerOptions == 1);
}
  


}
