# Wk1-Code-Challenge

This repo contains one folder called 'codeChallenges' and one README.md file.
Within codeChallenges folder, there are three js files;
    studentGradeGenerator.js--->code challenge 1
    speedDetector.js--->code challenge 2
    netSalaryCalculator.js--->code challenge 3
The README.md file contains all documentation of the code challenges done, as shown below;

## Student Grade Generator

A JavaScript program that calculates and assigns a grade based on a student's marks. 
This project is implemented using a function that validates the marks and then assigns a grade according to predefined ranges.

### Features
Accepts marks as input.
---> Validates the marks to ensure they are between 0 and 100.
---> Assigns grades based on the following criteria:
        A: Marks greater than 79
        B: Marks from 60 to 79
        C: Marks from 50 to 59
        D: Marks from 40 to 49
        E: Marks less than 40

### How It Works
The program defines a function gradeGenerator that:
--->Validates if the input is a valid number between 0 and 100.
--->Assigns a grade based on the input marks.
--->Returns the grade or an appropriate error message if the input is invalid.

### How to Run
Ensure you have Node.js installed.

Copy the code into a file named studentGradeGenerator.js.
Open your terminal and navigate to the directory containing the file.
Run the program using: ---> 'node studentGradeGenerator.js'

Replace the 50 in the 'console.log(gradeGenerator(50)); line with any marks you want to test.

### Input Validation
The program checks the input:
--->It must be a number.
--->It must be between 0 and 100.
--->If invalid, it returns: "Please pick a number between 0 and 100".

### Example Outputs
Marks	Grade Output
85	    Grade: A
70	    Grade: B
55	    Grade: C
45	    Grade: D
30	    Grade: E
150	    Please pick a number between 0 and 100

### License
This project is open-source and free to use.


## Speed Detector

A JavaScript program to monitor driving speed and determine if a driver is adhering to the speed limit. 
The program also calculates demerit points for speeds over the limit and indicates if the driver's license should be suspended.

### Features
Determines if the driver is within the speed limit.
Calculates demerit points for speeds exceeding the limit.
Checks if demerit points exceed the threshold (12 points) it results in license suspension.

### How It Works
The program defines a function speedDetector that:
--->Accepts the speed as input.
--->Checks if the speed is within the limit (70 km/h).
--->If over the limit:
        Calculates demerit points: demerit = Math.floor((speed - 70) / 5)
        Outputs the demerit points.
        Checks if demerit points exceed 12, and if so, outputs "License suspended".

### How to Run
Ensure you have Node.js installed.

Copy the code into a file named speedDetector.js.
Open your terminal and navigate to the directory containing the file.
Run the program using ---> 'node speedDetector.js'

Replace the speed in speedDetector(100) with any speed you want to test.

### Input Validation
This basic implementation assumes the speed input is a positive number. 
You can enhance the function to handle invalid inputs (e.g., negative speeds or non-numeric inputs) as needed.

### Example Outputs
Speed (km/h)	Output
    50	        Ok
    100         Points: 6
    140	        Points: 14, License suspended
    70	        0
    80         	Points: 2

### Notes
Speed limit is set at 70 km/h.
1 demerit point is assigned for every 5 km/h above the speed limit.
License suspension occurs at 12 demerit points or more.

### License
This project is open-source and free to use.


## Net Salary Calculator
This project calculates an individual's Net Salary in Kenya by:
--->Taking inputs of basic salary and benefits.
--->Computing various deductions including NHIF, NSSF, and Income Tax (PAYE).
--->Returning the calculated values for Gross Salary, Total Deductions, and Net Salary.

### Features
#### NHIF Deductions Calculation
    NHIF deductions are determined based on gross salary using pre-defined slabs.

#### NSSF Deductions Calculation
    NSSF contributions are calculated as 6% of gross salary, with a maximum limit of KSh 7,000.

#### Income Tax (PAYEE) Calculation
    Tax rates are applied progressively based on taxable income:
    --->10% for income ≤ 288,000
    --->25% for income between 288,001 and 388,000
    --->30% for income between 388,001 and 6,000,000
    --->32.5% for income between 6,000,001 and 9,600,000
    --->35% for income above 9,600,000
#### Net Salary Calculation
    The program computes the net salary after all deductions.

### How It Works
#### Inputs:
    basicSalary ---> Base pay of the individual. This is set to 0 as default if no input has been provided.
    benefits ---> Additional income (e.g., allowances). This is set to 0 as default if no input has been provided.

#### Steps:
--->Calculate Gross Salary: basicSalary + benefits.
--->Calculate NHIF Deductions based on slabs.
--->Calculate NSSF Deductions as 6% of gross salary, capped at 7,000.
--->Calculate Taxable Income: Gross Salary - Total Deductions.
--->Calculate Income Tax (PAYEE) based on taxable income.
--->Compute Net Salary: Gross Salary - Total Deductions - Tax(PAYEE).

#### Outputs:
    Gross Salary
    Total Deductions (NHIF + NSSF)
    Taxable Income
    PAYEE
    Net Salary

#### Functions Used
##### annualNhifDeductionsCalculator
Calculates the NHIF (National Hospital Insurance Fund) deductions based on the gross salary using predefined salary brackets.

Parameters
--->grossSalary: The gross salary (basic salary + benefits).

Returns
--->nhifDeductions: The NHIF contribution amount based on the salary bracket.

##### annualNssfDeductionsCalculator
Calculates the NSSF (National Social Security Fund) deductions as 6% of gross salary, capped at a maximum of KSh 7,000.

Parameters
--->grossSalary: The gross salary (basic salary + benefits).

Returns
--->nssfDeductions: The calculated NSSF contribution, capped at 7,000.

##### annualTaxCalculator
Calculates the income tax (PAYEE) based on the taxable income using progressive tax brackets.

Parameters  
--->taxableIncome: The income remaining after NHIF and NSSF deductions.

Returns
--->tax: The calculated income tax based on the taxable income

Taxable Income (KSh)	    Rate
    ≤ 288,000	            10%
    288,001 - 388,000	    25%
    388,001 - 6,000,000	    30%
    6,000,001 - 9,600,000	32.5%
    > 9,600,000	            35%

##### main Function
The primary function that:
--->Calculates gross salary.
--->Determines total deductions (NHIF + NSSF).
--->Calculates taxable income and income tax.
--->Computes the final net salary.
--->Logs all relevant information.

Parameters
--->basicSalary: The base salary of the individual.
--->benefits: Additional allowances or benefits.

Returns
--->tax: The income tax (PAYE).
--->nhifDeductions: The NHIF contribution.
--->nssfDeductions: The NSSF contribution.
--->grossSalary: The total income before deductions.
--->netSalary: The final salary after all deductions.

### How to Run
Install Node.js on your machine.

#### Steps:
--->Save the code in a file, e.g., netSalaryCalculator.js.
--->Open your terminal and navigate to the file's directory.

--->Run the script ---> 'node netSalaryCalculator.js'
--->Replace the arguments in the main() function call with your desired basicSalary and benefits.

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
--->Add input validation for better error handling.

### License
This project is open-source and free to use under the MIT License.

