import UserClass from "./UserClass";
import UserState from "./UserState";

const About = () =>
{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Series</h2>
            <UserState name={"Dhirendra Singh (State)"} location={"UP"}/>
            <UserClass name={"Dhirendra Singh (State)"} location={"UP"}/>
        </div>
    )
}

export default About;