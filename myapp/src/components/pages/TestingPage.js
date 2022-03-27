import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const TestingPage = () => {
    return(
        <div>
            <ProgressBar now={60}></ProgressBar>
        </div>
    )
}

export default TestingPage;