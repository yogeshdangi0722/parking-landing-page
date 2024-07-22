import KeyBenefitCard from "./KeyBenefitCard";
const KeyBenefit = () => {
  return (
    <>
      <div className="container mt-5 border">
        <div className="card-container">
            <KeyBenefitCard
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg"
            title="Card Title"
            description="This is a brief description of the card content."
            key={1}
             />
              <KeyBenefitCard
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg"
            title="Card Title"
            description="This is a brief description of the card content."
            key={2}
             />
              <KeyBenefitCard
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg"
            title="Card Title"
            description="This is a brief description of the card content."
            key={3}
             />
        </div>
      </div>
    </>
  );
};

export default KeyBenefit;
