# Design Pattern: Elenco Completo
## Creazionali:

### Singleton:
Cosa fa: Crea un'unica istanza di una classe e fornisce un punto di accesso globale.
Quando è utile: Quando si desidera avere un solo oggetto di una certa classe in tutto il sistema, come un database o un logger.

### Factory Method:
Cosa fa: Definisce un'interfaccia per creare oggetti, ma delega alle sottoclassi la decisione di quale oggetto istanziare.
Quando è utile: Quando si desidera creare oggetti in modo flessibile e riutilizzabile, senza dover modificare il codice client.

### Abstract Factory:
Cosa fa: Fornisce un'interfaccia per creare famiglie di oggetti correlati.
Quando è utile: Quando si desidera creare famiglie di oggetti interdipendenti in modo flessibile e riutilizzabile.

### Builder:
Cosa fa: Separa la costruzione di un oggetto complesso in passaggi distinti, consentendo di creare diverse rappresentazioni dello stesso oggetto.
Quando è utile: Quando si desidera creare oggetti complessi con passaggi di costruzione ben definiti e flessibili.

### Prototype:
Cosa fa: Crea nuovi oggetti clonando un prototipo esistente.
Quando è utile: Quando si desidera creare oggetti costosi o difficili da creare in modo efficiente.

## Strutturali:

### Adapter:
Cosa fa: Converte l'interfaccia di una classe in un'altra interfaccia, rendendole compatibili.
Quando è utile: Quando si desidera far collaborare classi con interfacce incompatibili.

### Decorator:
Cosa fa: Aggiunge dinamicamente nuove funzionalità a un oggetto senza modificarne la classe.
Quando è utile: Quando si desidera estendere le funzionalità di un oggetto in modo flessibile e senza modificare il codice sorgente.

### Proxy:
Cosa fa: Fornisce un'interfaccia di sostituzione per un altro oggetto, controllando l'accesso all'oggetto originale.
Quando è utile: Quando si desidera controllare l'accesso a un oggetto, migliorare le prestazioni o fornire funzionalità aggiuntive.

### Facade:
Cosa fa: Fornisce un'interfaccia unificata per un insieme di classi correlate, nascondendo la complessità del sottosistema.
Quando è utile: Quando si desidera semplificare l'utilizzo di un sottosistema complesso, nascondendo i dettagli di implementazione.

### Composite:
Cosa fa: Crea una struttura gerarchica di oggetti composti da oggetti più piccoli.
Quando è utile: Quando si desidera raggruppare oggetti in modo gerarchico e permettere loro di operare come un'unica unità.

### Bridge:
Cosa fa: Separa l'interfaccia di una classe dalla sua implementazione, consentendo di modificarli indipendentemente.
Quando è utile: Quando si desidera rendere l'interfaccia di una classe indipendente dalla sua implementazione, per migliorare la flessibilità e la riutilizzabilità.

## Comportamentali:

### Command:
Cosa fa: Incapsula una richiesta come un oggetto, consentendo di incapsulare, differire e accodare le richieste.
Quando è utile: Quando si desidera rendere le richieste indipendenti dal loro ricevitore, per migliorare la flessibilità e la riutilizzabilità.

### Observer:
Cosa fa: Definisce un'interfaccia per notificare gli oggetti dipendenti quando lo stato di un oggetto cambia.
Quando è utile: Quando si desidera notificare automaticamente gli oggetti interessati alle modifiche di un altro oggetto.

### Strategy:
Cosa fa: Definisce una famiglia di algoritmi, incapsula ognuno di essi e ne rende intercambiabile l'utilizzo.
Quando è utile: Quando si desidera cambiare il comportamento di un algoritmo in modo flessibile e senza modificare il codice client.

### Template Method:
Cosa fa: Definisce un algoritmo scheletrico in una classe base, lasciando alle sottoclassi la possibilità di implementare alcuni passaggi.
Quando è utile: Quando si desidera definire un algoritmo generale in una classe base e permettere alle sottoclassi di personalizzarne alcuni passaggi.

### State:
Cosa fa: Permette a un oggetto di modificare il suo comportamento in base al suo stato interno.
Quando è utile: Quando si desidera che il comportamento di un oggetto dipenda dal suo stato interno, per migliorare la flessibilità e la riutilizzabilità.

### Chain of Responsibility:
Cosa fa: Permette di inviare una richiesta a una serie di oggetti in sequenza, fino a quando uno di essi non la gestisce.
Quando è utile: Quando si desidera distribuire la responsabilità di gestire una richiesta tra più oggetti, in modo flessibile e riutilizzabile.

### Iterator:
Cosa fa: Fornisce un modo per accedere agli elementi di una collezione in modo sequenziale, senza esporre la struttura interna della collezione.
Quando è utile: Quando si desidera percorrere una collezione in modo indipendente dalla sua struttura interna.

### Visitor:
Cosa fa: Definisce un'operazione da eseguire su ciascun elemento di una struttura di oggetti.
Quando è utile: Quando si desidera aggiungere nuove funzionalità a una struttura di oggetti senza modificarne le classi.

### Mediator:
Cosa fa: Promuove la comunicazione indiretta tra oggetti, impedendo loro di fare riferimento l'uno all'altro direttamente.
Quando è utile: Quando si desidera ridurre l'accoppiamento tra oggetti e migliorare la flessibilità del sistema.

### Memento:
Cosa fa: Salva lo stato interno di un oggetto in modo da poterlo ripristinare in un secondo momento.
Quando è utile: Quando si desidera annullare le modifiche apportate a un oggetto o ripristinare lo stato precedente.