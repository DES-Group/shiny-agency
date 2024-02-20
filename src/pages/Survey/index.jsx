import { Link, Outlet, useParams } from "react-router-dom";

function Survey() {
    const { questionNumber } = useParams(); 

    return (
        <div>
            <h1>Questionnaire</h1>
            <Link to="client">Questionnaire client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <h2>{ questionNumber}</h2>
            {/** Le contenu des liens client et freelance sera affiché dans Outlet */}
            <Outlet />
        </div>
    );
}

export default Survey; 