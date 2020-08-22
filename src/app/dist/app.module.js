"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app.routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var header_component_1 = require("./components/template/header/header.component");
var toolbar_1 = require("@angular/material/toolbar");
var footer_component_1 = require("./components/template/footer/footer.component");
var nav_component_1 = require("./components/template/nav/nav.component");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var grid_list_1 = require("@angular/material/grid-list");
var agendamento_component_1 = require("./views/agendamento/agendamento.component");
var home_component_1 = require("./views/home/home.component");
var http_1 = require("@angular/common/http");
var agendamento_service_1 = require("./services/agendamento.service");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var snack_bar_1 = require("@angular/material/snack-bar");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                nav_component_1.NavComponent,
                agendamento_component_1.AgendamentoComponent,
                home_component_1.HomeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                grid_list_1.MatGridListModule,
                form_field_1.MatFormFieldModule,
                forms_1.FormsModule,
                input_1.MatInputModule,
                snack_bar_1.MatSnackBarModule
            ],
            providers: [
                agendamento_service_1.AgendamentoService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
