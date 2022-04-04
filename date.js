import moment from "moment";

const PRIMARY_DATE_FORMAT = "MMMM, DD HH:mm:ss YYYY";
const SECONDARY_DATE_FORMAT = "YYYY-MM-DD";

console.log(
  moment().format(PRIMARY_DATE_FORMAT),
  moment().format(SECONDARY_DATE_FORMAT)
);
