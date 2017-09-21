class Salary{
    constructor(salary){
        this.baseSalary=salary;
        this.calculateDA();
        this.calculateTA();
        this.calculateNetSalary();
    };

    calculateDA(){
        this.DA = this.baseSalary/5;
    };

    calculateTA(){
        this.TA = this.baseSalary/10;
    };

    calculateNetSalary=()=>{
        this.netSalary= parseInt(this.baseSalary) + this.DA - this.TA;
    };
}

export default Salary;