"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AgendamentoService = void 0;
var api_config_1 = require("./../config/api.config");
var core_1 = require("@angular/core");
var AgendamentoService = /** @class */ (function () {
    function AgendamentoService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    AgendamentoService.prototype.adicionarAgendamentoCSV = function (formData) {
        return this.http.post(api_config_1.API_CONFIG.baseUrl + "/agendamentos/csv", formData, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AgendamentoService.prototype.atualizarAgendamentoCSV = function (formData) {
        return this.http.put(api_config_1.API_CONFIG.baseUrl + "/agendamentos/csv", formData, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AgendamentoService.prototype.buscarAgendamentosPorAnoMes = function (ano, mes) {
        return this.http.get(api_config_1.API_CONFIG.baseUrl + "/agendamentos/" + ano + "/" + mes);
    };
    AgendamentoService.prototype.mostrarMensagem = function (msg, isError) {
        if (isError === void 0) { isError = false; }
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"]
        });
    };
    AgendamentoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AgendamentoService);
    return AgendamentoService;
}());
exports.AgendamentoService = AgendamentoService;
