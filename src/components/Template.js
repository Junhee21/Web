import Navigation from "./Navigation";

const Template = ({ children, now }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                height: "100vh"
            }}
        >
            <Navigation now={now}/>
            <div style={{ width: "100vw", height: "100vh" }}>
                {children}
            </div>
        </div>
    );
};

export default Template;
