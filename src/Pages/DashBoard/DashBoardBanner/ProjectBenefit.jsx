import { TypeAnimation } from "react-type-animation";

const ProjectBenefit = () => {
    return (
        <TypeAnimation
        sequence={[
            'Track your daily Income',
            500,
            'Track your daily Expense',
            500,
            'See your daily balance',
           () => {
            console.log("squence complete")
           }
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{fontSize: "2em", display: 'inline-block', color: 'blue', fontWeight: '500'}}
       />
            
        
    );
};

export default ProjectBenefit;