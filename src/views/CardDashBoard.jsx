import React from "react";
import Card from "@material-ui/core/Card";
import BriefPortfolio from "./BriefPortfolio";
import DashPortfolio from "./DashPortfolio";
import DashGoals from "./DashGoals";
import DashBudget from "./DashBudget";
import DashExpenses from "./DashExpenses";
import Goals from "components/Dashboard/DashGoalsTable";

import styled from "styled-components";

import {
  PieChart,
  Pie,
  Legend,
  BarChart,
  Bar,
  Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { createPie, returnMonthText } from "helpers/expenseHelper";

const StyledCard = styled(Card)`
  opacity: 0.95;
  padding: 1.5em;
  background-color: #272727;
  color: #e7e7e7;
  min-height: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
`;

function CardDashBoard(props) {
  const expenseKey = [
    "Entertainment",
    "Medical",
    "Debt",
    "Misc",
    "Transporation",
    "Home",
    "Food",
    "Utilities",
  ];
  const budgetKey = [
    "c_entr",
    "c_medi",
    "c_debt",
    "c_misc",
    "c_tran",
    "c_hous",
    "c_food",
    "c_util",
  ];

  const colors = [
    "#ffe7ea",
    "#fffbcf",
    "#dbf0ff",
    "#D0FFDE",
    "#e5dbff",
    "#FAEEC5",
    "#defafa",
    "#e7e7e7",
  ];
  const formatDataForPVAT = function (state) {
    const Budgeted = { name: "Budgeted" };
    const Actual = { name: "Actual" };
    const result = [];

    for (let i = 0; i < expenseKey.length; i++) {
      Budgeted[`${expenseKey[i]}`] = state.budget[0][`${budgetKey[i]}`];
      if (state.totalExpenses[i]) {
        Actual[`${expenseKey[i]}`] = state.totalExpenses[i].sum;
      }
    }

    result.push(Budgeted);
    result.push(Actual);

    return result;
  };

  const PVATdata = expenseKey.map((value, i) => {
    return <Bar key={i} dataKey={expenseKey[i]} stackId="a" fill={colors[i]} />;
  });

  return (
    <div className="dash-container">
      {/* Goals Card */}
      <div className="left-container">
        <StyledCard>
          {props.state.goals.length === 0 ? (
            <>
              <h1 className="card1-txt">
                Step 1:
                <br />
                Success is the progressive realization of a worthy goal
              </h1>

              <DashGoals />
            </>
          ) : (
            <div>
              <h4>My Financial Goals:</h4>
              <Goals state={props.state} />
            </div>
          )}
        </StyledCard>
        {/* Budget Goals */}
        <StyledCard>
          {props.state.budget.length === 0 ? (
            <>
              <h1 className="card1-txt">
                Step 4: <br />
                The best way to stick to a budget is to start one
              </h1>

              <DashBudget />
            </>
          ) : (
            <div className="dashboard-chart">
              <h4>
                My Budget for{" "}
                {returnMonthText(parseInt(props.state.date.month))}:
              </h4>
              <BarChart
                width={500}
                height={350}
                data={formatDataForPVAT(props.state)}
                margin={{ top: 15, right: 40, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis stroke="#e7e7e7" dataKey="name" />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{ backgroundColor: "#272727" }}
                />
                <Legend />
                {PVATdata}
              </BarChart>
            </div>
          )}
        </StyledCard>
      </div>

      <div className="right-container">
        <StyledCard>
          {props.state.expenses.length === 0 ? (
            <>
              <h1 className="card1-txt">
                Step 2: <br /> A penny saved is a penny earned
              </h1>

              <DashExpenses state={props.state} />
            </>
          ) : (
            <div>
              <h4>
                My Expenses for{" "}
                {returnMonthText(parseInt(props.state.date.month))}:
              </h4>
              <PieChart width={550} height={350}>
                <Tooltip
                  itemStyle={{ color: "#e7e7e7" }}
                  contentStyle={{ backgroundColor: "#272727" }}
                />

                <Pie
                  data={createPie(props.state.totalExpenses)}
                  dataKey="value"
                  nameKey="name"
                  cx="41%"
                  cy="49%"
                  outerRadius={125}
                  fill="#8884d8"
                  label
                >
                  {createPie(props.state.totalExpenses).map((entry, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  layout="horizontal"
                  height={20}
                  width={450}
                  textColor="#e7e7e7"
                />
              </PieChart>
            </div>
          )}
        </StyledCard>
        {/* Portfolio Card */}
        <StyledCard>
          {props.state.users[0].riskscore === 0 ? (
            <>
              <h1 className="card1-txt">
                Step 3:
                <br />
                Discover the power of compound interest
              </h1>

              <DashPortfolio></DashPortfolio>
            </>
          ) : (
            // <ResponsiveContainer width={700} height="80%">

            <BriefPortfolio state={props.state}></BriefPortfolio>
            // </ResponsiveContainer>
          )}
        </StyledCard>
      </div>
    </div>
  );
}

export default CardDashBoard;
