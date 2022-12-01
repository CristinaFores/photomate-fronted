import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import {
  CardDetailPostStyled,
  PostDetailStyled,
  ProfileIconDetailStyled,
} from "./CardPostDetailStyled";

interface CardDetailPostProps {
  owner: string;
  title: string;
  description: string;
  location?: string;
  image?: [];
  date?: string;
  tags?: [];
  like?: [];
}

const CardDetailPost = ({
  owner,
  title,
  image,
  date,
  description,
}: CardDetailPostProps): JSX.Element => {
  return (
    <>
      <CardDetailPostStyled>
        <ProfileIconDetailStyled>
          <FontAwesomeIcon className="icon-profile" icon={faCircleUser} />
          <h3>{owner}</h3>
        </ProfileIconDetailStyled>
        <img
          src="../../../img/algo-salio-mal.png"
          alt="imagen de la publicacion"
        />

        <PostDetailStyled>
          <span>{date}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </PostDetailStyled>
        <Button ariaLabel="volver" styleType={"smallest"} text="VOLVER" />
      </CardDetailPostStyled>
    </>
  );
};

export default CardDetailPost;
