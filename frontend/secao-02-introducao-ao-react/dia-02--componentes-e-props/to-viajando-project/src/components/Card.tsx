type CardProps = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    visited?: boolean,
  }
};

export function Card({ cityInfo }: CardProps) {
  const { city, country, visited = false, imageUrl } = cityInfo;
  return (
    <div>
      <img src={ imageUrl } alt={ city } />
      <div>
        <h2>{city}</h2>
        <h3>{country}</h3>
        {visited ? <p>Já fui</p> : <p className="red">Não fui</p>}
      </div>
    </div>
  );
}
