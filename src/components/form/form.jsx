import "./form.scss";
import React, { useState } from 'react';

const Form = ({ className, formInputs, buttonLabel="Submit", onSubmit}) => {
    const [data, setData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    }

    const validateInput = (e, el) => {
        if (el.validation.includes("number") && e) {
            var charCode = (e.which) ? e.which : e.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return e.preventDefault();
        }
        return true;
    }

    return (
        <form className={`${className} contact-us-form`} onSubmit={handleSubmit}>
            {formInputs.map((el, i) =>
                <label key={i} style={{ width: el.width || "100%", marginBottom: 20, padding: "0 15px" }}>
                    <span>
                        {el.label}
                    </span>
                    {
                        el.type === "textarea" ?
                            <textarea
                                {...el}
                                onChange={(e) => setData({ ...data, [el.name]: e.target.value })}
                                value={data[el.name] || ""}
                                className="form-control"
                            /> :
                            <input
                                {...el}
                                onChange={(e) => setData({ ...data, [el.name]: e.target.value })}
                                value={data[el.name] || ""}
                                className="form-control"
                                onKeyDown={e => validateInput(e, el)}
                            />
                    }
                </label>
            )}
            <div className="btn-container">
                <button className="btn btn-danger">
                    {buttonLabel}
                </button>
            </div>
        </form>

    )
}

export default Form;