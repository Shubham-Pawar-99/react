function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden">
        {/* Amount Input Section */}
        <div className="flex-1 p-4 border-r border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            {!amountDisable && (
              <span className="text-xs text-gray-500">Enter amount</span>
            )}
          </div>
          <div className="relative">
            <input
              className="w-full text-2xl md:text-3xl font-bold bg-transparent outline-none py-2 placeholder:text-gray-300 disabled:opacity-80 disabled:cursor-not-allowed"
              type="number"
              placeholder="0.00"
              disabled={amountDisable}
              value={amount === 0 ? "" : amount}
              onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
              }
              min="0"
              step="0.01"
            />
            {!amountDisable && amount > 0 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-400">
                    {selectCurrency.toUpperCase()}
                  </span>
                </div>
              </div>
            )}
          </div>
          {!amountDisable && (
            <div className="flex gap-2 mt-3">
              {[100, 500, 1000].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => onAmountChange && onAmountChange(value)}
                  className="text-xs px-3 py-1 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                >
                  ${value}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Currency Selector Section */}
        <div className="w-full sm:w-48 p-4 bg-gray-50">
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">
              Currency
            </label>
            <span className="text-xs text-gray-500">
              {currencyOptions.length} available
            </span>
          </div>
          <div className="relative">
            <select
              value={selectCurrency}
              onChange={(e) =>
                onCurrencyChange && onCurrencyChange(e.target.value)
              }
              disabled={currencyDisable}
              className="w-full py-3 pl-4 pr-10 text-lg font-semibold bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {currencyOptions.map((option) => (
                <option key={option} value={option} className="py-2">
                  {option.toUpperCase()}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {selectCurrency && (
            <div className="mt-3 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {selectCurrency.toUpperCase()}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Currency Flag/Icon (Optional Enhancement) */}
      <div className="absolute -top-2 -left-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {selectCurrency.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
