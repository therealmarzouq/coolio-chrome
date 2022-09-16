var submitRoll = document.getElementById("submit-roll");
var loading = document.getElementById("loading");
var rollerInput = document.getElementById("roller-input");
var enterCaption = document.getElementById("enter-caption");

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

function closeRoller(e) {
  const html = document.querySelector("html");
  html.classList.add("closeModal");
  setTimeout(() => {
    window.parent.postMessage(
      {
        func: "closeRoller",
      },
      "*"
    );
  }, 452);
}

function saveRoll(e) {
  e.preventDefault();
  loading.classList.add("animate");
  setTimeout(() => {
    closeRoller(e);
  }, 4510);
}

const tx = document.getElementsByTagName("textarea");
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
