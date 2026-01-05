
import React from 'react';
import type { ConfirmationData, Passenger, FlightLeg } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

interface ConfirmationFormProps {
  data: ConfirmationData;
  onChange: (data: ConfirmationData) => void;
}

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({ data, onChange }) => {

  const updateField = (field: keyof ConfirmationData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const updateAgency = (field: keyof typeof data.agency, value: any) => {
    onChange({ ...data, agency: { ...data.agency, [field]: value } });
  };

  const updateBaggage = (field: keyof typeof data.baggage, value: any) => {
    onChange({ ...data, baggage: { ...data.baggage, [field]: Number(value) } });
  };

  // Passenger Handlers
  const addPassenger = () => {
    const newPassenger: Passenger = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'NOVO PASSAGEIRO',
      document: ''
    };
    updateField('passengers', [...data.passengers, newPassenger]);
  };

  const removePassenger = (id: string) => {
    updateField('passengers', data.passengers.filter(p => p.id !== id));
  };

  const updatePassenger = (id: string, field: keyof Passenger, value: string) => {
    const updatedPassengers = data.passengers.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    );
    updateField('passengers', updatedPassengers);
  };

  // Flight Handlers
  const addFlight = () => {

    // Fix the messy cast by providing correct initial structure matching types
    const cleanFlight: FlightLeg = {
        id: Math.random().toString(36).substr(2, 9),
        flightNumber: 'G3 1234',
        date: new Date().toISOString().split('T')[0],
        duration: '1h00m',
        origin: { city: 'Cidade Origem', code: 'ORG', time: '12:00' },
        destination: { city: 'Cidade Destino', code: 'DST', time: '13:00' }
    };

    updateField('flights', [...data.flights, cleanFlight]);
  };

  const removeFlight = (id: string) => {
    updateField('flights', data.flights.filter(f => f.id !== id));
  };
  
  const updateFlight = (id: string, field: keyof FlightLeg, value: any) => {
      // Shallow update for top level fields
    const updatedFlights = data.flights.map(f => 
        f.id === id ? { ...f, [field]: value } : f
      );
      updateField('flights', updatedFlights);
  };

  const updateFlightLocation = (id: string, type: 'origin' | 'destination', subField: 'city' | 'code' | 'time', value: string) => {
      const updatedFlights = data.flights.map(f => {
          if (f.id === id) {
              return {
                  ...f,
                  [type]: {
                      ...f[type],
                      [subField]: value
                  }
              };
          }
          return f;
      });
      updateField('flights', updatedFlights);
  };


  return (
    <div className="form-container">
      <h2 style={{ marginBottom: '1rem' }}>Configuração</h2>

      <div className="form-section">
        <h3>Agência & Voo</h3>
        <div className="form-group">
            <label>Nome da Agência</label>
            <input type="text" value={data.agency.name} onChange={e => updateAgency('name', e.target.value)} />
        </div>
        <div className="form-group">
            <label>Telefone Contato</label>
            <input type="text" value={data.agency.contactPhone} onChange={e => updateAgency('contactPhone', e.target.value)} />
        </div>
         <div className="form-group">
            <label>Logo URL (Agência)</label>
            <input type="text" value={data.agency.logoUrl || ''} onChange={e => updateAgency('logoUrl', e.target.value)} placeholder="https://..." />
        </div>
        <div className="row">
             <div className="form-group">
                <label>Companhia Aérea</label>
                <input type="text" value={data.airline} onChange={e => updateField('airline', e.target.value)} />
            </div>
            <div className="form-group">
                <label>Localizador</label>
                <input type="text" value={data.locator} onChange={e => updateField('locator', e.target.value)} />
            </div>
        </div>
      </div>

      <div className="form-section">
          <div className="section-header">
            <h3>Passageiros</h3>
            <button className="btn-icon" onClick={addPassenger}><Plus size={16}/></button>
          </div>
          {data.passengers.map(p => (
              <div key={p.id} className="card-item">
                  <div className="row">
                    <input 
                        type="text" 
                        placeholder="Nome Completo" 
                        value={p.name} 
                        onChange={e => updatePassenger(p.id, 'name', e.target.value)}
                        style={{ flex: 2 }}
                    />
                    <button className="btn-delete" onClick={() => removePassenger(p.id)}><Trash2 size={16}/></button>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Documento / CPF" 
                    value={p.document} 
                    onChange={e => updatePassenger(p.id, 'document', e.target.value)} 
                    style={{ marginTop: '0.5rem' }}
                  />
              </div>
          ))}
      </div>

      <div className="form-section">
          <h3>Bagagem (Global)</h3>
          <div className="row">
              <div className="form-group">
                  <label>Pessoal</label>
                  <input type="number" value={data.baggage.personalItem} onChange={e => updateBaggage('personalItem', e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Mão</label>
                  <input type="number" value={data.baggage.carryOn} onChange={e => updateBaggage('carryOn', e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Despachada</label>
                  <input type="number" value={data.baggage.checked} onChange={e => updateBaggage('checked', e.target.value)} />
              </div>
          </div>
      </div>

      <div className="form-section">
          <div className="section-header">
            <h3>Voos</h3>
            <button className="btn-icon" onClick={addFlight}><Plus size={16}/></button>
          </div>
          {data.flights.map(f => (
              <div key={f.id} className="card-item">
                   <div className="row header-row">
                      <span className="badge">VOO</span>
                      <button className="btn-delete" onClick={() => removeFlight(f.id)}><Trash2 size={16}/></button>
                   </div>
                   
                   <div className="row">
                        <div className="form-group">
                            <label>Número</label>
                            <input type="text" value={f.flightNumber} onChange={e => updateFlight(f.id, 'flightNumber', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Data</label>
                            <input type="date" value={f.date} onChange={e => updateFlight(f.id, 'date', e.target.value)} />
                        </div>
                   </div>

                   {/* Origin */}
                   <div className="location-group">
                        <span className="label-small">ORIGEM ({f.origin.code})</span>
                        <div className="row">
                            <input type="text" placeholder="Cidade" value={f.origin.city} onChange={e => updateFlightLocation(f.id, 'origin', 'city', e.target.value)} style={{flex: 2}}/>
                            <input type="text" placeholder="IATA" value={f.origin.code} onChange={e => updateFlightLocation(f.id, 'origin', 'code', e.target.value)} maxLength={3} style={{flex: 1}}/>
                            <input type="time" value={f.origin.time} onChange={e => updateFlightLocation(f.id, 'origin', 'time', e.target.value)} style={{flex: 1}}/>
                        </div>
                   </div>

                   {/* Destination */}
                   <div className="location-group">
                        <span className="label-small">DESTINO ({f.destination.code})</span>
                        <div className="row">
                            <input type="text" placeholder="Cidade" value={f.destination.city} onChange={e => updateFlightLocation(f.id, 'destination', 'city', e.target.value)} style={{flex: 2}}/>
                            <input type="text" placeholder="IATA" value={f.destination.code} onChange={e => updateFlightLocation(f.id, 'destination', 'code', e.target.value)} maxLength={3} style={{flex: 1}}/>
                            <input type="time" value={f.destination.time} onChange={e => updateFlightLocation(f.id, 'destination', 'time', e.target.value)} style={{flex: 1}}/>
                        </div>
                   </div>

                   <div className="form-group" style={{marginTop: '0.5rem'}}>
                      <label>Duração</label>
                      <input type="text" value={f.duration} onChange={e => updateFlight(f.id, 'duration', e.target.value)} />
                   </div>
              </div>
          ))}
      </div>
      
      <div className="form-section">
            <h3>Rodapé</h3>
            <div className="form-group">
                <label>QR Code Imagem/URL</label>
                 <input type="text" value={data.qrCodeText} onChange={e => updateField('qrCodeText', e.target.value)} placeholder="URL do QR Code" />
            </div>
      </div>

    </div>
  );
};

export default ConfirmationForm;
