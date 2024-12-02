//function that calculate NHIF deductions
const annualNhifDeductionsCalculator = ( grossSalary ) => {
    let nhifDeductions; //initialize nhifDeductions variable

    //assigns value to variable nhifDeductions
    if ( grossSalary >= 40000 && grossSalary <= 44999 ) {
        nhifDeductions = 1000;
    } else if ( grossSalary >= 45000 && grossSalary <= 49999 ) {
        nhifDeductions = 1100;
    } else if ( grossSalary >= 50000 && grossSalary <= 59999 ) {
        nhifDeductions = 1200;
    } else if ( grossSalary >= 60000 && grossSalary <= 69999 ) {
        nhifDeductions = 1300;
    } else if ( grossSalary >= 70000 && grossSalary <= 79999 ) {
        nhifDeductions = 1400;
    } else if ( grossSalary >= 80000 && grossSalary <= 89999 ) {
        nhifDeductions = 1500;
    } else if ( grossSalary >= 90000 && grossSalary <= 99999 ) {
        nhifDeductions = 1600;
    } else if ( grossSalary >= 100000 ) {
        nhifDeductions = 1700;
    }
    
    return nhifDeductions; //returns the value of nhifDeductions
}


//function that calculate NSSF deductions
const annualNssfDeductionsCalculator = ( grossSalary ) => {    
    let nssfDeductions; //initialize nhssDeductions variable

    nssfDeductions = 6/100 * grossSalary; //formular for getting nssf deductions

    //checks if NSSF deductions is above 7,000 (which is the max)
    if( nssfDeductions > 7000 ) {
        nssfDeductions = 7000
    }
  
    return nssfDeductions;
}


//function that calculate the total tax
const annualTaxCalculator = ( taxableIncome ) => {
    let tax; //initialize tax variable

    //calculates tax using if statements
    if ( taxableIncome <= 288000 ) {
        tax = (10/100) * taxableIncome;
    } else if ( taxableIncome > 288000 && taxableIncome <= 388000 ) {
        tax = (25/100) * taxableIncome;
    } else if ( taxableIncome > 388000 && taxableIncome <= 6000000 ) {
        tax = (30/100) * taxableIncome;
    } else if ( taxableIncome > 6000000 && taxableIncome <= 9600000 ) {
        tax = (32.5/100) * taxableIncome;
    } else if ( taxableIncome > 9600000 ) {
        tax = (35/100) * taxableIncome;
    }

    return tax; //returns tax charged
}


//this is the main function of the file
const main = ( basicSalary = 0, benefits = 0 ) =>{
    let grossSalary; //initialize grossSalary variable

    grossSalary = basicSalary + benefits//formular for getting gross salary

    let nhifDeductions = annualNhifDeductionsCalculator( grossSalary ); //calls the NHIF function that returns its deductions
    let nssfDeductions = annualNssfDeductionsCalculator( grossSalary ); //calls the NSSF function that returns its deductions

    
    let totalDeductions = nssfDeductions + nhifDeductions; //gets the total deductions

    let taxableIncome = grossSalary - totalDeductions; //gets the taxable amount

    let tax = annualTaxCalculator( taxableIncome ); //calls the tax function that returns payee(tax)

    let netSalary = grossSalary - totalDeductions - tax; //calculates the net salary

    //Prints to console
    console.log(`Payee: ${tax}`);
    console.log(`NHIF deductions: ${nhifDeductions}`);
    console.log(`NSSF deductions: ${nssfDeductions}`);
    console.log(`Gross salary: ${grossSalary}`);
    console.log(`Net salary: ${netSalary}`);

    return tax, nhifDeductions, nssfDeductions, grossSalary, netSalary; //returns all required variables
}


//Calls the main function
main(50000,10000); //Place variables inside such that it is 'basic salary, benefits'
