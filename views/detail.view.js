const getView = (property) => `
  <h2>Detalle de la propiedad</h2>
  <div class="propiedades">
    <img src="${property.photo}"/>
    <h1>${property.description} [${property.type}]</h1>
    <p>${property.price} - ${property.currency}</p>
    <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
  </div>
`;

module.exports = { getView };