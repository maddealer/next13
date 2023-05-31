export const colorSquare = (result) => {
  if (result === "W") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          width: "20px",
          height: "20px",
          backgroundColor: "#18c446",
          borderRadius: "5px",
        }}
      >
        <b>{result}</b>
      </div>
    );
  }
  if (result === "D") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          width: "20px",
          height: "20px",
          backgroundColor: "#f0b81f",
          borderRadius: "5px",
        }}
      >
        <b>{result}</b>
      </div>
    );
  }
  if (result === "L") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          width: "20px",
          height: "20px",
          backgroundColor: "#c91b14",
          borderRadius: "5px",
        }}
      >
        <b>{result}</b>
      </div>
    );
  }
};
