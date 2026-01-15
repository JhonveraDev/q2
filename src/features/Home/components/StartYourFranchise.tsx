import blogImage from "../../../assets/images/home/home-start-your-franchise.png";

export const StartYourFranchise = () => {
  return (
    <div className="start-franchise">
      <div className="start-franchise__image-wrapper">
        <img
          src={blogImage}
          alt="Start your own coffee franchise"
          className="start-franchise__image"
        />
      </div>

      <div className="start-franchise__content">
        <h2 className="start-franchise__title">
          Start your own coffee franchise
        </h2>

        <p className="start-franchise__description">
          Turn your passion for coffee into a thriving business. Partner with us and bring authentic Italian flavors, premium beverages, and a modern experience to your community.
        </p>

        <div className="start-franchise__buttons">
          <button className="start-franchise__button">
            Connect with us
          </button>
          <button className="start-franchise__button">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};