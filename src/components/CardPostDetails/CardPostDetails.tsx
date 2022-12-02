import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  image?: [];
  date?: string;
  tags?: [];
  like?: [];
}

const CardPostDetails = ({
  owner,
  title,
  image,
  date,
  description,
}: CardPostDetailsProps): JSX.Element => {
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

export default CardPostDetails;
