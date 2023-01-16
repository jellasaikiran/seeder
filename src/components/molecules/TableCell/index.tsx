import { TABLE_CELL_VARIANT } from "../../../utils/types";
import { styled } from "@mui/material/styles";
import { theme } from "../../../theme/theme";
import Chip from "../../atoms/Chip";
import CheckboxComponent from "../../atoms/Checkbox";
import TypographyComponent from "../../atoms/Typography";

interface Props {
  variant: TABLE_CELL_VARIANT;
  isSelected?: boolean;
  isHeader?: boolean;
  content: string[];
  isStriked?: boolean;
  isChecked?: boolean
  handleChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const Cell = styled("div")(
  (props: {
    variant: TABLE_CELL_VARIANT;
    isSelected: boolean;
    isHeader: boolean;
  }) => ({
    height: getHeight(props.isHeader, props.variant),
    width: props.variant === "check-box" ? "1.35rem" : "100%",
    padding: getPadding(props.isHeader, props.variant),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: getBackgroundColor(props.isSelected, props.isHeader),
  })
);

const Detail = styled("div")(
  (props: { variant: "highlighted-text" | "normal-text" }) => ({
    color:
      props.variant === 'highlighted-text'
        ? `${theme.palette.text.primary}`
        : `${theme.palette.text.disabled}`,
  })
);

const SubDetail = styled('div')((props: { isStriked: boolean }) => ({
    textDecoration: props.isStriked ? 'line-through' : 'none',
    color: `${theme.palette.text.disabled}`,
  }))

function getHeight(isHeader: boolean, variant: TABLE_CELL_VARIANT): string {
  if (isHeader) return "1.35rem";
  return variant === "check-box" ? "1.35rem" : "2.475rem";
}

function getPadding(isHeader: boolean, variant: TABLE_CELL_VARIANT): string {
  if (isHeader) return "0.85rem";
  return variant === "check-box"
    ? "1.413rem 0.85rem 1.413rem 0.85rem"
    : "0.85rem";
}

const getBackgroundColor = (isSelected: boolean, isHeader: boolean) => {
  if (isSelected) {
    return `${theme.palette.primary[600]}`;
  }
  return isHeader
    ? `${theme.palette.grey[100]}`
    : `${theme.palette.elevation.color1}`;
};

function getOptionalBooleanAttributeValue(value: boolean | undefined): boolean {
  return value ? value : false;
}

export default function TableCell(props: Props) {
  if (props.variant == "check-box") {
    return (
      <Cell
        variant={props.variant}
        isSelected={getOptionalBooleanAttributeValue(props.isSelected)}
        isHeader={getOptionalBooleanAttributeValue(props.isHeader)}
        data-testid="tablecell-checkbox"
      >
        <CheckboxComponent
          onChange={props.handleChange}
          checked={props.isSelected}
        />
      </Cell>
    );
  } else if (
    props.variant === "normal-text" ||
    props.variant === "highlighted-text"
  ) {
    return (
      <Cell
        variant={props.variant}
        isSelected={getOptionalBooleanAttributeValue(props.isSelected)}
        isHeader={getOptionalBooleanAttributeValue(props.isHeader)}
        data-testid="tablecell-checkbox"
      >
        {props.content[0] && (
          <Detail variant={props.variant} data-testid="tablecell-text-detail">
            <TypographyComponent variant="body2">{props.content[0]}</TypographyComponent>
          </Detail>
        )}
        {props.content[1] && (
          <SubDetail
            isStriked={props.isStriked ? props.isStriked : false}
            data-testid="tablecell-text-subdetail"
          >
            <TypographyComponent variant="caption4">{props.content[1]}</TypographyComponent>
          </SubDetail>
        )}
      </Cell>
    );
  } else {
    if (props.content.length > 0) {
      return (
        <Cell
          variant={props.variant}
          isSelected={getOptionalBooleanAttributeValue(props.isSelected)}
          isHeader={getOptionalBooleanAttributeValue(props.isHeader)}
          data-testid="tablecell-checkbox"
        >
          <Chip variant={"tablecell"} content={props.content[0]}></Chip>
        </Cell>
      );
    } else {
      return (
        <Cell
          variant={props.variant}
          isSelected={getOptionalBooleanAttributeValue(props.isSelected)}
          isHeader={getOptionalBooleanAttributeValue(props.isHeader)}
          data-testid="tablecell-checkbox"
        >
          <Chip variant={"loading"} content={""}></Chip>
        </Cell>
      );
    }
  }
}
