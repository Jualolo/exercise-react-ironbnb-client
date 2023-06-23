function ApartmentsList(props) {
    // console.log(props.callbackToApartmentList());
    return(
        <div>
            <h1>
                ApartmentsList
            </h1>
            {props.callbackToApartmentList()}
        </div>
    )
}

export default ApartmentsList 