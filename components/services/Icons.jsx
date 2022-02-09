import { Icon } from "@iconify/react";

const Icons = ({ iconName, iconColor, iconHeight, title, desc }) => {
  return (
    <div>
      <span>
        <Icon
          icon={iconName}
          color={iconColor}
          height={iconHeight}
          width={iconHeight}
        ></Icon>
      </span>
      <h6>{title}</h6>
      <p>{desc}</p>
      <style jsx>{`
        div,
        span {
          display: flex;
          display: flex;
        }
        div {
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: var(--padding-one);
        }
        span {
          padding: calc(2 * var(--padding-one));
          border-radius: 50%;
          background-color: var(--black80);
        }
        p {
          color: #fff;
          font-weight: 200;
          max-width: 27ch;
        }
      `}</style>
    </div>
  );
};

export default Icons;
