import React from 'react';
function Footer() {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <p className="text-light">
            App desenvolvido por{' '}
            <a
              href="https://github.com/crispimluiz"
              target="_blank"
              rel="noreferrer"
            >
              Crispim Luiz
            </a>
          </p>
          <p className="text-light">
            <small>
              <strong>Semana Spring React</strong>
              <br />
              Evento promovido pela escola DevSuperior:{' '}
            </small>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
