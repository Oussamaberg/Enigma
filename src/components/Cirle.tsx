function Circle({width, hight, color, children}){
    return <div className={`bg-${color} w-${width} h-${hight} rounded-full grid place-content-center`}>
        {children}
    </div>
}
export default Circle;