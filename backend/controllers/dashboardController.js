const Income = require("../models/Income");
const Expense = require("../models/Expense");
const { Types } = require("mongoose");

// Dashboard Data
exports.getDashboardData = async (req, res) => {
    try {
        const userId = req.user.id;
        const userObjectId = new Types.ObjectId(String(userId));

        const totalIncome = await Income.aggregate([
            { $match: { userId: userObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);

        const totalExpense = await Expense.aggregate([
            { $match: { userId: userObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);

        const sixtyDaysAgo = new Date();
        sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

        const last60daysIncomeTransactions = await Income.find({
            userId: userObjectId,
            date: { $gte: sixtyDaysAgo },
        }).sort({ date: -1 });

        const incomeLast60Days = last60daysIncomeTransactions.reduce(
            (sum, transaction) => sum + transaction.amount,
            0
        );

        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const last30DaysExpenseTransactions = await Expense.find({
            userId: userObjectId,
            date: { $gte: thirtyDaysAgo },
        }).sort({ date: -1 });

        const expensesLast30Days = last30DaysExpenseTransactions.reduce(
            (sum, transaction) => sum + transaction.amount,
            0
        );

        const lastIncome = await Income.find({ userId: userObjectId }).sort({ date: -1 }).limit(5);
        const lastExpense = await Expense.find({ userId: userObjectId }).sort({ date: -1 }).limit(5);

        const lastTransactions = [
            ...lastIncome.map(txn => ({ ...txn.toObject(), type: "income" })),
            ...lastExpense.map(txn => ({ ...txn.toObject(), type: "expense" })),
        ].sort((a, b) => b.date - a.date).slice(0, 5);

        res.json({
            totalBalance: (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
            totalIncome: totalIncome[0]?.total || 0,
            totalExpenses: totalExpense[0]?.total || 0,
            last30DaysExpenses: {
                total: expensesLast30Days,
                transactions: last30DaysExpenseTransactions,
            },
            last60DaysIncome: {
                total: incomeLast60Days,
                transactions: last60daysIncomeTransactions.map(item => ({
                    _id: item._id,
                    amount: item.amount,
                    source: item.source,
                    date: item.date,
                    icon: item.icon,
                })),
            },
            recentTransactions: lastTransactions,
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
