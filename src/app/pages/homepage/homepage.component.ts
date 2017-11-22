import { Component, OnInit } from '@angular/core';
import { SpeicherService } from '../../services/SpeicherService.service';
import { Person } from './../../models/Person';

declare var jQuery: any;

@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
    public me: Person;
    public birthdateAsString: string;
    public steckBriefGesperrt: boolean;
    public lastBirthdate: string;
    public fehlermeldung: string = '';

    // Dialog-Attribute
    public username: string;
    public password: string;

    public constructor(public speicherService: SpeicherService) {
        /* a) bitte Code hier einfügen... */

        // Componenten-Daten initialisieren
        this.me = speicherService.ladePerson();
        // add a checker if there's an updated username and password
        if(this.me.username === undefined) {
            this.me.username = 'Hugo';
            this.me.password = '123';
        } 

        this.lastBirthdate = this.me.birthdate;
        this.steckBriefGesperrt = true;
    }

	// prueft die eingegebenen Daten (username/password) auf Korrektheit (Hugo/123)
	// und schliesst den Login-Dialog und ruft steckBriefAendern() auf, falls die Daten korrekt sind.
	// Andernfalls wird eine Fehlermeldung angezeigt.
    public login(): void {
        /* b) bitte Code hier einfügen... */

        if (this.username === this.me.username && this.password === this.me.password) {
            // data is correct, let the user change stuff
            this.cancelLogin();
            this.steckBriefAendern();
        } else {
            // data is incorrect, give an error-msg
            this.fehlermeldung = 'Benutzername oder Passwort ist inkorrekt';
        }
    };

	// der Login-Dialog wird geschlossen, die Fehlermeldung wird gelöscht.
    public cancelLogin(): void {
		/*
		 * Login-Dialog verbergen mit jQuery-Aufruf:
		 * es wird das Element mit id 'loginDialog' gesucht und 
		 * darauf die Methode 'modal' aufgerufen
		 */
        jQuery('#loginDialog').modal('hide');
        this.fehlermeldung = '';
    }

	// prüft zunächst das eingegebene 'birthdate'. Falls ein ungültiger oder leerer Wert vorliegt,
	// wird 'birthdate' aus dem letzten gültigen Wert wiederhergestellt.
	// Abhängig vom aktuellen Modus (nur lesen oder bearbeiten) werden nun entweder die geänderten Daten gespeichert
	// und der Bearbeitungsmodus wird verlassen oder es wird vom Lesemodus in den Bearbeitungsmodus gewechselt.
    public steckBriefAendern(): void {
		/* c) bitte Code hier einfügen... */

        // birthdate is undefined, empty or not a number (wrong type)
        if (this.me.birthdate === undefined || this.me.birthdate === "" || Date.parse(this.me.birthdate) === NaN) {
            this.me.birthdate = this.lastBirthdate;
        }
        // current 'mode': editable -> changed files will be added
        if (!this.steckBriefGesperrt) {
            this.speicherService.speicherePerson(this.me);
            //this.steckBriefGesperrt = true; // not sure here
        }
        // current 'mode': readable -> mode will be change to editable
        this.steckBriefGesperrt = !this.steckBriefGesperrt;
    }

    public ngOnInit(): void {
    }
}
