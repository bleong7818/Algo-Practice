const axios = require('axios');
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

class ExpenseGenerator {
    static async createExpensesFromOrganizationTransactions(orgId) {
        const expenses = [];
        let user, creditCard, transactions;

        const users = await this.getUsers(orgId);

        for (const user of users) {
            creditCard = await this.getCreditCard(user.id);
            transactions = await this.getUserTransactions(user.id);
        }

        for (const transaction of transactions) {
            const expense = this.createExpense(transaction, creditCard, user);
            expenses.push(expense);
        }

        return expenses;
    }

    static async getUsers(orgId) {
        let usersArray = await fetch(`http://872e3f40dcea.ngrok.io/users?organization_id=${orgId}`)
            .then(res => res.json())
            .then(data => {
                return data;
            });

        return usersArray;
    }

    static async getCreditCard(userId) {
        let creditCard = await fetch(`http://872e3f40dcea.ngrok.io/credit_cards?user_id=${userId}`)
            .then(res => res.json())
            .then(data => {
                return data;
            });
        return creditCard[0];
    }

    static async getUserTransactions(userId) {
        let transactions = await fetch(`http://872e3f40dcea.ngrok.io/transactions?user_id=${userId}`)
            .then(res => res.json())
            .then(data => {
                return data;
            });
        return transactions;
    }

    static createExpense(transaction, creditCard, user) {
        const expense = {
            amount: transaction.amount,
            merchant: transaction.merchant,
            date: transaction.date,
            user_id: user.id,
            department: user.department,
            reimbursable: creditCard.organization_id
        };


        // Create dummy request to create expense


        return expense;
    }
}

module.exports = ExpenseGenerator;
