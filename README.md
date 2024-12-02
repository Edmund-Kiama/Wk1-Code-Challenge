# Wk1-Code-Challenge

This repo contains one folder called 'codeChallenges' and one README.md file.

Within the codeChallenges folder, there are three js files;
    studentGradeGenerator.js--->code challenge 1
    speedDetector.js--->code challenge 2
    netSalaryCalculator.js--->code challenge 3
The README.md file contains all documentation of the code challenges done, as shown below;

## Student Grade Generator

A JavaScript program that calculates and assigns a grade based on a student's marks. 
The project uses a function that validates the marks and then assigns a grade according to predefined ranges.

### Features
The program uses marks as input.
---> It validates that the marks are between 0 and 100. If not, it returns a message to the console as 'Please pick a number between 0 and 100'.
---> It then assigns grades based on the following criteria:
        A: Marks greater than 79
        B: Marks from 60 to 79
        C: Marks from 50 to 59
        D: Marks from 40 to 49
        E: Marks less than 40

### How It Works
The program defines a function called gradeGenerator():
--->The function validates if the input is a valid number between 0 and 100.
--->It then assigns a grade based on the input marks.
--->Finally, it returns the grade assigned.

### How to Run
You should first ensure that you have Node.js installed.
Create a file called studentGradeGenerator.js and copy the code into the file.
Open your terminal and navigate to the directory containing the studentGradeGenerator.js.
While still on your terminal, run the program using: ---> 'node studentGradeGenerator.js'
In order to test with any marks you need to grade, you can replace the 50 in the 'console.log(gradeGenerator(50)); and then run the code.

### Input Validation
The program checks the input:
--->If it's a number.
--->If it's between 0 and 100.
--->If the input is invalid, it returns an message via console as: 'Please pick a number between 0 and 100.'

### Example Outputs
Marks	Grade Output
85	    Grade: A
70	    Grade: B
55	    Grade: C
45	    Grade: D
30	    Grade: E
100	    Please pick a number between 0 and 100

### License
This project is an open-source project and is free to use.


## Speed Detector

A JavaScript program to monitor driving speed and determine if a driver is driving within the speed limit. 
The program also calculates demerit points for speeds over the limit.
If the demerit point exceed a predefined number, the driver's license is then suspended.

### Features
The program determines if the driver is within the speed limit( 70 ).
It calculates demerit points for speeds exceeding the limit.
It checks if calculated demerit points exceed the predefined demerit points(12 points). If true, it should suspend the driver's license.

### How It Works
The program defines a function called speedDetector that does the following:
--->It accepts speed as input.
--->It then checks if the speed is within the limit (70 km/h).
--->If it's over the limit:
        It calculates demerit points as: demerit = Math.floor((speed - 70) / 5)
        It then outputs the demerit points.
        Finally it checks if demerit points exceed 12 and if true, in the console it outputs "License suspended".

### How to Run
First, make sure that you have Node.js installed.
Create a file named speedDetector.js and copy the code into the it.
Open your terminal and navigate to the directory containing the file.
You can then run the program in the terminal using ---> 'node speedDetector.js'
If you wanted to test with any speed, you can change the '100' in speedDetector(100) with any speed you want to test.

### Input Validation
The program checks:
--->If it is a number above 0
--->If the input is not empty
If the checks fail, a console message is provided as 'Invalid input. Please try again.'

### Example Outputs
Speed (km/h)	Output
    50	        Ok
    100         Points: 6
    140	        Points: 14, License suspended
    -10	        Invalid input. Please try again.
    80         	Points: 2

### License
This project is an open-source project and is free to use.


## Net Salary Calculator

This project calculates an individual's annual Net Salary in Kenya by:
--->Taking inputs as basic salary and benefits.
--->Computing various deductions including NHIF, NSSF and income tax (Payee).
--->Returning the calculated values for gross salary, total deductions and net salary.

### Features
#### Functions used
##### annualNhifDeductionsCalculator
It calculates the NHIF (National Hospital Insurance Fund) deductions based on the gross salary using predefined salary ranges provided at "https://www.aren.co.ke/payroll/taxrates.htm".

Parameters:
--->grossSalary: This the sum of basic salary and benefits.

Returns:
--->nhifDeductions: This is the NHIF contribution amount based on the salary ranges provided.

##### annualNssfDeductionsCalculator
It calculates the NSSF (National Social Security Fund) deductions as 6% of gross salary adn it is capped at a maximum of KSh 7,000.

Parameters;
--->grossSalary: This the sum of basic salary and benefits.

Returns
--->nssfDeductions: This is the calculated NSSF contribution.

##### annualTaxCalculator
The function calculates the income tax (Payee) based on the taxable income by using provided tax ranges at "https://www.aren.co.ke/payroll/taxrates.htm".

Parameters ;
--->taxableIncome: This is the income that remains after NHIF and NSSF deductions.

Returns;
--->tax: This is the calculated income tax based on taxableIncome.

Taxable Income (KSh)	    Rate
    ≤ 288,000	            10%
    288,001 - 388,000	    25%
    388,001 - 6,000,000	    30%
    6,000,001 - 9,600,000	32.5%
    > 9,600,000	            35%

##### main Function
ThIis the primary function of the program that:
--->Calculates the gross salary.
--->Determines the total deductions(NHIF + NSSF).
--->Calculates taxable income and income tax.
--->Calculates the final annual net salary.
--->Prints in the console; payee (Tax), NHIF Deductions, NSSF Deductions, gross salary and net salary. 

Parameters:
--->basicSalary: This is the annual base salary of the individual. It is set to 0 if no values are passed
--->benefits: This is the annual additional allowances or benefits. It is set to 0 if no values are passed

Returns:
--->tax: This is the income tax (PAYE).
--->nhifDeductions: This is the annual deductions from NHIF.
--->nssfDeductions: This is the annual deductions from NSSF.
--->grossSalary: This the annual total income before deductions.
--->netSalary: This the final annual salary after all deductions.

### How It Works
#### Inputs:
basicSalary ---> This is the annual base pay of the individual. It is set to 0 as default if no input has been provided.
benefits ---> This is annual additional income (e.g., allowances). It is set to 0 as default if no input has been provided.

If any of the inputs are not a positive number, a console message is returned as "Inputs must be a positive number."

#### Steps:
--->Calculates Gross Salary as ( basicSalary + benefits ).
--->Calculates NHIF Deductions ( based on the gross salary using predefined salary ranges ).
--->Calculates NSSF Deductions as ( 6% of gross salary and is capped at 7,000 ).
--->Calculates taxable income as ( Gross Salary - Total Deductions ).
--->Calculates income tax (Payee) based on taxable income.
--->Calculates the net salary as ( Gross Salary - Total Deductions - Tax(PAYEE) ).

#### Outputs:
Gross salary
NHIF Deductions 
NSSF Deductions
Tax( Payee )
Net salary

### How to Run
First, make sure you have installed Node.js on your machine.

#### Steps:
--->Create a file called netSalaryCalaculator.js and copy the code to it.
--->Open your terminal and navigate to the file's directory.
--->While still on the terminal, run the program using ---> 'node netSalaryCalculator.js'
--->If you wish to test the code, you can replace the arguments in the main() function call with your desired basicSalary and benefits.

### Example Outputs
#### Input:
Basic Salary: 50,000
Benefits: 10,000

#### Output:
Payee: 5510
NHIF deductions: 1300
NSSF deductions: 3600
Gross salary: 60000
Net salary: 49590

### Customization
You can:
--->Update the tax brackets or deduction rules as per current regulations.

### License
This project is an open-source project and is free to use.

