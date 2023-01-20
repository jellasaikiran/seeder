import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  styled,
  TableRow,
} from "@mui/material";
import { CONTRACT_TABLE_HEADERS } from "../../../utils/constants";
import { formatAmount } from "../../../utils/functions";
import { CONTRACT_TYPE } from "../../../utils/types";
import TableCell from "../../molecules/TableCell";

interface Props {
  variant: "cashkick-setup" | "cashkick-selected";
  data: CONTRACT_TYPE[];
  isSelected: boolean[];
  areAllRowsChecked?: boolean
  handleHeaderCheckboxChange?: () => void;
  handleCheckboxChange: (index: number) => void;
}

const tableContainer = {
  borderRadius: "0.6rem",
};

const StyledTableRow = styled(TableRow)({
  display: "flex",
  flexDirection: "row",
});

export const ContractsTable = (props: Props) => {
  return (
    <>
      <TableContainer style={tableContainer}>
        <Table>
          <TableHead>
            <StyledTableRow>
              {props.variant === "cashkick-setup" && (
                <TableCell
                  variant={"check-box"}
                  content={[]}
                  isHeader={true}
                  isChecked={props.areAllRowsChecked}
                  handleChange={props.handleHeaderCheckboxChange}
                />
              )}
              {CONTRACT_TABLE_HEADERS.map((cellTitle) => (
                <TableCell
                  isHeader={true}
                  content={[cellTitle]}
                  variant={"normal-text"}
                />
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {props.data.map((tableRow:any, index:number) => (
              <StyledTableRow>
                {props.variant === 'cashkick-setup' && (
                  <TableCell
                    variant={'check-box'}
                    content={[]}
                    isHeader={false}
                    isSelected={props.isSelected[index] ? true : false}
                    handleChange={() => {
                      props.handleCheckboxChange(index)
                    }}
                  />
                )}
                <TableCell
                  variant={'highlighted-text'}
                  content={[tableRow.name]}
                  isSelected={props.isSelected[index]}
                />
                <TableCell
                  variant={'normal-text'}
                  content={['Monthly']}
                  isSelected={props.isSelected[index]}
                />
                <TableCell
                  variant={'normal-text'}
                  content={[
                    `$${formatAmount((tableRow.totalAmount * 1.12) / 12)}`,
                  ]}
                  isSelected={props.isSelected[index]}
                />
                <TableCell
                  variant={'normal-text'}
                  content={['12 months', '12.0% fee']}
                  isSelected={props.isSelected[index]}
                />
                <TableCell
                    variant={'normal-text'}
                    content={[`$${formatAmount(tableRow.amountAvailable)}`]}
                    isSelected={props.isSelected[index]}
                    isStriked={true}
                  />

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
