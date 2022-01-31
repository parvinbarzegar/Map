import React from "react";
import cls from "classnames";
import "./Notification.scss";
import { Icon } from "@iconify/react";

interface INotificationProps {
  type?: "info" | "warning" | "success";
  message: string;
}
const Notification: React.FunctionComponent<INotificationProps> = ({
  type = "info",
  message,
}) => (
  <div
    className={cls(
      "notification",
      { "notification--info": type === "info" },
      { "notification--warning": type === "warning" },
      { "notification--success": type === "success" }
    )}
  >
    <div className=" notification__icon">
      {type === "info" && <Icon icon="codicon:info" />}
      {type === "warning" && <Icon icon="clarity:warning-line" />}
      {type === "success" && <Icon icon="bx:bx-error-circle" />}
    </div>
    {`${message}`}
  </div>
);

export default Notification;
