import { useState, Fragment } from "react";

const Tabs = ({ children, borderColor, color }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <Fragment>
      <div className="flex">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? `border-b-2 ${borderColor} ${color} font-semibold`
                : "text-gray-400"
            } flex-1 py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-6">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </Fragment>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
