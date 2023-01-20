import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import moment from "moment";
import Illustration from "../../atoms/Illustration";
import { Banner } from "../../molecules/Banner";
import { CashKickCard } from "../../molecules/CashCickCard";
import Header from "../../organisms/Header";
import { PaymentsTable } from "../../organisms/PaymentsTable";
import { TableBox } from "../../organisms/TableBox";
import { HomePageTemplate } from "../../templates/HomePageTemplate";
import cheque from "../../../../public/illustrations/Cheque 3D Illustration 1.svg";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { useEffect, useState } from "react";
import { getPayments } from "../../../api";
import { formatAmount } from "../../../utils/functions";
import { useNavigate } from "react-router-dom";
import { HomeCardGrid } from "../../organisms/HomeCardGrid"; 

const getDateCount = (date:any) =>{
  const currentdate = moment().format("MMM DD, YYYY");
  const difference = moment(`${date}`, "MMM DD, YYYY").diff(
    moment(`${currentdate}`, "MMM DD, YYYY"),
    "days"
  );
  return difference
}

export const HomePage = () => {
  const [outstanding, setOutstanding] = useState<number>(0);
  const [date, setDate] = useState<string[]>([]);
  const [amount, setAmount] = useState<number[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getPayments().then((res) => {
      let amountArray: number[] = [];
      let dateArray: string[] = [];
      let sum = 0;
      res.forEach((temp: { amount: number; timestamp: string }) => {
        amountArray.push(temp.amount);
        dateArray.push(temp.timestamp);
        sum += temp.amount;
      });
      console.log(dateArray);
      setOutstanding(sum);
      setAmount([...amountArray]);
      setDate([...dateArray]);
    });
  }, []);
  return (
    <>
      {amount.length == 0 && (
        <HomePageTemplate
          cardsGrid={<Banner />}
          headerBox={
            <Header
              title={"Good Afternoon"}
              subtitle={moment().format("MMMM DD, YYYY")}
              width={100}
            />
          }
          cashKickCard={
            <CashKickCard
              balanceAmount={`$${formatAmount(880000)}`}
              handleClick={() => {}}
            />
          }
          tableBox={
            <TableBox
              text={"Your payments"}
              variant={"normal"}
              table={
                <>
                  <PaymentsTable amount={[]} cashKickDate={[]} />
                  <Grid
                    container
                    direction={"column"}
                    alignItems={"center"}
                    my={20}
                  >
                    <Grid item>
                      <Illustration source={cheque} alt={"img"} />
                    </Grid>
                    <Grid item mt={5}>
                      <TypographyComponent
                        variant="body1"
                        color={theme.palette.text.disabled}
                        children="You don’t have any payments pending"
                      />
                    </Grid>
                  </Grid>
                </>
              }
            />
          }
        />
      )}
      {amount.length > 0 && (
        <HomePageTemplate
          cardsGrid={
            <HomeCardGrid
              daysCount={getDateCount(moment(date[0]).add(1, "month").format('MMM DD, YYYY'))}
              dueDate={moment(date[0]).add(1, "month").format('MMM DD, YYYY')}
              dueAmount={amount[0]/12}
              progressValue={outstanding/8800}
              outstanding={outstanding}
            />
          }
          headerBox={
            <Header
              title={"Good Afternoon"}
              subtitle={moment().format("MMMM DD, YYYY")}
              width={100}
            />
          }
          cashKickCard={
            <CashKickCard
              balanceAmount={`$${formatAmount(880000 - outstanding)}`}
              handleClick={() => {}}
            />
          }
          tableBox={
            <TableBox
              text={"Your payments"}
              variant={"normal"}
              table={
                <>
                  <PaymentsTable amount={amount} cashKickDate={date} />
                </>
              }
            />
          }
        />
      )}
    </>
  );
};
