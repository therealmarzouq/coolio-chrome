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
