const Home = () => {
  return (
    <>
    
    <div className="hero">
      <div className="hero-content">
        <h1>SAVE LIFE DONATE BLOOD</h1>
        <p>Find blood donors quickly and save lives</p>

        <button className="btn">Donate Blood</button>
        <button className="btn">Find Blood</button>
      </div>
    </div>

    <div className="blood-groups">
      <h2>Available Blood Groups</h2>

      <div className="group-container">
        <span>A+</span>
        <span>A-</span>
        <span>B+</span>
        <span>B-</span>
        <span>O+</span>
        <span>O-</span>
        <span>AB+</span>
        <span>AB-</span>
      </div>
    </div>

    <div className="services">
      <h2>Our Services</h2>

      <div className="service-box">
        <div className="card">
          <h3> Blood Donation</h3>
          <p>Donate blood to save lives</p>
        </div>

        <div className="card">
          <h3> Emergency Request</h3>
          <p>Request blood for emergency</p>
        </div>

        <div className="card">
          <h3> Donor</h3>
          <p>Manage blood donors</p>
        </div>
      </div>
    </div>

    </>
  );
};
export default Home;