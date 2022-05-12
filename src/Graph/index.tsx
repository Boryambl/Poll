import React from "react";
import { Layer, Stage, Line, Text, Circle } from "react-konva";
import logo from "./background.JPG";

interface IGraphProps {
  team: number;
  time: number;
  tech: number;
  traction: number;
}
export default class Poll extends React.Component<IGraphProps> {
  render() {
    const { team, tech, time, traction } = this.props;
    let score = team + time + tech + traction;
    return (
      <div className="graph">
        <img src={logo} alt=""></img>
        <h2 style={{ textAlign: "center" }}>
          Спасибо за участие! Ниже указан ваш общий балл и индивидуальные баллы
          для каждой категории
        </h2>
        <table>
          <thead>
            <tr>
              <th>Характеристика</th>
              <th>{"Ваш результат: " + score + "/100"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Команда</td>
              <td>{team + "/25"}</td>
            </tr>
            <tr>
              <td>Развитие</td>
              <td>{time + "/25"}</td>
            </tr>
            <tr>
              <td>Технология и продукт</td>
              <td>{tech + "/25"}</td>
            </tr>
            <tr>
              <td>Достижения</td>
              <td>{traction + "/25"}</td>
            </tr>
          </tbody>
        </table>
        <Stage
          width={1100}
          height={1200}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Layer>
            <Line
              opacity={0.5}
              x={550}
              y={550}
              points={[-500, 0, 0, 500, 500, 0, 0, -500]}
              closed
              stroke="orange"
            />
            <Line
              x={550}
              y={550}
              points={[0, -550, 0, 550]}
              closed
              stroke="orange"
            />
            <Line
              x={550}
              y={550}
              points={[550, 0, -550, 0]}
              closed
              stroke="orange"
            />
            <Line
              opacity={0.5}
              x={550}
              y={550}
              points={[-400, 0, 0, 400, 400, 0, 0, -400]}
              closed
              stroke="orange"
            />
            <Line
              opacity={0.5}
              x={550}
              y={550}
              points={[-300, 0, 0, 300, 300, 0, 0, -300]}
              closed
              stroke="orange"
            />
            <Line
              opacity={0.5}
              x={550}
              y={550}
              points={[-200, 0, 0, 200, 200, 0, 0, -200]}
              closed
              stroke="orange"
            />
            <Line
              opacity={0.5}
              x={550}
              y={550}
              points={[-100, 0, 0, 100, 100, 0, 0, -100]}
              closed
              stroke="orange"
            />
            {score > 0 && (
              <Line
                x={550}
                y={550}
                points={[
                  0 - traction * 20,
                  0,
                  0,
                  tech * 20,
                  time * 20,
                  0,
                  0,
                  0 - team * 20,
                ]}
                closed
                fill="#0ca82b"
                opacity={0.7}
                stroke="#ea3651"
              />
            )}
            {score === 0 && (
              <Circle
                x={550}
                y={550}
                radius={7}
                fill="#0ca82b"
                opacity={0.7}
                stroke="#ea3651"
              />
            )}
            <Text fill="grey" x={0} y={530} text={"Достижения"} fontSize={18} />
            <Text
              fill="grey"
              x={1023}
              y={530}
              text={"Развитие"}
              fontSize={18}
            />
            <Text
              fill="grey"
              x={552}
              y={1070}
              text={"Технология и продукт"}
              fontSize={18}
            />
            <Text fill="grey" x={552} y={10} text={"Команда"} fontSize={18} />
            <Text fill="grey" x={552} y={430} text={"5"} fontSize={18} />
            <Text fill="grey" x={552} y={330} text={"10"} fontSize={18} />
            <Text fill="grey" x={552} y={230} text={"15"} fontSize={18} />
            <Text fill="grey" x={552} y={130} text={"20"} fontSize={18} />
            <Text fill="grey" x={552} y={30} text={"25"} fontSize={18} />
            <Text fill="grey" x={552} y={530} text={"0"} fontSize={18} />
            <Line
              x={550}
              y={550}
              points={[390, -390, 390, -410, 410, -410, 410, -390]}
              closed
              fill="#0ca82b"
              opacity={0.7}
              stroke="#ea3651"
            />
            <Text
              fill="grey"
              x={965}
              y={142}
              text={"-Ваш результат"}
              fontSize={18}
            />

            {/* </Rect> */}
          </Layer>
        </Stage>
      </div>
    );
  }
}
