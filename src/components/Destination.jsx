import Card, {destinations} from "./Card";

const Destination = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">

      {
          destinations.map(destination => (
              <Card
                  key={destination.id}
                  destination={destination}
              />
          ))
      }

  </div>
    );
};

export default Destination;