

const ContactForm = () => {
  return (
    <div className="container mt-5 border">
        <div className="form-container">

      <h2>Fill Out The Form To?</h2>
      <span className="text">Enter your details below and the following will occur.</span>
      <form className="mt-4 w-100">
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name" required />
          </div>
          <div className="col-md-6">
            <input type="mail" className="form-control" placeholder="Email" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Company" required />
          </div>
          <div className="col-md-6">
            <input type="phone" className="form-control" placeholder="Phone" required />
          </div>
        </div>
      </form>
        <button type="submit" className="button mt-2">Submit</button>
      </div>

    </div>
  );
};

export default ContactForm;