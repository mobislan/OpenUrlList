document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    urls_to_load_settings: {
      urls_to_load: document.querySelector("#urls_to_load").value
    }
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#urls_to_load").value = result.urls_to_load_settings ? result.urls_to_load_settings.urls_to_load : "https://github.com/mobislan/OpenUrlList";

  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("urls_to_load_settings");
  getting.then(setCurrentChoice, onError);
}
