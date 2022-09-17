var submitRoll = document.getElementById("submit-roll");
var loading = document.getElementById("loading");
var rollerInput = document.getElementById("roller-input");
var enterCaption = document.getElementById("enter-caption");
var rollerModal = document.getElementById("roller-modal");
var snoozeRoller = setTimeout(closeRoller, 4500);

rollerInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitRoll.click();
  }
});

rollerInput.addEventListener("focusout", function () {
  enterCaption.classList.remove("show");
});

rollerInput.addEventListener("focus", function () {
  enterCaption.classList.add("show");
});

rollerModal.addEventListener("mouseenter", function () {
  loading.classList.add("paused");
  loading.classList.remove("running");
  console.log("mouseenter");
  clearTimeout(snoozeRoller);
});

rollerModal.addEventListener("mouseleave", function () {
  loading.classList.remove("paused");
  loading.classList.remove("animate");
  void loading.offsetWidth;
  loading.classList.add("running", "animate");
  console.log("mouseleave");
  snoozeRoller = setTimeout(closeRoller, 4500);
});

function closeRoller() {
  const html = document.querySelector("html");
  html.classList.add("closeModal");
  setTimeout(() => {
    window.parent.postMessage(
      {
        func: "removeRoller",
      },
      "*"
    );
  }, 452);
}

function saveRoll(e) {
  e.preventDefault();
  closeRoller(e);
}

var tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = this.scrollHeight + "px";
}
