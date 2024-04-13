document.addEventListener('DOMContentLoaded', function() {
    const propertyList = document.getElementById('property-list');
  
    // Sample data - simulating properties from db.json
    const properties = [
      { id: 1, title: 'Luxury Apartment', price: '$500,000', image: 'Assets/apartment.jpg' },
      { id: 2, title: 'Cozy Home', price: '$300,000', image: 'Assets/cozy.jpeg' },
      { id: 3, title: 'Modern Villa', price: '$1,200,000', image: 'Assets/villa.jpg' }
    ];
  
    // Display properties on the page
    function displayProperties() {
      propertyList.innerHTML = '';
      properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
          <img src="${property.image}" alt="${property.title}">
          <h3>${property.title}</h3>
          <p><strong>Price:</strong> ${property.price}</p>
          <button onclick="bookProperty(${property.id})">Book Now</button>
        `;
        propertyList.appendChild(card);
      });
    }
  
    displayProperties();
  
    // Simulated booking function
    function bookProperty(id) {
      alert(`Property with ID ${id} booked successfully!`);
      
    }
  });
  