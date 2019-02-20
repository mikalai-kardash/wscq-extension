chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onConnect.addListener(connection => {
    const injectScript = message => {
      chrome.tabs.executeScript(message.tabId, { file: message.script });
    };

    connection.onMessage.addListener(injectScript);

    connection.onDisconnect.addListener(() => {
      connection.onMessage.removeListener(injectScript);
    });
  });
});
