document.addEventListener('DOMContentLoaded', function() {
    const propertyList = document.getElementById('property-list');
  
    // Sample data - simulating properties from db.json
    const properties = [
      { id: 1, title: 'Luxury Apartment', price: '$500,000', image: 'Assets/apartment.jpg' },
      { id: 2, title: 'Cozy Home', price: '$300,000', image: 'Assets/cozy.jpeg' },
      { id: 3, title: 'Modern Villa', price: '$1,200,000', image: 'Assets/villa.jpg' },
      { id: 4, "title": "Bungalow", "price": "$240,000", "image": "Assets/bungalow.jpg" },
      { id: 5, "title": "Studio", "price": "$100,000", "image": "Assets/studio.jpg" },
      { id: 6, "title": "Maisonette", "price": "$1,350,000", "image": "Assets/maisonette.jpeg" }
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

  function bookProperty(btn) {
    const bookDiv = document.querySelector("#property-num");
    const properties = bookDiv.textContent.split(" ")[0];
    if (properties > 0) {
        bookDiv.textContent = properties - 1 + " remaining properties";
    }
    else  {
        let bookBtn = document.getElementById("book-now")
        alert("No more properties!");//output is given to the user that the tickets are sold out
        bookDivDiv.textContent = 'Sold Out';
      bookBtn.textContent = 'Sold Out';
        bookBtn.disabled = true;
        a.target.classList.add("already-sold");
        a.target.classList.remove("Blue");
    }}
  
 
