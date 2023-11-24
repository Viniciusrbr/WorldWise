import CityItem from "../CityItem";
import Spinner from "../Spinner";
import Message from "../Message";
import styles from "./styles.module.css";
import { useCities } from "../../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Adicione sua primeira cidade clicando em uma no mapa" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
