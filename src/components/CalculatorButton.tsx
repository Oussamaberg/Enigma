function CalculatorButton({ item, i, success, gateway }) {

  return (
    <input
      type="button"
      value={item}
      key={i}
      disabled={success}
      onClick={gateway}
      className={`bg-slate-100 dark:bg-gray-800 h-16 flex justify-center items-center border-2 rounded-xl border-gray-500 hover:bg-gray-700 transition ease-out duration-500  font-serif text-4xl
     ${i == 9 ? "col-span-3" : ""}`}
     
    />
  );
}
export default CalculatorButton;