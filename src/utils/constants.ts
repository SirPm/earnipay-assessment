import DashboardIcon from "../assets/svg/dashboard-icon.svg";
import PaymentsIcon from "../assets/svg/payments-icon.svg";
import PeopleIcon from "../assets/svg/people-icon.svg";
import PayrollIcon from "../assets/svg/payroll-icon.svg";
import OnDemandPayIcon from "../assets/svg/on-demand-pay-icon.svg";
import ApprovalIcon from "../assets/svg/approval-icon.svg";
import AuditLogsIcon from "../assets/svg/audit-logs-icon.svg";
import Settings from "../assets/svg/settings-icon.svg";

export interface SidebarLink {
  icon: string;
  text: string;
  linkTo: string;
  hasMoreOptions: boolean;
}

export enum PAGE_ROUTES {
  LOGIN = "/login",
  SIGNUP = "/signup",
  VERIFY_EMAIL = "/verify-email",
  ACCOUNT_LOCKED = "/account-locked",
  DASHBOARD = "/dashboard",
}

export const SIDEBAR_HEADER_LINKS: SidebarLink[] = [
  {
    icon: DashboardIcon,
    text: "Dashboard",
    hasMoreOptions: false,
    linkTo: PAGE_ROUTES.DASHBOARD,
  },
  {
    icon: PaymentsIcon,
    text: "Payments",
    hasMoreOptions: true,
    linkTo: "",
  },
  {
    icon: PeopleIcon,
    text: "People",
    hasMoreOptions: true,
    linkTo: "",
  },
  {
    icon: PayrollIcon,
    text: "Payroll",
    hasMoreOptions: true,
    linkTo: "",
  },
  {
    icon: OnDemandPayIcon,
    text: "On-Demand Pay",
    hasMoreOptions: true,
    linkTo: "",
  },
];

export const SIDEBAR_FOOTER_LINKS: SidebarLink[] = [
  {
    icon: ApprovalIcon,
    text: "Approvals",
    hasMoreOptions: true,
    linkTo: "",
  },
  {
    icon: AuditLogsIcon,
    text: "Audit Logs",
    hasMoreOptions: true,
    linkTo: "",
  },
  {
    icon: Settings,
    text: "Settings",
    hasMoreOptions: false,
    linkTo: "",
  },
];

export enum RESPONSIVE_SIZE {
  XSM = "570px",
  LSM = "700px",
  SM = "768px",
  MD = "900px",
  LG = "1100px",
  XLG = "1400px",
}

interface TotalAmountChartData {
  monthShort: string;
  monthLong: string;
  amount: number;
}

export const TOTAL_AMOUNT_CHART_DATA: TotalAmountChartData[] = [
  {
    monthShort: "Jun",
    monthLong: "June",
    amount: 206200,
  },
  {
    monthShort: "Jul",
    monthLong: "July",
    amount: 205200,
  },
  {
    monthShort: "Aug",
    monthLong: "August",
    amount: 204200,
  },
  {
    monthShort: "Sep",
    monthLong: "September",
    amount: 206200,
  },
  {
    monthShort: "Oct",
    monthLong: "October",
    amount: 206200,
  },
  {
    monthShort: "Nov",
    monthLong: "November",
    amount: 200000,
  },
  {
    monthShort: "Dec",
    monthLong: "December",
    amount: 106200,
  },
  {
    monthShort: "Jan",
    monthLong: "January",
    amount: 210200,
  },
  {
    monthShort: "Feb",
    monthLong: "February",
    amount: 206200,
  },
  {
    monthShort: "Mar",
    monthLong: "March",
    amount: 203200,
  },
  {
    monthShort: "Apr",
    monthLong: "April",
    amount: 206200,
  },
  {
    monthShort: "May",
    monthLong: "May",
    amount: 205200,
  },
];
