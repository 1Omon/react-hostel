import React from "react";
import Header from "./components/Header";
import HostelCard from "./components/HostelCard";
import logo from "./assets/react.svg";
import AboutHostel from "./components/AboutHostel";

const aboutHostelContent = {
  name: "Ultimate Hostel",
  images: [
    { src: "/beru.png", alt: "image" },
    { src: "/epic.png", alt: "image" },
    { src: "/epic2.png", alt: "image" },
    { src: "/beru.png", alt: "image" },
  ],
  content:
    "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah d Blah dhjkach kjk hvjhkqcbhajbcjhak bcjhklscdl j asjkcbakjlcbajkcljkacbcaklcbk jacklacba lkkj jk bkcjbl kcjbkcjbjk cdbjk lbvkadvkb kjb jkb kjcklabjk clbck  jkbls djkbal kbjk bakjbkjabkjlbsd bjbjka mlkdaciuww cw lcb ajklcb jkabcjc kbkjllacb lsadkjbcj cb jklckj abc cjklbasklba lkkaa kjnkj vlsuicksl v vj lkjabjk djk bjksjkvbjvkj bjkavjkbjkb jkvjkblkbkj vb ajkbjk bvjklbsjkjbjk",
};

const otherHostels = [
  {
    name: "Canam Hostel",
    image: "/epic.png",
    location: "Ayeduase",
  },
  {
    name: "Adom Bi Hostel",
    image: "/beru.png",
    location: "Kotei",
  },
  {
    name: "Hall 7",
    image: "/epic.png",
    location: "Campus",
  },
  {
    name: "Evandy",
    image: "/epic.png",
    location: "Ayeduase - Newsite",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <section className="">
        <h3 className="">Other Hostel</h3>

        {otherHostels.map((item) => {
          return (
            <HostelCard
              image={item.image}
              name={item.name}
              location={item.location}
            />
          );
        })}
      </section>
      <section>
        <AboutHostel {...aboutHostelContent} />
      </section>
    </>
  );
}
