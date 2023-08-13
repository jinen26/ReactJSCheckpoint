import './App.css';

function App() {
  /*Nav+Main+Footer in one component*/
  return (
<body>
  <header>
    <nav>
      <h1 id="white">GreenHub</h1>
      <a href="./index.html">Home</a>
      <a href="#">About</a>
      <a href="./second.html">Sustainability Tasks</a>
      <a href="./shops.html">Sustainable Shops</a>
    </nav>
  </header>
  <main>
    <div class="video-container">
      <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/jAa58N4Jlos" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="greeno">
      <h1 id="lo">Welcome to the Climate Change Hub</h1>
    <strong id="lop">Explore solutions, take action, and raise awareness for a sustainable future.</strong>
      <p>Do you want to do something good for the planet and yourself? Then you’ve come to the right place. Green Hub is a website that helps you fight climate change by giving you weekly challenges that are fun, easy, and rewarding. You can choose from a variety of topics, such as transportation, food, waste, or energy, and learn how to adopt more sustainable habits.  Green Hub is more than just a website, it’s a movement. Join us now and start making a change!</p>
    </div>
  </main>
  <div class="container">
    <div class="box1">
      <h1 id="title">Raising Awareness</h1>
      <p>Knowledge regarding climate change helps young people understand and tackle the consequences of global warming.</p>
      <button   id="greeny" >Learn More</button>
    </div>
    <div class="box2">
      <h1 id="title">Sustainable Tasks</h1>
      <p>Sustainability improves the quality of our lives, protects our ecosystem, and preserves natural resources for future generations.</p>
      <button id="greeny" > Explore</button>
    </div>
      <div class="box3">
      <h1 id="title">Sustainable shops</h1>
      <p>Sustainable clothing uses biodegradable components from natural or recycled fibers. These materials grow with no pesticide or fertilizer use, consume less energy and water, and employ no chemical treatment, thus reducing the overall carbon footprint of these brands.</p>
      <button id="greeny"> Explore</button>
    </div>
  </div>
  <footer>
    <p>&copy; 2023 Green Hub</p>
  </footer>
</body>
  );
}

export default App;
