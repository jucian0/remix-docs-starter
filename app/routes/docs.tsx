import withDocs from "~/hocs/withDocs";

function Index({ children }: any) {

  return (
    <div >
      {children}
    </div>
  );
}

export default withDocs(Index);