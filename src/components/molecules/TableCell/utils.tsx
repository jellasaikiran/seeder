import { theme } from "../../../theme/theme";
import { TABLE_CELL_VARIANT } from "../../../utils/types";

export const getHeight = (isHeader: boolean, variant: TABLE_CELL_VARIANT): string => {
  if (isHeader) return "1.35rem";
  return variant === "check-box" ? "1.35rem" : "2.475rem";
}

export const getPadding = (isHeader: boolean, variant: TABLE_CELL_VARIANT): string => {
  if (isHeader) return "0.85rem";
  return variant === "check-box"
    ? "1.413rem 0.85rem 1.413rem 0.85rem"
    : "0.85rem";
}

export const getBackgroundColor = (isSelected: boolean, isHeader: boolean) => {
  if (isSelected) {
    return `${theme.palette.primary[600]}`;
  }
  return isHeader
    ? `${theme.palette.grey[100]}`
    : `${theme.palette.elevation.color1}`;
};

export const getOptionalBooleanAttributeValue = (value: boolean | undefined): boolean => {
  return value ? value : false;
}
