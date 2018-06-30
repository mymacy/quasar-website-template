<template>
    <div class="footerAndModals">

        <!-- MODALS -->
        <q-modal class="aModal" v-model="datenschutzModal">
            <h4>Datenschutzerklärung
                Grundlegendes
                Diese Datenschutzerklärung soll die Nutzer dieser Website über die Art, den Umfang und
                den Zweck der Erhebung und Verwendung personenbezogener Daten durch den
                Websitebetreiber [Ihre Kontaktdaten einfügen] informieren.
                Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften. Da
                durch neue Technologien und die ständige Weiterentwicklung dieser Webseite Änderungen
                an dieser Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen sich die
                Datenschutzerklärung in regelmäßigen Abständen wieder durchzulesen.
                Definitionen der verwendeten Begriffe (z.B. “personenbezogene Daten” oder “Verarbeitung”)
                finden Sie in Art. 4 DSGVO.
                Zugriffsdaten
                Wir, der Websitebetreiber bzw. Seitenprovider, erheben aufgrund unseres berechtigten
                Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO) Daten über Zugriffe auf die Website und speichern
                diese als „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten werden so
                protokolliert:
                 Besuchte Website
                 Uhrzeit zum Zeitpunkt des Zugriffes
                 Menge der gesendeten Daten in Byte
                 Quelle/Verweis, von welchem Sie auf die Seite gelangten
                 Verwendeter Browser
                 Verwendetes Betriebssystem
                 Verwendete IP-Adresse
                Die Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend gelöscht. Die
                Speicherung der Daten erfolgt aus Sicherheitsgründen, um z. B. Missbrauchsfälle aufklären
                zu können. Müssen Daten aus Beweisgründen aufgehoben werden, sind sie solange von der
                Löschung ausgenommen bis der Vorfall endgültig geklärt ist.
                Reichweitenmessung & Cookies
                Diese Website verwendet Cookies zur pseudonymisierten Reichweitenmessung, die
                entweder von unserem Server oder dem Server Dritter an den Browser des Nutzers
                Muster von datenschutz.org
                übertragen werden. Bei Cookies handelt es sich um kleine Dateien, welche auf Ihrem
                Endgerät gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz
                von Cookies erhöht sich die Benutzerfreundlichkeit und Sicherheit dieser Website.
                Falls Sie nicht möchten, dass Cookies zur Reichweitenmessung auf Ihrem Endgerät
                gespeichert werden, können Sie dem Einsatz dieser Dateien hier widersprechen:
                 Cookie-Deaktivierungsseite der Netzwerkwerbeinitiative:
                http://optout.networkadvertising.org/?c=1#!/
                 Cookie-Deaktivierungsseite der US-amerikanischen Website:
                http://optout.aboutads.info/?c=2#!/
                 Cookie-Deaktivierungsseite der europäischen Website:
                http://optout.networkadvertising.org/?c=1#!/
                Gängige Browser bieten die Einstellungsoption, Cookies nicht zuzulassen. Hinweis: Es ist
                nicht gewährleistet, dass Sie auf alle Funktionen dieser Website ohne Einschränkungen
                zugreifen können, wenn Sie entsprechende Einstellungen vornehmen.
                Erfassung und Verarbeitung personenbezogener Daten
                Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen Daten nur dann weiter,
                wenn dies im gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung einwilligen.
                Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre
                Person zu bestimmen und welche zu Ihnen zurückverfolgt werden können – also
                beispielsweise Ihr Name, Ihre E-Mail-Adresse und Telefonnummer.
                Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer Person zu machen. Zur
                Verbesserung unseres Online-Angebotes speichern wir jedoch (ohne Personenbezug) Ihre
                Zugriffsdaten auf diese Website. Zu diesen Zugriffsdaten gehören z. B. die von Ihnen
                angeforderte Datei oder der Name Ihres Internet-Providers. Durch die Anonymisierung der
                Daten sind Rückschlüsse auf Ihre Person nicht möglich.
                </h4>
            <q-btn
            color="primary"
            @click="datenschutzModal = false"
            label="Close"
            />
        </q-modal>
        <q-modal class="aModal" v-model="impressumModal">
            <h4>Basic Modal</h4>
            <q-btn
            color="primary"
            @click="impressumModal = false"
            label="Close"
            />
        </q-modal>

        <!-- FOOTER -->
        <q-layout-footer class="bg6">
            <div class="footCont" v-scroll-reveal.reset="{ delay: 0, origin: 'left'}">
                <a class="modaLink" href="www..de" @click.prevent="datenschutzModal = true">Datenschutz</a>
                <a class="modaLink" href="www..de" @click.prevent="impressumModal = true">Impressum</a>
            </div>
            <div class="copyRight" v-scroll-reveal.reset="{ delay: 0, origin: 'right'}">
                <span>Designed and built by</span> <a class="myMLink" href="https://www.mymacy.de">myMacy</a><span>2018 &copy;</span>
            </div>
            <div class="socialLinks">
                <a href="https://www.facebook.com/ma.cy.90"><q-icon class="fbLink" name="ion-logo-facebook" v-scroll-reveal.reset="{ delay: 100, origin: 'bottom'}"/></a>
                <a href="https://www.xing.com/profile/Marcel_Albrink/cv"><q-icon class="xiLink" name="ion-logo-xing" v-scroll-reveal.reset="{ delay: 200, origin: 'bottom'}"/></a>
                <a href="https://www.instagram.com/marcelalbrink/"><q-icon class="inLink" name="ion-logo-instagram" v-scroll-reveal.reset="{ delay: 300, origin: 'bottom'}"/></a>
            </div>
        </q-layout-footer>



    </div>
</template>


<script>
    import { openURL } from 'quasar'   // for tel links etc.

    export default {
        data() {
            return {
                datenschutzModal: false,
                impressumModal: false
            }
        },
        methods: {
            openURL,
        }
    }
</script>


<style>
/* FOOTER */
    footer {
        -webkit-box-shadow: inset 0px 19px 44px -8px rgba(0,0,0,0.64) !important;
        -moz-box-shadow: inset 0px 19px 44px -8px rgba(0,0,0,0.64) !important;
        box-shadow: inset 0px 19px 44px -8px rgba(0,0,0,0.64) !important;

        /* height: 25vh; */
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        z-index: 3
    }
    footer a, footer span {
        text-decoration: none;
        color: #a6a6a6;
        margin: 0px 3px;
    }
    .modaLink {
        padding: 30px 5px;
    }
    .myMLink {
        font-weight: bold;
        transition: color 0.3s linear;
    }
    .myMLink:hover {
        color: white;
    }
    .copyRight {
        margin-top: 10px;
    }
    .socialLinks {
        margin-top: 15px;
        font-size: 25px;

    }
    .fbLink {transition: color 0.3s linear;margin-right: 10px}
    .fbLink:hover {color: #3D68AE}
    .xiLink{transition: color 0.3s linear;}
    .xiLink:hover {color: #007574}
    .inLink {transition: color 0.3s linear;margin-left: 10px}
    .inLink:hover {color: #DC3076}

/* MODALS */
    .aModal {

    }
</style>
