import React from "react";

const ToggleComponent = () => {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? "ON" : "OFF"}
      </button>
      {isToggled && <div>Content is visible</div>}
    </div>
  );
}