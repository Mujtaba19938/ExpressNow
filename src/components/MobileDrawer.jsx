import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function MobileDrawer({ isOpen, onClose, side = "left", children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
    return () => document.body.classList.remove("drawer-open");
  }, [isOpen]);

  const backdropStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 199,
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? "auto" : "none",
    transition: "opacity 0.28s ease",
  };

  const leftPanelStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: 280,
    background: "#fff",
    zIndex: 200,
    overflowY: "auto",
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.28s ease",
    boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
  };

  const bottomPanelStyle = {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: "85vh",
    background: "#fff",
    zIndex: 200,
    overflowY: "auto",
    borderRadius: "16px 16px 0 0",
    transform: isOpen ? "translateY(0)" : "translateY(100%)",
    transition: "transform 0.28s ease",
    boxShadow: "0 -4px 24px rgba(0,0,0,0.15)",
  };

  const panelStyle = side === "bottom" ? bottomPanelStyle : leftPanelStyle;

  return ReactDOM.createPortal(
    <>
      <div style={backdropStyle} onClick={onClose} />
      <div style={panelStyle}>
        {children}
      </div>
    </>,
    document.body
  );
}
