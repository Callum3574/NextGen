import { useState } from "react";

const AboutFour = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  return (
    <div className="about-us-main section section-padding-top about-section-padding-bottom-100 mb-2 p-10">
      <div className="container">
        <div>
          <div>
            <h4 className="mb-4">Welcome To Focus Find</h4>
            <p>
              Welcome to our technology recruitment agency, where we specialize
              in connecting top-notch tech talent with the best companies in the
              industry. Our team of experienced recruiters has a deep
              understanding of the rapidly evolving technology landscape and is
              always up-to-date with the latest industry trends and
              developments.{" "}
            </p>
            <p>
              We take pride in our personalized approach to recruitment, taking
              the time to understand our clients' and candidates' unique needs
              and goals. Whether you are a candidate looking for your next big
              career move or a company seeking top talent, we are here to help
              you succeed.{" "}
            </p>
            <p>
              Our mission is to help bridge the gap between talented tech
              professionals and innovative companies by matching them with
              opportunities that align with their values, skills, and
              aspirations. We believe that a successful recruitment process
              involves more than just matching resumes with job descriptions -
              it's about finding the perfect cultural fit and building
              long-lasting relationships.
            </p>
            <p>
              At our agency, we understand the importance of diversity and
              inclusion in the workplace and are committed to creating a
              welcoming and inclusive environment for all. We work with a wide
              range of clients across various tech industries, from startups to
              established Fortune 500 companies, and are always on the lookout
              for exceptional talent to add to our network.
            </p>
            <p>
              With our extensive experience, industry expertise, and commitment
              to excellence, you can trust us to help you achieve your
              recruitment goals. Get in touch with us today to learn more about
              how we can help you take your tech career or business to the next
              level!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
