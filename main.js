
function aktualisiereUhrzeit() {
    // Aktuelles Datum und Uhrzeit-Objekt erstellen
    var jetzt = new Date();
  
    // Optionen für die deutsche Zeitzone festlegen
    var options = {
      timeZone: 'Europe/Berlin', // Zeitzone für Deutschland
      hour12: false, // 24-Stunden-Format verwenden
      hour: '2-digit', // Stunden im 2-stelligen Format anzeigen
      minute: '2-digit', // Minuten im 2-stelligen Format anzeigen
      //second: '2-digit' // Sekunden im 2-stelligen Format anzeigen
    };
  
    // Uhrzeit in deutscher Zeitzone formatieren
    var clockTime = jetzt.toLocaleTimeString('de-DE', options);

    var wochentag = jetzt.toLocaleDateString('de-DE', { weekday: 'long' }); // z.B. "Montag"
    var options2 = { day: '2-digit', month: '2-digit', year: 'numeric' };
    var formatiertesDatum = jetzt.toLocaleDateString('de-DE', options2);


  
    document.querySelector(".clock").innerText = clockTime
    document.querySelector(".date").innerText = wochentag + ", " + formatiertesDatum
}
aktualisiereUhrzeit()
// Uhrzeit alle 1000 Millisekunden (1 Sekunde) aktualisieren
setInterval(aktualisiereUhrzeit, 3000);
  





