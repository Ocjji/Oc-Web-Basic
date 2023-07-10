import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const NoticeDetail = () => {
  const { noticeID } = useParams();
  const { data } = useSelector(state => state.noticeR);
  const noticeDetail = data.find(item => item.id === Number(noticeID));
  const { id, title, content, date } = noticeDetail;

  const navigate = useNavigate();
  const onGoNotice = () => {
    navigate("/notice");
  }

  return (
    <>
      <div className="inner">
        <h2> {title} </h2>
        <div className="notice-con">
          <p> {content} </p>
          <p> {date} </p>
        </div>
        <button onClick={() => onGoNotice()}>목록으로</button>
      </div>
    </>
  );
};

export default NoticeDetail;