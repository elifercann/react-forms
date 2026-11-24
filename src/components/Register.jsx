import { useState } from "react";
export default function Register() {
  const [passwordNotEqual, setPasswordNotEqual] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // formun submit olayı tetiklendiğinde sayfanın yenilenmesini engeller

    const formData = new FormData(event.target); // form verilerini alır
    console.log(formData.get("fullname"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("repassword"));
    console.log(formData.getAll("hobbies"));

    const hobbies = formData.getAll("hobbies"); // hobbies alanındaki tüm değerleri alır
    const data = Object.fromEntries(formData.entries()); // form verilerini bir nesneye dönüştürür
    data.hobbies = hobbies; // hobbies alanını nesneye ekler
    if (data.password !== data.repassword) {
      setPasswordNotEqual(true);
      return;
    }

    console.log(data); // form verilerini konsola yazdırır
    setPasswordNotEqual(false);

    event.target.reset(); // formu resetler
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Register</h1>
        <p>Please enter your info!</p>
      </div>

      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
        />
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            minLength={5}
            maxLength={10}
          />
        </div>
        <div className="col-6">
          <label htmlFor="repassword" className="form-label">
            Re-Password
          </label>
          <input
            type="password"
            className="form-control"
            id="repassword"
            name="repassword"
            required
          />
          {passwordNotEqual && (
            <div className="invalid-feedback d-block">Parola eşleşmiyor.</div>
          )}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="hobbies" className="form-label">
          Hobbies
        </label>
        <div className="card card-body text-bg-light">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="cars"
              value="cars"
            />
            <label htmlFor="cars" className="form-check-label">
              Araba
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="books"
              value="books"
            />
            <label htmlFor="books" className="form-check-label">
              Kitap
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="movies"
              value="movies"
            />
            <label htmlFor="movies" className="form-check-label">
              Sinema
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}
