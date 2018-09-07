import React from "react";

function Pet(props) {
  return (
    <section className="dog container">
      <h2>
        Name:{" "}
        {props.dogToAdopt !== undefined
          ? props.dogToAdopt.name
          : props.catToAdopt.name}
      </h2>
      <img
        src={
          props.dogToAdopt !== undefined
            ? props.dogToAdopt.imageURL
            : props.catToAdopt.imageURL
        }
        alt={
          props.dogToAdopt !== undefined
            ? props.dogToAdopt.imageDescription
            : props.catToAdopt.imageDescription
        }
      />
      <dl>
        <dt>
          Age:{" "}
          {props.dogToAdopt !== undefined
            ? props.dogToAdopt.age
            : props.catToAdopt.age}
        </dt>
        <dt>
          Breed:{" "}
          {props.dogToAdopt !== undefined
            ? props.dogToAdopt.breed
            : props.catToAdopt.breed}
        </dt>
        <dt>
          Story:{" "}
          {props.dogToAdopt !== undefined
            ? props.dogToAdopt.story
            : props.catToAdopt.story}
        </dt>
      </dl>
      <button
        name={props.dogToAdopt !== undefined ? "adopt-dog" : "adopt-cat"}
        id={props.dogToAdopt !== undefined ? "adopt-dog" : "adopt-cat"}
        className={props.dogToAdopt !== undefined ? "adopt dog" : "adopt cat"}
        onClick={() => {
          if (props.dogToAdopt !== undefined) {
            props.onAdoptPet("dog");
          } else {
            props.onAdoptPet("cat");
          }
        }}
      >
        Adopt
      </button>
    </section>
  );
}

export default Pet;
