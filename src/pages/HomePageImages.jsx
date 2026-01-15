import Carousel from 'react-bootstrap/Carousel';
import Images from './Images';
function HomePageImages() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Images text="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg" />
        <Carousel.Caption>
          <h3 style={{color:"white", backdropFilter:"blur(10px)" }}> Hyderbad Event</h3>
          <p style={{color:"white"}}>Enjoy every moment in the event</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Images text="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D" />
        <Carousel.Caption>
          <h3 style={{color:"White"}}>Warangal </h3>
          <p style={{color:"White"}}>Bring colors inn your life....</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Images text="https://weddingsutra.com/images/Vendor_Images/Wedding_Planners/q-events/q-events%20(11).jpg" />
        <Carousel.Caption>
          <h3 style={{color:"black"}}></h3>
          <p style={{color:"black"}}>
            Make every moment count...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageImages;