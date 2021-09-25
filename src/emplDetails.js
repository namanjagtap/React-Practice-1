import React from "react"

function emplDetail(props){
    return (
        <div>
            <form className="form">
                <fieldset>
                    <legend><b>{props.detail.jobTitleName}</b></legend>
                    <h2>{props.detail.preferredFullName}</h2>
                    <p>{props.detail.region}</p>
                    <p>{props.detail.phoneNumber}</p>
                    <p>{props.detail.emailAddress}</p>
                </fieldset>
            </form>
        </div>
    )
}
export default emplDetail;