import { Grid } from "@mui/material";
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
import { dateDifference, formatAmount } from "../../../utils/functions";
import { HomeCardGrid } from "../../organisms/HomeCardGrid";

export const HomePage = () => {
  const [outstanding, setOutstanding] = useState<number>(0);
  const [date, setDate] = useState<string[]>([]);
  const [amount, setAmount] = useState<number[]>([]);
  useEffect(() => {
    getPayments().then((res) => {
      const paymentDetails = getPaymentsDetails(res);
      setOutstanding(paymentDetails[2]);
      setAmount([...paymentDetails[0]]);
      setDate([...paymentDetails[1]]);
    });
  }, []);

  const getPaymentsDetails = (res: any): [number[], string[], number] => {
    let amountArray: number[] = [];
    let dateArray: string[] = [];
    let sum = 0;
    res.forEach((temp: { amount: number; timestamp: string }) => {
      amountArray.push(temp.amount);
      dateArray.push(temp.timestamp);
      sum += temp.amount;
    });
    return [amountArray, dateArray, sum];
  };
  return (
    <>
      <HomePageTemplate
        cardsGrid={
          <>
            {amount.length == 0 && <Banner />}
            {amount.length > 0 && (
              <HomeCardGrid
                daysCount={dateDifference(
                  moment(date[0]).add(1, "month").format("MMM DD, YYYY")
                )}
                dueDate={moment(date[0]).add(1, "month").format("MMM DD, YYYY")}
                dueAmount={amount[0] / 12}
                progressValue={outstanding / 8800}
                outstanding={outstanding}
              />
            )}
          </>
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
                {amount.length == 0 && (
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
                )}
                {amount.length > 0 && (
                  <PaymentsTable amount={amount} cashKickDate={date} />
                )}
              </>
            }
          />
        }
      />
    </>
  );
};
