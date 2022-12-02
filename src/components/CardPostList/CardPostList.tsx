import {
  CardPostListStyled,
  ContainIconEditStyled,
  ContainButtonStyled,
  ImgStyled,
  ProfileIconStyled,
  TitelPostyled,
} from "./CardPostListStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import {
  faPenToSquare,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

interface CardPostListProps {
  owner: string;
  title: string;
  imagePaths: string[];
  date?: string;
  tags?: [];
  like?: [];
  id: string;
}

const CardPostList = ({
  owner,
  title,
  imagePaths,
  date,
  id,
}: CardPostListProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <CardPostListStyled>
      <ProfileIconStyled>
        <div>
          <FontAwesomeIcon className="icon-profile" icon={faCircleUser} />
          <h3>{owner}</h3>
        </div>

        <ContainIconEditStyled>
          <button>
            <FontAwesomeIcon className="icon-edit" icon={faPenToSquare} />
          </button>
          <button>
            <FontAwesomeIcon className="icon-edit" icon={faCircleXmark} />
          </button>
        </ContainIconEditStyled>
      </ProfileIconStyled>
      {imagePaths.map((img, index) => (
        <ImgStyled src={img} alt="imagenes de la publicacion" key={index} />
      ))}
      <TitelPostyled>
        <span>{date}</span>
        <h3>{title}</h3>
      </TitelPostyled>

      <ContainButtonStyled>
        <Button
          ariaLabel={"Leer mas"}
          styleType="smallest"
          text="Leer más"
          action={handleClick}
        />
      </ContainButtonStyled>
    </CardPostListStyled>
  );
};

export default CardPostList;
