import React from "react";
import {
  type ConfirmationData,
  type Passenger,
  type FlightLeg,
  PassengerType,
} from "../../types";
import { Plus, Trash2 } from "lucide-react";

interface ConfirmationFormProps {
  data: ConfirmationData;
  onChange: (data: ConfirmationData) => void;
}

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
    value: string
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
    value: string
  ) => {
    const flightToUpdate = {
      ...data.flights[id],
      [type]: { ...data.flights[id][type], [subField]: value },
    };
    const updatedFlights = [...data.flights];
    updatedFlights[id] = flightToUpdate;
    updateField("flights", updatedFlights);
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <h3>Companhia Aérea & Voo</h3>
        <div className="form-group">
          <label>Companhia Aérea</label>
          <input
            type="text"
            value={data.airline.name}
            onChange={(e) => updateAirline("name", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Localizador</label>
          <input
            type="text"
            value={data.locator}
            onChange={(e) => updateField("locator", e.target.value)}
          />
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
            <div className="row">
              <input
                type="text"
                placeholder="Nome Completo"
                value={p.name}
                onChange={(e) => updatePassenger(index, "name", e.target.value)}
                style={{ flex: 2 }}
              />
              <button
                className="btn-delete"
                onClick={() => removePassenger(index)}
              >
                <Trash2 size={16} />
              </button>
            </div>
            {/* TODO: Add passenger type select */}
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
            <div className="row header-row">
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
                      e.target.value
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
                      e.target.value
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
                      e.target.value
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
                      e.target.value
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
                      e.target.value
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
                      e.target.value
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
            value={data.airline.checkInUrl}
            onChange={(e) => updateAirline("checkInUrl", e.target.value)}
            placeholder="URL do QR Code"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationForm;
