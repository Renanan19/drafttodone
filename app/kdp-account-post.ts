import type { BlogPost } from "./blog-content";

export const kdpAccountPaymentsPost: BlogPost = {
  key: "kdp-account-payments",
  date: "2026-06-07",
  updated: "2026-07-20",
  readingTime: 14,
  accent: {
    start: "#f4fbf7",
    middle: "#b9ead7",
    end: "#e8f0ff",
  },
  translations: {
    en: {
      slug: "create-kdp-account-payments-guide",
      title: "How to create an Amazon KDP account and get paid: setup, royalties and payment timing",
      description:
        "A practical guide to creating an Amazon KDP account, adding bank and tax details, tracking royalties and understanding why KDP payments usually arrive about 60 days after month end.",
      seoTitle: "KDP Sign Up: Create an Account, Add Tax & Get Paid",
      seoDescription:
        "Create an Amazon KDP account, complete bank and tax details, secure it, and understand the 60-day royalty payment schedule.",
      keywords: [
        "create KDP account",
        "Amazon KDP account",
        "KDP payments",
        "KDP royalties",
        "KDP bank account",
        "KDP tax information",
        "when does KDP pay",
        "Kindle Direct Publishing account",
      ],
      category: "KDP account",
      intro: [
        "KDP sign up creates the control room for publishing on Amazon. Your account is where you upload Kindle ebooks, paperbacks and hardcovers, enter metadata, choose prices, check reports and receive royalties.",
        "The setup is not complicated, but small mistakes can slow down validation or payments. The important pieces are identity details, bank information, tax interview, security and a clear understanding of the payment calendar.",
      ],
      sections: [
        {
          id: "create-account",
          title: "Should you create the KDP account before or after the first book?",
          body: [
            "Go to kdp.amazon.com and sign in with an existing Amazon account or create a dedicated account for publishing. A dedicated email address is often cleaner if you plan to treat publishing as a long-term operation.",
            "Complete the account profile with legal name, address, country and contact details. These details should match the person or company that will receive royalties and complete the tax information.",
          ],
          bullets: [
            "Use a stable email address that you will still control in several years.",
            "Keep the legal account holder, tax profile and bank holder consistent.",
            "Save your login method, backup phone and recovery options.",
            "Do not create multiple KDP accounts unless Amazon has explicitly allowed it.",
          ],
        },
        {
          id: "bank-tax",
          title: "What bank and tax details does KDP require before it pays?",
          body: [
            "KDP cannot pay royalties correctly until the payment and tax sections are complete. Add the bank account where you want to receive royalties, then fill in the tax interview with accurate personal or business information.",
            "For many countries, electronic funds transfer is the simplest payment method because it avoids check handling and can remove minimum payment thresholds when supported for the marketplace and currency.",
          ],
          bullets: [
            "Enter IBAN, BIC or local bank details exactly as requested.",
            "Check the payment currency for each Amazon marketplace.",
            "Complete the tax interview before expecting regular payments.",
            "Review withholding tax details if you are outside the United States.",
          ],
        },
        {
          id: "payment-calendar",
          title: "When does KDP actually pay, and why 60 days later?",
          body: [
            "The most confusing part for new authors is timing. KDP royalties are generally paid around 60 days after the end of the month in which the sale was reported. Expanded Distribution royalties are generally paid around 90 days after the end of the month.",
            "For example, sales reported in January are usually paid near the end of March. Sales reported in February are usually paid near the end of April. Once you sell every month, the delay remains, but the rhythm becomes predictable.",
          ],
          bullets: [
            "January sales are usually paid at the end of March.",
            "February sales are usually paid at the end of April.",
            "March sales are usually paid at the end of May.",
            "Expanded Distribution can add roughly one extra month.",
          ],
        },
        {
          id: "reports",
          title: "Sales, royalties or payments: which number is your money?",
          body: [
            "KDP reports show orders, Kindle Unlimited page reads, estimated royalties and payments. These are related, but they are not the same number. A sale can later be refunded, a royalty can be converted into another currency and a payment can combine several marketplaces.",
            "Use reports as an operating dashboard: which books sell, which marketplace performs, which formats work and which royalties are already scheduled for payment.",
          ],
          bullets: [
            "Check orders for demand, but use royalties for revenue tracking.",
            "Review the Payments report to see what has actually been sent.",
            "Track refunds and currency conversions separately.",
            "Export reports monthly if you manage a serious catalog.",
          ],
        },
        {
          id: "manage-account",
          title: "What does it take to run a KDP account like a business?",
          body: [
            "A good KDP account is maintained, not just opened once. Check your payment settings, tax profile, security, author names, live books and reports on a recurring schedule.",
            "Before each launch, confirm that the account is ready to receive royalties and that the book listing matches the reader promise: title, subtitle, categories, keywords, description, cover and sample pages.",
          ],
          bullets: [
            "Enable two-step verification on the Amazon account.",
            "Keep a private spreadsheet of monthly royalties and payout dates.",
            "Document every pen name and which books belong to it.",
            "Review book metadata before changing prices or categories.",
          ],
        },
        {
          id: "common-issues",
          title: "What usually delays a first KDP royalty payment?",
          body: [
            "Most first-payment anxiety comes from one of three issues: incomplete tax information, incorrect bank details or misunderstanding the two-month delay. The best fix is to verify the account before launch, then wait for the normal royalty cycle.",
            "If a payment is missing after the expected date, check whether the marketplace has a threshold, whether the bank information is accepted, whether the tax interview is complete and whether the sale month has actually reached its payout window.",
          ],
          bullets: [
            "Do not expect same-month payment after a sale.",
            "Verify bank details before the first launch, not after.",
            "Check every marketplace where the book sold.",
            "Use official KDP Help pages when payment rules change.",
          ],
        },
      ],
      checklist: [
        "KDP account created with a stable publishing email.",
        "Legal profile completed with accurate name, address and country.",
        "Bank account added and checked for each marketplace currency.",
        "Tax interview completed before publishing at scale.",
        "Two-step verification enabled on the Amazon account.",
        "Payment timing understood: usually about 60 days after month end.",
        "Monthly reports exported or logged for accounting.",
        "Each book listing checked for title, subtitle, keywords, categories and price.",
      ],
      faq: [
        {
          question: "When does Amazon KDP pay authors?",
          answer:
            "KDP generally pays royalties around 60 days after the end of the month in which sales were reported. Expanded Distribution royalties are generally paid around 90 days after month end.",
        },
        {
          question: "Why has my first KDP payment not arrived yet?",
          answer:
            "The first payment often feels late because of the normal delay. January sales, for example, are usually paid near the end of March, assuming payment and tax information are complete.",
        },
        {
          question: "Do I need tax information to publish on KDP?",
          answer:
            "Yes. KDP requires a tax interview so royalties can be processed correctly. Incomplete or inaccurate tax information can delay or affect payments.",
        },
        {
          question: "Where can I see KDP royalties?",
          answer:
            "Use the KDP Reports area to review orders, estimated royalties, Kindle Unlimited page reads and actual payments.",
        },
        {
          question: "Can one KDP account use several pen names?",
          answer:
            "Yes. A single KDP account can publish books under different author names, as long as the account itself is managed according to Amazon's rules.",
        },
      ],
      sources: [
        { label: "Amazon KDP: create and complete a KDP account", href: "https://kdp.amazon.com/en_US/help/topic/G200620010" },
        { label: "Amazon KDP: payment timing and troubleshooting", href: "https://kdp.amazon.com/en_US/help/topic/G4EQZQ73RYEX8RQQ" },
        { label: "Amazon KDP: manage bank, tax and account details", href: "https://kdp.amazon.com/en_US/help/topic/G200634350" },
      ],
    },
    fr: {
      slug: "creer-compte-kdp-paiements-virements",
      title: "Comment créer un compte KDP Amazon et recevoir ses virements d'auteur",
      description:
        "Guide pratique pour créer un compte KDP, ajouter son compte bancaire, remplir les informations fiscales, suivre ses redevances et comprendre les virements KDP avec environ deux mois de décalage.",
      keywords: [
        "créer compte KDP",
        "compte KDP Amazon",
        "virement KDP",
        "paiement KDP",
        "redevances KDP",
        "compte bancaire KDP",
        "informations fiscales KDP",
        "quand KDP paie",
      ],
      category: "Compte KDP",
      intro: [
        "Un compte KDP est le tableau de bord qui permet de publier sur Amazon. C'est là que vous ajoutez vos ebooks Kindle, livres brochés ou livres reliés, que vous fixez vos prix, que vous suivez vos ventes et que vous recevez vos redevances.",
        "La création du compte est simple, mais les détails comptent. Pour éviter les blocages, il faut renseigner correctement l'identité, le compte bancaire, les informations fiscales, la sécurité du compte et surtout comprendre le calendrier de paiement.",
      ],
      sections: [
        {
          id: "creation-compte",
          title: "Faut-il créer le compte KDP avant ou après le premier livre ?",
          body: [
            "Allez sur kdp.amazon.com puis connectez-vous avec un compte Amazon existant ou créez un compte dédié à votre activité d'auteur. Si vous voulez publier plusieurs livres, une adresse email séparée et stable est souvent plus propre.",
            "Dans les paramètres du compte, complétez le nom légal, l'adresse, le pays et les coordonnées de contact. Ces informations doivent être cohérentes avec la personne ou la société qui recevra les redevances et remplira le questionnaire fiscal.",
          ],
          bullets: [
            "Utiliser une adresse email stable que vous contrôlerez encore dans plusieurs années.",
            "Aligner titulaire légal, profil fiscal et titulaire du compte bancaire.",
            "Conserver les options de récupération et le téléphone de sécurité.",
            "Éviter de créer plusieurs comptes KDP sans autorisation explicite d'Amazon.",
          ],
        },
        {
          id: "banque-fiscalite",
          title: "Quelles informations bancaires et fiscales KDP exige-t-il ?",
          body: [
            "KDP ne peut pas payer correctement vos redevances tant que les sections paiement et fiscalité ne sont pas complètes. Ajoutez le compte bancaire sur lequel vous voulez recevoir les virements, puis remplissez le questionnaire fiscal avec des informations exactes.",
            "Pour beaucoup de pays, le transfert électronique est le mode de paiement le plus pratique. Il évite les chèques et peut supprimer les seuils minimums de paiement lorsque ce mode est disponible pour la devise et la place de marché concernée.",
          ],
          bullets: [
            "Saisir IBAN, BIC ou coordonnées locales exactement comme demandé.",
            "Vérifier la devise de paiement pour chaque marketplace Amazon.",
            "Terminer le questionnaire fiscal avant d'attendre des paiements réguliers.",
            "Comprendre les retenues fiscales si vous publiez hors des États-Unis.",
          ],
        },
        {
          id: "calendrier-virements",
          title: "Quand KDP verse-t-il vraiment, et pourquoi 60 jours plus tard ?",
          body: [
            "Le point qui surprend le plus les nouveaux auteurs est le délai. Les redevances KDP sont généralement payées environ 60 jours après la fin du mois où la vente a été déclarée. Pour la distribution étendue, le délai est généralement d'environ 90 jours après la fin du mois.",
            "Exemple concret : les ventes de janvier sont en général payées vers la fin mars. Les ventes de février arrivent vers la fin avril. Une fois que vous vendez chaque mois, le décalage reste le même, mais les virements deviennent plus prévisibles.",
          ],
          bullets: [
            "Ventes de janvier : paiement habituel vers fin mars.",
            "Ventes de février : paiement habituel vers fin avril.",
            "Ventes de mars : paiement habituel vers fin mai.",
            "Distribution étendue : prévoir souvent environ un mois de plus.",
          ],
        },
        {
          id: "rapports",
          title: "Ventes, redevances ou virements : quel chiffre est votre argent ?",
          body: [
            "Les rapports KDP affichent les commandes, les pages lues Kindle Unlimited, les redevances estimées et les paiements. Ces chiffres sont liés, mais ils ne représentent pas exactement la même chose. Une vente peut être remboursée, une redevance peut être convertie en devise et un paiement peut regrouper plusieurs marketplaces.",
            "Utilisez les rapports comme un tableau de bord : quels livres vendent, quels pays performent, quels formats fonctionnent et quelles redevances sont déjà programmées en paiement.",
          ],
          bullets: [
            "Regarder les commandes pour mesurer la demande, mais les redevances pour suivre le revenu.",
            "Consulter le rapport Paiements pour voir ce qui a vraiment été envoyé.",
            "Suivre remboursements et conversions de devise à part.",
            "Exporter les rapports chaque mois si vous gérez un catalogue sérieux.",
          ],
        },
        {
          id: "gestion-compte",
          title: "Que faut-il pour gérer un compte KDP comme une activité ?",
          body: [
            "Un compte KDP ne se configure pas une seule fois pour toujours. Il faut vérifier régulièrement les paiements, la fiscalité, la sécurité, les noms d'auteur, les livres en ligne et les rapports.",
            "Avant chaque lancement, assurez-vous que le compte est prêt à recevoir les redevances et que la fiche du livre est alignée avec la promesse lecteur : titre, sous-titre, catégories, mots-clés, description, couverture et extrait.",
          ],
          bullets: [
            "Activer la vérification en deux étapes sur le compte Amazon.",
            "Tenir un tableau mensuel des redevances et dates de virements.",
            "Documenter chaque nom de plume et les livres qui lui appartiennent.",
            "Relire les métadonnées avant de changer prix, catégories ou mots-clés.",
          ],
        },
        {
          id: "problemes-frequents",
          title: "Qu'est-ce qui retarde le plus souvent un premier virement KDP ?",
          body: [
            "La plupart des inquiétudes sur le premier paiement viennent de trois causes : informations fiscales incomplètes, coordonnées bancaires incorrectes ou mauvaise compréhension du décalage de deux mois. La bonne méthode consiste à vérifier le compte avant le lancement, puis à attendre le cycle normal.",
            "Si un virement manque après la date attendue, vérifiez le seuil éventuel de la marketplace, l'acceptation du compte bancaire, le questionnaire fiscal et le fait que le mois de vente soit bien arrivé dans sa fenêtre de paiement.",
          ],
          bullets: [
            "Ne pas attendre un paiement le même mois que la vente.",
            "Vérifier les coordonnées bancaires avant le premier lancement.",
            "Regarder chaque marketplace où le livre s'est vendu.",
            "Consulter l'aide officielle KDP lorsque les règles de paiement changent.",
          ],
        },
      ],
      checklist: [
        "Compte KDP créé avec une adresse email stable.",
        "Profil légal complété avec nom, adresse et pays exacts.",
        "Compte bancaire ajouté et vérifié pour les devises concernées.",
        "Questionnaire fiscal terminé avant de publier à grande échelle.",
        "Vérification en deux étapes activée sur le compte Amazon.",
        "Délai de paiement compris : environ 60 jours après la fin du mois.",
        "Rapports mensuels exportés ou notés pour la comptabilité.",
        "Chaque fiche livre vérifiée : titre, sous-titre, mots-clés, catégories et prix.",
      ],
      faq: [
        {
          question: "Quand Amazon KDP paie les auteurs ?",
          answer:
            "KDP paie généralement les redevances environ 60 jours après la fin du mois où les ventes ont été déclarées. Pour la distribution étendue, le délai est généralement d'environ 90 jours après la fin du mois.",
        },
        {
          question: "Pourquoi mon premier virement KDP n'est-il pas encore arrivé ?",
          answer:
            "Le premier paiement semble souvent long à cause du délai normal. Par exemple, les ventes de janvier sont en général payées vers la fin mars, si les informations bancaires et fiscales sont complètes.",
        },
        {
          question: "Faut-il remplir les informations fiscales pour publier sur KDP ?",
          answer:
            "Oui. KDP demande un questionnaire fiscal pour traiter correctement les redevances. Des informations incomplètes ou inexactes peuvent retarder ou affecter les paiements.",
        },
        {
          question: "Où voir ses redevances KDP ?",
          answer:
            "Dans l'espace Rapports KDP, vous pouvez suivre les commandes, les redevances estimées, les pages lues Kindle Unlimited et les paiements réels.",
        },
        {
          question: "Peut-on utiliser plusieurs noms de plume avec un seul compte KDP ?",
          answer:
            "Oui. Un même compte KDP peut publier des livres sous plusieurs noms d'auteur, tant que le compte respecte les règles d'Amazon.",
        },
      ],
    },
    it: {
      slug: "creare-account-kdp-pagamenti-bonifici",
      title: "Come creare un account Amazon KDP e ricevere i pagamenti autore",
      description:
        "Guida pratica per creare un account KDP, aggiungere i dati bancari, completare le informazioni fiscali, seguire le royalty e capire perché i pagamenti arrivano circa 60 giorni dopo la fine del mese.",
      keywords: [
        "creare account KDP",
        "account Amazon KDP",
        "pagamenti KDP",
        "bonifico KDP",
        "royalty KDP",
        "conto bancario KDP",
        "informazioni fiscali KDP",
        "quando paga KDP",
      ],
      category: "Account KDP",
      intro: [
        "Un account KDP è il pannello di controllo per pubblicare su Amazon. Da lì carichi ebook Kindle, libri paperback e hardcover, scegli prezzi, controlli report e ricevi le royalty.",
        "La configurazione è semplice, ma i dettagli contano. Identità, conto bancario, intervista fiscale, sicurezza e calendario dei pagamenti devono essere chiari prima di aspettarsi i primi bonifici.",
      ],
      sections: [
        {
          id: "creare-account",
          title: "Meglio creare l'account KDP prima o dopo il primo libro?",
          body: [
            "Vai su kdp.amazon.com e accedi con un account Amazon esistente o crea un account dedicato alla pubblicazione. Se vuoi costruire un catalogo nel tempo, una email separata e stabile è spesso più ordinata.",
            "Completa il profilo con nome legale, indirizzo, paese e contatti. Questi dati devono essere coerenti con la persona o società che riceverà le royalty e completerà le informazioni fiscali.",
          ],
          bullets: [
            "Usa un indirizzo email stabile che controllerai anche in futuro.",
            "Allinea titolare legale, profilo fiscale e titolare del conto bancario.",
            "Salva telefono, recupero account e metodo di accesso.",
            "Evita account KDP multipli senza autorizzazione esplicita da Amazon.",
          ],
        },
        {
          id: "banca-fisco",
          title: "Quali dati bancari e fiscali richiede KDP per pagare?",
          body: [
            "KDP non può pagare correttamente le royalty finché pagamento e fiscalità non sono completi. Inserisci il conto su cui vuoi ricevere i pagamenti e compila l'intervista fiscale con dati accurati.",
            "In molti paesi, il trasferimento elettronico è il metodo più pratico perché evita assegni e può rimuovere soglie minime quando è supportato per marketplace e valuta.",
          ],
          bullets: [
            "Inserisci IBAN, BIC o dati locali esattamente come richiesto.",
            "Controlla la valuta di pagamento per ogni marketplace Amazon.",
            "Completa l'intervista fiscale prima di aspettare pagamenti regolari.",
            "Verifica eventuali ritenute se pubblichi fuori dagli Stati Uniti.",
          ],
        },
        {
          id: "calendario-pagamenti",
          title: "Quando paga davvero KDP, e perché 60 giorni dopo?",
          body: [
            "La parte più confusa per i nuovi autori è il timing. Le royalty KDP sono generalmente pagate circa 60 giorni dopo la fine del mese in cui la vendita è stata registrata. Le royalty da Distribuzione Estesa sono generalmente pagate circa 90 giorni dopo la fine del mese.",
            "Esempio: le vendite di gennaio vengono di solito pagate verso fine marzo. Le vendite di febbraio arrivano verso fine aprile. Quando vendi ogni mese, il ritardo resta, ma il ritmo diventa prevedibile.",
          ],
          bullets: [
            "Vendite di gennaio: pagamento abituale a fine marzo.",
            "Vendite di febbraio: pagamento abituale a fine aprile.",
            "Vendite di marzo: pagamento abituale a fine maggio.",
            "Distribuzione Estesa: spesso circa un mese in più.",
          ],
        },
        {
          id: "report",
          title: "Vendite, royalty o pagamenti: quale cifra è il tuo guadagno?",
          body: [
            "I report KDP mostrano ordini, pagine lette con Kindle Unlimited, royalty stimate e pagamenti. Sono numeri collegati, ma non identici. Una vendita può essere rimborsata, una royalty può essere convertita in valuta e un pagamento può unire marketplace diversi.",
            "Usa i report come dashboard operativa: quali libri vendono, quali paesi funzionano, quali formati performano e quali royalty sono già in pagamento.",
          ],
          bullets: [
            "Guarda gli ordini per misurare domanda, ma le royalty per il reddito.",
            "Consulta il report Pagamenti per vedere cosa è stato inviato.",
            "Traccia rimborsi e conversioni valuta separatamente.",
            "Esporta i report ogni mese se gestisci un catalogo serio.",
          ],
        },
        {
          id: "gestione-account",
          title: "Cosa serve per gestire l'account KDP come un'attività?",
          body: [
            "Un account KDP va mantenuto, non solo aperto una volta. Controlla periodicamente pagamenti, dati fiscali, sicurezza, nomi autore, libri attivi e report.",
            "Prima di ogni lancio, verifica che l'account sia pronto a ricevere royalty e che la pagina libro sia allineata alla promessa al lettore: titolo, sottotitolo, categorie, keyword, descrizione, copertina ed estratto.",
          ],
          bullets: [
            "Attiva la verifica in due passaggi sull'account Amazon.",
            "Tieni un foglio mensile con royalty e date di pagamento.",
            "Documenta ogni pseudonimo e i libri collegati.",
            "Rivedi i metadati prima di cambiare prezzi o categorie.",
          ],
        },
        {
          id: "problemi-comuni",
          title: "Cosa ritarda più spesso il primo pagamento KDP?",
          body: [
            "La maggior parte dell'ansia sul primo pagamento nasce da tre cause: dati fiscali incompleti, coordinate bancarie errate o incomprensione del ritardo di due mesi. La soluzione è verificare l'account prima del lancio e poi aspettare il ciclo normale.",
            "Se un pagamento manca dopo la data prevista, controlla soglie del marketplace, accettazione del conto bancario, intervista fiscale e finestra di pagamento del mese di vendita.",
          ],
          bullets: [
            "Non aspettarti il pagamento nello stesso mese della vendita.",
            "Verifica i dati bancari prima del primo lancio.",
            "Controlla ogni marketplace in cui il libro ha venduto.",
            "Consulta le pagine ufficiali KDP quando le regole cambiano.",
          ],
        },
      ],
      checklist: [
        "Account KDP creato con una email stabile.",
        "Profilo legale completo con nome, indirizzo e paese corretti.",
        "Conto bancario aggiunto e verificato per le valute rilevanti.",
        "Intervista fiscale completata prima di pubblicare su scala.",
        "Verifica in due passaggi attiva sull'account Amazon.",
        "Timing chiaro: circa 60 giorni dopo la fine del mese.",
        "Report mensili esportati o registrati per contabilità.",
        "Ogni scheda libro controllata: titolo, sottotitolo, keyword, categorie e prezzo.",
      ],
      faq: [
        {
          question: "Quando Amazon KDP paga gli autori?",
          answer:
            "KDP generalmente paga le royalty circa 60 giorni dopo la fine del mese in cui le vendite sono state registrate. Per la Distribuzione Estesa, il ritardo è generalmente di circa 90 giorni dopo la fine del mese.",
        },
        {
          question: "Perché il mio primo pagamento KDP non è ancora arrivato?",
          answer:
            "Il primo pagamento sembra spesso lento per il ritardo normale. Per esempio, le vendite di gennaio vengono di solito pagate verso fine marzo se banca e fiscalità sono complete.",
        },
        {
          question: "Servono informazioni fiscali per pubblicare su KDP?",
          answer:
            "Sì. KDP richiede un'intervista fiscale per processare correttamente le royalty. Dati incompleti o inesatti possono ritardare o influenzare i pagamenti.",
        },
        {
          question: "Dove vedo le royalty KDP?",
          answer:
            "Nell'area Report KDP puoi vedere ordini, royalty stimate, pagine lette Kindle Unlimited e pagamenti effettivi.",
        },
        {
          question: "Posso usare più pseudonimi con un solo account KDP?",
          answer:
            "Sì. Un solo account KDP può pubblicare libri con diversi nomi autore, se l'account rispetta le regole di Amazon.",
        },
      ],
    },
    de: {
      slug: "kdp-konto-erstellen-auszahlungen",
      title: "Amazon KDP Konto erstellen und Auszahlungen erhalten: Einrichtung, Tantiemen und Timing",
      description:
        "Praktischer Guide zum KDP Konto: Bankdaten, Steuerinformationen, Tantiemenberichte und warum KDP Auszahlungen meist etwa 60 Tage nach Monatsende eintreffen.",
      keywords: [
        "KDP Konto erstellen",
        "Amazon KDP Konto",
        "KDP Auszahlung",
        "KDP Zahlungen",
        "KDP Tantiemen",
        "KDP Bankkonto",
        "KDP Steuerinformationen",
        "wann zahlt KDP",
      ],
      category: "KDP Konto",
      intro: [
        "Ein KDP Konto ist die Steuerzentrale für das Veröffentlichen auf Amazon. Dort lädst du Kindle Ebooks, Taschenbücher und Hardcover hoch, legst Preise fest, prüfst Berichte und erhältst Tantiemen.",
        "Die Einrichtung ist nicht schwer, aber die Details sind wichtig. Identität, Bankdaten, Steuerinterview, Sicherheit und Zahlungskalender sollten stimmen, bevor du auf die erste Auszahlung wartest.",
      ],
      sections: [
        {
          id: "konto-erstellen",
          title: "KDP Konto vor oder nach dem ersten Buch anlegen?",
          body: [
            "Gehe auf kdp.amazon.com und melde dich mit einem bestehenden Amazon Konto an oder erstelle ein eigenes Konto für dein Publishing. Wenn du langfristig einen Katalog aufbauen willst, ist eine separate stabile E-Mail-Adresse oft sauberer.",
            "Vervollständige das Profil mit rechtlichem Namen, Adresse, Land und Kontaktdaten. Diese Angaben sollten zur Person oder Firma passen, die Tantiemen erhält und die Steuerinformationen ausfüllt.",
          ],
          bullets: [
            "Nutze eine stabile E-Mail-Adresse, die du langfristig kontrollierst.",
            "Halte Kontoinhaber, Steuerprofil und Bankkontoinhaber konsistent.",
            "Sichere Login-Methode, Telefonnummer und Wiederherstellungsoptionen.",
            "Erstelle keine mehreren KDP Konten ohne ausdrückliche Amazon Erlaubnis.",
          ],
        },
        {
          id: "bank-steuern",
          title: "Welche Bank- und Steuerdaten verlangt KDP vor der Auszahlung?",
          body: [
            "KDP kann Tantiemen nicht korrekt auszahlen, solange Zahlungs- und Steuerbereich nicht abgeschlossen sind. Füge das Bankkonto hinzu, auf das du Auszahlungen erhalten willst, und fülle das Steuerinterview mit genauen Angaben aus.",
            "In vielen Ländern ist die elektronische Überweisung die einfachste Zahlungsart, weil sie Schecks vermeidet und Mindestgrenzen entfernen kann, wenn sie für Marketplace und Währung unterstützt wird.",
          ],
          bullets: [
            "IBAN, BIC oder lokale Bankdaten exakt wie gefordert eingeben.",
            "Zahlungswährung für jeden Amazon Marketplace prüfen.",
            "Steuerinterview abschließen, bevor du regelmäßige Zahlungen erwartest.",
            "Quellensteuer verstehen, wenn du außerhalb der USA publizierst.",
          ],
        },
        {
          id: "auszahlungskalender",
          title: "Wann zahlt KDP wirklich, und warum erst 60 Tage später?",
          body: [
            "Am meisten verwirrt neue Autorinnen und Autoren das Timing. KDP Tantiemen werden im Regelfall etwa 60 Tage nach Ende des Monats ausgezahlt, in dem der Verkauf gemeldet wurde. Tantiemen aus Erweiterter Distribution werden meist etwa 90 Tage nach Monatsende ausgezahlt.",
            "Beispiel: Verkäufe aus Januar werden meist gegen Ende März bezahlt. Verkäufe aus Februar kommen meist gegen Ende April. Wenn du jeden Monat verkaufst, bleibt der Versatz, aber der Rhythmus wird planbar.",
          ],
          bullets: [
            "Januar-Verkäufe: Auszahlung meist Ende März.",
            "Februar-Verkäufe: Auszahlung meist Ende April.",
            "März-Verkäufe: Auszahlung meist Ende Mai.",
            "Erweiterte Distribution: oft etwa ein Monat zusätzlich.",
          ],
        },
        {
          id: "berichte",
          title: "Verkäufe, Tantiemen oder Auszahlung: welche Zahl ist dein Geld?",
          body: [
            "KDP Berichte zeigen Bestellungen, gelesene Kindle Unlimited Seiten, geschätzte Tantiemen und Auszahlungen. Diese Zahlen hängen zusammen, sind aber nicht identisch. Ein Verkauf kann erstattet werden, eine Tantieme kann in eine andere Währung umgerechnet werden und eine Auszahlung kann mehrere Marketplaces zusammenfassen.",
            "Nutze Berichte als operatives Dashboard: Welche Bücher verkaufen sich, welche Länder funktionieren, welche Formate tragen und welche Tantiemen sind bereits zur Auszahlung vorgesehen.",
          ],
          bullets: [
            "Bestellungen für Nachfrage prüfen, Tantiemen für Umsatztracking nutzen.",
            "Den Zahlungsbericht ansehen, um gesendete Auszahlungen zu sehen.",
            "Rückerstattungen und Währungsumrechnung separat notieren.",
            "Monatsberichte exportieren, wenn du einen ernsthaften Katalog führst.",
          ],
        },
        {
          id: "konto-managen",
          title: "Was gehört dazu, ein KDP Konto wie ein Geschäft zu führen?",
          body: [
            "Ein KDP Konto wird gepflegt, nicht nur einmal eröffnet. Prüfe Zahlungseinstellungen, Steuerprofil, Sicherheit, Autorennamen, aktive Bücher und Berichte regelmäßig.",
            "Vor jedem Launch sollte das Konto bereit für Auszahlungen sein und die Buchseite zum Leserversprechen passen: Titel, Untertitel, Kategorien, Keywords, Beschreibung, Cover und Leseprobe.",
          ],
          bullets: [
            "Zwei-Schritt-Verifizierung für das Amazon Konto aktivieren.",
            "Eine monatliche Tabelle für Tantiemen und Auszahlungstermine führen.",
            "Jedes Pseudonym und die zugehörigen Bücher dokumentieren.",
            "Metadaten prüfen, bevor Preise oder Kategorien geändert werden.",
          ],
        },
        {
          id: "haeufige-probleme",
          title: "Was verzögert die erste KDP Auszahlung am häufigsten?",
          body: [
            "Die meiste Unsicherheit bei der ersten Auszahlung entsteht durch drei Dinge: unvollständige Steuerangaben, falsche Bankdaten oder ein Missverständnis des zweimonatigen Versatzes. Die beste Methode ist, das Konto vor dem Launch zu prüfen und dann den normalen Zyklus abzuwarten.",
            "Wenn eine Auszahlung nach dem erwarteten Datum fehlt, prüfe mögliche Marketplace-Grenzen, Bankdaten, Steuerinterview und ob der Verkaufsmonat wirklich schon im Auszahlungsfenster liegt.",
          ],
          bullets: [
            "Keine Auszahlung im selben Monat wie der Verkauf erwarten.",
            "Bankdaten vor dem ersten Launch prüfen.",
            "Jeden Marketplace ansehen, auf dem das Buch verkauft wurde.",
            "Offizielle KDP Hilfe prüfen, wenn sich Zahlungsregeln ändern.",
          ],
        },
      ],
      checklist: [
        "KDP Konto mit stabiler Publishing-E-Mail erstellt.",
        "Rechtliches Profil mit korrektem Namen, Adresse und Land vollständig.",
        "Bankkonto für relevante Währungen hinzugefügt und geprüft.",
        "Steuerinterview vor größerem Publishing abgeschlossen.",
        "Zwei-Schritt-Verifizierung im Amazon Konto aktiviert.",
        "Zahlungstiming verstanden: etwa 60 Tage nach Monatsende.",
        "Monatsberichte für Buchhaltung exportiert oder notiert.",
        "Jede Buchseite geprüft: Titel, Untertitel, Keywords, Kategorien und Preis.",
      ],
      faq: [
        {
          question: "Wann zahlt Amazon KDP Autoren aus?",
          answer:
            "KDP zahlt Tantiemen im Regelfall etwa 60 Tage nach Ende des Monats aus, in dem Verkäufe gemeldet wurden. Bei Erweiterter Distribution sind es meist etwa 90 Tage nach Monatsende.",
        },
        {
          question: "Warum ist meine erste KDP Auszahlung noch nicht angekommen?",
          answer:
            "Die erste Auszahlung wirkt oft spät wegen des normalen Versatzes. Januar-Verkäufe werden zum Beispiel meist gegen Ende März bezahlt, wenn Bank- und Steuerdaten vollständig sind.",
        },
        {
          question: "Brauche ich Steuerinformationen für KDP?",
          answer:
            "Ja. KDP verlangt ein Steuerinterview, damit Tantiemen korrekt verarbeitet werden. Unvollständige oder falsche Angaben können Zahlungen verzögern oder beeinflussen.",
        },
        {
          question: "Wo sehe ich meine KDP Tantiemen?",
          answer:
            "Im KDP Berichtsbereich kannst du Bestellungen, geschätzte Tantiemen, gelesene Kindle Unlimited Seiten und tatsächliche Auszahlungen verfolgen.",
        },
        {
          question: "Kann ein KDP Konto mehrere Pseudonyme nutzen?",
          answer:
            "Ja. Ein KDP Konto kann Bücher unter mehreren Autorennamen veröffentlichen, solange das Konto die Amazon Regeln einhält.",
        },
      ],
    },
  },
};
