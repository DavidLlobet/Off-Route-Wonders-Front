import { date, image, name } from "faker";
import { datatype } from "faker/locale/uk";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  name: name.firstName,
  image: image.imageUrl,
  coordinates: {
    x: datatype.number(10),
    y: datatype.number(10),
    date: date.past,
  },
}));

export const getRandomPlace = () => factory.build();
export const getRandomPlaces = (count = 3) => factory.buildList(count);
