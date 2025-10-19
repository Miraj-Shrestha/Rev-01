import {BadgeCheck, CircleUserRound, CheckCheck} from "lucide-react"

const Card = (props) => {
  return (
    
      <div className="card">
        <img
          className="propic"
          src={props.image}
        />
        <div className="namebar">
            <h1>
          {props.name},  {props.age}
        </h1>
        <BadgeCheck color="#0bf427" strokeWidth={2.5} />
        </div>
        

        <p>
          {props.description}
        </p>
        <div className="followbar">
            <CircleUserRound color="#ffffff" strokeWidth={1.25} /><p>{props.follows}</p>
            <CheckCheck color="#ffffff" strokeWidth={1.25} /><p>{props.likes}</p>
            <button>Follow +</button>
        </div>
      </div>
    
  );
};

export default Card;
