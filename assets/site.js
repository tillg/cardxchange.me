// Device frames for the app screens on the home page (docs/changes/04_website/02-mocks.md §2a).
// iPad and Mac add the people list on the left. One switch sets the device for all screens.
(function () {
  const devices = document.querySelectorAll(".device");
  if (!devices.length) return;
  const people = [["AE", "Anna Example"], ["BN", "Ben New"], ["CS", "Clara Sample"], ["DM", "David Muster"], ["EB", "Eva Beispiel"]];
  devices.forEach(d => {
    const main = d.querySelector(".main"), sel = d.dataset.sel;
    const side = `<div class="side"><div class="t" data-i18n="s3.people">People</div><div class="s" data-i18n="s.search">Search</div>` +
      people.map(([i, n]) => `<div class="p ${n === sel ? "on" : ""}"><span class="av">${i}</span>${n}</div>`).join("") + `</div>`;
    d.innerHTML = `<div class="bar"><span>9:41</span><span class="island"></span><span>100%</span><div class="lights"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i></div></div><div class="scr">${side}</div>`;
    d.querySelector(".scr").appendChild(main);
  });
  const buttons = document.querySelectorAll(".seg button");
  function setDevice(v) {
    devices.forEach(d => { d.classList.remove("phone", "pad", "mac"); d.classList.add(v); });
    buttons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.d === v)));
    try { localStorage.setItem("cx-device", v); } catch (e) {}
  }
  buttons.forEach(b => b.addEventListener("click", () => setDevice(b.dataset.d)));
  let start = new URLSearchParams(location.search).get("device");
  if (!start) { try { start = localStorage.getItem("cx-device"); } catch (e) {} }
  setDevice(["phone", "pad", "mac"].includes(start) ? start : "phone");
})();
