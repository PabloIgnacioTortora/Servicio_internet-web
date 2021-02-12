import React from "react";
import emailjs from "emailjs-com";

function sendemail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      process.env.SERVICE,
      process.env.TEMPLATE,
      e.target,
      process.env.USER
    )
    .then(
      (result) => {
        alert("Mensaje enviado correctamente!");
        console.log(result.text);
      },
      (error) => {
        alert(error.message);
        console.log(error.text);
      }
    );
  e.target.reset();
}

const Formulario = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-8 m-auto">
            <h1
              className="text-center mb-4"
              style={{
                fontFamily: "'Coda Caption', sans-serif",
                color: "#29B6F6",
                textTransform: "uppercase",
              }}
            >
              Solicitud de servicio
            </h1>
            <h2
              className="text-center mb-3"
              style={{ fontSize: "20px", textTransform: "uppercase" }}
            >
              Completa el formulario
            </h2>
            <form className="contactForm" onSubmit={sendemail}>
              <label htmlFor="subject">Contratacion / Consulta</label>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm"
                name="subject"
                required
              >
                <option selected></option>
                <option value="CONTRATACION">CONTRATACION</option>
                <option value="CONSULTA">CONSULTA</option>
              </select>
              <div className="form-group mt-3">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  name="ciudad"
                  placeholder="Ciudad"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="phone">Telefono</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="Numero"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Mensage</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Formulario;
