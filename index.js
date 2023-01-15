import Customer from "./Customer.js";
import BankAccount from "./BankAccount.js";
function Main() {
    try {
        const HarisBankAccount = new BankAccount();
        HarisBankAccount.Credit(150);
        const Haris = new Customer('Haris', 'Rehman', 'Male', 23, '0311-2640322', HarisBankAccount);
        Haris.CustomerInfo();
    }
    catch (error) {
        console.log("Error");
    }
}
Main();
