import React from "react";
//styled components
import {
  MainStyled,
  InputStyled,
  CardStyled,
  DivButtons,
  CardButtonStyled,
  DivStyled,
  CardSection,
  TrashIcon
} from "./style";
//icons
import { IoLocationOutline } from "react-icons/io5";
import { IoThermometerOutline } from "react-icons/io5";

const Main = ({ city, setCity, getWeather, weatherData, handleDeleteButton }) => {

  //capitalize the first letter of a string
  const capitalize = (description) => {
    return description[0].toUpperCase() + description.substring(1);
  }

  //limit the number value with 1 decimal digit
  const roundTemp = (temp) => {
    return temp.toFixed(1);
  }

  return (
    <MainStyled>
      <InputStyled
        type="text"
        placeholder="Digite o nome da cidade "
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        onKeyPress={getWeather}
      />
      <CardSection>
        {weatherData.map((data) => {
          return (
            <CardStyled key={data.name}>
              <DivButtons>
                <CardButtonStyled>
                  <TrashIcon size="25px" onClick={() => handleDeleteButton(data.name)} />
                </CardButtonStyled>
              </DivButtons>
              <h2>
                <IoLocationOutline />
                {data.name}, {data.sys.country}
              </h2>
              <DivStyled>
                <p>{capitalize(data.weather[0].description)}</p>
                <p>
                  Temperatura: {roundTemp(data.main.temp)}ºC
                  <IoThermometerOutline />
                </p>
                <p>
                  Sensação térmica: {roundTemp(data.main.feels_like)}ºC
                  <IoThermometerOutline />
                </p>
              </DivStyled>
            </CardStyled>
          );
        })}
      </CardSection>
    </MainStyled>
  );
};

export default Main;
