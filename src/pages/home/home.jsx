import "./home.scss";
import React, { useState } from "react";
import Form from "../../components/form/form";
import Title from "../../components/title/title";
import { _create } from "../../services/services";
import CrudItem from "../../components/crud/crud-item";

const Home = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState();

    // const handleSubmit = (data) => {
    //     _create(data.email);
    // }

    const handleSubmit = async (data) => {
        try {
            const res = await _create(data.email);;
            if (res.status === 200) {
                setSuccess(true);
            }
        } catch (err) {
            setError(err?.response?.data?.error);
            console.log(err.response);
        }
    }

    return (
        <div className="home-page">
            <div className="column">

                <Title title="Create" />

                {success && <div className="alert alert-success col-12">
                    Successfully submitted!
                </div>}
                {error && <div className="alert alert-danger col-12">
                    {error}
                </div>}

                <Form className="post-form"
                    formInputs={
                        [
                            {
                                label: "Email",
                                type: "text",
                                validation: "email",
                                name: "email",
                                placeholder: "jhon@example.com"
                            }
                        ]
                    }
                    onSubmit={handleSubmit}
                />
            </div>
            <div className="column">
                <Title title="Read | Update | Delete" />

                <CrudItem/>
            </div>

        </div>
    )
}

export default Home;