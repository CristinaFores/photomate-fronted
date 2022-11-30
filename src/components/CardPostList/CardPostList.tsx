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

interface CardPostListProps {
  owner: string;
  title: string;
  image?: [];
  date?: string;
  tags?: [];
  like?: [];
}

const CardPostList = ({
  owner,
  title,
  image,
  date,
}: CardPostListProps): JSX.Element => {
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

      <ImgStyled {...image} src="../../../img/algo-salio-mal.png" alt="" />

      <TitelPostyled>
        <span>{date}</span>
        <h3>{title}</h3>
      </TitelPostyled>

      <ContainButtonStyled>
        <Button ariaLabel={"Leer mas"} styleType="smallest" text="Leer más" />
      </ContainButtonStyled>
    </CardPostListStyled>
  );
};

export default CardPostList;
