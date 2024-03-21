import CountryList from "./Data";
import Countries from "./Countries";

const FetchData2 = () => {
  const countries = [...CountryList];
  return (
    <div>
      <Countries countries={countries} />
    </div>
  );
};

export default FetchData2;
