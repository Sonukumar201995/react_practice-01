function Wrapper({children,color}){
    return(
        <>
        <div style={{color:color}}>wrapper component</div>
        :{children}
        </>
    )
}

export default Wrapper;