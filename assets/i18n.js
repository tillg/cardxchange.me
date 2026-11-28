// Languages of the website: English (in the HTML), German and French (below) (docs/system/architecture.md, Website).
// On the published site each page has one address per language: scripts/website-pages.py writes the German
// and French pages from this dictionary, with links rel="alternate" hreflang to the other languages.
// On such a page the menu at the top right opens the page in the other language, and keeps the choice in the browser.
// An English page opens the page in ?lang=de|fr, else in the kept choice, else in the browser language.
// A page without those links (404.html, or Website/site/ without the script) changes its text here instead:
// elements with data-i18n get their text from the dictionary; blocks with data-lang="xx" are shown only for their language.
(function () {
  const LANGS = ["en", "de", "fr"];
  const T = {
    de: {
      "meta.title": "cardXchange · Die Visitenkarte, die sich selbst aktualisiert",
      "meta.desc": "Wenn sich Telefonnummer, Adresse oder Job eines Kontakts ändern, fließt die Änderung in deine Apple Kontakte. Du entscheidest, welche Änderungen übernommen werden. Für Mac, iPhone und iPad.",
      "nav.functions": "Funktionen", "nav.why": "Warum cardXchange", "nav.lang": "Sprache", "nav.home": "Startseite",
      "hero.kicker": "Kommt mit dem Start im App Store",
      "hero.title": "Die Visitenkarte, die sich <em>selbst aktualisiert</em>.",
      "hero.text": "Wenn sich Telefonnummer, Adresse oder Job eines Kontakts ändern, fließt die Änderung in deine Apple Kontakte. Du entscheidest, welche Änderungen übernommen werden.",
      "cta.store": "Bald im App Store", "cta.how": "So funktioniert’s",
      "upd.title": "Ben New hat seine Karte aktualisiert", "upd.sub": "3 Änderungen · heute",
      "f.company": "Firma", "f.job": "Position", "f.mobile": "Mobil",
      "v.engineer": "Ingenieur", "v.head": "Leiter Entwicklung", "v.journalist": "Journalistin",
      "upd.later": "Später", "upd.update": "Kontakt aktualisieren", "soon": "Demnächst",
      "a1.title": "Die Karte aktualisiert sich selbst.",
      "a1.text": "Einmal Karten tauschen, per QR-Code. Bekommt Ben einen neuen Job, erreicht dich seine neue Position als Aktualisierung. Du übernimmst sie – oder nicht. Ohne dich ändert sich nichts in deinen Kontakten.",
      "s1.title": "Kartenänderung", "s1.changed": "Ben New hat seine Karte geändert", "s1.after": "Dein Kontakt danach",
      "a2.title": "Eine Historie für jede Person.",
      "a2.text": "Jedes Treffen, jedes Telefonat, jedes Event – das Neueste zuerst, mit Ort, Themen und offenen Punkten.",
      "s.back": "‹ Personen", "s.edit": "Bearbeiten", "s.today": "Heute", "s.cancel": "Abbrechen", "s.save": "Sichern", "s.search": "Suchen",
      "s2.history": "Historie · 3× getroffen", "s2.call": "Telefonat", "s2.newjob": "Der neue Job",
      "s2.jun": "2. Juni", "s2.lunch": "Mittagessen", "s2.withanna": "Köln · mit Anna Example",
      "s2.mar": "14. März", "s2.fair": "Messe", "s2.howmet": "Frankfurt · so haben wir uns kennengelernt",
      "s2.followups": "Offene Punkte", "s2.book": "○ Buchtitel schicken",
      "a3.title": "In Sekunden erfasst.",
      "a3.text": "„Ich war gerade mit Ben und Anna essen.“ Zwei Buchstaben pro Name, ein Tipp. Zeit und Art sind schon ausgefüllt.",
      "s3.title": "Neues Event", "s3.people": "Personen", "s3.event": "Event", "s3.format": "Art", "s3.live": "Persönliches Treffen",
      "s3.when": "Wann", "s3.time": "Heute, 13:00", "s3.place": "Ort",
      "a4.title": "Profile erfassen.",
      "a4.text": "Auf der Messe das LinkedIn-Profil an cardXchange teilen oder die Visitenkarte scannen. Das Gerät liest sie und legt den Kontakt an. Dann fragt es, wo ihr euch getroffen habt.",
      "s4.title": "Erfassen", "s4.read": "Aus dem Screenshot gelesen", "s4.name": "Name", "s4.job": "Job",
      "s4.where": "Wo habt ihr euch getroffen?", "s4.fair": "Messe, Frankfurt · heute", "s4.new": "Neues Event …", "s4.add": "Clara Sample hinzufügen",
      "a5.title": "Alle auf einer Karte.",
      "a5.text": "Jede Adresse ist eine Nadel, privat und geschäftlich. Nächste Woche in Köln? Sieh, wer in der Nähe wohnt.",
      "s5.near": "12 Personen bei Köln",
      "why.kicker": "Warum cardXchange", "why.title": "Passt in deine Apple-Welt.",
      "why.lead": "Kein neues Konto, kein neues Adressbuch, kein Server dazwischen.",
      "nf1.t": "Alles in <em>deiner</em> iCloud", "nf1.d": "Deine Daten synchronisieren über deine private iCloud. Wir betreiben keinen Server.",
      "nf2.t": "Apple Kontakte, immer aktuell", "nf2.d": "Übernommene Änderungen gehen direkt in Apple Kontakte. Du nutzt Kontakte wie bisher.",
      "nf3.t": "Du entscheidest", "nf3.d": "Ohne dich ändert sich nichts in deinen Kontakten. Jede Seite kann eine Verbindung beenden.",
      "nf4.t": "Kein Import", "nf4.d": "cardXchange arbeitet mit dem Adressbuch, das du schon hast.",
      "nf5.t": "Auf deinem Gerät gelesen", "nf5.d": "Screenshots, Visitenkarten und Gesichter werden auf dem Gerät gelesen.",
      "nf6.t": "Deine Notizen bleiben deine", "nf6.d": "Notiztext verlässt nie das Gerät. cardXchange ändert nur, was es selbst geschrieben hat.",
      "nf7.t": "Mac, iPhone und iPad", "nf7.d": "Dieselben Personen und Historien auf jedem Gerät.",
      "nf8.t": "Kein Konto, keine Werbung", "nf8.d": "Keine Anmeldung, kein Tracking. Auf Deutsch, Englisch und Französisch.",
      "foot.deployed": "Veröffentlicht am", "foot.privacy": "Datenschutz", "foot.imprint": "Impressum",
      "foot.whatsnew": "Neuigkeiten", "foot.faq": "FAQ", "meta.whatsnew": "Neuigkeiten · cardXchange", "meta.faq": "FAQ · cardXchange",
      "wn.kicker": "Neuigkeiten", "wn.title": "Neu in cardXchange",
      "wn.lead": "Jede Funktion der Apps, mit dem Datum und der Version, in der sie kam. Klicke auf eine Spaltenüberschrift, um zu sortieren.",
      "wn.date": "Datum", "wn.version": "Version", "wn.area": "Bereich", "wn.feature": "Funktion", "wn.empty": "Die Liste ist nicht verfügbar.",
      "meta.privacy": "Datenschutz · cardXchange", "meta.imprint": "Impressum · cardXchange", "meta.404": "Seite nicht gefunden · cardXchange", "meta.card": "Eine Karte für dich · cardXchange",
      "meta.faqdesc": "Fragen und Antworten zum Kartentausch mit cardXchange: welcher Kontakt die Karte bekommt, welche Felder sich ändern und was du entscheidest.",
      "meta.privacydesc": "cardXchange speichert deine Daten auf deinen Geräten und in deinem privaten iCloud. Diese Seite sagt, welche Daten die Website und die App verarbeiten.",
      "meta.whatsnewdesc": "Die Funktionen von cardXchange für Mac, iPhone und iPad, mit dem Datum und der Version, in der sie kamen."
    },
    fr: {
      "meta.title": "cardXchange · La carte de visite qui se met à jour toute seule",
      "meta.desc": "Quand le numéro, l’adresse ou le poste d’un contact change, la modification arrive dans vos Contacts Apple. Vous décidez des modifications appliquées. Pour Mac, iPhone et iPad.",
      "nav.functions": "Fonctions", "nav.why": "Pourquoi cardXchange", "nav.lang": "Langue", "nav.home": "Accueil",
      "hero.kicker": "Disponible au lancement sur l’App Store",
      "hero.title": "La carte de visite qui se <em>met à jour</em> toute seule.",
      "hero.text": "Quand le numéro, l’adresse ou le poste d’un contact change, la modification arrive dans vos Contacts Apple. Vous décidez des modifications appliquées.",
      "cta.store": "Bientôt sur l’App Store", "cta.how": "Comment ça marche",
      "upd.title": "Ben New a mis à jour sa carte", "upd.sub": "3 modifications · aujourd’hui",
      "f.company": "Entreprise", "f.job": "Poste", "f.mobile": "Portable",
      "v.engineer": "Ingénieur", "v.head": "Directeur technique", "v.journalist": "Journaliste",
      "upd.later": "Plus tard", "upd.update": "Mettre à jour", "soon": "Bientôt",
      "a1.title": "La carte se met à jour toute seule.",
      "a1.text": "Échangez vos cartes une fois, avec un code QR. Quand Ben change de poste, son nouveau titre vous arrive comme mise à jour. Vous l’acceptez, ou non. Rien ne change dans vos Contacts sans vous.",
      "s1.title": "Mise à jour", "s1.changed": "Ben New a modifié sa carte", "s1.after": "Votre contact après la mise à jour",
      "a2.title": "Un historique pour chaque personne.",
      "a2.text": "Chaque rencontre, chaque appel, chaque événement partagé, du plus récent au plus ancien, avec lieux, sujets et suivis.",
      "s.back": "‹ Personnes", "s.edit": "Modifier", "s.today": "Aujourd’hui", "s.cancel": "Annuler", "s.save": "Enregistrer", "s.search": "Rechercher",
      "s2.history": "Historique · vu 3 fois", "s2.call": "Appel", "s2.newjob": "Le nouveau poste",
      "s2.jun": "2 juin", "s2.lunch": "Déjeuner", "s2.withanna": "Cologne · avec Anna Example",
      "s2.mar": "14 mars", "s2.fair": "Salon", "s2.howmet": "Francfort · notre rencontre",
      "s2.followups": "Suivis", "s2.book": "○ Envoyer le titre du livre",
      "a3.title": "Noté en quelques secondes.",
      "a3.text": "« Je viens de déjeuner avec Ben et Anna. » Deux lettres par nom, un geste. L’heure et le type sont déjà remplis.",
      "s3.title": "Nouvel événement", "s3.people": "Personnes", "s3.event": "Événement", "s3.format": "Type", "s3.live": "Rencontre",
      "s3.when": "Quand", "s3.time": "Aujourd’hui, 13:00", "s3.place": "Lieu",
      "a4.title": "Capturer un profil.",
      "a4.text": "Sur un salon, partagez un profil LinkedIn avec cardXchange ou scannez la carte de visite. L’appareil la lit et crée le contact. Puis il demande où vous vous êtes rencontrés.",
      "s4.title": "Capture", "s4.read": "Lu dans la capture d’écran", "s4.name": "Nom", "s4.job": "Poste",
      "s4.where": "Où vous êtes-vous rencontrés ?", "s4.fair": "Salon, Francfort · aujourd’hui", "s4.new": "Nouvel événement…", "s4.add": "Ajouter Clara Sample",
      "a5.title": "Tout le monde sur une carte.",
      "a5.text": "Chaque adresse est une épingle, au domicile et au travail. À Cologne la semaine prochaine ? Voyez qui habite près.",
      "s5.near": "12 personnes près de Cologne",
      "why.kicker": "Pourquoi cardXchange", "why.title": "S’intègre à votre monde Apple.",
      "why.lead": "Pas de nouveau compte, pas de nouveau carnet d’adresses, pas de serveur entre les deux.",
      "nf1.t": "Tout dans <em>votre</em> iCloud", "nf1.d": "Vos données se synchronisent par votre iCloud privé. Nous n’avons aucun serveur.",
      "nf2.t": "Contacts Apple toujours à jour", "nf2.d": "Les mises à jour acceptées vont directement dans Contacts. Vous utilisez Contacts comme avant.",
      "nf3.t": "Vous décidez", "nf3.d": "Rien ne change dans vos Contacts sans vous. Chacun peut mettre fin à un lien.",
      "nf4.t": "Rien à importer", "nf4.d": "cardXchange fonctionne avec le carnet d’adresses que vous avez déjà.",
      "nf5.t": "Lu sur votre appareil", "nf5.d": "Captures d’écran, cartes de visite et visages sont lus sur l’appareil.",
      "nf6.t": "Vos notes restent à vous", "nf6.d": "Le texte des notes ne quitte jamais l’appareil. cardXchange ne modifie que ce qu’il a écrit.",
      "nf7.t": "Mac, iPhone et iPad", "nf7.d": "Les mêmes personnes et le même historique sur chaque appareil.",
      "nf8.t": "Pas de compte, pas de pub", "nf8.d": "Pas d’inscription, pas de pistage. En français, anglais et allemand.",
      "foot.deployed": "Publié le", "foot.privacy": "Confidentialité", "foot.imprint": "Mentions légales",
      "foot.whatsnew": "Nouveautés", "foot.faq": "FAQ", "meta.whatsnew": "Nouveautés · cardXchange", "meta.faq": "FAQ · cardXchange",
      "wn.kicker": "Nouveautés", "wn.title": "Nouveau dans cardXchange",
      "wn.lead": "Chaque fonctionnalité des apps, avec la date et la version où elle est arrivée. Cliquez sur un en-tête de colonne pour trier.",
      "wn.date": "Date", "wn.version": "Version", "wn.area": "Domaine", "wn.feature": "Fonctionnalité", "wn.empty": "La liste n’est pas disponible.",
      "meta.privacy": "Confidentialité · cardXchange", "meta.imprint": "Mentions légales · cardXchange", "meta.404": "Page introuvable · cardXchange", "meta.card": "Une carte pour vous · cardXchange",
      "meta.faqdesc": "Questions et réponses sur l’échange de cartes de visite avec cardXchange : quel contact reçoit la carte, quels champs changent et ce que vous décidez.",
      "meta.privacydesc": "cardXchange garde vos données sur vos appareils et dans votre iCloud privé. Cette page indique quelles données le site web et l’app traitent.",
      "meta.whatsnewdesc": "Les fonctionnalités de cardXchange pour Mac, iPhone et iPad, avec la date et la version où elles sont arrivées."
    }
  };

  const select = document.getElementById("lang");
  const kept = () => { try { const s = localStorage.getItem("cx-lang"); return LANGS.includes(s) ? s : null; } catch (e) { return null; } };
  const keep = lang => { try { localStorage.setItem("cx-lang", lang); } catch (e) {} };
  function browser() {
    for (const l of navigator.languages || [navigator.language || "en"]) {
      const base = String(l).toLowerCase().slice(0, 2);
      if (LANGS.includes(base)) return base;
    }
    return "en";
  }

  // the path of the page in each language, from the links that scripts/website-pages.py wrote
  const pages = {};
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(l => {
    if (LANGS.includes(l.hreflang)) pages[l.hreflang] = new URL(l.href).pathname;
  });
  if (pages.en) {
    const lang = document.documentElement.lang;
    const params = new URLSearchParams(location.search);
    const q = params.get("lang");
    params.delete("lang");
    const go = target => location.replace(pages[target] + (params.size ? "?" + params : "") + location.hash);
    if (LANGS.includes(q) && q !== lang) return go(q);
    if (lang === "en" && !LANGS.includes(q)) {
      const wanted = kept() || browser();
      if (wanted !== "en") return go(wanted);
    }
    if (select) select.addEventListener("change", () => { keep(select.value); go(select.value); });
    return;
  }

  const textEls = [...document.querySelectorAll("[data-i18n]")];
  const contentEls = [...document.querySelectorAll("[data-i18n-content]")];
  textEls.forEach(el => { el.dataset.en = el.innerHTML; });
  contentEls.forEach(el => { el.dataset.en = el.getAttribute("content"); });
  const titleKey = document.documentElement.dataset.titleKey;
  const enTitle = document.title;

  function pick() {
    const q = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(q)) return q;
    return kept() || browser();
  }

  function apply(lang) {
    const t = T[lang] || {};
    document.documentElement.lang = lang;
    textEls.forEach(el => { el.innerHTML = t[el.dataset.i18n] ?? el.dataset.en; });
    contentEls.forEach(el => { el.setAttribute("content", t[el.dataset.i18nContent] ?? el.dataset.en); });
    document.querySelectorAll("[data-lang]").forEach(el => { el.hidden = el.dataset.lang !== lang; });
    if (titleKey) document.title = t[titleKey] ?? enTitle;
    if (select) { select.value = lang; select.setAttribute("aria-label", t["nav.lang"] ?? "Language"); }
  }

  if (select) select.addEventListener("change", () => {
    keep(select.value);
    apply(select.value);
  });
  apply(pick());
})();
