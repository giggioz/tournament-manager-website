import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Tournament Manager',
  description: 'Informativa sul trattamento dei dati personali del sito Tournament Manager.',
  robots: 'index, follow',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <p className="text-sm text-slate-400 mb-3">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          Privacy Policy
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">Ultimo aggiornamento: 29 settembre 2026</p>

        <div className="space-y-8 text-slate-200 leading-relaxed">
          <section>
            <p>
              Questa informativa descrive come vengono trattati i dati personali di chi visita
              il sito di presentazione di Tournament Manager (tm.infinitymundi.it), ai sensi
              del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Titolare del trattamento</h2>
            <p>
              Luigi Lescarini (Infinity Mundi)
              <br />
              Email:{' '}
              <a
                href="mailto:infinitymundi.publishing@gmail.com"
                className="text-accent-300 hover:text-accent-200"
              >
                infinitymundi.publishing@gmail.com
              </a>
              <br />
              Telefono:{' '}
              <a href="tel:+393384291451" className="text-accent-300 hover:text-accent-200">
                +39 338 429 1451
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Dati trattati</h2>
            <p className="mb-3">Il sito non ha moduli di registrazione né strumenti di profilazione.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">Dati di navigazione.</strong> Il server di hosting
                registra dati tecnici necessari al funzionamento del sito, come indirizzo IP,
                data e ora della richiesta e tipo di browser.
              </li>
              <li>
                <strong className="text-white">Dati di contatto.</strong> Se ci scrivi via email,
                telefono o WhatsApp, trattiamo i recapiti e il contenuto del messaggio che ci invii.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Perché li usiamo</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Far funzionare e mettere in sicurezza il sito (base giuridica: legittimo interesse,
                art. 6.1.f GDPR).
              </li>
              <li>
                Rispondere alle richieste e valutare una collaborazione, incluso il programma
                pilota (base giuridica: misure precontrattuali su tua richiesta, art. 6.1.b GDPR).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Per quanto tempo</h2>
            <p>
              I messaggi di contatto restano per il tempo necessario a gestire la richiesta e,
              se nasce un rapporto, per la sua durata e gli obblighi di legge collegati.
              I log tecnici sono conservati per il tempo strettamente necessario alla sicurezza
              del servizio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Chi li riceve</h2>
            <p className="mb-3">
              I dati non sono venduti. Possono essere trattati da fornitori che ci supportano
              nel far funzionare il sito e la corrispondenza:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vercel Inc., per l’hosting del sito.</li>
              <li>Google, per la casella email e per il caricamento del font Inter.</li>
              <li>Meta (WhatsApp), solo se scegli di contattarci da quel canale.</li>
            </ul>
            <p className="mt-3">
              Alcuni di questi fornitori si trovano negli Stati Uniti. Il trasferimento avviene
              con le garanzie previste dal GDPR, in particolare le clausole contrattuali standard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Cookie</h2>
            <p>
              Questo sito non usa cookie di profilazione né strumenti di analytics. Possono
              essere usati solo cookie o dati tecnici strettamente necessari a erogare la pagina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">I tuoi diritti</h2>
            <p>
              Puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione e,
              nei casi previsti, portabilità dei tuoi dati, scrivendo a{' '}
              <a
                href="mailto:infinitymundi.publishing@gmail.com"
                className="text-accent-300 hover:text-accent-200"
              >
                infinitymundi.publishing@gmail.com
              </a>
              . Hai anche il diritto di proporre reclamo al Garante per la protezione dei dati
              personali (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-300 hover:text-accent-200"
              >
                garanteprivacy.it
              </a>
              ).
            </p>
            <p className="mt-3">
              Fornire i dati di contatto è facoltativo: serve solo se vuoi essere ricontattato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">La piattaforma</h2>
            <p>
              Questa informativa riguarda solo il sito di presentazione. Se usi il software
              Tournament Manager, il trattamento dei dati di tornei, giocatori e centri sportivi
              è regolato da un’informativa separata, fornita al momento dell’attivazione.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
