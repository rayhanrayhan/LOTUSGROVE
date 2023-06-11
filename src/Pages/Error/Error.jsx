import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div id="error-page" className="flex justify-center py-20">
        <img
          className="w-[500px]"
          src="https://i.ibb.co/NFRTcCP/yoga-404.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="btn btn-primary">GO TO Home</button>
        </Link>
      </div>
    </div>
  );
}
