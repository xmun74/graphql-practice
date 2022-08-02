export default function Discussion({ discussion }) {
  const { id, title, url, createdAt, bodyText, author, answer } =
    discussion.node;
  const { avatarUrl, login } = author;
  console.log(discussion.node);
  return (
    <>
      <li className="discussion__container">
        <div className="discussion__wrapper">
          <img
            className="discussion__avatar--img"
            src={avatarUrl}
            alt={`avatar of ${login}`}
          />
          <div className="discussion__info">
            <h3>
              <a href={url}>{title}</a>
            </h3>
            <div>
              {new Date(createdAt).toLocaleTimeString()} | {login}
            </div>
          </div>
          <div className="discussion__answer">
            <p>{answer ? "✅" : "❎"}</p>
          </div>
        </div>
      </li>
    </>
  );
}
