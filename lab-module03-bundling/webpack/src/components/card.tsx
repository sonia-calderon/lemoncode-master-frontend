import React from "react";

const Card = () => {
    return (
        <div className="card">
            <div className="card__header">
                <h2>APP INFO</h2>
            </div>
            <div className="card__content">
                <div className="card__content-info">
                    <p>Entorno: <span>{process.env.NODE_ENV}</span></p>
                </div>
                <div className="card__content-info">
                    <p>API Url: <span>{process.env.API_BASE}</span></p>
                </div>
                <div className="card__content-info">
                    <p>Tecnologías: <span>React + TypeScript</span></p>
                </div>
                <div className="card__content-info">
                    <p>Bundling: <span>Webpack</span></p>
                </div>
                <div className="card__content-instr">
                    <p>Para auditar el tamaño del bundle:</p>
                    <code>npm run build:perf</code>
                    <p>Este comando abrirá una pestaña interactiva con el peso detallado de cada librería.</p>
                </div>
            </div>
            
        </div>
    )
};

export default Card;