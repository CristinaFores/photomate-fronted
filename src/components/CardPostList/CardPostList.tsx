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
import { useAppSelector } from "../../redux/hooks";
import { Post } from "../../redux/features/postSlice/types";

interface CardPostListProps {
  owner: Post["owner"];
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
  const { id: userId } = useAppSelector((state) => state.user);
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
          <h3>{owner.username}</h3>
        </div>

        <ContainIconEditStyled>
          {owner.id === userId ? (
            <>
              <button onClick={handleClickUpdate} aria-label="editar">
                <FontAwesomeIcon className="icon-edit" icon={faPenToSquare} />
              </button>
              <button onClick={handleDelete} aria-label="borrar">
                <FontAwesomeIcon className="icon-edit" icon={faCircleXmark} />
              </button>
            </>
          ) : (
            <></>
          )}
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
