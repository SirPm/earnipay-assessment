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
  SM = "768px",
  LG = "1100px",
}
