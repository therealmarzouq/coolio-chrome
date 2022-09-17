var rollerExtension = document.getElementById("roller-extension");
if (rollerExtension) {
  rollerExtension.remove();
} else {
  const modal = document.createElement("iframe");
  modal.setAttribute("id", "roller-extension");
  //   modal.src = "http://127.0.0.1:5500/popup.html";
  modal.src = "https://therealmarzouq.github.io/coolio-chrome/popup.html";
  modal.allowtransparency = true;
  modal.style.border = 0;
  modal.style.height = "2500px";
  modal.style.width = "360px";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.right = "24px";
  modal.style.zIndex = "10000";
  document.body.appendChild(modal);

  if (window.addEventListener) {
    window.addEventListener("message", onMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent("onmessage", onMessage, false);
  }

  function onMessage(event) {
    var data = event.data;

    if (typeof window[data.func] == "function") {
      window[data.func].call(null, data.message);
    }
  }

  function removeRoller() {
    var rollerExtension = document.getElementById("roller-extension");
    if (!rollerExtension) {
      return;
    }
    rollerExtension.remove();
  }
}
