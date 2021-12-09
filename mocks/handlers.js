import { rest } from "msw";

const mockToken = "987654321";
const mockId = "7892743127";
const mockPlaces = [
  {
    id: "61a29a80a8700455c9903d38",
    title: "Blue Eye Theth",
    images: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/80/0d.jpg",
    ],
    author: {
      username: "Mario",
    },
    date: "28 - 11 - 2021",
    country: {
      name: "Filipinas",
    },
  },
  {
    id: "61a29a80a8700455c9903d56",
    title: "Red Eye Theth",
    images: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/80/0d.jpg",
    ],
    author: {
      username: "Mario",
    },
    date: "28 - 11 - 2021",
    country: {
      name: "Filipinas",
    },
  },
];

export const handlers = [
  rest.post(
    "https://proyecto-final-llobet-back.herokuapp.com/user/login",
    async (req, res, ctx) => {
      res(ctx.json(mockToken));
    }
  ),
  rest.post(
    "https://proyecto-final-llobet-back.herokuapp.com/user/register",
    async (req, res, ctx) => {
      res(ctx.json(mockId));
    }
  ),
  rest.get(
    "https://proyecto-final-llobet-back.herokuapp.com/places",
    async (req, res, ctx) => {
      res(ctx.json(mockPlaces));
    }
  ),
  rest.get(
    "https://proyecto-final-llobet-back.herokuapp.com/places/my-profile",
    async (req, res, ctx) => {
      res(ctx.json(mockPlaces));
    }
  ),
];
