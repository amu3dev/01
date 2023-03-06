import "../../css/ExpensesFilter.css";

const ExpensesFilter = ({
  onYearChange,
  // selectedYear
}) => {
  const handelYearSelected = (event) => {
    // console.log("ExpenseFilter.jsx");
    // console.log(event.target.value);
    onYearChange(event.target.value); // pass the selected year to the parent component
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          // value={selectedYear}
          onChange={handelYearSelected}>
          <option value="">Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
