chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    code: `
      var rightbar = document.getElementById("wiki-rightbar");
      rightbar.style.display = (rightbar.style.display === "block" ? "none" : "block");
    `
  });
});
