const Remaining = () => {
  const users = [{ name: "Abishek" }, { name: "Abinash" }];
  const workers = [{ name: "Bhgawati" }, { name: "Abinash" }];
  const showWorkers = true;
  const showUsers = true;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Remaning Parts.</h1>
      <h3>Developers</h3>
      {showUsers ? (
        <ul>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      ) : null}
      {/* Next Ternery Operators. */}
      <h2>Motivations</h2>
      <div>
        {showWorkers ? (
          <ul>
            {workers.map((worker) => (
              <li>{worker.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Remaining;
