/*
 * Text classification using the technique of
 * Levenshtein's distance
 * 
 * Author: antikytheraton :D
 * email: aaron@mariachi.io
 * 
 */
'use strict'
const difflib = require('difflib')

let TEXTO_ENTRADA = 'tabasco?'
let estadosMX = [
    { estado: "Aguascalientes",		variacion: ['aguascalientes']},
    { estado: "Baja California",	variacion: ['baja california', 'tijuana', 'tecate']},
    { estado: "Baja California Sur",variacion: ['baja california sur', 'la paz', 'los cabos']},
    { estado: "Campeche",			variacion: ['campeche']},
    { estado: "Chiapas",			variacion: ['chiapas', 'tuxtla gutierrez','tuxtla' , 'san cristobal de las casas']},
    { estado: "Chihuahua",			variacion: ['chihuahua', 'ciudad juarez', 'juarez']},
    { estado: "Coahuila",			variacion: ['coahuila', 'saltillo']},
    { estado: "Colima",				variacion: ['colima', 'manzanillo']},
    { estado: "Ciudad De Mexico",	variacion: ['ciudad de mexico', 'distrito federal', 'cdmx', 'df', 'chilangolandia', 'mexico']},
    { estado: "Durango",			variacion: ['durango']},
    { estado: "Mexico",				variacion: ['estado de mexico', 'edomex', 'toluca']},
    { estado: "Guanajuato",			variacion: ['guanajuato', 'celaya']},
    { estado: "Guerrero",			variacion: ['guerrero', 'chilpancingo', 'acapulco', 'taxco']},
    { estado: "Hidalgo",			variacion: ['hidalgo', 'tula', 'pachuca', 'cruz azul']},
    { estado: "Jalisco",			variacion: ['jalisco', 'guadalajara', 'tequila']},
    { estado: "Michoacan",			variacion: ['michoacan', 'morelia', 'uruapan', 'patzcuaro']},
    { estado: "Morelos",			variacion: ['morelos', 'cuernavaca']},
    { estado: "Nayarit",			variacion: ['nayarit', 'tepic']},
    { estado: "Nuevo Leon",			variacion: ['nuevo leon', 'monterrey']},
    { estado: "Oaxaca",				variacion: ['oaxaca', 'huatulco']},
    { estado: "Puebla",				variacion: ['puebla']},
    { estado: "Queretaro",			variacion: ['queretaro']},
    { estado: "Quintana Roo",		variacion: ['quintana roo', 'cancun']},
    { estado: "San Luis Potosi",	variacion: ['san luis potosi']},
    { estado: "Sinaloa",			variacion: ['sinaloa', 'culiacan', 'guasave', 'mochis']},
    { estado: "Sonora",				variacion: ['sonora', 'hermosillo']},
    { estado: "Tabasco",			variacion: ['tabasco', 'villa hermosa']},
    { estado: "Tamaulipas",			variacion: ['tamaulipas', 'matamoros', 'reynosa']},
    { estado: "Tlaxcala",			variacion: ['tlaxcala', 'huamantla']},
    { estado: "Veracruz",			variacion: ['veracruz', 'xalapa', 'coatzacoalcos']},
    { estado: "Yucatan",			variacion: ['yucatan', 'merida']},
    { estado: "Zacatecas",			variacion: ['zacatecas']},
]


const clean_input = (input_text) => {
    this.text = input_text
    return this.text.toLowerCase()
}

let coincidencias_mas_proximas = estadosMX.map((estado) => {
    let texto_prueba = clean_input(TEXTO_ENTRADA)
    let variaciones = estado.variacion
    let variantes_mas_cercanas = difflib.getCloseMatches(texto_prueba, variaciones)
    return variantes_mas_cercanas
})

let radio_de_cercania = coincidencias_mas_proximas.map(match => {
    let texto_prueba = clean_input(TEXTO_ENTRADA)
    let s = new difflib.SequenceMatcher(null, texto_prueba, match[0])
    return s.ratio()
})

let indice_mas_cercano = radio_de_cercania.indexOf(Math.max(...radio_de_cercania))

let estado_mas_parecido = estadosMX[indice_mas_cercano].estado

console.log(estado_mas_parecido)