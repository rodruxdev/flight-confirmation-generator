import React, { useEffect } from "react";
import {
  type ConfirmationData,
  type Passenger,
  type FlightLeg,
  PassengerType,
  Airlines,
  type AirlineInfo,
} from "../../types";
import { AirlinesInfo, PassengerTypeLabels } from "../../constants";
import { Plus, Trash2 } from "lucide-react";

interface ConfirmationFormProps {
  data: ConfirmationData;
  onChange: (data: ConfirmationData) => void;
}

const buildCheckInUrl = (
  airline: AirlineInfo,
  locator: string,
  originCode: string,
) => {
  const cleanLocator = locator.trim();
  const cleanOrigin = originCode.trim();
  const airlineName = airline.name.toLowerCase();

  if (airlineName.includes("azul")) {
    if (!cleanLocator || !cleanOrigin) return airline.baseCheckInUrl;
    return `${airline.baseCheckInUrl}?pnr=${encodeURIComponent(
      cleanLocator,
    )}&origin=${encodeURIComponent(cleanOrigin)}`;
  }

  if (airlineName.includes("gol")) {
    if (!cleanLocator || !cleanOrigin) return airline.baseCheckInUrl;
    return `${airline.baseCheckInUrl}?recordLocator=${encodeURIComponent(
      cleanLocator,
    )}&departureAirport=${encodeURIComponent(cleanOrigin)}`;
  }

  // TODO check the params for latam
  if (airlineName.includes("latam")) {
    if (!cleanLocator || !cleanOrigin) return airline.baseCheckInUrl;
    return `${airline.baseCheckInUrl}`;
  }

  return null;
};

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({
  data,
  onChange,
}) => {
  const updateField = (field: keyof ConfirmationData, value: unknown) => {
    onChange({ ...data, [field]: value });
  };

  const updateAirline = (field: keyof typeof data.airline, value: unknown) => {
    onChange({ ...data, airline: { ...data.airline, [field]: value } });
  };

  const handleAirlineChange = (airlineKey: Airlines) => {
    const selectedAirline = AirlinesInfo[airlineKey];
    onChange({
      ...data,
      airline: {
        ...selectedAirline,
        checkInUrl: data.airline.checkInUrl,
      },
    });
  };

  const getCurrentAirlineKey = (): Airlines => {
    const airlineName = data.airline.name;
    if (airlineName === AirlinesInfo[Airlines.GOL].name) return Airlines.GOL;
    if (airlineName === AirlinesInfo[Airlines.AZUL].name) return Airlines.AZUL;
    if (airlineName === AirlinesInfo[Airlines.LATAM].name)
      return Airlines.LATAM;
    return Airlines.GOL; // Default to GOL
  };

  const updateBaggage = (field: keyof typeof data.baggage, value: unknown) => {
    onChange({ ...data, baggage: { ...data.baggage, [field]: Number(value) } });
  };

  // Passenger Handlers
  const addPassenger = () => {
    const newPassenger: Passenger = {
      name: "NOME",
      type: PassengerType.ADULT,
    };
    updateField("passengers", [...data.passengers, newPassenger]);
  };

  const removePassenger = (id: number) => {
    const updatedPassengers = [...data.passengers];
    updatedPassengers.splice(id, 1);
    updateField("passengers", updatedPassengers);
  };

  const updatePassenger = (
    id: number,
    field: keyof Passenger,
    value: string,
  ) => {
    const passengerToUpdate = { ...data.passengers[id], [field]: value };
    const updatedPassengers = [...data.passengers];
    updatedPassengers[id] = passengerToUpdate;
    updateField("passengers", updatedPassengers);
  };

  // Flight Handlers
  const addFlight = () => {
    // Fix the messy cast by providing correct initial structure matching types
    const cleanFlight: FlightLeg = {
      flightNumber: "G3 1234",
      date: new Date().toISOString().split("T")[0],
      duration: "1h00m",
      origin: { city: "Cidade Origem", code: "ORG", time: "12:00" },
      destination: { city: "Cidade Destino", code: "DST", time: "13:00" },
    };

    updateField("flights", [...data.flights, cleanFlight]);
  };

  const removeFlight = (id: number) => {
    const updatedFlights = [...data.flights];
    updatedFlights.splice(id, 1);
    updateField("flights", updatedFlights);
  };

  const updateFlight = (id: number, field: keyof FlightLeg, value: unknown) => {
    // Shallow update for top level fields
    const flightToUpdate = { ...data.flights[id], [field]: value };
    const updatedFlights = [...data.flights];
    updatedFlights[id] = flightToUpdate;
    updateField("flights", updatedFlights);
  };

  const updateFlightLocation = (
    id: number,
    type: "origin" | "destination",
    subField: "city" | "code" | "time",
    value: string,
  ) => {
    const flightToUpdate = {
      ...data.flights[id],
      [type]: { ...data.flights[id][type], [subField]: value },
    };
    const updatedFlights = [...data.flights];
    updatedFlights[id] = flightToUpdate;
    updateField("flights", updatedFlights);
  };

  // Return Flight Handlers
  const addReturnFlight = () => {
    const cleanFlight: FlightLeg = {
      flightNumber: "G3 5678",
      date: new Date().toISOString().split("T")[0],
      duration: "1h30m",
      origin: { city: "Cidade Volta", code: "DST", time: "18:00" },
      destination: { city: "Cidade Origem", code: "ORG", time: "19:30" },
    };

    const currentReturnFlights = data.returnFlights || [];
    updateField("returnFlights", [...currentReturnFlights, cleanFlight]);
  };

  const removeReturnFlight = (id: number) => {
    if (!data.returnFlights) return;
    const updatedFlights = [...data.returnFlights];
    updatedFlights.splice(id, 1);
    updateField("returnFlights", updatedFlights);
  };

  const updateReturnFlight = (
    id: number,
    field: keyof FlightLeg,
    value: unknown,
  ) => {
    if (!data.returnFlights) return;
    const flightToUpdate = { ...data.returnFlights[id], [field]: value };
    const updatedFlights = [...data.returnFlights];
    updatedFlights[id] = flightToUpdate;
    updateField("returnFlights", updatedFlights);
  };

  const updateReturnFlightLocation = (
    id: number,
    type: "origin" | "destination",
    subField: "city" | "code" | "time",
    value: string,
  ) => {
    if (!data.returnFlights) return;
    const flightToUpdate = {
      ...data.returnFlights[id],
      [type]: { ...data.returnFlights[id][type], [subField]: value },
    };
    const updatedFlights = [...data.returnFlights];
    updatedFlights[id] = flightToUpdate;
    updateField("returnFlights", updatedFlights);
  };

  useEffect(() => {
    if (!data.locator) {
      return;
    }

    const originCode = data.flights[0]?.origin.code ?? "";
    if (!originCode) {
      return;
    }

    const nextUrl = buildCheckInUrl(data.airline, data.locator, originCode);

    if (nextUrl !== null && nextUrl !== data.airline.checkInUrl) {
      onChange({
        ...data,
        airline: { ...data.airline, checkInUrl: nextUrl },
      });
    }
  }, [data, onChange]);

  return (
    <div className="form-container">
      <div className="form-section">
        <h3>Companhia Aérea & Voo</h3>
        <div className="form-group">
          <label>Companhia Aérea</label>
          <select
            value={getCurrentAirlineKey()}
            onChange={(e) => handleAirlineChange(e.target.value as Airlines)}
          >
            <option value={Airlines.GOL}>{AirlinesInfo.GOL.name}</option>
            <option value={Airlines.AZUL}>{AirlinesInfo.Azul.name}</option>
            <option value={Airlines.LATAM}>{AirlinesInfo.Latam.name}</option>
          </select>
        </div>
        <div className="form-group">
          <label>Localizador</label>
          <input
            type="text"
            value={data.locator}
            onChange={(e) => updateField("locator", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Idioma do PDF</label>
          <select
            value={data.language}
            onChange={(e) => updateField("language", e.target.value)}
          >
            <option value="pt">Português</option>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <div className="form-section">
        <div className="section-header">
          <h3>Passageiros</h3>
          <button className="btn-icon" onClick={addPassenger}>
            <Plus size={16} />
          </button>
        </div>
        {data.passengers.map((p, index) => (
          <div key={`passenger-${index}`} className="card-item">
            {/* Mobile header with delete button */}
            <div className="card-header-mobile">
              <span className="card-title-mobile">Passageiro {index + 1}</span>
              <button
                className="btn-delete"
                onClick={() => removePassenger(index)}
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Nome Completo"
                value={p.name}
                onChange={(e) => updatePassenger(index, "name", e.target.value)}
              />
            </div>
            <div className="form-group" style={{ marginTop: "0.5rem" }}>
              <label>Tipo de Passageiro</label>
              <select
                value={p.type}
                onChange={(e) =>
                  updatePassenger(
                    index,
                    "type",
                    e.target.value as PassengerType,
                  )
                }
              >
                {Object.values(PassengerType).map((type) => (
                  <option key={type} value={type}>
                    {PassengerTypeLabels[type]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="form-section">
        <h3>Bagagem (Global)</h3>
        <div className="row">
          <div className="form-group">
            <label>Pessoal</label>
            <input
              type="number"
              value={data.baggage.personalItem}
              onChange={(e) => updateBaggage("personalItem", e.target.value)}
              min={0}
            />
          </div>
          <div className="form-group">
            <label>Mão</label>
            <input
              type="number"
              value={data.baggage.carryOn}
              onChange={(e) => updateBaggage("carryOn", e.target.value)}
              min={0}
            />
          </div>
          <div className="form-group">
            <label>Despachada</label>
            <input
              type="number"
              value={data.baggage.checked}
              onChange={(e) => updateBaggage("checked", e.target.value)}
              min={0}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="section-header">
          <h3>Voos</h3>
          <button className="btn-icon" onClick={addFlight}>
            <Plus size={16} />
          </button>
        </div>
        {data.flights.map((f, index) => (
          <div key={`flight-${index}`} className="card-item">
            {/* Mobile header with delete button */}
            <div className="card-header-mobile">
              <span className="card-title-mobile">Voo {index + 1}</span>
              <button
                className="btn-delete"
                onClick={() => removeFlight(index)}
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="row">
              <div className="form-group">
                <label>Número</label>
                <input
                  type="text"
                  value={f.flightNumber}
                  onChange={(e) =>
                    updateFlight(index, "flightNumber", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Data</label>
                <input
                  type="date"
                  value={f.date}
                  onChange={(e) => updateFlight(index, "date", e.target.value)}
                />
              </div>
            </div>

            {/* Origin */}
            <div className="location-group">
              <span className="label-small">ORIGEM ({f.origin.code})</span>
              <div className="row">
                <input
                  type="text"
                  placeholder="Cidade"
                  value={f.origin.city}
                  onChange={(e) =>
                    updateFlightLocation(
                      index,
                      "origin",
                      "city",
                      e.target.value,
                    )
                  }
                  style={{ flex: 2 }}
                />
                <input
                  type="text"
                  placeholder="IATA"
                  value={f.origin.code}
                  onChange={(e) =>
                    updateFlightLocation(
                      index,
                      "origin",
                      "code",
                      e.target.value,
                    )
                  }
                  maxLength={3}
                  style={{ flex: 1 }}
                />
                <input
                  type="time"
                  value={f.origin.time}
                  onChange={(e) =>
                    updateFlightLocation(
                      index,
                      "origin",
                      "time",
                      e.target.value,
                    )
                  }
                  style={{ flex: 1 }}
                />
              </div>
            </div>

            {/* Destination */}
            <div className="location-group">
              <span className="label-small">
                DESTINO ({f.destination.code})
              </span>
              <div className="row">
                <input
                  type="text"
                  placeholder="Cidade"
                  value={f.destination.city}
                  onChange={(e) =>
                    updateFlightLocation(
                      index,
                      "destination",
                      "city",
                      e.target.value,
                    )
                  }
                  style={{ flex: 2 }}
                />
                <input
                  type="text"
                  placeholder="IATA"
                  value={f.destination.code}
                  onChange={(e) =>
                    updateFlightLocation(
                      index,
                      "destination",
                      "code",
                      e.target.value,
                    )
                  }
                  maxLength={3}
                  style={{ flex: 1 }}
                />
                <input
                  type="time"
                  value={f.destination.time}
                  onChange={(e) =>
                    updateFlightLocation(
                      index,
                      "destination",
                      "time",
                      e.target.value,
                    )
                  }
                  style={{ flex: 1 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="form-section">
        <div className="section-header">
          <h3>Voos de Volta (Opcional)</h3>
          {!data.returnFlights || data.returnFlights.length === 0 ? (
            <button
              className="btn-primary"
              onClick={addReturnFlight}
              style={{ fontSize: "0.8rem", padding: "4px 8px" }}
            >
              Adicionar Volta
            </button>
          ) : (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                className="btn-delete"
                title="Remover toda a volta"
                onClick={() => onChange({ ...data, returnFlights: [] })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.8rem",
                  color: "#e74c3c",
                }}
              >
                <Trash2 size={14} /> Remover Seção
              </button>
              <button className="btn-icon" onClick={addReturnFlight}>
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>

        {data.returnFlights &&
          data.returnFlights.map((f, index) => (
            <div key={`return-flight-${index}`} className="card-item">
              {/* Mobile header with delete button */}
              <div className="card-header-mobile">
                <span className="card-title-mobile">
                  Voo de Volta {index + 1}
                </span>
                <button
                  className="btn-delete"
                  onClick={() => removeReturnFlight(index)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="row">
                <div className="form-group">
                  <label>Número</label>
                  <input
                    type="text"
                    value={f.flightNumber}
                    onChange={(e) =>
                      updateReturnFlight(index, "flightNumber", e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Data</label>
                  <input
                    type="date"
                    value={f.date}
                    onChange={(e) =>
                      updateReturnFlight(index, "date", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Origin */}
              <div className="location-group">
                <span className="label-small">ORIGEM ({f.origin.code})</span>
                <div className="row">
                  <input
                    type="text"
                    placeholder="Cidade"
                    value={f.origin.city}
                    onChange={(e) =>
                      updateReturnFlightLocation(
                        index,
                        "origin",
                        "city",
                        e.target.value,
                      )
                    }
                    style={{ flex: 2 }}
                  />
                  <input
                    type="text"
                    placeholder="IATA"
                    value={f.origin.code}
                    onChange={(e) =>
                      updateReturnFlightLocation(
                        index,
                        "origin",
                        "code",
                        e.target.value,
                      )
                    }
                    maxLength={3}
                    style={{ flex: 1 }}
                  />
                  <input
                    type="time"
                    value={f.origin.time}
                    onChange={(e) =>
                      updateReturnFlightLocation(
                        index,
                        "origin",
                        "time",
                        e.target.value,
                      )
                    }
                    style={{ flex: 1 }}
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="location-group">
                <span className="label-small">
                  DESTINO ({f.destination.code})
                </span>
                <div className="row">
                  <input
                    type="text"
                    placeholder="Cidade"
                    value={f.destination.city}
                    onChange={(e) =>
                      updateReturnFlightLocation(
                        index,
                        "destination",
                        "city",
                        e.target.value,
                      )
                    }
                    style={{ flex: 2 }}
                  />
                  <input
                    type="text"
                    placeholder="IATA"
                    value={f.destination.code}
                    onChange={(e) =>
                      updateReturnFlightLocation(
                        index,
                        "destination",
                        "code",
                        e.target.value,
                      )
                    }
                    maxLength={3}
                    style={{ flex: 1 }}
                  />
                  <input
                    type="time"
                    value={f.destination.time}
                    onChange={(e) =>
                      updateReturnFlightLocation(
                        index,
                        "destination",
                        "time",
                        e.target.value,
                      )
                    }
                    style={{ flex: 1 }}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="form-section">
        <h3>QR Code</h3>
        <div className="form-group">
          <label>QR Code URL</label>
          <input
            type="text"
            value={data.airline.checkInUrl || ""}
            onChange={(e) => updateAirline("checkInUrl", e.target.value)}
            placeholder="URL do QR Code"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationForm;
