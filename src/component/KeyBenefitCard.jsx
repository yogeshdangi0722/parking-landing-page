

const KeyBenefitCard = ({ imageUrl, title, description }) => {
  return (
    <div className="card ms-4" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={title} width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="google.com" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
};

export default KeyBenefitCard;