export const checkWinner = (homeT, awayT, result) => {
  let color;
  if (result[0] > result[4])
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontWeight: "800",
                textShadow: "0 2px 2px #a1a1a1",
                color: "#505050",
              }}
            >
              {homeT}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {awayT}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            minWidth: "15px",
          }}
        >
          <span>{result[0]}</span>
          <span>{result[4]}</span>
        </div>
      </>
    );

  if (result[0] < result[4])
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {homeT}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "800",
                textShadow: "0 2px 2px #a1a1a1",
                color: "#505050",
              }}
            >
              {awayT}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            minWidth: "15px",
          }}
        >
          <span>{result[0]}</span>
          <span>{result[4]}</span>
        </div>
      </>
    );
  if (result[0] === result[4])
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {homeT}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {awayT}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            minWidth: "15px",
          }}
        >
          <span>{result[0]}</span>
          <span>{result[4]}</span>
        </div>
      </>
    );
  console.log(color);
};
