var browserActionListenerAdd = false;

function addBrowserActionListener() {
  if (!browserActionListenerAdd) {
    browserActionListenerAdd = true;
    browser.browserAction.onClicked.addListener(function() {
      browser.storage.local.get("urls_to_load_settings").then(function(result) {
        var settings = result.urls_to_load_settings;
        if (settings.urls_to_load) {
          var urls_to_load = settings.urls_to_load.split('\n');
          for (var i = 0; i < urls_to_load.length; i++) {
            browser.tabs.create({
              url: urls_to_load[i]
            });
          }
        }
      });
    });
  }
}

browser.windows.onCreated.addListener(addBrowserActionListener);
