import React from "react";

const Formulario = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-8 m-auto" >
            <h1 className="text-center mb-4" style={{fontFamily: "'Coda Caption', sans-serif", color:"#29B6F6", textTransform:"uppercase"}}>Solicitud de servicio</h1>
            <h2 className="text-center mb-3" style={{fontSize: "20px", textTransform:"uppercase"}}>Completa el formulario</h2>
            <form className="contactForm">
              <div className="form-group mt-3">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nombre"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="phone">Telefono</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Numero"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Mensage</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
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