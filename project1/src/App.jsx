import React from 'react';
import Card from './Card.jsx';
import restaurant1 from './assets/Eureka!.jpeg';
import restaurant2 from './assets/Goshi.jpeg';
import restaurant3 from './assets/Ox+.jpeg';
import restaurant4 from './assets/nate.jpeg';
import restaurant5 from './assets/mama.jpeg';
import restaurant6 from './assets/madonna.jpeg';
import restaurant7 from './assets/blue.jpeg';
import restaurant8 from './assets/Ox+.jpeg';
import restaurant9 from './assets/Ox+.jpeg';
import restaurant10 from './assets/Ox+.jpeg';

function App() {
  return (
    <>
      <Card title="Eureka!" text="1141 Chorro St" image={restaurant1}    link="https://eurekarestaurantgroup.com/locations/san-luis-obispo" />
      <Card title="Goshi" text="570 Higuera St #155" image={restaurant2} link="http://www.goshislo.com/"/>
      <Card title="Ox + Anchor" text="877 Palm St" image={restaurant3}   link="https://oxandanchor.com/"/>
      <Card title="Nate's on Marsh" text="450 Marsh St" image={restaurant4} link="https://www.natesonmarsh.com/"/>
      <Card title="Mama's Meatball" text="570 Higuera St #130" image={restaurant5} link="https://www.mamasmeatball.com/"/>
      <Card title="Madonna Inn Copper Cafe" text="100 Madonna Rd" image={restaurant6} link="https://www.madonnainn.com/copper-cafe"/>
      <Card title="Koberl At Blue" text="998 Monterey St" image={restaurant7} link="https://www.epkoberl.com/"/>
      <Card title="Card 2" text="Content for Card 2" image={restaurant8} link=""/>
      <Card title="Card 1" text="Content for Card 1" image={restaurant9} link=""/>
      <Card title="Card 2" text="Content for Card 2" image={restaurant10} link=""/>
    </>
  );
}

export default App;
