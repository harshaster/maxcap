import hero from "@/img/hero.jpeg";
export default function FormHeader() {
    return(
        <div className="container-fluid p-3" style={{
            position : 'absolute', 
            height : '190px', 
            zIndex : -1, 
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.20) 100%), url(${hero.src})`,
            backgroundPosition: '80%'
        }}></div>
    )
}