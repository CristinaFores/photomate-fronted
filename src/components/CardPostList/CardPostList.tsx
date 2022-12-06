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
import usePost from "../../hooks/usePost/usePost";

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
  const { deletePost } = usePost();
  const navigate = useNavigate();

  const handleDelete = () => {
    deletePost(id);
  };

  const handleClick = () => {
    navigate(`/posts/${id}`);
  };
  const handleClickUpdate = () => {
    navigate(`/editpost/${id}`);
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
            <FontAwesomeIcon
              onClick={handleClickUpdate}
              className="icon-edit"
              icon={faPenToSquare}
            />
          </button>
          <button>
            <FontAwesomeIcon
              onClick={handleDelete}
              className="icon-edit"
              icon={faCircleXmark}
            />
          </button>
        </ContainIconEditStyled>
      </ProfileIconStyled>
      {imagePaths.map((img, index) => (
        <ImgStyled src={img} alt="imagenes de la publicacion" key={index} />
      ))}
      <TitelPostyled>
        <span>{new Date(date || "").toLocaleDateString()}</span>
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
