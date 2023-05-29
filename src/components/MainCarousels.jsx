import Carousel from "react-bootstrap/Carousel";
import styles from "./styles/SingleProduct.module.css";
function MainCarousels() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className={styles.corusel_img}
          src="https://shairahabon.com/wp-content/uploads/2017/03/Emporio-Armani.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.corusel_img}
          src="https://im.whatshot.in/img/2021/Nov/option-2-cropped-1637737261.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.corusel_img}
          src="https://64.media.tumblr.com/39be77f190b18a75aa6e9c602809a4c2/tumblr_inline_pg778eLvPy1r02mf8_1280.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousels;
