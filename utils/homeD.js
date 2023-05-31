export const checkHomeD = (team, oponent, result, fulltime, playedaway) => {
  let color;
  if (playedaway) {
    if (result === "W") {
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
                {oponent}
              </div>

              <div
                style={{
                  display: "flex",
                  fontWeight: "800",
                  textShadow: "0 2px 2px #a1a1a1",
                  color: "#505050",
                }}
              >
                {team}
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
            <span>{fulltime[0]}</span>
            <span>{fulltime[4]}</span>
          </div>
        </>
      );
    }
    if (result === "D") {
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
                {oponent}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {team}
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
            <span>{fulltime[0]}</span>
            <span>{fulltime[4]}</span>
          </div>
        </>
      );
    }
    if (result === "L") {
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
                  justifyContent: "space-between",
                  fontWeight: "800",
                  textShadow: "0 2px 2px #a1a1a1",
                  color: "#505050",
                }}
              >
                {oponent}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {team}
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
            <span>{fulltime[0]}</span>
            <span>{fulltime[4]}</span>
          </div>
        </>
      );
    }
  }
  if (!playedaway) {
    if (result === "L") {
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
                {team}
              </div>

              <div
                style={{
                  display: "flex",
                  fontWeight: "800",
                  textShadow: "0 2px 2px #a1a1a1",
                  color: "#505050",
                }}
              >
                {oponent}
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
            <span>{fulltime[0]}</span>
            <span>{fulltime[4]}</span>
          </div>
        </>
      );
    }
    if (result === "D") {
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
                {team}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {oponent}
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
            <span>{fulltime[0]}</span>
            <span>{fulltime[4]}</span>
          </div>
        </>
      );
    }
    if (result === "W") {
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
                  justifyContent: "space-between",
                  fontWeight: "800",
                  textShadow: "0 2px 2px #a1a1a1",
                  color: "#505050",
                }}
              >
                {team}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {oponent}
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
            <span>{fulltime[0]}</span>
            <span>{fulltime[4]}</span>
          </div>
        </>
      );
    }
  }
};
