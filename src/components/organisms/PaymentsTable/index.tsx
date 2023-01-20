import {
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell from "../../molecules/TableCell";
import Paper from "@mui/material/Paper";
import { PAYMENTS_TABLE_HEAD_CELL } from "../../../utils/constants";
import moment from "moment";
import { formatAmount } from "../../../utils/functions";

interface Props {
  amount: number[];
  cashKickDate: string[];
}

interface RowData {
  date: string;
  days: string;
  status: string;
  expectedAmount: string;
  outstanding: string;
}

const tableContainer = {
  overflow: "hidden",
  borderRadius: "8px",
};

const StyledTableRow = styled(TableRow)({
  display: "flex",
  flexDirection: "row",
});

export const PaymentsTable = (props: Props) => {
  const CurrentDate = moment().format("MMM DD, YYYY");
  const rowData: RowData[] = [];
  for (let i = 1; i <= 12; i++) {
    for (let j = 0; j < props.cashKickDate.length; j++) {
      const monthlyAmount = props.amount[j] / 12;
      const date = moment(`${props.cashKickDate[j]}`, "MMM DD, YYYY")
        .add(i, "month")
        .format("MMM DD, YYYY");
      const days = moment(`${date}`, "MMM DD, YYYY").diff(
        moment(`${CurrentDate}`, "MMM DD, YYYY"),
        "days"
      );
      const outstandingAmount = props.amount[j] - i * monthlyAmount;
      const row: RowData = {
        date: date,
        days: `${days} day(s) from now`,
        status: "upcoming",
        expectedAmount: `-$${formatAmount(monthlyAmount)}`,
        outstanding: `$${formatAmount(outstandingAmount)}`,
      };
      rowData.push(row);
    }
  }
  return (
    <>
      <TableContainer style={tableContainer}>
        <Table>
          <TableHead>
            <StyledTableRow>
              {PAYMENTS_TABLE_HEAD_CELL.map((cellName) => (
                <TableCell
                  isHeader={true}
                  content={[cellName]}
                  variant={"normal-text"}
                />
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rowData.map((data) => (
              <StyledTableRow>
                <TableCell
                  content={[data.date, data.days]}
                  variant={"highlighted-text"}
                />
                <TableCell content={[data.status]} variant={"chip"} />
                <TableCell
                  content={[data.expectedAmount]}
                  variant={"normal-text"}
                />
                <TableCell
                  content={[data.outstanding]}
                  variant={"normal-text"}
                />
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
