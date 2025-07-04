import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-29"),
    },
    {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.99,
      date: new Date("2021-01-05"),
    },
    {
      id: "e3",
      description: "Some bananas",
      amount: 5.99,
      date: new Date("2021-12-01"),
    },
    {
      id: "e4",
      description: "A book",
      amount: 14.99,
      date: new Date("2022-02-19"),
    },
    {
      id: "e5",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id: "e6",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-29"),
    },
    {
      id: "e7",
      description: "A pair of trousers",
      amount: 89.99,
      date: new Date("2021-01-05"),
    },
    {
      id: "e8",
      description: "Some bananas",
      amount: 5.99,
      date: new Date("2021-12-01"),
    },
    {
      id: "e9",
      description: "A book",
      amount: 14.99,
      date: new Date("2022-02-19"),
    },
    {
      id: "e10",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
  ];

  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
