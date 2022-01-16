import { Outlet } from "remix";
import withDocs from "~/hocs/withDocs";

function Index() {

  return (
    <Outlet />
  );
}

export default withDocs(Index);