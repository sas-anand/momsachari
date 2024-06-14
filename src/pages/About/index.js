import React from "react";
import './style.css';

const About = () => {
  //return <h1>About</h1>;
    return (
      <div className="about-topcontainer">
        <div className="mt-4">
        </div>
        <div className="about-innercontainer">
          {/* Our Story */}
          <div className="d-flex justify-content-between mt-5 aboutDiv">
            <div className="w-90 aboutText">
            <h3 className="fw-bold aboutHeading">Who we are?</h3>
              <p className="mt-3">
              At Mom’s Achari our love for pickles is not just a preference – it’s a way of life. 
              Founded with a brine-soaked passion for delivering exceptional pickle experiences, 
              we embark on a crunchy journey that transcends the ordinary.

              Mom’s Achari is an idea dedicated to crafting pickles that redefine flavor boundaries 
              and making our daily meals tangier and spicier. Our pickle is a blend of finest ingredients 
              mixed with values of tradition and taste deeply rooted in the preparation of pickle. 
              Each jar is a testament to our unwavering commitment to quality and taste, 
              we are preserving moment of joy and take pride in our commitment to quality.

              Our journey into the world of pickles started in a small kitchen with big dreams. 
              As avid pickle enthusiasts, we found ourselves constantly searching for that perfect crunch, 
              the ideal blend of flavors, and a pickle experience that transcends the ordinary. 
              Fueled by our passion, we decided to create something truly special – a haven for pickle 
              lovers like us.

              Join us in celebrating the art of pickling where every crunch, and every jar (tells a flavorful tale).
              </p>
            </div>
          </div>
          {/* Our Mission */}
          <div className="d-flex justify-content-between mt-5 aboutDiv">
            <div className="w-90 aboutText">
              <h3 className="fw-bold aboutHeading">Our Mission</h3>
              <p className="mt-3">
              At Mom’s Achari, our mission is to redefine the pickle experience by combining tradition 
              with innovation. Our moto is ‘Quality First’. We believe in sourcing the freshest, 
              highest-quality ingredients to create pickles that stand out in flavor and texture. 
              From the fields to your jar, our commitment to excellence ensures that every bite is a 
              journey dedicated to quality.
              </p>
            </div>
            
          </div>
          {/* Our Team */}
          <div className="d-flex justify-content-between mt-5 aboutDiv">
            <div className="w-90 aboutText">
              <h3 className="fw-bold aboutHeading">Our Team</h3>
              <p className="mt-3">
                We believe in efforts and intention, in doing your best, and in
                celebrating the little wins. That’s why we created Boon Market, a
                marketplace of goods that do good—for you, your community, and the
                planet. Whether you’re passionate about reducing toxins at home,
                donating to your local school, or eliminating single use plastic,
                we support you. From waste-free options to cleaning, personal
                care, and lunch on the go, our goods are eco friendly, uplifting,
                and intended to make your life just a little bit better. We’ve
                teamed up with incredible partners from around the country to
                offer the best in each category. Because if we all do our parts,
                we’ll generate more goodness than any one of us could achieve
                alone. But the impact doesn’t stop there. Our platform makes it
                easy to give back to the cause of your choice. Shop well knowing
                that a percentage of your purchase will go directly toward the
                greater good. Boon was founded by Lily Kanter, co-founder of
                Serena & Lily, mother of three, and passionate social changemaker.
                We have been featured on The View, Good Morning America, The Today
                Show, Real Simple Magazine, Good Housekeeping, and more.
              </p>
            </div>
            
          </div>
        </div>        
      </div>
    );
  };
  
  export default About;
