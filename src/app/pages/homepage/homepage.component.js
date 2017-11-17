"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SpeicherService_service_1 = require("../../services/SpeicherService.service");
var HomepageComponent = (function () {
    function HomepageComponent(speicherService) {
        // Componenten-Daten initialisieren
        this.speicherService = speicherService;
        this.fehlermeldung = '';
        // der Login-Dialog wird geschlossen, die Fehlermeldung wird gelöscht.
        this.cancelLogin = function () {
            /*
             * Login-Dialog verbergen mit jQuery-Aufruf:
             * es wird das Element mit id 'loginDialog' gesucht und
             * darauf die Methode 'modal' aufgerufen
             */
            jQuery("#loginDialog").modal("hide");
            this.fehlermeldung = "";
        };
        /* a) bitte Code hier einfügen... */
    }
    // prueft die eingegebenen Daten (username/password) auf Korrektheit (Hugo/123)
    // und schliesst den Login-Dialog und ruft steckBriefAendern() auf, falls die Daten korrekt sind.
    // Andernfalls wird eine Fehlermeldung angezeigt.
    HomepageComponent.prototype.login = function () {
        /* b) bitte Code hier einfügen... */
    };
    ;
    // prüft zunächst das eingegebene 'birthdate'. Falls ein ungültiger oder leerer Wert vorliegt,
    // wird 'birthdate' aus dem letzten gültigen Wert wiederhergestellt.
    // Abhängig vom aktuellen Modus (nur lesen oder bearbeiten) werden nun entweder die geänderten Daten gespeichert
    // und der Bearbeitungsmodus wird verlassen oder es wird vom Lesemodus in den Bearbeitungsmodus gewechselt.
    HomepageComponent.prototype.steckBriefAendern = function () {
        /* c) bitte Code hier einfügen... */
    };
    HomepageComponent.prototype.ngOnInit = function () {
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    core_1.Component({
        selector: 'homepage',
        templateUrl: './homepage.component.html',
        styleUrls: ['./homepage.component.css']
    }),
    __metadata("design:paramtypes", [SpeicherService_service_1.SpeicherService])
], HomepageComponent);
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map