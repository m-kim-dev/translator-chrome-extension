let oldBackgroundColor;

document.addEventListener("mouseover", (e) => {
  const el = e.target;
  oldBackgroundColor = el.style.backgroundColor;
  el.style.backgroundColor = "red";
})

document.addEventListener("mouseout", (e) => {
  const el = e.target;
  el.style.backgroundColor = oldBackgroundColor;
})

document.addEventListener("dblclick", async (e) => {
  const el = e.target;
  await chrome.runtime.sendMessage(el.innerHTML, (response) => {
    el.innerHTML = response;
  });
})
