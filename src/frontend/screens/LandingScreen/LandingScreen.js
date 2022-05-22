import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      LandingScreen
      <button
        className="btn btn-color--primary btn-font--secondary"
        onClick={() => navigate("/feed")}
      >
        go to App
      </button>
    </>
  );
};

export { LandingScreen };
