import React from 'react';

const HouseListPage = () => {
  return (
    <>
      <section>
        <h2>House list page</h2>
        <ul>
          <li className="flex flex-col">
            <div>
              <img src="../../" alt="" />
            </div>
            <div>
              <div>
                <h5>El Olivar</h5>
                <div>
                  <span>icon</span>
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p>120$/noche</p>
              </div>
            </div>
            <div>
              <button>Reservar</button>
            </div>
          </li>
          <li>House 2</li>
        </ul>
      </section>
    </>
  );
};

export default HouseListPage;
