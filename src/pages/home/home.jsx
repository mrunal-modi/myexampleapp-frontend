import "./home.scss";
import Form from "../../components/form/form";
import Title from "../../components/title/title";
import {_create} from "../../services/services";

const Home = () => {
    
    const handleSubmit = (data) => {
        _create(data.email);
    }
    return (
        <div className="home-page">
            <div className="column">
                <Title title="Create"/>
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
            <Title title="Read | Update | Delete"/>

            </div>

        </div>
    )
}

export default Home;