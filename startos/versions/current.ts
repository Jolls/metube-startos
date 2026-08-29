import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.8.28:0',
  releaseNotes: {
    en_US: `Updated MeTube to 2026.8.28.

- Upgrades yt-dlp from 2026.7.4 to 2026.8.19, fixing extraction failures against sites that had moved past the previously-bundled version.
- Adds a first-class SponsorBlock toggle, and carries it into subscriptions.
- Adds retry for failed downloads, and lets a subscription's clip bounds, download folder, and name be edited after creation.
- Fixes the PO token provider path, IPv6 dual-stack binding, and a proxy configuration bug that blocked connections to internal addresses.
- Picks up the maintenance releases published through 2026.08.28, plus dependency refreshes (including an Angular 22.1 frontend upgrade).

Full release notes: https://github.com/alexta69/metube/releases/tag/2026.08.28`,
    es_ES: `Actualiza MeTube a 2026.8.28.

- Actualiza yt-dlp de 2026.7.4 a 2026.8.19, corrigiendo fallos de extracción en sitios que habían avanzado más allá de la versión incluida anteriormente.
- Añade un interruptor de SponsorBlock de primera clase y lo traslada a las suscripciones.
- Añade reintentos para las descargas fallidas y permite editar los límites de clip, la carpeta de descarga y el nombre de una suscripción tras crearla.
- Corrige la ruta del proveedor de tokens PO, el enlace de doble pila IPv6 y un error de configuración de proxy que bloqueaba las conexiones a direcciones internas.
- Incorpora las versiones de mantenimiento publicadas hasta el 2026.08.28, además de actualizaciones de dependencias (incluida una actualización del frontend a Angular 22.1).

Notas de la versión completas: https://github.com/alexta69/metube/releases/tag/2026.08.28`,
    de_DE: `Aktualisiert MeTube auf 2026.8.28.

- Aktualisiert yt-dlp von 2026.7.4 auf 2026.8.19 und behebt damit Extraktionsfehler bei Seiten, die über die zuvor gebündelte Version hinaus aktualisiert wurden.
- Fügt einen vollwertigen SponsorBlock-Schalter hinzu und überträgt ihn auch auf Abonnements.
- Fügt eine Wiederholung für fehlgeschlagene Downloads hinzu und erlaubt es, Clip-Grenzen, Download-Ordner und Namen eines Abonnements nachträglich zu bearbeiten.
- Behebt den Pfad des PO-Token-Anbieters, die IPv6-Dual-Stack-Bindung und einen Proxy-Konfigurationsfehler, der Verbindungen zu internen Adressen blockierte.
- Übernimmt die bis zum 28.08.2026 veröffentlichten Wartungsversionen sowie aktualisierte Abhängigkeiten (einschließlich eines Frontend-Upgrades auf Angular 22.1).

Vollständige Versionshinweise: https://github.com/alexta69/metube/releases/tag/2026.08.28`,
    pl_PL: `Aktualizuje MeTube do 2026.8.28.

- Aktualizuje yt-dlp z 2026.7.4 do 2026.8.19, naprawiając błędy ekstrakcji na stronach, które zmieniły się od czasu poprzednio dołączonej wersji.
- Dodaje pełnoprawny przełącznik SponsorBlock i przenosi go również do subskrypcji.
- Dodaje ponawianie nieudanych pobrań oraz umożliwia edycję granic klipu, folderu pobierania i nazwy subskrypcji po jej utworzeniu.
- Naprawia ścieżkę dostawcy tokenów PO, wiązanie dwustosowe IPv6 oraz błąd konfiguracji proxy blokujący połączenia z adresami wewnętrznymi.
- Obejmuje wydania konserwacyjne opublikowane do 28.08.2026 oraz odświeżone zależności (w tym aktualizację frontendu do Angular 22.1).

Pełne informacje o wydaniu: https://github.com/alexta69/metube/releases/tag/2026.08.28`,
    fr_FR: `Met à jour MeTube vers 2026.8.28.

- Fait passer yt-dlp de 2026.7.4 à 2026.8.19, corrigeant des échecs d'extraction sur des sites ayant évolué au-delà de la version précédemment intégrée.
- Ajoute un véritable interrupteur SponsorBlock, également répercuté sur les abonnements.
- Ajoute la reprise des téléchargements échoués et permet de modifier les bornes de clip, le dossier de téléchargement et le nom d'un abonnement après sa création.
- Corrige le chemin du fournisseur de jetons PO, la liaison double pile IPv6 et un bug de configuration du proxy qui bloquait les connexions vers des adresses internes.
- Intègre les versions de maintenance publiées jusqu'au 28/08/2026, ainsi que des mises à jour de dépendances (dont une mise à niveau du frontend vers Angular 22.1).

Notes de version complètes : https://github.com/alexta69/metube/releases/tag/2026.08.28`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
