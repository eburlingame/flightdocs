import { useState } from "react";

export type TurnForcesWidgetProps = {};

const radialToCartesian = (r: number, theta: number) => {
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);
  return [x, y];
};

const magnitude = (x: number, y: number) => {
  return Math.sqrt(x * x + y * y);
};

const angle = (x: number, y: number) => {
  return Math.atan2(y, x);
};

const degToRad = (deg: number) => {
  return (deg * Math.PI) / 180;
};

const radToDeg = (rad: number) => {
  return (rad * 180) / Math.PI;
};

const TurnForcesWidget = ({}: TurnForcesWidgetProps) => {
  const [lift, setLift] = useState(150);
  const [rotation, setRotation] = useState(0);
  const rotationRadians = degToRad(rotation);

  const gravity = 150;

  const liftCartesian = radialToCartesian(lift, rotationRadians);
  const gravityCartesian = radialToCartesian(gravity, degToRad(180));
  const netCartesian = [
    liftCartesian[0] + gravityCartesian[0],
    liftCartesian[1] + gravityCartesian[1],
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginTop: "1em" }}>
            Bank Angle: {rotation}&deg;
          </label>
          <input
            type="range"
            min="0"
            max="89"
            value={rotation}
            onChange={(e) => setRotation(Number(e.target.value))}
          />

          <label style={{ marginTop: "1em" }}>Lift: {lift}</label>
          <input
            type="range"
            min="100"
            max="500"
            value={lift}
            onChange={(e) => setLift(Number(e.target.value))}
          />
        </div>

        <div style={{ marginLeft: "2em", marginTop: "1em" }}>
          <div>Gravity: {gravity}</div>
          <div>
            Load Factor:{" "}
            {(magnitude(liftCartesian[0], liftCartesian[1]) / gravity).toFixed(
              2
            )}
          </div>
          <div>Vertical Component of Lift: {liftCartesian[0].toFixed(2)}</div>
          <div>Horizontal Component of Lift: {liftCartesian[1].toFixed(2)}</div>
          <div>
            Net Force: {magnitude(netCartesian[0], netCartesian[1]).toFixed(2)}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <svg
          style={{
            marginTop: "2em",
            border: "1px solid rgb(58, 58, 58)",
            borderRadius: "5px",
          }}
          width={600}
          height={500}
        >
          <rect
            x="0"
            y="0"
            width={300}
            height="25"
            style={{ fill: "#7f7f7f" }}
            transform={`translate(500 300) rotate(${-rotation}) translate(-150 0)`}
          />

          {rotation > 2 && (
            <>
              <ForceArrow
                origin={[500, 300]}
                length={liftCartesian[1]}
                rotation={90}
                color="#87a6f4"
                dash
              />

              <ForceArrow
                origin={[500 - liftCartesian[1], 300]}
                length={liftCartesian[0]}
                rotation={0}
                color="#87a6f4"
                dash
              />
            </>
          )}

          <ForceArrow
            origin={[500, 300]}
            length={lift}
            rotation={rotation}
            color="#486ce0"
          />

          <ForceArrow
            origin={[500, 300]}
            length={gravity}
            rotation={180}
            color="#24a03b"
          />

          <circle cx={500} cy={300} r={5} style={{ fill: "#00000" }} />
        </svg>

        <svg
          style={{
            marginTop: "2em",
            border: "1px solid rgb(58, 58, 58)",
            borderRadius: "5px",
            marginLeft: "1em",
          }}
          width={600}
          height={500}
        >
          <ForceArrow
            origin={[500, 300]}
            length={lift}
            rotation={rotation}
            color="#486ce0"
          />

          {/* Gravity force arrow */}
          <ForceArrow
            origin={[500 - liftCartesian[1], 300 - liftCartesian[0]]}
            length={gravity}
            rotation={180}
            color="#24a03b"
          />

          {/* Net force arrow */}
          {magnitude(netCartesian[0], netCartesian[1]) > 0.5 && (
            <ForceArrow
              origin={[500, 300]}
              length={magnitude(netCartesian[0], netCartesian[1])}
              rotation={radToDeg(angle(netCartesian[0], netCartesian[1]))}
              color="#a53535"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

type ForceArrowProps = {
  origin: [number, number];
  length: number;
  rotation: number;
  color: string;
  dash?: boolean;
};

const ForceArrow = ({
  origin,
  length,
  rotation,
  color,
  dash = false,
}: ForceArrowProps) => {
  const center = origin.join(" ");

  return (
    <g transform={`translate(${center}) rotate(${-rotation})`}>
      <line
        x1={0}
        y1={0}
        x2={0}
        y2={10 - length}
        style={{
          fill: "none",
          stroke: color,
          strokeMiterlimit: 10,
          strokeWidth: "3.9px",
          strokeDasharray: dash ? "5,5" : "0",
        }}
      />
      <polygon
        points="0,0 -7,20 7,20"
        style={{ fill: color }}
        transform={`translate(0, ${-length}) `}
      />
    </g>
  );
};

export default TurnForcesWidget;
