// import carousel1 from "../images/carousel_1.png";

// const Carousel = () => {
//   return (
//     <div
//       id="carouselExampleCaptions"
//       class="carousel slide"
//       data-bs-ride="false"
//     >
//       <div class="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="0"
//           class="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>
//       <div class="carousel-inner">
//         <div class="carousel-item active">
//           <img src={carousel1} class="d-block w-100" alt="..." />
//         </div>
//         <div class="carousel-item">
//           <img src={carousel1} class="d-block w-100" alt="..." />
//         </div>
//         <div class="carousel-item">
//           <img src={carousel1} class="d-block w-100" alt="..." />
//         </div>
//       </div>
//       <button
//         class="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//       >
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//       </button>
//       <button
//         class="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//       >
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import { Link } from "react-router-dom";
import carousel1 from "../images/carousel_1.png";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade shadow-lg"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src={carousel1}
            className="d-block w-100 carousel-image"
            alt="Car Rental"
          />

          <div className="carousel-caption">
            <h1>Drive Your Dream Car</h1>
            <p>
              Choose from premium, luxury, and budget-friendly vehicles at
              affordable prices.
            </p>

            
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src={carousel1}
            className="d-block w-100 carousel-image"
            alt="Luxury Cars"
          />

          <div className="carousel-caption">
            <h1>Luxury Meets Comfort</h1>
            <p>
              Rent premium cars for business trips, vacations, and special
              occasions.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src={carousel1}
            className="d-block w-100 carousel-image"
            alt="Affordable Rentals"
          />

          <div className="carousel-caption">
            <h1>Book in Minutes</h1>
            <p>
              Fast booking, secure payments, and 24×7 customer support.
            </p>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  );
};

export default Carousel;

// import { Link } from "react-router-dom";
// import carousel1 from "../images/carousel_1.png";

// const Carousel = () => {
//   return (
//     <div
//       id="carouselExampleCaptions"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       {/* Indicators */}
//       <div className="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="0"
//           className="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>

//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>

//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>

//       {/* Slides */}
//       <div className="carousel-inner">

//         {/* Slide 1 */}
//         <div className="carousel-item active">
//           <img
//             src={carousel1}
//             className="d-block w-100 carousel-image"
//             alt="Car Rental"
//             style={{
//               width: "100%",
//               height: "300px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="carousel-caption">
//             <h1>Drive Your Dream Car</h1>
//             <p>
//               Choose from premium, luxury, and budget-friendly vehicles at
//               affordable prices.
//             </p>
//           </div>
//         </div>

//         {/* Slide 2 */}
//         <div className="carousel-item">
//           <img
//             src={carousel1}
//             className="d-block w-100 carousel-image"
//             alt="Luxury Cars"
//             style={{
//               width: "100%",
//               height: "300px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="carousel-caption">
//             <h1>Luxury Meets Comfort</h1>
//             <p>
//               Rent premium cars for business trips, vacations, and special
//               occasions.
//             </p>
//           </div>
//         </div>

//         {/* Slide 3 */}
//         <div className="carousel-item">
//           <img
//             src={carousel1}
//             className="d-block w-100 carousel-image"
//             alt="Affordable Rentals"
//             style={{
//               width: "100%",
//               height: "300px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="carousel-caption">
//             <h1>Book in Minutes</h1>
//             <p>
//               Fast booking, secure payments, and 24×7 customer support.
//             </p>
//           </div>
//         </div>

//       </div>

//       {/* Controls */}
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//       >
//         <span
//           className="carousel-control-prev-icon"
//           aria-hidden="true"
//         ></span>
//         <span className="visually-hidden">Previous</span>
//       </button>

//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//       >
//         <span
//           className="carousel-control-next-icon"
//           aria-hidden="true"
//         ></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;