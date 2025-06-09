// React hook handlers

import { useState, useEffect } from 'react';
// Lucide React icons
import { MapPin, Trash2, Truck, Shield, Calendar, CreditCard, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

// Demo header / footers (not in scope)
import DemoUnderHeader from './components/DemoUnderHeader'
import DemoFooter from './components/DemoFooter'

// Utils
import calculatePrice from './calculatePrice';

// Hardcoded data for the test (use .env or adjust accordingly)
const APIHOST = 'https://app.wewantwaste.co.uk'
const SAMPLEPARAMS = 'by-location?postcode=NR32&area=Lowestoft'

const SkipHireRedesign = () => {

  // Hooks
  const [skipData, setSkipData] = useState([]); // Data from API Fetch
  const [selectedSkip, setSelectedSkip] = useState(null); // Skip selector
  const [currentStep, setCurrentStep] = useState(2); // Starting at "Select Skip" step
  const [isLoading, setIsLoading] = useState(false); // Spinner 
  const [error, setError] = useState(null); // Error hanlder

  // Fetch data from API and handle errors if any
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${APIHOST}/api/skips/${SAMPLEPARAMS}`);
      if (!res.ok) throw new Error('Failed to fetch skip data');
      const data = await res.json();
      setSkipData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Load icons into array
  const steps = [
    { icon: MapPin, label: 'Postcode', active: true },
    { icon: Trash2, label: 'Waste Type', active: true },
    { icon: Truck, label: 'Select Skip', active: true },
    { icon: Shield, label: 'Permit Check', active: false },
    { icon: Calendar, label: 'Choose Date', active: false },
    { icon: CreditCard, label: 'Payment', active: false }
  ];

  // Fucntion to select desired skip using hook
  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <DemoUnderHeader />

        {/* Progress Steps */}
        <div className="max-w-8xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {/* Choose icons according to step */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;

              return (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => {
                      if (index < currentStep) {
                        setCurrentStep(index); // go back to this step
                      }
                    }}
                    disabled={index > currentStep}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-full transition-all focus:outline-none
                    ${isCompleted ? 'bg-emerald-100 text-emerald-700 cursor-pointer hover:bg-emerald-200' :
                        isCurrent ? 'bg-emerald-500 text-white shadow-lg cursor-default' :
                          'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                    <span className="font-medium text-sm md:text-base hidden sm:block">
                      {step.label}
                    </span>
                  </button>

                  {index < steps.length - 1 && (
                    <div className={`hidden md:block w-8 h-0.5 mx-2 ${isCompleted ? 'bg-emerald-300' : 'bg-gray-200'
                      }`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            {/* Placeholder Postocode search (not in scope) */}
            {currentStep === 0 && (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Postcode Step</h2>
                <p className="text-gray-600 mb-6">Placeholder: Enter or confirm your postcode here.</p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-emerald-600 transition"
                >
                  Continue to Waste Type
                </button>
              </div>
            )}

            {/* Placeholder Waste Type search (not in scope) */}
            {currentStep === 1 && (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Waste Type Step</h2>
                <p className="text-gray-600 mb-6">Placeholder: Select your waste type (e.g. household, construction).</p>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-emerald-600 transition"
                >
                  Continue to Skip Selection
                </button>
              </div>
            )}
            {/* If step is "Select Skip" */}
            {currentStep === 2 && (
              <>

                <div className="text-center mb-10">
                  {/* Instruction message */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Choose Your Perfect Skip Size
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Select from our range of skip sizes to match your project needs.
                    All prices include VAT and delivery within the selected area.
                  </p>
                </div>

                {/* Loading/Error States */}
                {isLoading && (
                  <div className="text-center py-8">
                    <div className="flex justify-center items-center flex-col gap-4">
                      <div
                        className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"
                        role="status"
                        aria-label="Loading skip options"
                      ></div>
                      <p className="text-gray-600 text-base">Loading skip options...</p>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="text-center py-8 text-red-600">
                    <p>Error: {error}</p>
                    <button
                      className="mt-4 text-emerald-600 underline"
                      onClick={() => fetchData()}
                    >
                      Retry
                    </button>
                  </div>
                )}


                {/* Skip Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* Mapping the skip data to iterate through each skip coming from API */}
                  {skipData.map((skip) => {
                    const finalPrice = calculatePrice(skip.price_before_vat, skip.vat);
                    const isSelected = selectedSkip?.id === skip.id;

                    return (
                      <div
                        key={skip.id}
                        className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${isSelected
                          ? 'border-emerald-500 shadow-emerald-100'
                          : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        onClick={() => handleSkipSelect(skip)}
                      >
                        {/* Header */}
                        <div className="p-6 pb-4 text-center">
                          <div className="flex items-center justify-between mb-4">
                            <div className="bg-emerald-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                              {skip.size} Yards
                            </div>
                            {isSelected && (
                              <CheckCircle className="w-6 h-6 text-emerald-500" />
                            )}
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {skip.size} Yard Skip
                          </h3>

                          <p className="text-gray-600 mb-4">
                            {skip.hire_period_days} day hire period
                          </p>

                          {/* Features */}
                          <div className="space-y-2 mb-6 flex flex-col items-center">
                            <div className="flex items-center text-sm">
                              {skip.allowed_on_road ? (
                                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                              )}
                              <span className={skip.allowed_on_road ? 'text-emerald-700' : 'text-amber-700'}>
                                {skip.allowed_on_road ? 'Road placement allowed' : 'Private land only'}
                              </span>
                            </div>

                            <div className="flex items-center text-sm">
                              {skip.allows_heavy_waste ? (
                                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                              )}
                              <span className={skip.allows_heavy_waste ? 'text-emerald-700' : 'text-amber-700'}>
                                {skip.allows_heavy_waste ? 'Heavy waste accepted' : 'Light waste only'}
                              </span>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="mb-6">
                            <div className="text-4xl font-bold text-emerald-600 mb-1">
                              £{finalPrice}
                            </div>
                            <div className="text-sm text-gray-500">
                              Inc. VAT (£{skip.price_before_vat} + £{finalPrice - skip.price_before_vat} VAT)
                            </div>
                          </div>

                          {/* Select Button */}
                          <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 ${isSelected
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200'
                            }`}>
                            <span>{isSelected ? 'Selected' : 'Select This Skip'}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>


                {/* Continue Button */}
                {selectedSkip && (
                  <div className="flex justify-center mt-12">
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-3 text-lg">
                      <span>Continue with {selectedSkip.size} Yard Skip</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </>)}
          </div>
        </div>


        {/* Footer Info */}
        <div className="bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Icons and messages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <Truck className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Same day or next day delivery available in most areas</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Fully Licensed</h3>
                <p className="text-gray-600">All permits and licenses handled for you</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Best Prices</h3>
                <p className="text-gray-600">Competitive rates with no hidden fees</p>
              </div>
            </div>
          </div>
          <DemoFooter />
        </div>
      </div>
    </>
  );
};

export default SkipHireRedesign;