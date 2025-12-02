import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { ArrowRightLeft, RefreshCw } from "lucide-react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isConverting, setIsConverting] = useState(false);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    const oldFrom = from;
    const oldTo = to;
    const oldAmount = amount;
    const oldConverted = convertedAmount;

    setFrom(oldTo);
    setTo(oldFrom);
    setAmount(oldConverted);
    setConvertedAmount(oldAmount);
  };

  const convert = () => {
    setIsConverting(true);
    // Simulate a small delay for better UX
    setTimeout(() => {
      setConvertedAmount(amount * currencyInfo[to]);
      setIsConverting(false);
    }, 300);
  };

  const reset = () => {
    setAmount(0);
    setConvertedAmount(0);
    setFrom("usd");
    setTo("inr");
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Currency Converter
        </h1>
        <p className="text-gray-600">
          Real-time exchange rates with beautiful interface
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Panel - Converter */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Convert Currency
                </h2>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <RefreshCw size={16} />
                  Reset
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                {/* FROM INPUT */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount to Convert
                  </label>
                  <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    selectCurrency={from}
                    onAmountChange={(value) => setAmount(value)}
                    className="bg-gray-50 border-2 border-gray-200 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* SWAP BUTTON */}
                <div className="relative my-2">
                  <button
                    type="button"
                    onClick={swap}
                    className="absolute left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:scale-105"
                  >
                    <ArrowRightLeft size={20} />
                  </button>
                  <div className="border-t-2 border-dashed border-gray-300"></div>
                </div>

                {/* TO INPUT */}
                <div className="mt-6 mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Converted Amount
                  </label>
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                    className="bg-gray-50 border-2 border-gray-200 focus:border-green-500 transition-all"
                  />
                </div>

                {/* CONVERT BUTTON */}
                <button
                  type="submit"
                  disabled={isConverting || amount <= 0}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isConverting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Converting...
                    </span>
                  ) : (
                    `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Panel - Info & Rate */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-6 md:p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Exchange Rate Info</h3>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">Current Rate</span>
                    <span className="text-lg font-bold">
                      {currencyInfo[to]?.toFixed(4) || "Loading..."}
                    </span>
                  </div>
                  <div className="text-sm text-blue-200">
                    1 {from.toUpperCase()} ={" "}
                    {currencyInfo[to]?.toFixed(4) || "..."} {to.toUpperCase()}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-3">Popular Currencies</h4>
                  <div className="space-y-3">
                    {["USD", "EUR", "GBP", "JPY", "CAD"].map((currency) => (
                      <div
                        key={currency}
                        className="flex justify-between items-center text-sm"
                      >
                        <span>{currency}</span>
                        <span className="font-semibold">
                          {currencyInfo[currency.toLowerCase()]?.toFixed(4) ||
                            "..."}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Conversion Result</h4>
                  <div className="text-3xl font-bold text-center py-4">
                    {convertedAmount.toFixed(2)}{" "}
                    <span className="text-lg">{to.toUpperCase()}</span>
                  </div>
                  <div className="text-sm text-center text-blue-200">
                    {amount} {from.toUpperCase()} equals
                  </div>
                </div>
              </div>

              {/* Update Time */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-100">
                    Rates update in real-time
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-blue-600">
              {options.length}
            </div>
            <div className="text-sm text-gray-600">Currencies Available</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600">Real-time</div>
            <div className="text-sm text-gray-600">Exchange Rates</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-purple-600">Secure</div>
            <div className="text-sm text-gray-600">No Data Storage</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-orange-600">Free</div>
            <div className="text-sm text-gray-600">No Fees</div>
          </div>
        </div>
      </div>

      {/* Attribution */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>
          Data sourced from reliable financial APIs • Updated every 24 hours
        </p>
      </div>
    </div>
  );
}

export default App;
