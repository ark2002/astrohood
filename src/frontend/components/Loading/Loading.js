import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading flex--column">
      <img src="/assets/zodiaclogo.png" alt="logo" className="loading__img" />
      <h1 className="heading1 secondary__font">Loading....</h1>
    </div>
  );
};

export { Loading };
