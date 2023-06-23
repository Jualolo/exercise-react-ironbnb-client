function ApartmentsList(props) {
    // console.log(props.callbackToApartmentList());
    return(
        <div>
            <h1>
                ApartmentsList
            </h1>
            <p>
                {props.callbackToApartmentList()}
            </p>

        </div>
    )
}

export default ApartmentsList 