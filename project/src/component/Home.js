

import "../component/Home.css"
import food from "../asset/restauranfood.jpg"
import Salad from "../asset/greek_salad.jpg"
import Lemon from "../asset/lemon_dessert.jpg"
import Bruschetta from "../asset/bruchetta.png"
import Bike from "../asset/motorbike.png"
import female2 from "../asset/premium_photo-1681210062532-ff531e87e41f.jpg"
import male1 from "../asset/photo-1729719930798-bbc440fe856d.jpg"
import female1 from "../asset/photo-1594743794748-b6b721775767.jpg"
import male2 from "../asset/photo-1568602471122-7832951cc4c5.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import Group from "../asset/Group 1.png"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Home (){

    const handleOrder = (e) => {
        Swal.fire({
          title: "Confirm your order?",
          text: "Please confirm to place your order.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "rgb(244 206 20 / var(--tw-text-opacity, 1))",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, place order"
        }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Order Placed!",
            text: "Your food is being prepared 🍽️",
            icon: "success",
            confirmButtonColor: "rgb(244 206 20 / var(--tw-text-opacity, 1))"
          });
        }
      });
    }


    return(
        <main>
            <section className="hero">
                <div className="flex">
                    <div className="fit">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <div className="pa"> <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p></div>
                        <div>
                            <Link to="/booking"><button>Reserve a Table</button></Link>
                        </div>
                    </div>
                    <div>
                        <div className="div-img">
                            <img src={food} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="menu" className="menu-food">
                <div className="section-2">
                    <div className="order">
                        <div>
                            <h2 className="h2">This week's special</h2>
                        </div>
                        <div className="online">
                            <button>
                                Online Menu
                            </button> 
                        </div>
                    </div>
                    <div className="food">
                        <div className="salad">
                            <div className="sa-img">
                                <img src={Salad} alt="" />
                            </div>
                            <div className="food-b">
                                <div className="sa-2">
                                    <div><h3>Greek Salad</h3></div>
                                    <div><h3>€ 12,99</h3></div>
                                </div>
                                <div className="food-2">
                                    <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
                                </div>
                                <div className="sa-2">
                                    <div><button onClick={handleOrder}>Order Now</button></div>
                                    <div className="bike"><img src={Bike} alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="salad">
                            <div className="sa-img"><img src={Bruschetta} alt="" /></div>
                            <div className="food-b">
                                <div className="sa-2">
                                    <div><h3>Bruschetta</h3></div>
                                    <div><h3>€ 5,99</h3></div>
                                </div>
                                <div className="food-2"><p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p></div>
                                <div className="sa-2">
                                    <div><button onClick={handleOrder}>Order Now</button></div>
                                    <div className="bike"><img src={Bike} alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="salad">
                            <div className="sa-img"><img src={Lemon} alt="" /></div>
                            <div className="food-b">
                                <div className="sa-2">
                                    <div><h3>Lemon Dessert</h3></div>
                                    <div><h3>€ 4,99</h3></div>
                                </div>
                                <div className="food-2"><p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p></div>
                                <div className="sa-2">
                                    <div><button onClick={handleOrder}>Order Now</button></div>
                                    <div className="bike"><img src={Bike} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section3">
                <div className="test"><h2>Testimonials</h2></div>
                <div className="section-3">
                    <div className="testimonia">
                        <div className="profile">
                            <img src={male1} alt="" />
                        </div>
                        <div style={{textAlign: "center",padding: "10px"}}><h3>Federico Lorenzo</h3></div>
                        <div style={{textAlign: "center",padding: "10px"}}>
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold"}} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <span style={{marginLeft: "10px"}}>5/5</span>
                        </div>
                        <div>
                            <p>My partner and I had an amazing dinner at Little Lemon. The ambiance was romantic, the service was impeccable, and the food was absolutely divine. We'll definitely be back!</p>
                        </div>
                    </div>
                    <div className="testimonia">
                        <div className="profile">
                            <img src={female2} alt="" />
                        </div>
                        <div style={{textAlign: "center",padding: "10px"}}><h3>Isabella Noah</h3></div>
                        <div style={{textAlign: "center",padding: "10px"}}>
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold"}} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold", marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold", marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold", marginLeft: "5px"}} />
                            <FontAwesomeIcon icon={faStarHalfAlt} size="1x" style={{ color: "gold", marginLeft: "5px" }} />
                            <span style={{marginLeft: "10px"}}>4.7/5</span>
                        </div>
                        <div>
                            <p>Little Lemon truly captures the essence of Mediterranean cuisine. Every dish was bursting with flavor and beautifully presented. A must-try for food lovers!</p>
                        </div>
                    </div> 
                    <div className="testimonia">
                        <div className="profile">
                            <img src={female1} alt="" />
                        </div>
                        <div style={{textAlign: "center", padding: "10px"}}><h3>Amelia Liam</h3></div>
                        <div style={{textAlign: "center",padding: "10px"}}>
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <span style={{marginLeft: "10px"}}>5/5</span>
                        </div>
                        <div>
                            <p>
                                Great food, great atmosphere, and great service! The Lemon Dessert was absolutely delicious. Can't wait to come back!
                            </p>
                        </div>
                    </div> 
                    <div className="testimonia">
                        <div className="profile">
                            <img src={male2} alt="" />
                        </div>
                        <div style={{textAlign: "center",padding: "10px"}}><h3>Elijah Lucas</h3></div>
                        <div style={{textAlign: "center",padding: "10px"}}>
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <FontAwesomeIcon icon={faStarHalfAlt} size="1x" style={{ color: "gold",marginLeft: "5px" }} />
                            <span style={{marginLeft: "10px"}}>4.5/5</span>
                        </div>
                        <div>
                            <p>
                                We love bringing our family to Little Lemon. The kids adore the kid's menu, and the adults enjoy the wide range of delicious options. It's the perfect place for a family gathering.
                            </p>
                        </div>
                    </div>  
                </div> 
            </section>
            <section className="section-4" id="about">
                <div className="about">
                    <div className="about-1">
                        <h1>Little Lemon</h1>
                        <h3 style={{padding: "20px 0px"}}>Chicago</h3>
                        <p>Embark on a culinary journey through the sun-kissed shores of the Mediterranean. Little Lemon invites you to savor the vibrant flavors of Greece, Italy, Spain, and beyond. Indulge in our fresh, seasonal dishes, crafted with love and passion. From succulent grilled meats to fragrant seafood and hearty vegetarian options, our menu offers something for everyone. Join us for a taste of the Mediterranean, right in your neighborhood.</p>
                    </div>
                    <div className="about-2">
                        <div className="andre"><img src={Group} alt="" /></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home