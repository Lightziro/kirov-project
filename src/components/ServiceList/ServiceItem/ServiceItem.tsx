import React, { useState } from "react";
import classNames from "classnames";

interface ServiceItem {
  title: string;
  children?: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItem> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={classNames("accordion-button", {
            collapsed: (!children && open) || !open,
          })}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          onClick={() => setOpen((prev) => !prev)}
        >
          {title}
        </button>
      </h2>
      {children && (
        <div
          id="collapseOne"
          className={`accordion-collapse collapse ${open && "show"}`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{children}</div>
        </div>
      )}
    </div>
  );
};
export default ServiceItem;
