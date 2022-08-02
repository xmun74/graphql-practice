import Discussion from "./Discussion";

export default function Discussions({ discussions }) {
  return (
    <>
      <section className="discussion__wrapper">
        <ul>
          {discussions.map((discussion) => {
            return (
              <Discussion key={discussion.node.id} discussion={discussion} />
            );
          })}
        </ul>
      </section>
    </>
  );
}
