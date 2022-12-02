import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import {
  CardDetailPostStyled,
  PostDetailStyled,
  ProfileIconDetailStyled,
} from "./CardPostDetailStyled";

interface CardPostDetailsProps {
  owner: string;
  title: string;
  description: string;
  location?: string;
  imagePaths: string[];
  date?: string;
  tags?: [];
  like?: [];
}

const CardPostDetails = ({
  owner,
  title,
  imagePaths,
  date,
  description,
}: CardPostDetailsProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/home`);
  };
  return (
    <>
      <CardDetailPostStyled>
        <ProfileIconDetailStyled>
          <FontAwesomeIcon className="icon-profile" icon={faCircleUser} />
          <h3>{owner}</h3>
        </ProfileIconDetailStyled>

        {imagePaths.map((img, index) => (
          <img src={img} alt="imagenes de la publicacion" key={index} />
        ))}

        <PostDetailStyled>
          <span>{date}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </PostDetailStyled>
        <Button
          ariaLabel="volver"
          styleType={"smallest"}
          text="VOLVER"
          action={handleClick}
        />
      </CardDetailPostStyled>
    </>
  );
};

export default CardPostDetails;
