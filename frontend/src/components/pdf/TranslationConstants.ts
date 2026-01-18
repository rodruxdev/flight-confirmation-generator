import type { Language } from "../../types";

export const translations: Record<Language, any> = {
  pt: {
    bookingReference: "Localizador",
    passengerInfo: "Informações da sua passagem",
    travelers: "QUANTIDADE DE VIAJANTES",
    itemsIncluded: "Incluído",
    itemsExcluded: "Não Incluído",
    personalItem: "ITEM PESSOAL",
    personalItemDesc: "Bolsa ou mochila pequena.",
    carryOn: "BAGAGEM DE MÃO",
    carryOnDesc: "Bagagem de mão 10 kg.",
    checkedBaggage: "BAGAGEM DESPACHADA",
    checkedBaggageDesc: "Bagagem despachada 23 kg.",
    outboundFlight: "VOOS DE IDA",
    returnFlight: "VOOS DE VOLTA",
    start: "Início",
    findFlight: "Encontre seu voo",
    scanQr: "Utilize as informações acima ou leia QR Code ao lado",
    clickOrScan: "Clique ou Leia o QR CODE",
    importantInfo: "Informações importantes",
    legalText: "Penalidades, cancelamentos e alterações: A alteração no itinerário original da viagem, antes ou após o seu início, somente é possível dentro do prazo de validade da passagem sujeito aos ajustes de tarifas, cobrança de taxa ou variações cambiais. O reembolso somente será aceito se dentro do prazo de validade, respeitadas as regras de tarifa promocional, cancelamento de voo e penalidades. Para mais informações, inclusive referentes aos valores aplicáveis, consulte o seu emissor.",
    boardingInstructions: "Orientações para Embarque",
    boardingList: [
      "Apresente-se em nosso check-in com 2 horas de antecedência em voos nacionais, ou com 3 horas em voos internacionais.",
      "Não se esqueça de levar seus documentos originais:",
      "Carteira de Identidade para voos nacionais",
      "Passaporte e os vistos necessários para entrada no pais de destino para voos internacionais.",
      "Verifique a necessidade de Vacinas para o destino de sua viagem."
    ],
    contact: "Contato",
    additionalPage: {
      title: "Informações importantes sobre sua passagem",
      sections: [
        {
          title: "1) Tarifas, alterações, cancelamentos e reembolsos",
          items: [
            { text: "Alterações de itinerário ou data: Permitido apenas dentro do prazo de validade do bilhete e sujeito a diferença de tarifa, multas/taxas e/ou variação cambial, conforme aplicável.", highlight: "Alterações de itinerário ou data:" },
            { text: "Tarifa econômica: Em geral, passagens em tarifa econômica não são reembolsáveis e não permitem mudança de data sem custos adicionais.", highlight: "Tarifa econômica:" },
            { text: "Passagens promocionais e/ou emitidas com milhas: Não são reembolsáveis.", highlight: "Passagens promocionais e/ou emitidas com milhas:" },
            { text: "Cancelamento ≠ reembolso: Cancelar a passagem não garante a devolução do dinheiro.", highlight: "Cancelamento ≠ reembolso:" },
            { text: "Prazo de reembolso (quando aplicável): Até 7 dias úteis para processamento.", highlight: "Prazo de reembolso (quando aplicável):" },
            { 
              text: "Custos para alteração de data:", 
              highlight: "Custos para alteração de data:",
              subItems: [
                { text: "Voos domésticos: multa de 650 BRL.", highlight: "Voos domésticos:" },
                { text: "Voos internacionais: depende da companhia aérea.", highlight: "Voos internacionais:" },
                { text: "Para saber valores exatos e condições da sua emissão, consulte seu vendedor ou entre em contato pelo +55 54 99163-8562.", highlight: "consulta com tu vendedor" } 
              ]
            }
          ]
        },
        {
          title: "2) Pontos e programas de fidelidade",
          items: [
            { text: "Passagens emitidas com milhas e/ou em promoção não acumulam pontos em programas de fidelidade." }
          ]
        },
        {
          title: "3) Responsabilidade do passageiro",
          items: [
            { text: "O bilhete é intransferível (não pode ser transferido para outra pessoa).", highlight: "O bilhete é intransferível" },
            { 
              text: "É responsabilidade do passageiro ter documentos originais e válidos para viajar (conforme rota e nacionalidade), incluindo:",
              highlight: "documentos originais e válidos",
              subItems: [
                { text: "Voos domésticos: documento de identidade válido.", highlight: "Voos domésticos:" },
                { text: "Voos internacionais: passaporte e vistos exigidos para o país de destino e/ou trânsito.", highlight: "Voos internacionais:" }
              ]
            },
            { text: "Verifique com antecedência se seu destino exige vacinas ou outros requisitos sanitários.", highlight: "vacinas" },
            {
              text: "Chegue ao aeroporto com tempo suficiente:",
              subItems: [
                 { text: "Voos domésticos: apresentar-se no check-in com 2 horas de antecedência.", highlight: "Voos domésticos:" },
                 { text: "Voos internacionais: apresentar-se no check-in com 3 horas de antecedência.", highlight: "Voos internacionais:" }
              ]
            }
          ]
        },
        {
          title: "4) Responsabilidades e limitações da Emigrando com Éxito",
          items: [
            { text: "Qualquer solicitação de alteração, cancelamento ou reembolso deve ser tratada exclusivamente com a equipe da Emigrando com Éxito.", highlight: "exclusivamente" },
            { text: "Se o passageiro tratar diretamente com a companhia aérea ou terceiros, a Emigrando com Éxito fica isenta de responsabilidade pelos processos e resultados obtidos.", highlight: "Emigrando com Éxito fica isenta" },
            { text: "Não aceitamos solicitações de reembolso de passagens adquiridas por outros meios que não a Emigrando com Éxito.", highlight: "outros meios" },
            { text: "Não reembolsamos despesas adicionais decorrentes de atrasos, cancelamentos ou alterações, tais como: traslados, hospedagem, alimentação, compra de novas passagens ou outras despesas relacionadas.", highlight: "despesas adicionais" }
          ]
        },
        {
          title: "5) Natureza da intermediação",
          items: [
            { text: "A Emigrando com Éxito atua apenas como intermediária na emissão de passagens (por milhas ou via comum). A companhia aérea é responsável pela operação e execução do voo.", highlight: "A companhia aérea é responsável" }
          ]
        },
        {
          title: "6) Contato companhia aérea"
        }
      ]
    }
  },
  es: {
    bookingReference: "Localizador",
    passengerInfo: "Información de su pasaje",
    travelers: "CANTIDAD DE VIAJEROS",
    itemsIncluded: "Incluido",
    itemsExcluded: "No Incluido",
    personalItem: "ARTÍCULO PERSONAL",
    personalItemDesc: "Bolso o mochila pequeña.",
    carryOn: "EQUIPAJE DE MANO",
    carryOnDesc: "Equipaje de mano 10 kg.",
    checkedBaggage: "EQUIPAJE DESPACHADO",
    checkedBaggageDesc: "Equipaje despachado 23 kg.",
    outboundFlight: "VUELOS DE IDA",
    returnFlight: "VUELOS DE VUELTA",
    start: "Inicio",
    findFlight: "Encuentre su vuelo",
    scanQr: "Utilice la información anterior o escanee el código QR al lado",
    clickOrScan: "Haga clic o escanee el CÓDIGO QR",
    importantInfo: "Información importante",
    legalText: "Penalidades, cancelaciones y cambios: El cambio en el itinerario original del viaje, antes o después de su inicio, solo es posible dentro del plazo de validez del pasaje sujeto a ajustes de tarifas, cobro de tasas o variaciones cambiarias. El reembolso solo será aceptado si está dentro del plazo de validez, respetando las reglas de tarifa promocional, cancelación de vuelo y penalidades. Para más información, incluidos los valores aplicables, consulte a su emisor.",
    boardingInstructions: "Orientaciones para el Embarque",
    boardingList: [
      "Preséntese en nuestro check-in con 2 horas de antelación en vuelos nacionales, o con 3 horas en vuelos internacionales.",
      "No olvide llevar sus documentos originales:",
      "Documento de Identidad para vuelos nacionales",
      "Pasaporte y visados necesarios para la entrada en el país de destino para vuelos internacionales.",
      "Verifique la necesidad de Vacunas para el destino de su viaje."
    ],
    contact: "Contacto",
    additionalPage: {
      title: "Información importante sobre tu pasaje",
      sections: [
        {
          title: "1) Tarifas, cambios, cancelaciones y reembolsos",
          items: [
            { text: "Cambios de itinerario o fecha: Solo se permiten dentro del plazo de validez del pasaje y están sujetos a diferencias de tarifa, multas/tasas y/o variación cambiaria, según aplique.", highlight: "Cambios de itinerario o fecha:" },
            { text: "Tarifa económica: En general, los pasajes en tarifa económica no son reembolsables y no permiten cambio de fecha sin costos adicionales.", highlight: "Tarifa económica:" },
            { text: "Pasajes en promoción y/o emitidos con millas: No tienen reembolso.", highlight: "Pasajes en promoción y/o emitidos con millas:" },
            { text: "Cancelación ≠ reembolso: Cancelar el pasaje no garantiza devolución de dinero.", highlight: "Cancelación ≠ reembolso:" },
            { text: "Plazo de reembolso (cuando aplique): Hasta 7 días hábiles para el procesamiento.", highlight: "Plazo de reembolso (cuando aplique):" },
            { 
              text: "Costos por cambio de fecha:", 
              highlight: "Costos por cambio de fecha:",
              subItems: [
                { text: "Vuelos dentro de Brasil: multa de 650 BRL.", highlight: "Vuelos dentro de Brasil:" },
                { text: "Vuelos internacionales: depende de la aerolínea.", highlight: "Vuelos internacionales:" },
                { text: "Para conocer valores exactos y condiciones de tu emisión, consulta con tu vendedor o contáctanos al +55 54 99163-8562.", highlight: "consulta con tu vendedor" }
              ]
            }
          ]
        },
        {
          title: "2) Puntos y programas de fidelidad",
          items: [
            { text: "Los pasajes emitidos con millas y/o en promoción no acumulan puntos en programas de fidelidad." }
          ]
        },
        {
          title: "3) Responsabilidad del pasajero",
          items: [
            { text: "El billete no puede cambiar de titular (no se puede transferir a otra persona).", highlight: "El billete no puede cambiar de titular" },
            { 
              text: "Es responsabilidad del pasajero contar con documentos originales y vigentes para viajar (según ruta y nacionalidad), incluyendo:",
              highlight: "documentos originales y vigentes",
              subItems: [
                { text: "Vuelos nacionales: documento de identidad válido.", highlight: "Vuelos nacionales:" },
                { text: "Vuelos internacionales: pasaporte y visas requeridas para el país de destino y/o tránsito.", highlight: "Vuelos internacionales:" }
              ]
            },
            { text: "Verifica con anticipación si tu destino exige vacunas u otros requisitos sanitarios.", highlight: "vacunas" },
            {
              text: "Llega al aeropuerto con tiempo suficiente:",
              subItems: [
                 { text: "Vuelos nacionales: presentarse al check-in con 2 horas de anticipación.", highlight: "Vuelos nacionales:" },
                 { text: "Vuelos internacionales: presentarse al check-in con 3 horas de anticipación.", highlight: "Vuelos internacionales:" }
              ]
            }
          ]
        },
        {
          title: "4) Responsabilidades y limitaciones de Emigrando con Éxito",
          items: [
            { text: "Cualquier solicitud de cambio, cancelación o reembolso debe ser gestionada exclusivamente con el equipo de Emigrando con Éxito.", highlight: "exclusivamente" },
            { text: "Si el pasajero gestiona directamente con la aerolínea o con terceros, Emigrando con Éxito queda exento de responsabilidad por los procesos y resultados obtenidos.", highlight: "Emigrando con Éxito queda exento" },
            { text: "No se aceptan solicitudes de reembolso de pasajes adquiridos por otros medios distintos a Emigrando con Éxito.", highlight: "otros medios" },
            { text: "No reembolsamos gastos adicionales derivados de atrasos, cancelaciones o cambios, tales como: traslados, hospedaje, alimentación, compra de nuevos pasajes u otros gastos relacionados.", highlight: "gastos adicionales" }
          ]
        },
        {
          title: "5) Naturaleza de intermediación",
          items: [
            { text: "Emigrando con Éxito actúa únicamente como intermediaria en la emisión de pasajes (por millas o vía común). La aerolínea es la responsable de la operación y ejecución del vuelo.", highlight: "operación y ejecución del vuelo" }
          ]
        },
        {
          title: "6) Contato aerolinea"
        }
      ]
    }
  },
  en: {
    bookingReference: "Booking Reference",
    passengerInfo: "Your Ticket Information",
    travelers: "NUMBER OF TRAVELERS",
    itemsIncluded: "Included",
    itemsExcluded: "Not Included",
    personalItem: "PERSONAL ITEM",
    personalItemDesc: "Small bag or backpack.",
    carryOn: "CARRY-ON BAG",
    carryOnDesc: "Carry-on bag 10 kg.",
    checkedBaggage: "CHECKED BAGGAGE",
    checkedBaggageDesc: "Checked baggage 23 kg.",
    outboundFlight: "OUTBOUND FLIGHTS",
    returnFlight: "RETURN FLIGHTS",
    start: "Start",
    findFlight: "Find your flight",
    scanQr: "Use the information above or scan the QR Code",
    clickOrScan: "Click or Scan the QR CODE",
    importantInfo: "Important Information",
    legalText: "Penalties, cancellations, and changes: Changes to the original travel itinerary, before or after its start, are only possible within the ticket validity period subject to fare adjustments, fees, or exchange rate variations. Refunds will only be accepted if within the validity period, respecting promotional fare rules, flight cancellation, and penalties. For more information, including applicable values, consult your issuer.",
    boardingInstructions: "Boarding Guidelines",
    boardingList: [
      "Arrive at our check-in 2 hours in advance for domestic flights, or 3 hours for international flights.",
      "Don't forget to bring your original documents:",
      "ID Card for domestic flights",
      "Passport and necessary visas for entry into the destination country for international flights.",
      "Check vaccination requirements for your destination."
    ],
    contact: "Contact",
    additionalPage: {
      title: "Important information about your ticket",
      sections: [
        {
          title: "1) Fares, changes, cancellations and refunds",
          items: [
            { text: "Itinerary or date changes: Allowed only within the ticket validity period and subject to fare difference, fines/fees and/or exchange rate variation, as applicable.", highlight: "Itinerary or date changes:" },
            { text: "Economy fare: In general, economy fare tickets are non-refundable and do not allow date changes without additional costs.", highlight: "Economy fare:" },
            { text: "Promotional tickets and/or issued with miles: Non-refundable.", highlight: "Non-refundable." },
            { text: "Cancellation ≠ refund: Canceling the ticket does not guarantee money back.", highlight: "Cancellation ≠ refund:" },
            { text: "Refund period (when applicable): Up to 7 business days for processing.", highlight: "Refund period (when applicable):" },
            { 
              text: "Costs for date change:", 
              highlight: "Costs for date change:",
              subItems: [
                { text: "Domestic flights in Brazil: fine of 650 BRL.", highlight: "Domestic flights in Brazil:" },
                { text: "International flights: depends on the airline.", highlight: "International flights:" },
                { text: "To know exact values and conditions of your issuance, consult your seller or contact us at +55 54 99163-8562.", highlight: "consult your seller" } 
              ]
            }
          ]
        },
        {
          title: "2) Points and loyalty programs",
          items: [
            { text: "Tickets issued with miles and/or on promotion do not accumulate points in loyalty programs." }
          ]
        },
        {
          title: "3) Passenger responsibility",
          items: [
            { text: "The ticket is non-transferable (cannot be transferred to another person).", highlight: "The ticket is non-transferable" },
            { 
              text: "It is the passenger's responsibility to have original and valid documents to travel (depending on route and nationality), including:",
              highlight: "original and valid documents",
              subItems: [
                { text: "Domestic flights: valid identity document.", highlight: "Domestic flights:" },
                { text: "International flights: passport and visas required for the destination and/or transit country.", highlight: "International flights:" }
              ]
            },
            { text: "Check in advance if your destination requires vaccines or other health requirements.", highlight: "vaccines" },
            {
              text: "Arrive at the airport with enough time:",
              subItems: [
                 { text: "Domestic flights: present at check-in 2 hours in advance.", highlight: "Domestic flights:" },
                 { text: "International flights: present at check-in 3 hours in advance.", highlight: "International flights:" }
              ]
            }
          ]
        },
        {
          title: "4) Responsibilities and limitations of Emigrando con Éxito",
          items: [
            { text: "Any request for change, cancellation or refund must be managed exclusively with the Emigrando con Éxito team.", highlight: "exclusively" },
            { text: "If the passenger deals directly with the airline or third parties, Emigrando con Éxito is exempt from responsibility for the processes and results obtained.", highlight: "Emigrando con Éxito is exempt" },
            { text: "We do not accept refund requests for tickets purchased through other means than Emigrando con Éxito.", highlight: "other means" },
            { text: "We do not refund additional expenses arising from delays, cancellations or changes, such as: transfers, accommodation, food, purchase of new tickets or other related expenses.", highlight: "additional expenses" }
          ]
        },
        {
          title: "5) Nature of intermediation",
          items: [
            { text: "Emigrando con Éxito acts solely as an intermediary in the issuance of tickets (by miles or common way). The airline is responsible for the operation and execution of the flight.", highlight: "operation and execution of the flight" }
          ]
        },
        {
          title: "6) Airline Contact"
        }
      ]
    }
  }
};
