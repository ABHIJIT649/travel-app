const header = document.getElementById("hero");

const bgImages = [
  "images/htr1.jpg",
  "images/htr2.jpg",
  "images/htr3.jpg",
  "images/htr4.jpg",
  "images/htr5.jpg"
];

let currentIndex = 0;

function changeBackground() {
  header.style.backgroundImage = `url(${bgImages[currentIndex]})`;
  currentIndex = (currentIndex + 1) % bgImages.length;
}

changeBackground();

setInterval(changeBackground, 3000);


const destinations = [
    {
      name: "Paris, France",
      image: "images/paris.jpg",
      description: " is the French word for the number twenty. Vingt is also used in phrases like vingt ans (twenty years) and vingt-et-un(twenty-one) according to Vidalingua and Preply. "
    },
    {
      name: "Bali, Indonesia",
      image: "images/indonesia.jpg",
      description: "Bali, often called the Island of Gods,is a province of Indonesia known for its volcanic scenery, elaborate dances, and vibrant culture. It's a popular tourist."
    },
    {
      name: "New York, USA",
      image: "images/newyork.jpg",
      description: "New York City: vibrant, bustling, diverse, exciting, expensive, crowded, energetic, ambitious, gritty, captivating, cultural, innovative, global   . "
    },
    {
      name: "Florida, USA",
      image: "images/disneyland.jpg",
      description: "Florida, also known as the Sunshine State, is famous for its beautiful beaches, vibrant nightlife, and unique cultural experiences. It's the southeasternmost state in the US, "
    },
    {
      name: " Ladakh",
      image: "images/ladak.jpg",
      description: "Ladakh, the Land of High Passes, is a breathtaking region in the Himalayas known for its rugged beauty, ancient monasteries, and vibrant Buddhist culture. "
    },
    {
      name: "Goa",
      image: "images/goa.avif",
      description: "Popularly known as India’s party capital, Goa seduces travellers from all around the globe with its boho beaches, ancient churches, majestic forts and unbeatable nightlife!"
    },
    {
      name: "Manali",
      image: "images/manali.avif",
      description: "Nestled on the banks of River Beas, Manali will take your breath away with its snow-kissed peaks, lush valleys and heart-pumping adventure experiences in the heart of Himalayas."
    },
    {
      name: "Krabi",
      image: "images/krabi.avif",
      description: "Krabi is abundant in scenic beauty with lush tropical greenery, rugged limestone cliffs, meandering caves and a stunning coastline with some of the best beaches in the world.."
    },
    {
      name: "Bali",
      image: "images/bali.webp",
      description: "An exotic tropical destination that flaunts scenic beaches and mountains, Bali is deep-rooted in culture and tradition, which adds to the charm of this scenic isla"
    },
    {
      name: "laksadweep",
      image: "images/laksadweep.webp",
      description: "Lakshadweep, India's smallest Union Territory, is an archipelago of 36 islands known for its stunning beaches, vibrant coral reefs, and rich marine life."
    },
  ];
  
  const destinationList = document.querySelector(".destination-list");
  const bookingForm = document.getElementById("bookingForm");
  
  destinations.forEach(dest => {
    const div = document.createElement("div");
    div.classList.add("destination");
    div.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}">
      <div class="destination-content">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <button onclick="openForm()">Book Tour</button>
      </div>
    `;
    destinationList.appendChild(div);
  });
  
  function openForm() {
    bookingForm.style.display = "block";
  }
  
  function closeForm() {
    bookingForm.style.display = "none";
  }