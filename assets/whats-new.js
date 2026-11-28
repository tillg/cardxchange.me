// The table of the page "What's New" (docs/system/architecture.md, Website).
// The rows are in assets/whats-new.json. The workflow website.yml makes that file from the Markdown files
// in Sources/CXUI/Resources/whats-new/ with scripts/whats-new-json.py; the repository does not hold it.
// The sort is the sort of the apps (Sources/CXUI/WhatsNew.swift): newest first by default,
// the version compares number by number, the area and the feature by their translated text, and rows that are equal go by version.
(function () {
  const AREAS = {
    de: { "People": "Personen", "Events": "Ereignisse", "Map": "Karte", "Contacts": "Kontakte", "Photos": "Fotos", "Capture": "Erfassen",
          "Settings": "Einstellungen", "Languages": "Sprachen", "Command line": "Befehlszeile", "App": "App" },
    fr: { "People": "Personnes", "Events": "Événements", "Map": "Carte", "Contacts": "Contacts", "Photos": "Photos", "Capture": "Capture",
          "Settings": "Réglages", "Languages": "Langues", "Command line": "Ligne de commande", "App": "App" }
  };
  const table = document.querySelector("table.wn");
  const body = table.querySelector("tbody");
  const empty = document.getElementById("wn-empty");
  let rows = [];
  let column = "date";
  let ascending = false;

  const lang = () => document.documentElement.lang || "en";
  const area = r => (AREAS[lang()] || {})[r.area] ?? r.area;
  // the sentence in the page's language; English is in "feature"
  const feature = r => r[lang()] ?? r.feature;
  const numbers = v => v.split(".").map(Number);
  function byVersion(a, b) {
    const x = numbers(a.version), y = numbers(b.version);
    for (let i = 0; i < Math.max(x.length, y.length); i++) {
      if (i >= x.length) return -1;
      if (i >= y.length) return 1;
      if (x[i] !== y[i]) return x[i] - y[i];
    }
    return 0;
  }
  const compare = {
    date: (a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0,
    version: byVersion,
    area: (a, b) => area(a).localeCompare(area(b), lang()),
    feature: (a, b) => feature(a).localeCompare(feature(b), lang())
  };
  // "2026-11-21" as a day of the calendar, so that the time zone does not change the day
  function day(text) {
    const [y, m, d] = text.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(lang(), { year: "numeric", month: "short", day: "numeric" });
  }

  function render() {
    const sign = ascending ? 1 : -1;
    const sorted = [...rows].sort((a, b) => sign * (compare[column](a, b) || byVersion(a, b)));
    body.replaceChildren(...sorted.map(r => {
      const tr = document.createElement("tr");
      const date = document.createElement("time");
      date.dateTime = r.date;
      date.textContent = day(r.date);
      for (const content of [date, r.version, area(r), feature(r)]) {
        const td = document.createElement("td");
        td.append(content);
        tr.append(td);
      }
      return tr;
    }));
    table.querySelectorAll("th").forEach(th => {
      th.setAttribute("aria-sort", th.dataset.col === column ? (ascending ? "ascending" : "descending") : "none");
    });
  }

  table.querySelectorAll("th").forEach(th => th.querySelector("button").addEventListener("click", () => {
    if (column === th.dataset.col) ascending = !ascending;
    else { column = th.dataset.col; ascending = true; }
    render();
  }));
  const select = document.getElementById("lang");
  if (select) select.addEventListener("change", render);

  fetch("/assets/whats-new.json")
    .then(response => { if (!response.ok) throw new Error(response.status); return response.json(); })
    .then(data => { rows = data; render(); })
    .catch(() => { table.hidden = true; empty.hidden = false; });
})();
