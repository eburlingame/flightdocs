import { ReactElement } from "react";

export type ManeuverWhiteboardProps = {
  objective: ReactElement;
};

const ManeuverWhiteboard = ({ objective }: ManeuverWhiteboardProps) => {
  return (
    <table className="whiteboard">
      <tbody>
        <tr>
          <td className="">{objective}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ManeuverWhiteboard;
