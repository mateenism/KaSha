import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CALCULATOR_SERVICES, COMPANY_INFO } from '../constants';
import { DownloadIcon } from '../components/icons';

const eventTypes = [
  { id: 'wedding', name: 'Wedding', baseCost: 500000 },
  { id: 'corporate', name: 'Corporate Event', baseCost: 300000 },
  { id: 'social', name: 'Social Gathering', baseCost: 150000 },
];

const CostCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [guests, setGuests] = useState(150);
  const [duration, setDuration] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(['venue', 'catering', 'photo']);
  const [totalCost, setTotalCost] = useState<[number, number]>([0, 0]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateCost = () => {
    let cost = eventType.baseCost;

    const servicesCost = selectedServices.reduce((acc, serviceId) => {
      const service = CALCULATOR_SERVICES.find(s => s.id === serviceId);
      return service ? acc + service.cost : acc;
    }, 0);

    cost += servicesCost;
    cost += (duration > 1 ? (duration - 1) * 100000 : 0);

    setTotalCost([cost * 0.9, cost * 1.1]);
  };

  useEffect(() => {
    calculateCost();
  }, [eventType, guests, duration, selectedServices]);

  const formatCurrency = (amount: number, minimumFractionDigits = 0) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const resetForm = () => {
    setEventType(eventTypes[0]);
    setGuests(150);
    setDuration(1);
    setSelectedServices(['venue', 'catering', 'photo']);
  };

  const handleDownloadPDF = () => {
    const selectedServicesDetails = CALCULATOR_SERVICES.filter(s => selectedServices.includes(s.id));
    
    const estimateHTML = `
      <html>
        <head>
          <title>KaSha Event Cost Estimate - ${new Date().toLocaleDateString()}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
          <style>
            body { font-family: 'Lato', sans-serif; }
            .font-serif { font-family: 'Playfair Display', serif; }
            @media print {
              body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            }
          </style>
        </head>
        <body class="p-8 bg-gray-100">
          <div class="container mx-auto max-w-4xl border rounded-lg p-10 bg-white shadow-lg">
            <header class="flex justify-between items-start pb-6 border-b">
              <div>
                <h1 class="text-5xl font-serif font-bold text-gray-800">KaSha</h1>
                <p class="text-gray-500">${COMPANY_INFO.tagline}</p>
              </div>
              <div class="text-right text-sm text-gray-600">
                <p><strong>Estimate Date:</strong> ${new Date().toLocaleDateString()}</p>
                <p>${COMPANY_INFO.email}</p>
                <p>${COMPANY_INFO.phone}</p>
                <p>${COMPANY_INFO.website}</p>
              </div>
            </header>

            <main class="py-8">
              <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6">Preliminary Cost Estimate</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-gray-50 p-6 rounded-lg border">
                  <h3 class="font-bold text-xl font-serif text-gray-700 mb-4 pb-2 border-b">Event Configuration</h3>
                  <table class="w-full text-left">
                    <tbody>
                      <tr class="border-b"><td class="py-2 text-gray-600">Event Type</td><td class="py-2 font-semibold text-gray-800">${eventType.name}</td></tr>
                      <tr class="border-b"><td class="py-2 text-gray-600">Number of Guests</td><td class="py-2 font-semibold text-gray-800">${guests}</td></tr>
                      <tr><td class="py-2 text-gray-600">Duration</td><td class="py-2 font-semibold text-gray-800">${duration} Day(s)</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg border">
                  <h3 class="font-bold text-xl font-serif text-gray-700 mb-4 pb-2 border-b">Selected Services</h3>
                  <ul class="space-y-1">
                    ${selectedServicesDetails.map(s => `
                      <li class="flex justify-between text-gray-700">
                        <span>${s.name}</span>
                        <span class="font-semibold">${formatCurrency(s.cost)}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            </main>

            <div class="text-center bg-yellow-500/10 border border-yellow-500/30 text-yellow-800 p-8 rounded-lg mt-6">
              <p class="text-lg font-serif">Estimated Cost Range</p>
              <p class="text-5xl font-bold font-serif">${formatCurrency(totalCost[0])} - ${formatCurrency(totalCost[1])}</p>
            </div>

            <footer class="mt-10 pt-6 border-t text-center text-xs text-gray-500">
              <p><strong>Disclaimer:</strong> This is a preliminary estimate only. The final cost may vary based on specific requirements, location, vendor choices, and market rates at the time of booking. This is not a formal quote or contract. Please contact us for a detailed, personalized quote.</p>
              <p class="mt-2">&copy; ${new Date().getFullYear()} ${COMPANY_INFO.name}. All Rights Reserved.</p>
            </footer>
          </div>
        </body>
      </html>
    `;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(estimateHTML);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => { // Timeout to allow assets to load
            printWindow.print();
        }, 500);
    }
  };

  return (
    <div className="bg-brand-light-secondary dark:bg-brand-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-brand-dark dark:text-brand-light">Event <span className="text-brand-gold">Cost Calculator</span></h1>
          <p className="text-brand-gray mt-4 max-w-2xl mx-auto">Get a preliminary estimate for your event. Adjust the options below to see how different factors affect the cost.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left Column: Inputs */}
          <div className="lg:col-span-2 bg-brand-light dark:bg-brand-dark p-8 rounded-sm shadow-sm space-y-8">
            
            {/* Event Type */}
            <div>
              <h2 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-4">1. Select Event Type</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {eventTypes.map(type => (
                  <button key={type.id} onClick={() => setEventType(type)} className={`p-4 border rounded-sm text-center transition-all ${eventType.id === type.id ? 'bg-brand-gold/10 border-brand-gold ring-2 ring-brand-gold text-brand-gold' : 'border-gray-200 dark:border-brand-dark-secondary hover:border-brand-gold/50 text-brand-dark dark:text-brand-light'}`}>
                    <span className="font-semibold">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guests and Duration */}
            <div>
                <h2 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-4">2. Event Scale</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-brand-gray">Number of Guests</label>
                        <div className="flex items-center gap-4 mt-2">
                            <input type="range" id="guests" min="50" max="1000" step="10" value={guests} onChange={e => setGuests(Number(e.target.value))} className="w-full h-2 bg-gray-200 dark:bg-brand-dark-secondary rounded-lg appearance-none cursor-pointer accent-brand-gold" />
                            <span className="font-bold text-brand-dark dark:text-brand-light w-16 text-center">{guests}</span>
                        </div>
                    </div>
                     <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-brand-gray">Duration (Days)</label>
                         <div className="flex items-center gap-4 mt-2">
                            <input type="range" id="duration" min="1" max="7" step="1" value={duration} onChange={e => setDuration(Number(e.target.value))} className="w-full h-2 bg-gray-200 dark:bg-brand-dark-secondary rounded-lg appearance-none cursor-pointer accent-brand-gold" />
                            <span className="font-bold text-brand-dark dark:text-brand-light w-16 text-center">{duration}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-4">3. Select Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CALCULATOR_SERVICES.map(service => (
                  <button key={service.id} onClick={() => handleServiceToggle(service.id)} className={`flex flex-col justify-between text-left p-4 border rounded-sm cursor-pointer transition-all h-28 ${selectedServices.includes(service.id) ? 'bg-brand-gold/10 border-brand-gold ring-2 ring-brand-gold' : 'border-gray-200 dark:border-brand-dark-secondary hover:border-brand-gold/50'}`}>
                    <span className="font-semibold text-brand-dark dark:text-brand-light">{service.name}</span>
                    <span className="font-bold text-brand-dark dark:text-brand-light">{formatCurrency(service.cost)}</span>
                  </button>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-brand-light dark:bg-brand-dark p-8 rounded-sm shadow-sm sticky top-28">
              <h2 className="text-2xl font-serif text-brand-dark dark:text-brand-light border-b dark:border-brand-dark-secondary pb-4 mb-4">Your Estimate</h2>
              <div className="space-y-3 mb-6 text-brand-gray">
                <div className="flex justify-between">
                  <span>Event Type:</span>
                  <span className="font-semibold text-brand-dark dark:text-brand-light">{eventType.name}</span>
                </div>
                 <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className="font-semibold text-brand-dark dark:text-brand-light">{guests}</span>
                </div>
                 <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold text-brand-dark dark:text-brand-light">{duration} Day(s)</span>
                </div>
                <div className="border-t dark:border-brand-dark-secondary pt-3 mt-3">
                  <h3 className="font-semibold text-brand-dark dark:text-brand-light mb-2">Selected Services ({selectedServices.length}):</h3>
                </div>
              </div>

              <div className="bg-brand-gold/10 p-4 rounded text-center my-6">
                <p className="text-sm text-brand-dark dark:text-brand-gray">Estimated Range</p>
                <p className="text-3xl font-bold text-brand-dark dark:text-brand-light">
                    {formatCurrency(totalCost[0])} - {formatCurrency(totalCost[1])}
                </p>
              </div>
              
              <p className="text-xs text-brand-gray text-center mb-6">This is a preliminary estimate. Prices may vary based on specific requirements and locations.</p>
              
              <div className="space-y-3">
                <button onClick={() => navigate('/contact')} className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300">Request a Detailed Quote</button>
                <button onClick={handleDownloadPDF} className="w-full flex items-center justify-center gap-2 bg-transparent border border-brand-gold text-brand-gold font-semibold py-3 px-6 rounded-sm hover:bg-brand-gold/10 transition-colors">
                    <DownloadIcon className="w-5 h-5" /> Download Estimate
                </button>
                <button onClick={resetForm} className="w-full bg-transparent text-brand-gray font-semibold py-2 px-6 rounded-sm hover:bg-gray-100 dark:hover:bg-brand-dark-secondary transition-colors">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;