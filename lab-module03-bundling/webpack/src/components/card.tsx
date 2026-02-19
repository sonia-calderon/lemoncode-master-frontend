import React from "react";

const Card = () => {
    return (
        <div className="card">
            <div className="card__header">
                <h2>APP INFO</h2>
            </div>
            <div className="card__content">
                <div className="card__content-info">
                    <h3>Entorno</h3>
                    <p>{process.env.NODE_ENV}</p>
                </div>
                <div className="card__content-info">
                    <h3>API Url</h3>
                    <p>{process.env.API_BASE}</p>
                </div>
                <div className="card__content-info">
                    <h3>Tecnologías</h3>
                    <p>React + TypeScript</p>
                </div>
                <div className="card__content-info">
                    <h3>Bundling</h3>
                    <p>Webpack</p>
                </div>
                <div className="card__content-info">
                    <p>Para auditar el tamaño del bundle:</p>
                    <code>npm run build:perf</code>
                    <p>Este comando abrirá una pestaña interactiva con el peso detallado de cada librería.</p>
                </div>
            </div>
            
        </div>
    )
};

export default Card;