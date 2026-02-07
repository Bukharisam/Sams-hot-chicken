import React from "react";
import "./InfoBadge.css";

export default function InfoBadge({ icon, text }) {
  return (
    <button className="info-badge">
      <span className="info-icon">{icon}</span>
      <span className="info-text">{text}</span>
    </button>
  );
}

/*
================== How to create a reuseable component in React ==================

1. Created a functional component InfoBadge that takes props icon and text.
2. Used JSX to structure the component with a button containing an icon and text.
3. Exported the component using export default so it can be imported and used in other files.
4. This component can now be, used anywhere. 
5. props = objects containing data that comes from the parent component.
6. In this case, icon and text are props from the parent component that uses InfoBadge.
7. React automically takes the data from the parent component and passes it to InfoBadge as props. (creating objects).
8. This makes InfoBadge a reusable component that can display different icons and text based on the props. 
9. since the <infoBadge /> component is used in Home.jsx file 3 times with different props, it will render 3 different buttons.
10. the attribute icon and text are passed as props to InfoBadge component from Home.jsx file.
11. thats the data that react takes from the parent component and passes it to InfoBadge as props.

*/
