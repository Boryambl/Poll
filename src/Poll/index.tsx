import Select from "react-select";
import React from "react";
import Graph from "../Graph/index.tsx";
import logo from "./background.jpg";

interface IPollState {
  result: {
    country: string;
    founded: string;
    vertical: string;
    team: {
      first: number;
      second: number;
      third: number;
      fourth: number;
      fifth: number;
    };
    time: {
      first: number;
      second: number;
      third: number;
      fourth: number;
      fifth: number;
    };
    tech: {
      first: number;
      second: number;
      third: number;
      fourth: number;
      fifth: number;
    };
    traction: {
      first: number;
      second: number;
      third: number;
      fourth: number;
      fifth: number;
    };
  };
  showGraph: boolean;
}

const verticalOptions = [
  { value: "Advanced manufacturing", label: "Advanced manufacturing" },
  { value: "Aero & SpaceTech", label: "Aero & SpaceTech" },
  { value: "AdTech & MarTeh", label: "AdTech & MarTeh" },
  { value: "AgroTech", label: "AgroTech" },
  { value: "Alternative Energy", label: "Alternative Energy" },
  { value: "BI/BPM", label: "BI/BPM" },
  { value: "Biotech", label: "Biotech" },
  { value: "Carsharing", label: "Carsharing" },
  { value: "CleanTech", label: "CleanTech" },
  { value: "ClimateTech", label: "ClimateTech" },
  { value: "CyberSport", label: "CyberSport" },
  { value: "CreatorEconomy", label: "CreatorEconomy" },
  { value: "E-commerce", label: "E-commerce" },
  { value: "Energy", label: "Energy" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "EdTech", label: "EdTech" },
  { value: "FinTech", label: "FinTech" },
  { value: "FoodTech", label: "FoodTech" },
  { value: "FunTech", label: "FunTech" },
  { value: "Fitness/Wellbeing", label: "Fitness/Wellbeing" },
  { value: "Digital Health", label: "Digital Health" },
  { value: "HR Tech", label: "HR Tech" },
  { value: "LegalTech", label: "LegalTech" },
  { value: "Innovation Management", label: "Innovation Management" },
  { value: "PetTech", label: "PetTech" },
  { value: "Retail", label: "Retail" },
  { value: "Smart Cities", label: "Smart Cities" },
  { value: "Travel", label: "Travel" },
  { value: "Telecom", label: "Telecom" },
  { value: "Other", label: "Other" },
];

const foundedOptions = [
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "Other", label: "Other" },
];

const tableHeaders = [
  "Пока не применимо",
  "Категорически не согласен",
  "Не согласен",
  "Частично согласен, частично нет",
  "Согласен",
  "Полностью согласен",
];
const rawHeaders = {
  team: [
    "У нас есть разнообразная команда основателей с взаимодополняющими наборами навыков",
    "Большинство наших основателей закончили колледж/университет",
    "Некоторые из наших основателей ранее основали стартап",
    "Основатели на 100% привержены нашему стартапу",
    "Сколько лет опыта в предметной области в среднем имеет каждый основатель?",
  ],
  time: [
    "Наши клиенты были бы разочарованы, если бы наша продукция больше не была доступна",
    "Наши конкуренты демонстрируют высокие темпы роста.",
    "Растем органически, т.е. получаем больше клиентов по рекомендациям, чем по рекламе",
    "Наш рынок растет с каждым годом (в %)",
    "Среднее количество рекомендаций на заказ превышает",
  ],
  tech: [
    "Вполне вероятно, что наши клиенты порекомендуют наш продукт и услугу",
    "О нашей бизнес-модели и боли клиента, которую мы решаем, можно рассказать максимум в двух предложениях",
    "У нас есть четко определенные каналы сбыта (например, Ozon, прямые поставки потребителю, дистрибьюторские партнерства и т. д.)",
    'У нас есть "несправедливое" конкурентное преимущество (например, патенты, интеллектуальная собственность, ...)',
    "Мы определили четкий путь к выручке/прибыли",
  ],
  traction: [
    "Мы уже получаем доход от нашего MVP/прототипа и/или имеем продукт на рынке",
    "Мы являемся доминирующим игроком на нашем рынке.",
    "Наш рост (доходы или новые клиенты) за последние 6 месяцев составил ____%.",
    "Наши доходы на одного клиента в x раз превышают наши затраты на привлечение одного клиента (LTV>CAC).",
    "Нашей текущей ликвидности достаточно, чтобы обеспечить выживание нашей компании в течение x месяцев:",
  ],
};
export default class Poll extends React.Component<any, IPollState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showGraph: false,
      result: {
        country: "",
        founded: "",
        vertical: "",
        team: {
          first: -1,
          second: -1,
          third: -1,
          fourth: -1,
          fifth: -1,
        },
        time: {
          first: -1,
          second: -1,
          third: -1,
          fourth: -1,
          fifth: -1,
        },
        tech: {
          first: -1,
          second: -1,
          third: -1,
          fourth: -1,
          fifth: -1,
        },
        traction: {
          first: -1,
          second: -1,
          third: -1,
          fourth: -1,
          fifth: -1,
        },
      },
    };
  }

  render() {
    const { result, showGraph } = this.state;
    return (
      <>
        <div style={showGraph ? {} : { display: "none" }}>
          <Graph
            team={
              result.team.first +
              result.team.second +
              result.team.third +
              result.team.fourth +
              result.team.fifth
            }
            time={
              result.time.first +
              result.time.second +
              result.time.third +
              result.time.fourth +
              result.time.fifth
            }
            tech={
              result.tech.first +
              result.tech.second +
              result.tech.third +
              result.tech.fourth +
              result.tech.fifth
            }
            traction={
              result.traction.first +
              result.traction.second +
              result.traction.third +
              result.traction.fourth +
              result.traction.fifth
            }
          />
          <button
            className="bp4-button"
            onClick={() => {
              this.setState({
                showGraph: false,
                result: {
                  country: "",
                  founded: "",
                  vertical: "",
                  team: {
                    first: -1,
                    second: -1,
                    third: -1,
                    fourth: -1,
                    fifth: -1,
                  },
                  time: {
                    first: -1,
                    second: -1,
                    third: -1,
                    fourth: -1,
                    fifth: -1,
                  },
                  tech: {
                    first: -1,
                    second: -1,
                    third: -1,
                    fourth: -1,
                    fifth: -1,
                  },
                  traction: {
                    first: -1,
                    second: -1,
                    third: -1,
                    fourth: -1,
                    fifth: -1,
                  },
                },
              });
            }}
          >
            Пройти еще раз
          </button>
        </div>
        <div style={showGraph ? { display: "none" } : {}}>
          <img src={logo} alt=""></img>
          <div style={{ textAlign: "left" }}>
            <h2> Общие вопросы</h2>
            <h4>В каком городе находится ваш стартап?</h4>
            <input
              className="css-1s2u09g-control"
              style={{ width: "100%" }}
              type="text"
              value={result.country}
              placeholder="Укажите город..."
              onChange={(e) => {
                this.setState({
                  result: { ...this.state.result, country: e.target.value },
                });
              }}
            />

            <h4>Когда был основан ваш стартап?</h4>
            <Select
              value={result.founded}
              placeholder="Выберите год основания..."
              onChange={(e) => {
                this.setState({
                  result: { ...this.state.result, founded: e },
                });
              }}
              options={foundedOptions}
            />
            <h4>Какова ваша основная отрасль?</h4>
            <Select
              value={result.vertical}
              placeholder="Выберите направление..."
              onChange={(e) =>
                this.setState({
                  result: { ...this.state.result, vertical: e },
                })
              }
              options={verticalOptions}
            />
          </div>
          <div>
            <h2>1.Команда</h2>
            <table>
              <thead>
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[1]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[2]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[3]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[4]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[5]}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.team[0]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, first: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.first === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, first: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.first === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, first: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.first === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, first: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.first === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, first: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.first === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, first: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.first === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.team[1]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, second: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.second === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, second: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.second === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, second: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.second === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, second: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.second === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, second: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.second === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, second: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.second === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.team[2]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, third: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.third === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, third: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.third === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, third: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.third === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, third: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.third === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, third: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.third === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, third: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.third === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.team[3]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fourth: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fourth === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fourth: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fourth === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fourth: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fourth === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fourth: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fourth === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fourth: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fourth === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fourth: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fourth === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>0-3 года</td>
                  <td style={{ width: "13%" }}>4-6 лет</td>
                  <td style={{ width: "13%" }}>7-10 лет</td>
                  <td style={{ width: "13%" }}>11-15 лет</td>
                  <td style={{ width: "13%" }}>более 16 лет</td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.team[4]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fifth: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fifth === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fifth: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fifth === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fifth: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fifth === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fifth: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fifth === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fifth: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fifth === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          team: { ...this.state.result.team, fifth: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.team.fifth === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>2.Развитие</h2>
            <table>
              <thead>
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[1]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[2]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[3]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[4]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[5]}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.time[0]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, first: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.first === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, first: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.first === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, first: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.first === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, first: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.first === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, first: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.first === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, first: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.first === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.time[1]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, second: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.second === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, second: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.second === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, second: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.second === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, second: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.second === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, second: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.second === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, second: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.second === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.time[2]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, third: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.third === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, third: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.third === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, third: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.third === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, third: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.third === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, third: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.third === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, third: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.third === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>{"<5%"}</td>
                  <td style={{ width: "13%" }}>6-10%</td>
                  <td style={{ width: "13%" }}>11-15%</td>
                  <td style={{ width: "13%" }}>16-20%</td>
                  <td style={{ width: "13%" }}>{">20%"}</td>
                </tr>
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.time[3]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fourth: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fourth === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fourth: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fourth === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fourth: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fourth === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fourth: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fourth === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fourth: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fourth === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fourth: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fourth === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>0</td>
                  <td style={{ width: "13%" }}>до 0.5</td>
                  <td style={{ width: "13%" }}>0.5-1</td>
                  <td style={{ width: "13%" }}>1-3</td>
                  <td style={{ width: "13%" }}>{">3"}</td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.time[4]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fifth: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fifth === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fifth: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fifth === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fifth: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fifth === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fifth: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fifth === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fifth: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fifth === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          time: { ...this.state.result.time, fifth: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.time.fifth === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>3.Технология и продукт</h2>
            <table>
              <thead>
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[1]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[2]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[3]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[4]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[5]}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.tech[0]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, first: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.first === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, first: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.first === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, first: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.first === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, first: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.first === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, first: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.first === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, first: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.first === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.tech[1]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, second: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.second === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, second: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.second === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, second: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.second === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, second: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.second === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, second: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.second === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, second: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.second === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.tech[2]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, third: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.third === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, third: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.third === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, third: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.third === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, third: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.third === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, third: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.third === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, third: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.third === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.tech[3]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fourth: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fourth === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fourth: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fourth === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fourth: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fourth === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fourth: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fourth === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fourth: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fourth === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fourth: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fourth === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.tech[4]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fifth: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fifth === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fifth: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fifth === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fifth: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fifth === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fifth: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fifth === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fifth: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fifth === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          tech: { ...this.state.result.tech, fifth: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.tech.fifth === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>4.Достижения</h2>
            <table>
              <thead>
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[1]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[2]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[3]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[4]}</td>
                  <td style={{ width: "13%" }}>{tableHeaders[5]}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.traction[0]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, first: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.first === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, first: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.first === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, first: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.first === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, first: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.first === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, first: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.first === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, first: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.first === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.traction[1]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            second: 0,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.second === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            second: 1,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.second === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            second: 2,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.second === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            second: 3,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.second === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            second: 4,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.second === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            second: 5,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.second === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>{"до запуска или < 5%"}</td>
                  <td style={{ width: "13%" }}>6-10%</td>
                  <td style={{ width: "13%" }}>11-15%</td>
                  <td style={{ width: "13%" }}>16-20%</td>
                  <td style={{ width: "13%" }}>{">20%"}</td>
                </tr>
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.traction[2]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, third: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.third === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, third: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.third === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, third: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.third === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, third: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.third === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, third: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.third === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, third: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.third === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                {/* *** */}
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>{"Меньше 0"}</td>
                  <td style={{ width: "13%" }}>0-1</td>
                  <td style={{ width: "13%" }}>1-2</td>
                  <td style={{ width: "13%" }}>2-3</td>
                  <td style={{ width: "13%" }}>{"Больше 3"}</td>
                </tr>
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.traction[3]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            fourth: 0,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fourth === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            fourth: 1,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fourth === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            fourth: 2,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fourth === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            fourth: 3,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fourth === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            fourth: 4,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fourth === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: {
                            ...this.state.result.traction,
                            fourth: 5,
                          },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fourth === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "13%" }}>{tableHeaders[0]}</td>
                  <td style={{ width: "13%" }}>0-3</td>
                  <td style={{ width: "13%" }}>4-6</td>
                  <td style={{ width: "13%" }}>7-10</td>
                  <td style={{ width: "13%" }}>11-15</td>
                  <td style={{ width: "13%" }}>{">15"}</td>
                </tr>
                {/* *** */}
                <tr>
                  <th style={{ color: "grey" }}>{rawHeaders.traction[4]}</th>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, fifth: 0 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fifth === 0}
                      value={0}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, fifth: 1 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fifth === 1}
                      value={1}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, fifth: 2 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fifth === 2}
                      value={2}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, fifth: 3 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fifth === 3}
                      value={3}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, fifth: 4 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fifth === 4}
                      value={4}
                      onChange={() => {}}
                    />
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.setState({
                        result: {
                          ...this.state.result,
                          traction: { ...this.state.result.traction, fifth: 5 },
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      checked={this.state.result.traction.fifth === 5}
                      value={5}
                      onChange={() => {}}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <button
              className="bp4-button"
              title="Ответьте на все вопросы, прежде чем подтвердить"
              onClick={() => {
                this.setState({ showGraph: true });
              }}
              disabled={
                result.team.first < 0 ||
                result.team.second < 0 ||
                result.team.third < 0 ||
                result.team.fourth < 0 ||
                result.team.fifth < 0 ||
                result.time.first < 0 ||
                result.time.second < 0 ||
                result.time.third < 0 ||
                result.time.fourth < 0 ||
                result.time.fifth < 0 ||
                result.tech.first < 0 ||
                result.tech.second < 0 ||
                result.tech.third < 0 ||
                result.tech.fourth < 0 ||
                result.tech.fifth < 0 ||
                result.traction.first < 0 ||
                result.traction.second < 0 ||
                result.traction.third < 0 ||
                result.traction.fourth < 0 ||
                result.traction.fifth < 0 ||
                result.country.length === 0 ||
                result.founded["value"].length === 0 ||
                result.vertical["value"].length === 0
              }
            >
              Подтвердить
            </button>
          </div>
          {/* <Dialog isOpen={this.state.showGraph} /> */}
        </div>
      </>
    );
  }
}
