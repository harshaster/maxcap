export default function LoadingOverlay(){
    let style = {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        opacity: "0.6",
        zIndex: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={style}>
            <div className="flex flex-col justify-center items-center">
                <div className="fs-4 text-white">Fetching...</div>
            </div>
        </div>
    )
}
